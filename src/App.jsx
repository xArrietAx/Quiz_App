import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout";
import Spinner from "./Components/Spinner";
import { Home } from "./Views/Home";
import { Flex, Text } from "@chakra-ui/react";

const NotFound = lazy(() => import("./Views/NotFound"));
const ProtectedRoute = lazy(() => import("./Components/ProtectedRoute"));
const Game = lazy(() => import("./Views/Game"));
const Results = lazy(() => import("./Views/Results"));

function App() {
  return (
    <Suspense
      fallback={
        <Flex
          flexDirection={"column-reverse"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={3}
          w={"100vw"}
          h={"100vh"}
          style={{
            backgroundImage: "linear-gradient(160deg, black, rgb(7, 20, 19))",
          }}
        >
          <Text fontSize={"xl"} fontWeight={"600"} textColor={"gray.400"}>
            Loading...
          </Text>
          <Spinner />
        </Flex>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/Game"
            element={
              <ProtectedRoute>
                <Game />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Results"
            element={
              <ProtectedRoute>
                <Results />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
export default App;
