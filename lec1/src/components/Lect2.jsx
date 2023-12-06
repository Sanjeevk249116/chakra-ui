import { Button, Heading, useColorMode } from '@chakra-ui/react'
import React from 'react'

function Lect2() {
    const{colorMode,toggleColorMode}=useColorMode()
  return (
    <div>
      <Heading>
      <Button onClick={toggleColorMode}>
         Toggle 
      </Button>
      </Heading>
    </div>
  )
}

export default Lect2
