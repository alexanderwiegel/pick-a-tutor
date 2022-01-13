import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

class Toggle extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {
        isCardView: false,
        isLow:true
      }
    } 
  
    render() {
      return (
          <div style={{}}>
        <a className="btn" onClick={()=>this.setState({ isCardView: !this.state.isCardView })}>
          { this.state.isCardView
            ? <div onClick={()=>this.setState({isLow: true}) }><i class="bi bi-arrow-up" style={{fontSize:'1.2rem'}}></i></div>
            : <div onClick={()=>this.setState({isLow: false}) }><i class="bi bi-arrow-down" style={{fontSize:'1.2rem'}}></i></div>
          }
          &nbsp;&nbsp;{this.props.name}{console.log("is low =",this.state.isLow)}
        </a>
        </div>
      );
    }
  
  }

export default Toggle;