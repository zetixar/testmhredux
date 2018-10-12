import React from "react"
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

const moveUp = keyframes`
    0%   { top:60px;}
    25%  { top:45x;}
    50%  { top:30px;}
    75%  { top:15px;}
    100% { top:0px;}
  }
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
    {slide.type === "infoto" && (
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
            display: "flex",
            flexDirection: "column",
            // animation: `${moveUp} 1s linear`
            // transition: `all 3s ease-in`
          }}
        >
          <div style={{}}>
            <div className="boogh">{slide.content.title}</div>
          </div>
          <p>{slide.content.text}</p>
          <div>{slide.content.link}</div>
        </div>
      </Img>
    )}
  </div>
)

export default Slide
