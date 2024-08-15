import { Button, Flex, Text, Title } from "@mantine/core";

const NotFound = () => {
  return (
    <Flex align="flex-end" justify="center" display="flex" h="40vh">
      <Flex direction="column" justify="center">
        <Title>404</Title>
        <Text>
          The page you are looking for does not exist.
          <br />
          Please go back to the homepage.
        </Text>
        <Button />
      </Flex>
    </Flex>
  );
};

export default NotFound;
