import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
import { Input, Flex, Button, Text, Box } from "@chakra-ui/react";

export const Username = () => {

  const navigate = useNavigate();

  const { Username, setUsername } = useContext(Context);
  
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
   if (!/^(?![ ])(?!.*[ ]$)(?!.*[<>]).+$/.test(Username)) {
    return setError("Put a valid username")
   } else {
    localStorage.setItem("Username", Username);
    navigate("/Game")
   }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Flex flexWrap={{ base: "wrap", sm: "nowrap" }} justifyContent={"space-between"} gap={2}>
      <Box position={"relative"}>
        {error !== null && <Text position={"absolute"} top={-8} fontWeight={500} textColor={"red.500"}>{error}</Text>}
      <Input
          required
          maxLength={30}
          pattern="^[\p{L}0-9 ]{1,30}$"
          type="text"
          placeholder="Username"
          border={"2px"}
          borderColor={"gray.700"}
          textColor={"gray.400"}
          fontFamily={"monospace"}
          _focusVisible={{
            borderColor:"green.700"
          }}
          value={Username}
          onChange={e => {setUsername(e.target.value), setError(null)}}
        />
      </Box>
        <Button
          type="submit"
          textColor={"green.400"}
          bg={"transparent"}
          px={9}
          border={"2px"}
          borderColor={"green.400"}
          _hover={{ bg: "gray.800" }}
        >
          START
        </Button>
      </Flex>
    </form>
  );
};

