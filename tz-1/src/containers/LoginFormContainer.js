import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm/LoginForm';
import Profile from '../components/Profile';
import { login } from '../actions/userActions';

class LoginFormContainer extends React.Component {
    render() {
        console.log('props: ', this.props);
        if (this.props.isLoggedIn) {
            return <Profile/>;
        } else {
            return (
                <LoginForm
                    onFormSubmit={this.props.onFormSubmit}
                />
                );
        }
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
};

const mapDispatchToProps = dispatch => ({
    onFormSubmit: (user, password) => {
        dispatch(login(user, password));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginFormContainer);
