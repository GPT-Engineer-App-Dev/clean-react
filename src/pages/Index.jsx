import { Box, Container, Flex, Text, VStack, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useEvents } from "../integrations/supabase/index.js";

const Index = () => {
  const { session, logout } = useSupabaseAuth();
  const { data: events, error, isLoading } = useEvents();

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
          {session ? (
            <>
              <Text fontSize="2xl">Events</Text>
              {isLoading && <Text>Loading...</Text>}
              {error && <Text color="red.500">{error.message}</Text>}
              {events && events.map(event => (
                <Box key={event.id} p={4} borderWidth="1px" borderRadius="lg" w="100%">
                  <Text fontSize="xl">{event.name}</Text>
                  <Text>{event.date}</Text>
                  <Text>{event.description}</Text>
                </Box>
              ))}
            </>
          ) : (
            <>
              <Text fontSize="2xl">Welcome to MyApp</Text>
              <Text>Please log in to see the events.</Text>
            </>
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;