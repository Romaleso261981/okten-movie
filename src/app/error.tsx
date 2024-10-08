"use client";

import { Flex, Text, Title } from "@mantine/core";

export default function ErrorPage() {
  return (
    <Flex align="flex-end" justify="center" display="flex" h="40vh">
      <Flex direction="column" justify="center">
        <Title>Something went wrong</Title>
        <Text>
          Something went wrong while trying to load the page.
          <br />
          Please go back to the homepage.
        </Text>
        <a href="/">Go home</a>
      </Flex>
    </Flex>
  );
}
