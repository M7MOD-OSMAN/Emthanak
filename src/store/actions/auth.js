import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (username, password) => {
    return dispatch => {

        dispatch(authStart());
        axios.post('https://elshafeay.pythonanywhere.com/api-token-auth/', {
            username: username,
            password: password
        })
        
        .then(res => {
            const token = res.data.token;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))

        })
    }
}

export const authSignup = (username, email, password1, is_teacher,bio) => {
    var avatar ; 
    return dispatch => {
        dispatch(authStart());
        axios.post('https://elshafeay.pythonanywhere.com/api/v2/users/', {
            username: username,
            email: email,
            password: password1,
            first_name:"",
            last_name:"",
            profile: {
                "bio": bio,
                "location": "",
                "career": "",
                "birth_date": null,
                "is_teacher": is_teacher,
                "phone_number": "",
                "avatar": avatar
            },
            finished_exams:[],
        }, {headers: {
            'Content-Type': 'application/json',
        }})
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        
            
        })
        .catch(err => {
            console.log("ERror", err)
            dispatch(authFail(err))

        })

    }
}

  

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date() ) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
            }
        }
    }
}
