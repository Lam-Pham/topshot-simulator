import Head from 'next/head'
import Layout from "../components/layout"
import Container from "../components/container"
import Header from "../components/header"
import Landing from "../components/landing"
import Drop from "../components/drop"
import Pack from "../components/pack"
import Menu from "../components/menu" 
import SmallContainer from "../components/smallContainer" 

export default function Home() {
  
  return (
    <Layout>
      <Head>
        <title>TOP SHOT SIMULATOR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>

        <Menu/>

        <SmallContainer>
          <Header/>
          <Landing/>
          <Drop/>
          <Pack/>
          <Pack/>
        </SmallContainer>
      </Container>
    
    </Layout>
  )
}
