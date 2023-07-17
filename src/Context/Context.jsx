import { createContext, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

export let Context = createContext() 

export function ContextProvider({children}) {

    const [Username, setUsername] = useState(() => {
        if (localStorage.Username) {
            return localStorage.Username
        } else {
            return ""
        }
    })

    const [UserAnswers, setUserAnswers] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [Done, setDone] = useState(false)
    const [Results, setResults] = useState(null)
    let {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <Context.Provider value={{
            Username,
            setUsername,
            currentQuestion, 
            setCurrentQuestion,
            UserAnswers,
            setUserAnswers,
            Done,
            setDone,
            Results,
            setResults,
            isOpen,
            onClose,
            onOpen
        }}>
            {children}
        </Context.Provider>
    ) 

}