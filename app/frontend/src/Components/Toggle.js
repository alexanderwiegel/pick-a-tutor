import React from "react"
import "bootstrap-icons/font/bootstrap-icons.css"

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCardView: false,
      isLow: true
    }
  }

  render() {
    const sort = () => {
      this.setState({ isLow: !this.state.isLow })
      if (this.props.category === "course") {
        this.props.name === 'Price'
          ? this.props.sortCourses("coursePricePerHour", this.state.isLow ? "des" : "asc")
          : this.props.sortCourses("rating", this.state.isLow ? "des" : "asc")
      } else {
        this.props.sortUsers(this.state.isLow ? "des" : "asc")
      }
    }
    return (
      <div style={{ marginInlineStart: '20px' }}>
        <a className="btn" style={{ padding: '0' }} onClick={() => this.setState({ isCardView: !this.state.isCardView })}>
          <div onClick={sort}>
            <i className={this.state.isLow ? "bi bi-arrow-down" : "bi bi-arrow-up"} style={{ fontSize: "1.2rem" }}></i>
          </div>
        </a>
        &nbsp;&nbsp;{this.props.name}
      </div>
    )
  }

}

export default Toggle