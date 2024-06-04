import { Box, Container, Flex, Text, VStack, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const { session, logout } = useSupabaseAuth();

  return (
    <Box>
      <Flex
        as="nav"
        bg="blue.500"
        color="white"
        padding="1.5rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="xl" fontWeight="bold">
          MyApp
        </Text>
        <Flex>
          <Link as={RouterLink} to="/" margin="0 1rem">
            Home
          </Link>
          <Link as={RouterLink} to="/about" margin="0 1rem">
            About
          </Link>
          {session ? (
            <Button onClick={logout} colorScheme="red" margin="0 1rem">
              Logout
            </Button>
          ) : (
            <Link as={RouterLink} to="/login" margin="0 1rem">
              Login
            </Link>
          )}
        </Flex>
      </Flex>
      <Container
        centerContent
        maxW="container.md"
        height="calc(100vh - 80px)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;