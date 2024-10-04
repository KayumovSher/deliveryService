import axios from 'axios';
import swal from "sweetalert";
import {
    loginConfirmedAction,
    Logout,
} from '../store/actions/AuthActions';

export function signUp(username, password) {
    //axios call
    const postData = {
        username,
        password,
        returnSecureToken: true,
    };
}

export function login(username, password) {
    const postData = {
        username,
        password,
        returnSecureToken: true,
    };
    return axios.post(
        `https://280e-84-54-76-83.ngrok-free.app/api/v1/auth/superusers/sign_in/`,
        postData,
    );
}

export function formatError(errorResponse) {
    if (!errorResponse || !errorResponse.error) {
        swal("Oops", "An unexpected error occurred", "error");
        return; // Early return to prevent further execution
    }

    switch (errorResponse.error.message) {
        case 'USERNAME_EXISTS':
            swal("Oops", "Username already exists", "error");
            break;
        case 'USERNAME_NOT_FOUND':
            swal("Oops", "Username not found", "error", { button: "Try Again!" });
            break;
        case 'INVALID_PASSWORD':
            swal("Oops", "Invalid Password", "error", { button: "Try Again!" });
            break;
        case 'USER_DISABLED':
            swal("Oops", "User Disabled", "error");
            break;
        default:
            swal("Oops", "An unknown error occurred", "error");
            break;
    }
}


export function saveTokenInLocalStorage(tokenDetails) {
    tokenDetails.expireDate = new Date(
        new Date().getTime() + tokenDetails.expiresIn * 1000,
    );
    localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
}

export function runLogoutTimer(dispatch, timer, navigate) {
    setTimeout(() => {
        //dispatch(Logout(history));
        dispatch(Logout(navigate));
    }, timer);
}

export function checkAutoLogin(dispatch, navigate) {
    const tokenDetailsString = localStorage.getItem('userDetails');
    let tokenDetails = '';
    if (!tokenDetailsString) {
        dispatch(Logout(navigate));
		return;
    }

    tokenDetails = JSON.parse(tokenDetailsString);
    let expireDate = new Date(tokenDetails.expireDate);
    let todaysDate = new Date();

    if (todaysDate > expireDate) {
        dispatch(Logout(navigate));
        return;
    }
		
    dispatch(loginConfirmedAction(tokenDetails));
	
    const timer = expireDate.getTime() - todaysDate.getTime();
    runLogoutTimer(dispatch, timer, navigate);
}
export function isLogin() {
    const tokenDetailsString = localStorage.getItem('userDetails');

    if (tokenDetailsString) {
        return true;
    }else{
        return false;
    }
}