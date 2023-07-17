import { Outlet } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <VStack alignItems={"center"} justifyContent={"center"} minH={"100vh"} style={{
      backgroundImage:"linear-gradient(160deg, black, rgb(7, 20, 19))",
    }}>
<VStack justifyContent={"space-between"} gap={5} w={"90%"} maxW={"3xl"} minH={460} maxH={1700} p={5} rounded={10} my={"5"} style={{
      backgroundImage:"linear-gradient(160deg, black, rgb(7, 27, 19))",
      boxShadow:"1px 1px 5px rgba(19, 159, 14, 0.311)"
    }} >
<Header />
     <Outlet />
</VStack>
    </VStack>
  )
}
