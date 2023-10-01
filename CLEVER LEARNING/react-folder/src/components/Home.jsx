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
       />
      <Section
      title="Model Y" 
      description="Order Online for Touchless Delivery" leftBtn="Custom Order" 
      rightBtn="Existing Inventory" 
      bgImage="bg-[url('../../public/img/model-y.jpg')]"
      />

      <Section
       title="Model 3"
       description="Order Online for Touchless Delivery" 
       leftBtn="Custom Order" 
       rightBtn="Existing Inventory" 
       bgImage="bg-[url('../../public/img/model-3.jpg')]"
      />

      <Section
      title="Model X" 
      description="Order Online for Touchless Delivery" leftBtn="Custom Order" 
      rightBtn="Existing Inventory" 
      bgImage="bg-[url('../../public/img/model-x.jpg')]"
       />

      <Section
      title="Lowest Cost Solar Panels in America"
      description="Money-back guarantee"
      bgImage="bg-[url('../../public/img/solar-panel.jpg')]"
      leftBtn="Order Now"
      rightBtn="Learn More"
       />
      <Section
        title="Accessories"
        description=""
        bgImage="bg-[url('../../public/img/accessories.jpg')]"
        leftBtn="Shop Now"
       />
    </main>
  )
}

export default Home