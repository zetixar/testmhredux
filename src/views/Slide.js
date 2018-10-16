import React from "react"
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

const moveUp = keyframes`
  from { top: 100px; }
  to { top: 0px; }
`
const Img = styled.div`
  /* Full height */
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 160px;
`
//   padding: 24px 24px 80px 24px;

// #35a257
const Slide = ({ slide }) => (
  <div>
    <Img
      key={slide.id}
      style={{
        animation: `${fadeIn} 2s`,
        backgroundImage: `linear-gradient(
              to right,
              rgba(0, 0, 0, 0.8),
              rgba(0, 0, 0, 0)
            ),
            url(${slide.backgroundImageUrl})`
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: 22,
          position: "relative",
          animation: `${moveUp} 1.7s`
        }}
      >
        <div className="animated-underlined-title">{slide.content.title}</div>

        <p>{slide.content.text}</p>
        <div>{slide.content.link}</div>
      </div>
    </Img>
  </div>
)

export default Slide
