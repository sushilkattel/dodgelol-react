import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Image,
  HStack
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import CSS from 'csstype';
//@ts-ignore

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box style={container}>
      <Grid maxH="100%" maxW={"100%"} p={3}>
        <HStack alignContent={"flex-start"} spacing={'80vw'}>
          <HStack>
            <Image
              src="https://drive.google.com/uc?export=view&id=1O_Np5sH4NMKtl0N7ldPnHdrzGxbm5W0K"
              alt="logo"
              style={logo}
            />
            <Text style={logoText}>DodgeLoL</Text>
          </HStack>
        <ColorModeSwitcher justifySelf="flex-end"/>
        </HStack>
        <VStack spacing={8}>
          <Text>Your Mom</Text>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
//Styling
const container: CSS.Properties = {
  width: '10vw',
  height: '10vh',
  alignSelf: 'center'
}
const logo: CSS.Properties = {
  justifySelf: 'flex-start',
  width: '10vw',
  height: '10vh',
  paddingLeft: '80px'
}
const logoText: CSS.Properties = {
  fontSize: '50px',
  fontFamily: 'Bebas Neue',
}
