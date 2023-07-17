import { useState, useContext } from "react";
import { Context } from "../../Context/Context";
import { Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Done = () => {
  
   const { Done, UserAnswers, setResults, setCurrentQuestion, setDone, setUserAnswers} = useContext(Context);
   const [Loading, setLoading] = useState(false)

   const navigate = useNavigate()

  const toast = useToast()

  async function sendAnswers() {
    setLoading(true)
    try {
      let Username = localStorage.Username
      let res = await axios.post("https://soccer-quiz-api.onrender.com/api/VerifyAnswers", {Username, UserAnswers})
      setResults(res.data)
      setCurrentQuestion(1);
      setDone(false)
      setUserAnswers([])
      navigate("/Results")
    } catch (err) {
      toast({
        title: 'ERROR',
        description: err.response.data.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
    setLoading(false)
  }

  return (
    <>
      {Done && (
        <Button
          variant={"outline"}
          px={10}
          isLoading={Loading}
          loadingText="Analyzing"
          borderColor={"green.500"}
          textColor={"green.500"}
          _hover={{
            textColor: "green.300",
            borderColor: "green.300",
          }}
          _active={{}}
          onClick={sendAnswers}
        >
          DONE
        </Button>
      )}
    </>
  );
};