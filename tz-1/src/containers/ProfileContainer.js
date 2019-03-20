import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Profile from '../components/Profile';

class ProfileContainer extends React.Component {
    render() {
        if (this.props.isLoggedIn) {
            return (
                <Profile />
            );
        }
        return (
            <div>
                <span>Необходимо сначала <Link to='/login'>авторизоваться</Link></span>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
};

export default connect(
    mapStateToProps
)(ProfileContainer);
