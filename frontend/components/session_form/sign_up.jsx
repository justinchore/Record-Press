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

    handleSubmit() {
        this.props.processForm(this.state); 
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
                artistName: <div><label>Artist/Band name
                    <input
                        type="text"
                        value={this.state.artistName}
                        onChange={this.update('artistName')}
                    >
                    </input>
                </label><br></br><br></br></div>, 
                genre: <div><label>Genre
                    <input
                        type="text"
                        value={this.state.genre}
                        onChange={this.update('genre')}
                    >
                    </input>
                </label><br></br><br></br></div>, 
                location: <div><label>Location
                    <input
                        type="text"
                        value={this.state.location}
                        onChange={this.update('location')}
                    >
                    </input>
                </label><br></br><br></br></div>,
            }
            changeForm = {
                text: <h4>Are you a fan? Sign up <a href="#/signup" onClick={this.toggleIsArtist('is_artist')}> here.</a></h4>
            }
            formHeader = { text: <h2>Sign up for an Artist Account</h2> }
        } else {
            changeForm = {
                text: <h4>Are you an artist? Sign up <a href="#/signup" onClick={this.toggleIsArtist('is_artist')}> here.</a></h4>
            }; 
            formHeader = {text:<h2>Sign up for a Fan Account</h2>}
        }

        return (
        <div>
            <h1>Bandcamp</h1>
            <h2>Sign up for {this.props.formType} account</h2>
               { changeForm.text }
            <form onSubmit = {this.handleSubmit}>
                    <div>{artistFields.artistName}</div>
                    <div>{artistFields.genre}</div>
                    <div>{artistFields.location}</div>
                <label>Email address 
                    <input 
                    type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    >
                    </input>
                </label>
                <br></br>
                <br></br>
                <label>Password 
                    <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    >
                    </input>
                </label>
                <br></br>
                <br></br>
                <label>Username 
                    <input
                    type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    >
                    </input>
                </label>
                <br></br>
                <input type="submit" value="Submit"></input>
            </form>
               <p>Already have an account? { this.props.navLink }</p>
        </div>
        )
    }
}

export default SignupForm; 