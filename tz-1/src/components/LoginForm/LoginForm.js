import React from 'react';
import './LoginForm.css';

class LoginForm extends React.Component {
    render() {
        return (
            <form className='form'>
                <div className='form__row'>
                    <label htmlFor="user">Логин</label>
                    <input type='text' name='user' />
                </div>
                <div className='form__row'>
                    <label htmlFor="password">Пароль</label>
                    <input type='password' name='password' />
                </div>
                <div className='form__row'>
                    <button type='submit' className='form__button'>Войти</button>
                </div>
            </form>
        );
    }
}

export default LoginForm;
