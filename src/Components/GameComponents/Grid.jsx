import { Grid } from "@chakra-ui/react";
import { Options } from "./Options";

let GridsContainer = ({Data}) => {
  return (
    <Grid
        w={"80%"}
        py={2}
        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
        templateRows={{base: "repeat(4, 50px)" ,sm:"repeat(2, 90px)"}}
        gap={5}
      >
        {Data?.options.map((option, i) => {
          return (
            <Options
              key={Data.id + Date.now() + Math.random() + i}
              Options={option}
              TotalQuestions={Data.totalQuestions}
              id={Data.id}
              i={i}
            />
          );
        })}
      </Grid>
  )
}
export default GridsContainer