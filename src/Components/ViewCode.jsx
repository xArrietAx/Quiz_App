import { Text, Link } from "@chakra-ui/react";

export const ViewCode = () => {
  return (
    <Text fontWeight={"600"} textColor={"gray.400"}>CODE: <Link href={"https://github.com/xArrietAx/Quiz_App"} target="_blank" referrerPolicy="no-referrer" fontSize={"sm"} fontWeight={"400"} textColor={"green.500"} _hover={{
        textColor:"green.400"
    }} >Github <i className="bi bi-github"></i></Link></Text> 
  )
}
