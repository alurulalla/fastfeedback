import Head from 'next/head';
import { useAuth } from '../lib/auth';
import styles from '../styles/Home.module.css';

export default function Home() {
  const auth = useAuth();
  console.log(auth);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fast Feedback</h1>

        <div>
          {!auth.user && (
            <button onClick={(e) => auth.signinWithGithub()}>Sign In</button>
          )}
        </div>

        <div>{auth?.user?.email}</div>

        <div>
          {auth?.user && (
            <button onClick={(e) => auth.signout()}>SignOut</button>
          )}
        </div>
      </main>
    </div>
  );
}
