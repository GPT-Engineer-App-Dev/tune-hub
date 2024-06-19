import { Container, VStack, Text, Heading, Box, Image, Button } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Music Streaming Service</Heading>
        <Text fontSize="lg" mb={6}>Stream your favorite music anytime, anywhere.</Text>
        <Box boxSize="sm" mb={6}>
          <Image src="/images/music-streaming.jpg" alt="Music Streaming" borderRadius="md" />
        </Box>
        <VStack spacing={4}>
          <Button leftIcon={<FaPlay />} colorScheme="teal" variant="solid" size="lg">Play</Button>
          <Button leftIcon={<FaPause />} colorScheme="teal" variant="solid" size="lg">Pause</Button>
          <Button leftIcon={<FaBackward />} colorScheme="teal" variant="solid" size="lg">Previous</Button>
          <Button leftIcon={<FaForward />} colorScheme="teal" variant="solid" size="lg">Next</Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;