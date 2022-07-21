import React from 'react'
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Card from './Card'
import Cardleft from './Cardleft'

export default function IndexBlog() {
  return (
    <>
    <div class="topbar">
      <div class="container">
      <Header></Header>
      <Banner name={"Blog"}></Banner>
      <div className="row">
        <Card></Card>
        <Cardleft></Cardleft>
      </div>
      </div>
      </div>
      <Footer></Footer>
    </>
  );
}
