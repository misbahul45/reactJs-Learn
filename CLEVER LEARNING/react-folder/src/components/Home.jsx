import React from 'react'
import Section from './Section'
function Home() {
  return (
    <main>
      <Section
       title="Model S" 
       description="Order Online for Touchless Delivery" 
       leftBtn="Custom Order" 
       rightBtn="Existing Inventory" 
       bgImage="bg-[url('../../public/img/model-s.jpg')]"
       dataAosBtn="zoom-in"
       dataAosDurationBtn="2500"
       />
      <Section
      title="Model Y" 
      description="Order Online for Touchless Delivery" leftBtn="Custom Order" 
      rightBtn="Existing Inventory" 
      bgImage="bg-[url('../../public/img/model-y.jpg')]"
      dataAosBtn="fade-up"
      dataAosDurationBtn="1000"
      />

      <Section
       title="Model 3"
       description="Order Online for Touchless Delivery" 
       leftBtn="Custom Order" 
       rightBtn="Existing Inventory" 
       bgImage="bg-[url('../../public/img/model-3.jpg')]"
       dataAosBtn="fade-up"
      dataAosDurationBtn="1000"
      />

      <Section
      title="Model X" 
      description="Order Online for Touchless Delivery" leftBtn="Custom Order" 
      rightBtn="Existing Inventory" 
      bgImage="bg-[url('../../public/img/model-x.jpg')]"
      dataAosBtn="fade-up"
      dataAosDurationBtn="1000"
       />

      <Section
      title="Lowest Cost Solar Panels in America"
      description="Money-back guarantee"
      bgImage="bg-[url('../../public/img/solar-panel.jpg')]"
      leftBtn="Order Now"
      rightBtn="Learn More"
      dataAosBtn="fade-up"
      dataAosDurationBtn="1000"
       />
      <Section
       title="Solar for New Roofs"
       description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
       bgImage="bg-[url('../../public/img/solar-roof.jpg')]"
       leftBtn="Order Now"
       rightBtn="Learn More"
       dataAosBtn="fade-up"
       dataAosDurationBtn="1000"
       /> 
      <Section
        title="Accessories"
        description=""
        bgImage="bg-[url('../../public/img/accessories.jpg')]"
        leftBtn="Shop Now"
        dataAosBtn="fade-up"
      dataAosDurationBtn="1000"
       />
    </main>
  )
}

export default Home