import React, {useState} from 'react';
import Modal from '../modal';

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
        this.props.processForm(this.state); 
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    signupModal() {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <>
                <Link onClick={() => setIsOpen(true)} to="/signup">here</Link>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <SignupContainer />
                </Modal>
            </>
        )
    }
    render() {
    
        return(
            <div className ='login-page'>
            <div className ="login-banner">Banner</div>
                <div className="login-form">
        
                <form onSubmit={this.handleSubmit}>
                    <h1>{this.props.formType}</h1>
                    <div className="login-input-wrap">
                    <label>Username / email</label>
                    <input
                        className="login-field"
                        type="text"
                        value={this.state.email}
                        onChange={this.update('username_or_email')}>
                    </input>
                    </div>
                    <br></br>
                    <div className="login-input-wrap">
                    <label>Password </label>
                    <input
                        className="login-field"
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}>
                    </input>
                    </div>
                <br></br>
                <input type="submit" className="login-button" value="Log In"></input>
            </form>
                    <p>Don't have an account? Sign up {this.props.navLink}</p>
        </div>
        </div>
        )
    }
}

export default LoginForm; 