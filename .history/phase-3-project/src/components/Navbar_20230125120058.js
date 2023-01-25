import React, { useState, useContext } from 'react';
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/user";

function NavBar({ users }) {
    const [userId, setUserId] = useState(0);
    const { user, setUser } = useContext(UserContext);

    const userArray = users.map(u => <option key={ u.id } value={ `${u.id}` }>{ u.email }</option>)

    function handleLogin(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/users/${userId}`)
        .then(resp => resp.json())
        .then(user => setUser(user))
        .catch(e => console.log(e));
    }

    function handleLogout(e) {
        e.preventDefault();
        setUser(null)
    }

    const loginForm = (
        <form className="d-flex" role="search" onSubmit={ handleLogin }>
            <select className="form-select me-2" value={ userId } onChange={(e) => setUserId(e.target.value)} aria-label="Default select example">
                <option value="0" >Who are you?</option>
                { userArray }
            </select>
            { userId == 0 ? <button className="btn btn-success" type="submit" disabled>Login</button> : <button className="btn btn-success" type="submit">Login</button>}
            
        </form>
    )

    const logoutForm = (
        <div className="gap-2 d-sm-flex">
            { user ? <p><b>Logged In:</b> { user.name } </p>: null }
            <form className="d-flex" role="search" onSubmit={ handleLogout }>
                <button className="btn btn-outline-danger" type="submit">Logout</button>
            </form>
        </div>
    )
    

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Crazy for Cereal</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Cereals</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/reviews">Reviews</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/new-review">Review a Cereal</NavLink>
                        </li>
                    </ul>
                    {user ? logoutForm : loginForm }
                </div>
            </div>
        </nav>

    )
}

export default NavBar;