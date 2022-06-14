import logo from './assets/logo.png';
import Clients from './Clients';

export default function Header() {
    return (
        <nav className='navbar bg-light mb-4 p-0'>
        
        <div className='contianer'>
        <a className="navbar-brand" href="/">
        <div className=''>
            <img src={logo} alt="logo" className=""></img>
        </div>
        </a>
            <div><Clients/></div>
        </div>
        </nav>
    )
}
