import { connect } from "react-redux"
import { changeSlide } from "actions/screen"
import Screen from "./Screen"

const mapStateToProps = state => ({
  slide: state.screen.slides[state.screen.activeSlideId],
  id: state.screen.activeSlideId
})

export default connect(
  mapStateToProps,
  { changeSlide }
)(Screen)
