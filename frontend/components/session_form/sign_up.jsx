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
            genre_id: 1
        }



        this.update = this.update.bind(this); 
        this.toggleIsArtist = this.toggleIsArtist.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.renderErrors = this.renderErrors.bind(this);
        this.demoUser = this.demoUser.bind(this);
        this.updateGenre = this.updateGenre.bind(this);
        // this.artistFields = this.artistFields.bind(this); 
        // this.changeForm = this.changeForm.bind(this); 
        // this.formHeader = this.formHeader.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
            this.props.processForm(this.state)
    }

    updateGenre() {
        return (e) => {
            this.setState({genre_id: Number(e.target.value) + 2})
        }
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
        // console.log(this.props.errors);
        return (
            <ul className="signup-errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    demoUser(e) {
        e.preventDefault();
        if (!this.state.is_artist){
            this.props.demoUserLogin({
                username_or_email: "bestfan",
                password: "Hunter12"
        })} else {
            this.props.demoUserLogin({
                username_or_email: "bestartist",
                password: "Hunter12"
            })
        }
    }

    

    render() { 
        console.log(this.state)
        if (this.props.currentUser) {
            this.props.closeModal();
        }; 
        const genres = ["Pop", 
                        "Rock", 
                        "Hip-hop", 
                        "Alternative", 
                        "Folk", 
                        "Jazz", 
                        "Classical", 
                        "Metal",
                        "Electronic",
                        "Soundtrack"]

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
                    <select className="input"
                        name="select one"
                        onChange={this.updateGenre()}
                        >
                        <option value= "-1">select one</option>
                        {genres.map((genre, idx) => 
                            (<option value={idx}>{genre}</option>))}
                    </select>
                </div>, 
                location: <div><label className="input-label">Location</label>
                    <input className="input"
                        type="text"
                        name="select one"
                        onChange={this.update('location')}
                    >
                    </input>
                </div>,
            }
            changeForm = {
                text: <h4>Signing up for a <a className="toggle-artist-link" onClick={this.toggleIsArtist('is_artist')}> fan account.</a></h4>
            }
            formHeader = { text: <span className="header-text">Sign up for an Artist Account</span> }
        } else {
            changeForm = {
                text: <h4 className="other-form">Are you an artist? Sign up <a className = "toggle-artist-link" onClick={this.toggleIsArtist('is_artist')}> here.</a></h4>
            }; 
            formHeader = { text: <span className="header-text">Sign up for a Fan Account</span>}
        }

        return (
        <div className="signup-window-container">
                  {formHeader.text}
                  <a onClick = {this.props.closeModal} className="close-form">
                      <span className="close-modal">X</span>
                  </a>
           
                  <div className ="signup-form-container">
                    <div className ="inner-form-inputs">
                        {changeForm.text }
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
                    <div className='signup-footer'>
                <p>Already have an account? Log in { this.props.otherForm }</p>
                <button className="demo-user-button"onClick={this.demoUser}>demo user</button>
                {this.renderErrors()}
                </div>
            </div>
    </div>
    
        )
    }
}

export default SignupForm; 