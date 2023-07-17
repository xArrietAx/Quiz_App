import { useState, useEffect, useContext } from 'react';
import { Context } from "../../Context/Context";
import { Text, useDisclosure } from '@chakra-ui/react';
import { Lose } from "./Lose";

export const Countdown = () => {

  const {Done} = useContext(Context)

  const [timeLeft, setTimeLeft] = useState(70);

  let {isOpen, onOpen, onClose} = useDisclosure()

  useEffect(() => {

    if (Done) {
      if (localStorage.timeLeft) {
      return setTimeLeft(localStorage.timeLeft)  
      }
      return localStorage.setItem("timeLeft", timeLeft)
    }

    if (localStorage.timeLeft) localStorage.removeItem("timeLeft")
    
    if (timeLeft === 0) {
      onOpen()
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);

  }, [timeLeft, Done, onOpen]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(1, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
    <Text as={"span"} textColor={timeLeft < 20 ? "red.500" : "gray.400"}>
       <Text as={"span"}><i className="bi bi-stopwatch"></i> </Text>
        {formatTime(timeLeft)}
    </Text>
    <Lose isOpen={isOpen} onClose={onClose} />
    </>
  );
};