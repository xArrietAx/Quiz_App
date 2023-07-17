import {Text} from '@chakra-ui/react'

export const Level = ({Level}) => {
  return (
    <Text fontSize={{base:"15px", sm:"lg"}} fontWeight={"500"} textColor={Level === "Easy" ? "green.200" : Level === "Medium" ? "yellow.500" : "red.500"  }>{Level}</Text>
  )
}
