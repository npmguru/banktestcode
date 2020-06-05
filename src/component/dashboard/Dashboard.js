
import React from 'react';
import {useSelector} from 'react-redux'
import Nav from '../master/Nav';
import Header from '../master/Header';
import Footer from '../master/Footer';
import Additem from '../additem/Additem';
import Item from './item/Item'
import get from 'lodash/get'


const Dashboard = () => {
    const { authentication } = useSelector(state => state.user);
    const  { itemList }  = useSelector(state => state.items);

    const userName = get(authentication,'data.data.firstName') 
    return (
      <>
        <Nav fullName={`${userName}`} />
        <Header />  
        <Additem />
            <section>
              <div className="container">
                <div className="row">
                       {itemList.map((item, index) => 
                          (<Item 
                              status={item} 
                              itemName={`Item ${index + 1}`} 
                              id={index} 
                            />))
                        }
                </div>
              </div>
            </section>

         <Footer />
      </>
    );
  }
  
  export default Dashboard;
