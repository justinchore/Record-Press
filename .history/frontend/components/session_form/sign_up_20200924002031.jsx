import React from 'react'; 

class SignupForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            username: "",
            email: "", 
            password: "", 
            is_artist: false,
            artistName: "",
            location: "",
            genre: ""
        }

        this.update = this.update.bind(this); 
        this.toggleIsArtist = this.toggleIsArtist.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(this.props.closeModal)
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    toggleIsArtist() {
        return (prevState) => 
            this.setState(prevState => ({
            is_artist: !prevState.is_artist
        }));
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

    render() {
        console.log("rendering!")
        let artistFields = {}; 
        let changeForm = {}; 
        let formHeader = {}; 
        if (this.state.is_artist) {
            artistFields = {
                artistName: <div><label className="input-label">Artist/Band name</label>
                    <input className="input"
                        type="text"
                        value={this.state.artistName}
                        onChange={this.update('artistName')}
                    >
                    </input>
                    </div>, 
                genre: <div><label className="input-label">Genre</label>
                    <input className="input"
                        type="text"
                        value={this.state.genre}
                        onChange={this.update('genre')}
                    >
                    </input>
                </div>, 
                location: <div><label className="input-label">Location</label>
                    <input className="input"
                        type="text"
                        value={this.state.location}
                        onChange={this.update('location')}
                    >
                    </input>
                </div>,
            }
            changeForm = {
                text: <h4>Are you a fan? Sign up <a onClick={this.toggleIsArtist('is_artist')}> here.</a></h4>
            }
            formHeader = { text: <span className="header-text">Sign up for an Artist Account</span> }
        } else {
            changeForm = {
                text: <h4 className="other-form">Are you an artist? Sign up <a onClick={this.toggleIsArtist('is_artist')}> here.</a></h4>
            }; 
            formHeader = { text: <span className="header-text">Sign up for a Fan Account</span>}
        }

        return (
        <div className="signup-window-container">
       
                  {formHeader.text}
                  <a href ="/" className="close-form">
                      <span className="close-modal">X</span>
                  </a>
           
                  <div className ="signup-form-container">
                    <div className ="inner-form-inputs">
                        { changeForm.text }
                        <form onSubmit = {this.handleSubmit}>
                                <div>{artistFields.artistName}</div>
                                <div>{artistFields.genre}</div>
                                <div>{artistFields.location}</div>
                                    <label className="input-label">Email address </label> 
                                    <input className="input"
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                     >
                                     </input>
                        <label className="input-label">Password </label>
                            <input className="input"
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            >
                            </input>         
                          
                     
                         <label className="input-label">Username </label>
                                
                                    
                                        
                        <input className="input"
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        >
                        </input>
                                
                
                            <input type="submit" className="submit-button" value="Submit"></input>
                        </form>
                    </div>
                <p className ='signup-footer'>Already have an account? { this.props.navLink }</p>
            </div>
    
         
    </div>
    
        )
    }
}

export default SignupForm; 