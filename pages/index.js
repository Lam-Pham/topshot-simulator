import Head from 'next/head'
import Layout from "../components/layout"
import Container from "../components/container"
import Header from "../components/header"
import Landing from "../components/landing"
import Drop from "../components/drop"
import Pack from "../components/pack"

export default function Home() {
  
  return (
    <Layout>
      <Head>
        <title>TOP SHOT SIMULATOR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header/>
        <Landing/>
        <Drop/>
        <Pack/>
        <Pack/>
      </Container>
    
    </Layout>
  )
}
