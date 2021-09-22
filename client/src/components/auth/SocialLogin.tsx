import React from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login-lite';
import {
  FacebookLogin,
  FacebookLoginAuthResponse,
} from 'react-facebook-login-lite';
import { facebookLogin, googleLogin } from '../../redux/actions/authAction';

const SocialLogin = () => {
  const dispatch = useDispatch();

  const onFBSuccess = (response: FacebookLoginAuthResponse) => {
    const { accessToken, userID } = response.authResponse;
    dispatch(facebookLogin(accessToken, userID));
  };

  const onSuccess = (googleUser: GoogleLoginResponse) => {
    const id_token = googleUser.getAuthResponse().id_token;
    dispatch(googleLogin(id_token));
  };

  return (
    <>
      <div className="my-2">
        <GoogleLogin
          client_id="785240130468-bkbdl5lk4sbos6af5rcktcgk2tc930dm.apps.googleusercontent.com"
          cookiepolicy="single_host_origin"
          onSuccess={onSuccess}
        />
      </div>

      <div className="my-2">
        <FacebookLogin appId="289445412656288" onSuccess={onFBSuccess} />
      </div>
    </>
  );
};

export default SocialLogin;
