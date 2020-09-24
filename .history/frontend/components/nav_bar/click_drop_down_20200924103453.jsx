import React from 'react';


class ClickDropDown extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            show: false
        }

        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleBlur(e) {
        this.setState({show: false}); 
    }

    handleClick(){
        this.setState({show: !this.state.show})
    }

    render() {
        return(
            // <div className="drpdown">
            //     <button style={{position: 'relative'}} 
            //     onBlur={this.handleBlur}
            //     onClick={this.handleClick}
            //         className="dropbtn">♪
                     
            //     {this.state.show ? (
            //         <ul onClick={e => e.stopPropagation()}
            //             style={{ position: 'absolute', top:'100%', overflow:"visible"}}>
            //             <li className="dropdown-list-item">
            //                 Your Site
            //             </li>
            //             <li className="dropdown-list-item" onClick ={this.props.logout}>
            //                 log out
            //            </li>

            //         </ul>
            //     ) : null }
            //     </button>
            // </div>

            <div>
        <button 
          style={{ position: 'relative'}} 
          onBlur={this.handleBlur} 
          onClick={this.handleClick} >
            Click for Dropdown
            {this.state.show ? (
              <ul 
                onClick={e => e.stopPropagation()} 
                style={{ position: 'absolute', top: '100%', zIndex: '1000'}}
              >
                <li>Click this</li>
                <li>Click this too</li>
                <li>Or click this</li>
              </ul>
            ) : null }
        </button>
      </div>
        )
    }
}

export default ClickDropDown; 

