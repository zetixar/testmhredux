import React from "react"
import { throttle } from "lodash"
import Slide from "./Slide"
import MiniSlide from "./MiniSlide"
const Screen = ({ slide, changeSlide }) => (
  <div
    onWheel={throttle(e => changeSlide(e.deltaY > 0 ? "next" : "prev"), 300, {
      trailing: false
    })}
    style={{ height: "100vh", width: "100vw" }}
  >
    {slide.type === "infoto" && <Slide slide={slide} />}
    {slide.type === "miniSlides" && <MiniSlide slide={slide} />}
  </div>
)

export default Screen
