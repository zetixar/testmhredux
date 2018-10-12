import { connect } from "react-redux"
import Header from "./Header"

const mapStateToProps = ({ screen: { headerBackgroundColor } }) => ({
  headerBackgroundColor
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
