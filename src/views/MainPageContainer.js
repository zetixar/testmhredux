import { connect } from "react-redux"
import { changeHeaderBackgroundColor } from "actions/header"
import MainPage from "./MainPage"

export default connect(
  null,
  { changeHeaderBackgroundColor }
)(MainPage)
