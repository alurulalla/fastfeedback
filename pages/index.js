import { Code, Button, Text, Heading } from '@chakra-ui/react';

import Head from 'next/head';
import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();
  console.log(auth);
  return (
    <div>
      <Head>
        <title>Fast Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading>Fast Feedback</Heading>

        <Text>
          Current user: <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>

        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>SignOut</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
        )}
      </main>
    </div>
  );
}
