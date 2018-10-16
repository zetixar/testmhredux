import React, { Component } from "react"

export class MiniSlide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlide: 0,
      offset: 500
    }
    this.move = this.move.bind(this)
  }

  move(direction) {
    console.log(this.state.offset)
    this.setState({
      ...this.state,
      offset:
        direction === "right"
          ? this.state.offset - 200
          : this.state.offset + 200
    })
  }
  render() {
    const slides = this.props.slide.Slides.map(s => (
      <img className="mini-slide" alt="mini-slide" src={s.imageUrl} />
    ))
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden"
        }}
        className="mini-slides-parent"
      >
        <div
          className="mini-slides-container"
          style={{
            position: "relative",
            // transform: `translateX(${this.state.offset}px)`,
            transition: "left cubic-bezier(1, 1, 0, 0) 1s",
            left: `${this.state.offset}px`,
            animationFillMode: "forward"
          }}
          onClick={() => this.move("right")}
        >
          {slides}
        </div>
        <div
          className="carousel-legend"
          style={{
            position: "relative",
            right: "200px",
            display: "flex",
            userSelect: "none",
            direction: "rtl"
            // transform: `matrix(1, 0, 0, 1, 406, 0)`
          }}
        >
          <a role="button" tabIndex="0" className="next  ">
            <span className="link-content" tabIndex="-1">
              ⟶
            </span>
          </a>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              direction: "ltr"
            }}
          >
            <span style={{ order: 3 }}>
              {new Intl.NumberFormat("fa-IR").format(5)}
            </span>
            {"  "}
            <span style={{ order: 2 }}>&nbsp; از &nbsp;</span>{" "}
            <span style={{ order: 1 }}>۳</span>{" "}
            {/* <span style={{ order: 3 }}>1</span>
            <span style={{ order: 2 }}>of</span>
            <span style={{ order: 1 }}>3</span> */}
          </div>

          <a role="button" tabIndex="0" className="prev hidden ">
            <span className="link-content" tabIndex="-1">
              ⟵
            </span>
          </a>
        </div>
      </div>
    )
  }
}

export default MiniSlide
