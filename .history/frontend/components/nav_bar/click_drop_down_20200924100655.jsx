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
            <div className="drpdown">
                <button style={{position: 'relative'}} 
                onBlur={this.handleBlur}
                onClick={this.handleClick}
                className="dropbtn">profile picture here
                
                {this.state.show ? (
                    <ul className="dropdown-items" onClick={e => e.stopPropagation()}
                        style={{ position: 'absolute', top:'100%'}}>
                        <li className="dropdown-list-item">
                            Your Site
                        </li>
                        <li className="dropdown-list-item" onClick ={this.props.logout}>
                            log out
                       </li>

                    </ul>
                ): null }
                
                <div className="dropdown-items">
                    <li className="dropdown-list-item">
                        Your Site
                     </li>
                    <li className="dropdown-list-item"
                        onClick={this.props.logout}>log out
                     </li>
                 
                </div>
                </button>
            </div>
        )
    }
}

export default ClickDropDown; 

