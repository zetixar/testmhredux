import React from "react"
import { MainPage, Header } from "views"
import { BrowserRouter as Router, Route } from "react-router-dom"
// import styled from 'styled-components'

// const Container = styled.div`text-align: center;`

function Routes() {
  return (
    <Router>
      <div style={{ direction: "rtl" }}>
        <Header />
        <Route path="/" component={MainPage} />
      </div>
    </Router>
  )
}

export default Routes
