import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        const navigationItems = this.props.items.map(item => {
            if (item.url === '/logout') {
                return (
                    <li
                        key={item.id}
                        className='navbar__item'
                        onClick={this.props.onLogout}
                    >
                        <Link to={item.url}>
                            {item.name}
                        </Link>
                    </li>
                );
            }
            return (
                <li
                    key={item.id}
                    className='navbar__item'
                >
                    <Link to={item.url}>
                        {item.name}
                    </Link>
                </li>
            );
        });
        return (
            <nav>
                <ul className='navbar'>
                    {navigationItems}
                </ul>
            </nav>
        );
    }
}

export default NavBar;
