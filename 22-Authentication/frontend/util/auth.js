import {redirect} from 'react-router-dom';

export function getTokenDuration() {
    const storedExpirationDate = localStorage.getItem('expiration'); //first store the expiration date
    const expirationDate = new Date(storedExpirationDate); //transform it to date object
    const now = new Date(); //get the current date/timestamp
    const duration = expirationDate.getTime() - now.getTime(); //get the remaining duration in miliseconds .getTime()
    return duration;
}

export function getAuthToken() {
    const token = localStorage.getItem('token');

    if(!token) {
        return null; //should be null not undefined, bcs the loader wont return that value to the components
    }

    const tokenDuration = getTokenDuration();

    if(tokenDuration < 0) { //the token is expired, no remaining time
        return 'EXPIRED';
    };
}

export function tokenLoader() {
    return getAuthToken();
}

export function checkAuthLoader() {
    const token = getAuthToken();

    if(!token) {
        return redirect('/auth');
    }

    return null;
}