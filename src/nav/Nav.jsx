import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import NavItems from './Navigations.json';
import { FaBars } from 'react-icons/fa';

function Nav() {
    const [scroll, setScroll] = useState( false );
    const changeNavBg = () => {
        if ( window.scrollY >= 80 ) {
            setScroll( true );
        }
        else {
            setScroll( false );
        }
    }
    window.addEventListener( 'scroll', changeNavBg );
    const [mobileNav, setMobileNav] = useState( false );
    return (
        <div className={scroll ? 'navbar active' : "navbar"} >
            <div className="container mx-auto md:p-4">
                <div className="md:flex justify-between items-center">
                    <div className='flex items-center space-x-2 p-4 md:p-0'>
                        <FaBars className='bars' onClick={() => { setMobileNav( !mobileNav ) }} />
                        <h2 style={{ color: '#006699' }}><Link to='/'>Smaterr</Link></h2>
                    </div>
                    {/* nav items start */}
                    <div className={mobileNav ? 'navs active' : 'navs'}>
                        {NavItems.map( item => (
                            <li key={NavItems.indexOf( item )} className="nav-items">
                                {item.to === '/login' ? <a rel="noopener noreferrer" href="https://smaterr.com/LOGIN%20PAGES/index.html" target="_blank">Login </a> :
                                    <Link to={item.to} >{item.title}</Link>}
                            </li>
                        )
                        )}
                    </div>
                    {/* nav items ends  */}
                </div>
            </div>
        </ div>
    )
}

export default Nav
