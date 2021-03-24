import Head from 'next/head'
import Layout from "../components/layout"
import Container from "../components/container"
import Landing from "../components/landing"
import Drop from "../components/drop"
import Pack from "../components/pack"
import Menu from "../components/menu" 
import SmallContainer from "../components/smallContainer" 
import HallOfFame from '../components/hallOfFame'

export default function Home() {
  
  return (
    <Layout>
      <Head>
        <title>TOPSHOT SIMULATOR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>

        <Menu/>

        <SmallContainer>
          <Landing/>
          <Drop/>
          <Pack/>
          <HallOfFame/>
        </SmallContainer>
      </Container>
    
    </Layout>
  )
}
