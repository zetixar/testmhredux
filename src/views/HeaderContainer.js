import { connect } from "react-redux"
import Header from "./Header"

const mapStateToProps = ({ header: { backgroundColor } }) => ({
  backgroundColor
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
