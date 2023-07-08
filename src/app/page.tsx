/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Header from '../../components/Header';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Jada's portfolio</title>
      </Head>
      <Header />
    </main>
  )
}
