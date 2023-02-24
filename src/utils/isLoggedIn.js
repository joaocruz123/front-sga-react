const isLoggedIn = () => {
    const item = localStorage.getItem('auth')
    var auth = JSON.parse(item);

    if (auth && auth.auth && auth.auth.accessToken) {
        return true;
    }

    return false;
}

export default isLoggedIn;