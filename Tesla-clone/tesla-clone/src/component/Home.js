import React from 'react'
import Section from './section'
function Home(){
    return (
        <div>
            <Section
            title ="Model S"
            description= "Order Online for Touchless Delivery"
            leftbuttontxt = "Custom Order"
            backgroundImg ='model-s.jpg'
            rightbuttontxt = "Existing Inventory"

            />

            <Section
            title ="Model X"
            description= "Order Online for Touchless Delivery"
            backgroundImg ='model-x.jpg'
            leftbuttontxt = "Custom Order"
            rightbuttontxt = "Existing Inventory"

            />

        <Section
            title ="Model Y"
            description= "Order Online for Touchless Delivery"
            backgroundImg ='model-y.jpg'
            leftbuttontxt = "Custom Order"
            rightbuttontxt = "Existing Inventory"

            />
        </div>
    )
}

export default Home