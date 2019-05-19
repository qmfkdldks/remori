import React from 'react'
import MainBanner from '../components/molecular/MainBanner'
import BoxArea from '../components/molecular/BoxArea';
import RecentWork from '../components/container/RecentWork';
// import ServicesArea from '../components/home-one/ServicesArea';

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainBanner />
        <BoxArea />
        <RecentWork />
        {/* <ServicesArea /> */}
      </React.Fragment>
    )
  }
}

export default Index