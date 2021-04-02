import React, { useContext, useState } from 'react';
import './Login.css';
import img from '../images/google.png'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from "react-router-dom";
import { userContext } from '../../App';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    //Context provider passing....
    const [loogeduser,setLoogeduser]=useContext(userContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    //login user state....
    const [newuser, setNewuser] = useState(true)
    //button useSate created....
    const [user, setUser] = useState({
        name: '',
        email: '',
        photo: '',
        error: '',
        success: false
    })

    //Input onBlure authentication created....
    const hadleInputBlar = (event) => {
        let mainpassword = true;
        if (event.target.name === 'email') {
            mainpassword = /\S+@\S+\.\S+/.test(event.target.value)
        }
        if (event.target.name === 'password') {
            const validpassConfirm = event.target.value.length > 6;
            const validpassConfirmOneDegit = /\d{1}/.test(event.target.value)

            mainpassword = (validpassConfirm && validpassConfirmOneDegit)
        }

        if (mainpassword) {
            const newUserInfo = { ...user }
            newUserInfo[event.target.name] = event.target.value
            setUser(newUserInfo)

        }
    }

    //From atthentication created...
    const handleSubmit = (e) => {
        if (newuser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const usering = { ...user };
                    usering.error = '';
                    usering.success = true;
                    setUser(usering)

                })
                .catch((error) => {
                    const usering = { ...user };
                    usering.error = error.message;
                    usering.success = false;
                    setUser(usering)
                });
        }

        if (!newuser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const usering = { ...user };
                    usering.error = '';
                    usering.success = true;
                    setUser(usering)
                    console.log(res.user);
                    setLoogeduser(usering)
                    history.replace(from);
                })
                .catch((error) => {
                    const usering = { ...user };
                    usering.error = error.message;
                    usering.success = false;
                    setUser(usering)
                });
        }
        e.preventDefault();
    }

    //Google button authentcation
    const handleButton = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // var credential = result.credential;
                // var token = credential.accessToken;
                // var user = result.user;
                const { displayName, email, photoURL } = result.user;
                const userInformation = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(userInformation)
                setLoogeduser(userInformation)
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }

    return (
        <div >
            <div className="loginInfo">
                <h1>{newuser ? "Create an" : "Login"} account</h1>
                {/* <h1>Email: {user.name}</h1> */}
                {/* <h1>password: {user.password}</h1> 
                <h1>Photo: {user}</h1> */}
                <form onSubmit={handleSubmit}>
                    {newuser && <input type="text" onBlur={hadleInputBlar} name="name" placeholder="Name." />}
                    <br />
                    <input type="text" onBlur={hadleInputBlar} name="email" required placeholder="Email." />
                    <br />
                    <input type="password" onBlur={hadleInputBlar} name="password" required placeholder="Password." />
                    <br />
                    <p style={{ color: 'red' }}>{user.error}</p>
                    {user.success && <p style={{ color: 'green' }}>Account {newuser ? "create" : "logged in"} successfuly...!</p>}
                    <br />
                    <input type="submit" value={newuser ? "submit" : "login"} />
                    <p>Already have an account..? </p> <p onClick={() => setNewuser(!newuser)} style={{ color: '#0000b0', cursor: 'pointer', textDecoration: 'underline' }}>{newuser ? "Login" : "Create an account"}</p>
                </form>
            </div>

            <div className="orSite">
                <p style={{ textAlign: 'center' }}>Or</p>
                {/* <h1>Name: {user.name}</h1>
                <h1>Email: {user.email}</h1>
                <h1>Photo: <img src={user.photo} alt=""/></h1> */}
                <div className="orGoogle">
                    <img src={img} alt="" />
                    <button onClick={() => handleButton()}>Continue with google</button>
                </div>
            </div>

        </div>
    );
};

export default Login;

