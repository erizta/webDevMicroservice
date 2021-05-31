import Head from 'next/head'

export default function Home() {
  return (
    <div className="container mx-auto mt-4">
      <Head>
        <title>MICRO</title>
        <meta name="description" content="Microservice" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Homepage</h1>
      </main>

    </div>
  )
}
