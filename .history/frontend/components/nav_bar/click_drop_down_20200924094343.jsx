class ClickDropDown extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            show: false
        }

        this.handleBlur = this.handleBlue.bind(this);
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
                onBlick={this.handleClick}
                className="dropbtn">profile picture here</button>
                
                
                <div className="dropdown-items">
                    <a className="dropdown-list-item">
                        Your Site
                     </a>
                    <a className="dropdown-list-item"
                        onClick={logout}>log out
                     </a>
                </div>
            </div>
        )
    }
}

