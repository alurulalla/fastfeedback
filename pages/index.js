import { Button, Text, Flex } from '@chakra-ui/react';

import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import { LogoIcon } from '@/styles/theme';

export default function Home() {
  const auth = useAuth();
  console.log(auth);
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <LogoIcon color="black" fontSize="64px" />

      {auth.user ? (
        <Button onClick={(e) => auth.signout()}>SignOut</Button>
      ) : (
        <Button mt={4} size="sm" onClick={(e) => auth.signinWithGithub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
}
