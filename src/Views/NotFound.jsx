import {VStack, Text, Button, Box} from '@chakra-ui/react'
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <VStack alignItems={"center"} justifyContent={"center"} gap={5} w={"full"} h={340} textAlign={"center"} >
       <Box>
        <Text fontWeight={"semibold"} fontSize={"5xl"} textColor={"red.700"}>
      404
        </Text>
       <Text fontWeight={"semibold"} fontSize={{base:"2xl", sm:"3xl"}} textColor={"gray.300"}>
      Page not found
        </Text>
        <Text fontWeight={"semibold"} fontSize={{base:"md",sm:"lg"}} textColor={"gray.600"}>
      The page you are looking doesnt exist or an other error ocurred.
        </Text>
       </Box>
      <Button as={Link} to={"/"} fontSize={"xl"} textColor={"white"} bg={"rgb(7, 30, 19)"} shadow={"md"} _hover={{bg:"rgb(7, 26, 19)", textColor:"gray.500"}}><i className="bi bi-house"></i></Button>
      </VStack>
  )
}
