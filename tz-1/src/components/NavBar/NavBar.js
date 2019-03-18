import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <ul className='navbar'>
                    {this.props.items.map(item => (
                        <li key={item.id} className='navbar__item'>
                            <Link to={item.url}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default NavBar;
