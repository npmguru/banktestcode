import axios from 'axios';
import { AUTH_USER,AUTH_ERROR,BUSINESS_SERVICE_URI } from '../constant/app';
import get from 'lodash/get';
import isNull from 'lodash/isNull';


const UserMiddleware = {

      userLoginAuth:  (signupProps, callback) => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            }
          };

        return async (dispatch, getState) => {
           try{
            const url      = `${BUSINESS_SERVICE_URI}/user`;
            const getUserInfo = await axios.post(url,signupProps,axiosConfig);
            const userInfo    = get(getUserInfo, 'data.data', null);
            if(isNull(userInfo)){
              dispatch({type : AUTH_ERROR, payload : getUserInfo});
            }else{
              dispatch({type : AUTH_USER, payload : getUserInfo});
              callback();
            }
            
           }catch(error){
            dispatch({type : AUTH_ERROR, payload : error});
           }
        };
      }

}


export default UserMiddleware;