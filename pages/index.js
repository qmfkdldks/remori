import React from 'react'
import MainBanner from '../components/molecular/MainBanner'
import BoxArea from '../components/molecular/BoxArea';
import RecentWork from '../components/container/RecentWork';
import AboutArea from '../components/molecular/AboutArea';
import ContactArea from '../components/molecular/Contact';
// import ServicesArea from '../components/home-one/ServicesArea';
import Head from 'next/head'

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Remori Startup Argentina</title>
          <meta name="description" content="Platform to meet startup partners, projects and passions in Buenos Aires." />
        </Head>
        <MainBanner />
        <BoxArea />
        <RecentWork />
        <AboutArea />
        <ContactArea />
      </React.Fragment>
    )
  }
}

export default Index