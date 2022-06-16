import React from 'react';
import logo from './assets/logo4.png';

export default function Header() {
    return (
        <React.Fragment>
            <nav className='navbar bg-light mb-4 p-2'>
                <a className="navbar-brand" href="/">
                    <div className='d-flex bold'>
                        <img src={logo} alt="logo" className="mr-2"></img>
                        Project Management
                        </div>
                </a>
            </nav>
            <div className='contianer p-4'> <div></div></div>
        </React.Fragment>
    )
}
