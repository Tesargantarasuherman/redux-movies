import React, { Component } from 'react';

class GoogleAuth extends Component {
    state = {isSignedIn:null};

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'151359949476-nj34bqhek0sdmoher49c0h9fhtgneu2l.apps.googleusercontent.com',
                scope:'email',
                plugin_name:'ReduxStream'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn:this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
    }
    onAuthChange =()=>{
        this.setState({isSignedIn:this.auth.isSignedIn.get()})
    }
    onSignIn =()=>{
        this.auth.signIn();
    }

    onSignOut =()=>{
        this.auth.signOut();
    }
    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return null;
        }
        else if(this.state.isSignedIn){
            return(
                 <button className="btn btn-danger btn-sm" onClick={this.onSignOut}> Sign Out</button>
            );
        }
        else{
            return (
                 <button className="btn btn-primary btn-sm" onClick={this.onSignIn}> Sign In </button>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

export default GoogleAuth;