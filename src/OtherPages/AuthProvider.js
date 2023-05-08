export default {
    // called when the user attempts to log in
    login: async ({username, password}) => {
        await fetch(
            'http://localhost:7166/api/login',
             {
                method: 'POST',
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email: username, password, role: 'admin'})
             }
             )
             .then((response) => response.json())
             .then((data) => {
                console.log('data.token', data.token)
                localStorage.setItem('admin-token', data.token)
                setTimeout(() => {
                    window.location.href = 'http://localhost:3000/#/User'
                }, 100)
             })
        return Promise.resolve();
        
        // accept all email/password combinations
        
    },
    // called when the user clicks on the logout button
    logout: () => {
        console.log('oiut')
        localStorage.removeItem('admin-token');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            console.log('err')
            // localStorage.removeItem('admin-token');
            // window.location.href = 'http://localhost:3000/#/login'
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('admin-token')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => {
        return localStorage.getItem('admin-token')
            ? Promise.resolve()
            : Promise.reject();
    },
};