import React from 'react';
import { connect } from 'react-redux';
import { navBarItems } from '../config';
import NavBar from "../components/NavBar/NavBar";
import { logout } from "../actions/userActions";

class NavBarContainer extends React.Component {
    render() {
        const isLoggedIn = this.props.isLoggedIn;
        const userNavigationItem = {
            id: navBarItems.length + 1,
            name: isLoggedIn? 'Выход' : 'Войти',
            url: isLoggedIn ? '/logout' : '/login'
        };
        const navigationItems = [...navBarItems, userNavigationItem];
        return (
            <NavBar
                items={navigationItems}
                onLogout={this.props.onLogout}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
};

const mapDispatchToProps = dispatch => ({
    onLogout: () => {
        dispatch(logout());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBarContainer);
