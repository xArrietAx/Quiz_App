import { Spinner } from "@chakra-ui/react";

const spinner = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="green.400"
      size="xl"
    />
  );
};

export default spinner;
