import React from "react"
import styled from "styled-components"
import throttle from "lodash/throttle"
// import { withHandler}
// import PropTypes from 'prop-types'
// import pure from 'recompose/pure'
// import whoWeAre from '../assets/WhoWeAre3.jpg'
// const Intro = styled.p`font-size: large;`

const Img = styled.img`
  /* Full height */
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0)
    ),
    url(https://cropper.watch.aetnd.com/cdn.aenetworks.com/2018/05/WhoWeAre3.jpg?h=1440&);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`
const MainPage = ({ changeHeaderBackgroundColor }) => (
  <div
    style={{ height: "100%" }}
    onWheel={throttle(
      () => changeHeaderBackgroundColor({ backgroundColor: "white" }),
      300,
      {trailing: false}
    )}
  >
    <Img style={{ width: "100%" }} />
  </div>
)

// MainPage.propTypes = {
//   increment: PropTypes.func.isRequired,
//   incrementIfOdd: PropTypes.func.isRequired,
//   decrement: PropTypes.func.isRequired,
//   MainPage: PropTypes.number.isRequired,
// }

export default MainPage
