import React from 'react';
import { Heading, Flex, Text, Button } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';

const EmptyState = () => (
  <DashboardShell>
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius="8px"
      p={16}
      height="100%"
      justify="center"
      direction="column"
      align="center"
    >
      <Heading size="lg" mb={2}>
        You haven't added any sites.
      </Heading>
      <Text mb={4}>Welcome 👋 &nbsp; Let's get started.</Text>
      <Button
        maxW="200px"
        variant="solid"
        size="md"
        backgroundColor="#0c0c0c"
        color="white"
        fontWeight="medium"
      >
        Add Your First Site
      </Button>
    </Flex>
  </DashboardShell>
);

export default EmptyState;
