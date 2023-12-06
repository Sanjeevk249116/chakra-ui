import { Box } from '@chakra-ui/react'
import React from 'react'

function Lect1() {
  return (
    <div>
    {/* bgGradient="linear(to-r,green.200,pink) this syntax is used for mix the bg color and for change the direction, we used tr,tl,tb,tt,r,b,t,l etc and radial is used for mix the color without direction*/}
    {/* {letterSpacing={20} letterSpacing is used for provide the space between letter */}
  <Box ml={2} color={'red.400'} bgGradient="radial(green.200,pink)" p={2} lineHeight={10}>Content of chakra ui tutorial</Box>
  <Box fontFamily={'cursive'} fontSize={32} letterSpacing={20} textShadow={'1px 2px #ff0000'}>Content of chakra ui tutorial</Box>
  <Box bgGradient="linear(to-r,green.200,pink)" w={'500px'} >Content of chakra ui tutorial</Box>
  <Box border='1px' borderRadius={9}  boxShadow={ 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'} borderColor='gray.700'>
Card
</Box>

<Box filter={'auto'} blur={'1px'}>Content of chakra ui tutorial</Box>
<Box  _hover={{
backgroundColor:"green",
textColor:"red",
padding:"4px",
width:"400px"
}}>Content of chakra ui tutorial</Box>
<Box as='h1'>Content of chakra ui tutorial</Box>
 </div>
  )
}

export default Lect1
