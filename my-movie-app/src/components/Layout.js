import React from 'react';
import {NavLink} from "react-router-dom";

const Layout = ({children}) => {


    return (
        <>
            <nav className="navbar has-shadow is-spaced">
                <div className="container">
                    <div className="navbar-brand">

                        <NavLink to={"/"} exact activeClassName={"is-active"}>
                            <h2 className="navbar-item title is-4">Wyszukiwarka</h2>
                        </NavLink>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <NavLink to="/watched" className="navbar-item" activeClassName="is-active">
                                <span className="icon has-text-primary">
                                    <i className="fas fa-folder"/>
                                </span>
                                <span>Obejrzane</span>
                            </NavLink>
                            <NavLink to="/viewing" className="navbar-item" activeClassName="is-active">
                                <span className="icon has-text-danger">
                                    <i className="fas fa-pizza-slice"/>
                                </span>
                                <span>Do obejrzenia</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            {children}
        </>
    );
};

export default Layout;