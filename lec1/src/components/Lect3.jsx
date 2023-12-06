import { AspectRatio, Box, Image } from '@chakra-ui/react'
import React from 'react'

function Lect3() {
    const obj={
        
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
              "https://i.dummyjson.com/data/products/1/1.jpg",
              "https://i.dummyjson.com/data/products/1/2.jpg",
              "https://i.dummyjson.com/data/products/1/3.jpg",
              "https://i.dummyjson.com/data/products/1/4.jpg",
              "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
          
    }
  return (
    <>
      {/* <AspectRatio width={'auto'} ratio={10/3}>
        <Image src='https://bit.ly/naruto-sage'/>
      </AspectRatio> */}
<Box borderWidth={'8px'} >
  <Image src={obj.thumbnail}/>  
</Box>
    </>
  )
}

export default Lect3
