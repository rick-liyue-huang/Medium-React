
import React, { Component } from 'react'
import { RecommendWrapper, RecommendItem } from '../style';

class Recommends extends Component {
  render() {
    return (
      <RecommendWrapper>
        <RecommendItem />
        <RecommendItem />
      </RecommendWrapper>
    )
  }
}

export default Recommends;