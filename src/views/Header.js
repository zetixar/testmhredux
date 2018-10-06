import React from "react"
// import logo from "assets/logo.svg";
import logo2 from "assets/A+E_Networks_white.svg"

function Header({ backgroundColor }) {
  return (
    <div className={`header ${backgroundColor}`}>
      <img
        src={logo2}
        className={``}
        alt="A+E Networks Home"
        title="A+E Networks Home"
        aria-hidden="true"
      />
      دفتر وکالت فخر
    </div>
  )
}

export default Header
// import styled, { keyframes } from "styled-components";

// const rotate360 = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// const TopBar = styled.div`
//   background-color: #222;
//   height: 508px;
//   padding: 20px;
//   color: #fff;
//   position: sticky;
//   top: 0;
//   .redux-logo {
//     animation: ${rotate360} infinite 20s linear;
//     height: 80px;
//   }
// `;

// const Bar = styled.div`
//   width: 100%;
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 20;
// `

// function Header() {
//   return (
//     <TopBar>
//       <img src={logo} className="redux-logo" alt="logo" />
//       <h2>Welcome to Create Redux App</h2>
//     </TopBar>
//         )
//       }
