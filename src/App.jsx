
import './App.css'
import Hero from './assets/components/hero/Hero'

import { useState } from 'react';
import Nav from './assets/components/nav/Nav'
import UserInfo from './assets/components/userInfo/UserInfo'
import CardDiv from './assets/components/card/CardDiv';
import { Suspense } from 'react';
import GetStartedBody from './assets/components/getStarted/GetStartedBody';
import PricingContainer from './assets/components/transparentPricing/PricingContainer';
import TransformWorkflow from './assets/components/transformWorkflow/TransformWorkflow';
import FooterBody from './assets/components/footer/footerBody/FooterBody';

const fetchProducts = async () => {
  const res = await fetch('/data.json');
  return res.json();
}


function App() {
  const productsPromise = fetchProducts();
  const [cartBtn, setCartBtn] = useState(true);
  return (
    <>
      <Nav cartBtn={cartBtn}></Nav>
      <Hero cartBtn={cartBtn}></Hero>
      <UserInfo cartBtn={cartBtn}></UserInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <CardDiv productsPromise={productsPromise} setCartBtn={setCartBtn} ></CardDiv>
      </Suspense>
      <GetStartedBody cartBtn={cartBtn}></GetStartedBody>
      <PricingContainer cartBtn={cartBtn}></PricingContainer>
      <TransformWorkflow cartBtn={cartBtn}></TransformWorkflow>
      <FooterBody cartBtn={cartBtn}></FooterBody>

    </>
  )
}

export default App
