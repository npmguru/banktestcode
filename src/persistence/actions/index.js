import { AUTH_SIGNOUT } from '../../core/constant/app'

const logOut = () => {
    return {
        type: AUTH_SIGNOUT
    }
}


export default {
    logOut
}