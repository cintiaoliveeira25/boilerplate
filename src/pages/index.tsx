import Head from 'next/head';
import { Main } from '../components/main';

const foo = 'bla';

type Props = {
  title: string;
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Main />
    </>
  );
}
