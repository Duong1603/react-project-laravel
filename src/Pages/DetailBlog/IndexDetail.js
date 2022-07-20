import React from 'react'
import Detail from './Detail';

import Cardleft from '../Blog/Cardleft';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';

export default function IndexDetail() {
   
  return (
    <>
      <Header></Header>
      <Banner name={"DetailBlog"}></Banner>
      <div className="page-section pt-5">
        <div className="container">
          <div className="row">
            <Detail></Detail>

            <Cardleft></Cardleft>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
