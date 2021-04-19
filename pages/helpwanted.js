import Head from 'next/head'
import Layout from "../components/layout"
import Container from "../components/container"
import SmallContainer from "../components/smallContainer" 
import DonateMenu from "../components/donateMenu" 
import Help from "../components/help" 

export default function HelpWanted() {
  
  return (
    <Layout>
      <Head>
        <title>TOPSHOT SIMULATOR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>

        <DonateMenu/>

        <SmallContainer>
            <Help/>
        </SmallContainer>
      </Container>
    
    </Layout>
  )
}