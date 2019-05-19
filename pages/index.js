import React from 'react'
import MainBanner from '../components/molecular/MainBanner'
import BoxArea from '../components/molecular/BoxArea';
import RecentWork from '../components/container/RecentWork';
import AboutArea from '../components/molecular/AboutArea';
import ContactArea from '../components/molecular/Contact';
// import ServicesArea from '../components/home-one/ServicesArea';

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
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