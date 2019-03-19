import React from 'react';
import './LoginForm.css';

class LoginForm extends React.Component {
    state = {
        user: '',
        password: '',
        errors: {
            user: '',
            password: ''
        }
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.user, this.state.password);
        this.clearForm();
    };

    clearForm = () => {
        this.setState({
            user: '',
            password: '',
        });
    };

    handleBlur = event => {
        const value = event.currentTarget.value;
        const fieldName = event.currentTarget.name;
        const errorMsg = !value.length ? 'Поле не может быть пустым' : '';
        this.setState({errors: {
            ...this.state.errors,
            [fieldName]: errorMsg
        }});
    };

    handleUsernameChange = event => {
        this.setState({ user: event.currentTarget.value });
    };

    handlePasswordChange = event => {
        this.setState({ password: event.currentTarget.value });
    };

    render() {
        const { user, password, errors } = this.state;
        const isFormValid = user.length && password.length;
        return (
            <form className='form' method='post' onSubmit={this.handleSubmit}>
                <div className='form__row'>
                    <label htmlFor="user">Логин</label>
                    <input
                        type='text'
                        name='user'
                        className={errors.user ? 'invalid': null}
                        value={this.state.user}
                        onBlur={this.handleBlur}
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <div className='form__row'>
                    <label htmlFor="password">Пароль</label>
                    <input
                        type='password'
                        name='password'
                        className={errors.password ? 'invalid': null}
                        value={this.state.password}
                        onBlur={this.handleBlur}
                        onChange={this.handlePasswordChange}
                    />
                </div>
                <div className='form__row'>
                    <button
                        type='submit'
                        className='form__button'
                        disabled={!isFormValid}
                    >
                        Войти
                    </button>
                </div>
            </form>
        );
    }
}

export default LoginForm;
