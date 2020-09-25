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

                    className="dropbtn">♪
                     
                {this.state.show ? (
                    <ul onClick={e => e.stopPropagation()}
                        style={{ position: 'absolute', top:'100%', overflow:"visible"}}
                        id="dropdown-items">
                         <div className="dropdown-list-item-first">
                        <li className= "dropdown-username">
                            {this.props.currentUser.username}
                        </li>
                        <li className= "dropdown-first-footer">
                            view site
                        </li>
                        <div className="dropdown-divider"></div>
                        </div>
                        <div className="dropdown-logout-wrap">
                        <li className="dropdown-list-item-logout" onClick ={this.props.logout}>
                            log out
                        </li>
                        </div>

                    </ul>
                ) : null }
                </button>
            </div>
        )
    }
}

export default ClickDropDown; 

