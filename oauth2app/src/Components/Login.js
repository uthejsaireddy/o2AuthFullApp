import React, { useEffect, useState } from 'react'

import { InputText } from 'primereact/inputtext';

import { Button } from 'primereact/button';
// import { LoginSocialFacebook } from 'reactjs-social-login'
import { Password } from 'primereact/password';
// import { FacebookLoginButton } from "react-social-login-buttons"
// import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";


// import { FcGoogle } from "react-icons/fc";

const clientId = "298042676034-6rdo23c5cpsk96l2vs1k4u3q22s2kbnc.apps.googleusercontent.com";

function Login() {

    const navigate = useNavigate();

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        }
        gapi.load('client:auth2', start);
    })

    const initialValue = {
        "username": "",
        "password": ""
    }

    const [formData, setFormData] = useState(initialValue);


    // const onSuccess = (resp) => {
    //     console.log(onSuccess)

    // }

    // const onFailure = (resp) => {
    //     console.log(resp);
    // }

    return (
        <div>

            <div className="card flex justify-content-center">
                <div className="flex flex-column gap-2">
                    <label htmlFor="username" className='textAlignLeft'>User Name</label>
                    <InputText id="username" value={formData.username} aria-describedby="username-help"
                        onChange={(e) => {
                            setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
                        }}
                    />
                    <small id="username-help">
                        Enter your username .
                    </small>

                    <label htmlFor="password" className='textAlignLeft'>Password</label>

                    <Password id="password" value={formData.password} onChange={(e) => {
                        setFormData(prev => ({ ...prev, ["password"]: e.target.value }))

                    }} feedback={false} />

                    <small id="password-help">
                        Enter your Password .
                    </small>

                    <Button label="Login" text raised />

                    <Button
                        onClick={()=>{
                            console.log("clicked");
                            window.location.replace('http://localhost:8080');
                            // navigate('http://localhost:8080');
                        }}
                        icon="pi pi-google"
                        label='Google'
                        severity="help" rounded text raised aria-label="Google" />

                    {/* <Button text raised ><FcGoogle /><label >Login</label></Button> */}


                    {/* <Button label="Create New Account" severity="secondary" text raised /> */}

                    {/* <LoginSocialFacebook 
                        appId='646865110652161'
                        onResolve={(resp)=>{
                            console.log(resp)
                        }}
                        onReject={(err)=>{
                            console.log(err);
                        }}
                    >
                        <FacebookLoginButton/>
                    </LoginSocialFacebook > */}

                    {/* <GoogleLogin
                        clientId={clientId}
                        buttonText="Login"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy='single_host_origin'
                        isSignedIn={true}
                    /> */}

                </div>


            </div>
            {/* <div className="mt2 card flex justify-content-center">
                <InputText id="username" value={formData.username} onChange={(e) => {
                    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
                }} />
            </div>
            <div className="mt2 card flex justify-content-center">
                <InputText id="username" value={formData.username} onChange={(e) => {
                    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
                }} />
            </div> */}
        </div>
    )
}

export default Login