import {Box, Divider}  from '@chakra-ui/react'
import { Logo } from "../Components/Logo";

export const Header = () => {
  return (
    <Box w={"full"}>
    <Logo />
  <Divider mt={1} />
</Box>
  )
}
