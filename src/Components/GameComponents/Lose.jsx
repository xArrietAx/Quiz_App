import { useContext } from "react";
import { Context } from "../../Context/Context";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"

export function Lose({isOpen, onClose}) {

  let Navigate = useNavigate()

  let {setUserAnswers, setCurrentQuestion} = useContext(Context)

  function TryAgain() {
    setUserAnswers([])
    setCurrentQuestion(1)
    onClose()
    Navigate("/")
  }

  return (
    <>
      <Modal isOpen={isOpen} >
        <ModalOverlay />
        <ModalContent mx={5}
          style={{
            backgroundImage: "linear-gradient(160deg, black, rgb(60, 3, 19))",
            boxShadow:"2px 2px 6px rgba(329, 10, 14, 0.351)"
          }}
        >
          <ModalHeader textAlign={"center"} textColor={"white"}>
            You lose
          </ModalHeader>
          <ModalBody fontWeight={"500"} textAlign={"center"} textColor={"gray.400"}>
            Unfortunately, time has run out and you have lost the quiz. Better
            luck next time.
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              w={"full"}
              textAlign={"center"}
              borderColor={"gray.700"}
              textColor={"white"}
              _hover={{
                borderColor:"gray.500"
              }}
              _active={{}}
              onClick={TryAgain}
            >
              Try again
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
