function auth(login, password) {
    return login === 'Admin' && password === '12345';
}

export { auth };
