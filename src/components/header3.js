import React from 'react'
import logo from 'assets/logo.svg'
import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const TopBar = styled.div`
  background-color: #222;
  height: 2000px;
  padding: 20px;
  color: #fff;

  .redux-logo {
    animation: ${rotate360} infinite 20s linear;
    height: 80px;
  }
`
// const Bar = styled.div`
//   width: 100%;
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 20;
// `

function Header() {
  return (
    <TopBar>
      <img src={logo} className="redux-logo" alt="logo" />
      <h2>Welcome to Create Redux App</h2>
      <nav class="main-menu ">
        <div class="nav-bar ">
          <div>
            <div class="black logo-wrapper">
              <a role="link" aria-label="A+E Networks Home" aria-hidden="false" tabindex="0" href="/">
                <span class="link-content" tabindex="-1">
                  <div class="shifty-image logo-image link-content" tabindex="-1">
                    <img src="/static/A+E_Networks_stack/A+E_Networks_black.svg" class="visible" alt="A+E Networks Home" title="A+E Networks Home" aria-hidden="true"/>
                    <img src="/static/A+E_Networks_stack/A+E_Networks_white.svg" class="hidden" alt="A+E Networks Home" title="A+E Networks Home" aria-hidden="false"/>
                  </div>
                </span>
              </a>
            </div>
          </div>
        <div class="nav-icons white menu-open">
          <span class="social-icons">
            <a target="_blank" aria-label="A+E Networks on Facebook" aria-hidden="false" tabindex="0" role="link" class="contact-logo" href="https://facebook.com/pg/AENetworks">
              <span class="link-content" tabindex="-1">
                <span aria-hidden="true" class="fa fa-facebook"></span>
              </span>
            </a>
            <a target="_blank" aria-label="A+E Networks on Instagram" aria-hidden="false" tabindex="0" role="link" class="contact-logo" href="https://www.instagram.com/aenetworks/">
              <span class="link-content" tabindex="-1"
                ><span aria-hidden="true" class="fa fa-instagram"></span>
              </span>
            </a>
            <a target="_blank" aria-label="A+E Networks on Twitter" aria-hidden="false" tabindex="0" role="link" class="contact-logo" href="https://twitter.com/aenetworks">
              <span class="link-content" tabindex="-1">
                <span aria-hidden="true" class="fa fa-twitter"></span>
              </span>
            </a>
            <a target="_blank" aria-label="A+E Networks on LinkedIn" aria-hidden="false" tabindex="0" role="link" class="contact-logo" href="https://www.linkedin.com/company/aenetworks">
            <span class="link-content" tabindex="-1">
              <span aria-hidden="true" class="fa fa-linkedin"></span>
            </span>
            </a>
          </span>
          <a role="button" aria-label="Close menu" tabindex="0" class="hamburger padded">
            <svg tabindex="-1" class="white link-content" width="18px" height="17px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <title>Close Menu</title>
              <g id="Menu" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                <g id="close" transform="translate(-1381.000000, -31.000000)" stroke-width="2.4">
                <g id="Group" transform="translate(1383.000000, 32.000000)">
                  <path d="M14.7407407,14.7692308 L0.0740740741,0.230769231" id="Line"></path>
                  <path d="M14.7407407,14.7692308 L0.0740740741,0.230769231" id="Line" transform="translate(7.407407, 7.500000) scale(-1, 1) translate(-7.407407, -7.500000) "></path>
                </g>
                </g>
            </g>
           </svg>
          </a>
        </div>
      </div>
      <div class="click-capture"></div>
        <div class="side-menu" style="transform: matrix(1, 0, 0, 1, -320, 0);">
          <ul>
            <li class="nav-link active">
              <a role="link" aria-label="Go to Home page" aria-hidden="false" tabindex="0" href="/">
                <span class="link-content" tabindex="-1">Home</span>
              </a>
            </li>
            <li class="nav-link ">
              <a role="link" aria-label="Go to Who We Are page" aria-hidden="false" tabindex="0" href="/who-we-are/">
                <span class="link-content" tabindex="-1">Who We Are</span>
              </a>
            </li>
            <li class="nav-link ">
              <a role="link" aria-label="Go to Brands page" aria-hidden="false" tabindex="0" href="/brands/">
                <span class="link-content" tabindex="-1">Brands</span>
              </a>
            </li>
            <li class="nav-link ">
              <a role="link" aria-label="Go to Divisions page" aria-hidden="false" tabindex="0" href="/divisions/">
                <span class="link-content" tabindex="-1">Divisions</span>
              </a>
            </li>
            <li class="nav-link ">
              <a role="link" aria-label="Go to Careers page" aria-hidden="false" tabindex="0" href="/careers/">
                <span class="link-content" tabindex="-1">Careers</span>
              </a>
            </li>
            <li class="nav-link ">
              <a role="link" aria-label="Go to News page" aria-hidden="false" tabindex="0" href="/news/">
                <span class="link-content" tabindex="-1">News</span>
              </a>
            </li>
            <li class="nav-link ">
              <a role="link" aria-label="Go to Perspectives page" aria-hidden="false" tabindex="0" href="/perspectives/">
                <span class="link-content" tabindex="-1">Perspectives</span>
              </a>
            </li>
            <li class="nav-link ">
              <a role="link" aria-label="Go to Contact Us page" aria-hidden="false" tabindex="0" href="/contact/"><span class="link-content" tabindex="-1">Contact Us</span></a>
            </li>
          </ul>
          <div class="nav-more-links">
            <a role="link" aria-hidden="false" tabindex="0" href="/privacy">
              <span class="link-content" tabindex="-1">Privacy Notice</span>
            </a>
            <span class="bullet"></span>
            <a role="link" aria-hidden="false" tabindex="0" href="/terms">
              <span class="link-content" tabindex="-1">Terms Of Use</span>
            </a>
          </div>
        </div>
      </nav>
    </TopBar>
        )
      }
      
      export default Header
      
