
function Layout() {
    return (
        <div>
        <div>
            <Header/>
        </div>
        <div>
            <h1>Please log in!</h1>
             <form action="" className="login-form">
                <label htmlFor="username">Username</label>
                <input type="text" />
                <label htmlFor="password">Password</label>
                <input type="password" />
                <button>Log in</button>
            </form>
        </div>
        </div>
    )
}

export default Layout