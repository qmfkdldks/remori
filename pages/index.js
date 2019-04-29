import React from 'react'
import MainBanner from '../components/home-one/MainBanner'
import BoxArea from '../components/home-one/BoxArea';
import ServicesArea from '../components/home-one/ServicesArea';

class Index extends React.Component {
  render() {
      return (
      <React.Fragment>
        <MainBanner />
        <BoxArea />
        <ServicesArea />
      </React.Fragment>
      )
  }
}

export default Index