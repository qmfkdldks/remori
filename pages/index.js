import React from 'react'
import MainBanner from '../components/molecular/MainBanner'
import BoxArea from '../components/molecular/BoxArea';
// import ServicesArea from '../components/home-one/ServicesArea';

class Index extends React.Component {
  render() {
      return (
      <React.Fragment>
        <h1></h1>
        <MainBanner />
        <BoxArea />
        {/* <ServicesArea /> */}
      </React.Fragment>
      )
  }
}

export default Index