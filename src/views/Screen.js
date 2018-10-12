import React from "react"
import throttle from "lodash/throttle"
import Slide from "./Slide"

const Screen = ({ slide, changeSlide }) => (
  <div
    onWheel={throttle(e => changeSlide(e.deltaY > 0 ? "next" : "prev"), 300, {
      trailing: false
    })}
    style={{ height: "100vh", width: "100vw" }}
  >
    <Slide slide={slide} />
  </div>
)

export default Screen
