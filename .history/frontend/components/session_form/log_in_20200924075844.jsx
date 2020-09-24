import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// const FORM_STYLE = {
//     width: '100%',
//     backgroundColor: '#f3f3f3',
//     position: 'fixed', 
//     paddingBottom: '200px',
//     zIndex: '100000000002',
//     textAlign: "center", 
//     borderTop: "2px solid black",
//     paddingTop: '50px',
//     fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
//     fontSize: '18px',
// }

// const LABEL_INPUT_STYLE = {
//     display: 'table-row',
//     textAlign: 'center'
// }

// const LABEL_STYLE = {
    
// }

// const INPUT_STYLE = {
//     padding: '5px',
//     margin: '10px',
//     border: '2px solid light-grey', 
//     width: '300px',
//     height: '20px',
// }

// const BUTTON_STYLE = {
//     background: "#00a1c6",
//     height: '35px',
//     width: '250px' ,
//     color: 'white'
// }

// const FORM_HEADER = {
//     fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
//     fontSize: '18px',
//     paddingBottom: '35px'
// }

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username_or_email: "",
            password: "",
        }

        this.update = this.update.bind(this); 
        this.renderErrors = this.renderErrors.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit() {
        console.log("submitting...")
        console.log(this.state);
        this.props.processForm(this.state); 
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    renderErrors() {
        return (
            <ul className="errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    // signupModal() {
    //     const [isOpen, setIsOpen] = useState(false);
    //     return (
    //         <>
    //             <Link onClick={() => setIsOpen(true)} to="/signup">here</Link>
    //             <Modal open={isOpen} onClose={() => setIsOpen(false)}>
    //                 <SignupContainer />
    //             </Modal>
    //         </>
    //     )
    // }
    render() {
        return(
        <div className ='login-page'>
                <div className="login-banner">
                        
                        <div className="login-header">
                        
                        <p className="login-banner-image"><Link to="/">▰<</Link> /p>
                        <Link to="/"><p className="login-banner-text">RecordPress</p></Link>
                      
                        </div>
                </div>
                <div className="login-form-wrap">
                    <div className="login-form-main">
                             <h2>Log In</h2>
                             <div className="login-divider"></div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="fill-form">
                                <div className="label-field-container"> 
                                    <div className="login-inputs-wrap">  
                                        <label>Username / email</label>
                                            <div className="input-wrap" >
                                                <input
                                                    className="login-field"
                                                    type="text"
                                                    value={this.state.email}
                                                    onChange={this.update('username_or_email')}>
                                                </input>
                                            </div>
                                    </div>
                                    <div className="login-inputs-wrap">
                                        <label>Password</label>
                                        <div className="input-wrap" >
                                            <input
                                                className="login-field"
                                                type="password"
                                                value={this.state.password}
                                                onChange={this.update('password')}>
                                            </input>
                                        </div>
                                    </div>
                                    <div className="login-button-container">
                                           <input type="submit" className="login-button" value="Log In"></input>
                                    </div>
                                    <div>{this.renderErrors()}</div>
                                    <div className="login-footer">
                                        <div className="sign-ups">
                                           <p>Don't have an account? Sign up {this.props.otherForm}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                   </div>
               </div>
                <div className="login-block-footer">
                    <div className="inner-block-footer"></div>
                </div>
        </div>
        )
    }
}

export default LoginForm; 