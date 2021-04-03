/*import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './LoginView.module.css';

import MaterialButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';
import notification from '../../components/notification';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  isNotValid = ({ email, password }) => {
    if (email === '' || password === '') {
      return true;
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.isNotValid(this.state)) {
      notification('Please fill out all required fields');
      return;
    }

    this.props.onLogin(this.state);

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    const MyButton = styled(MaterialButton)({
      width: 'fit-content',
      backgroundColor: 'palegoldenrod',
      color: 'olive',
    });

    return (
      <div>
        <h1 className={styles.header}>Сторінка для входу</h1>

        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <TextField
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Пошта"
          />

          <TextField
            className={styles.input}
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Пароль"
          />

          <MyButton type="submit">Вхід</MyButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);*/


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './LoginView.module.css';
import MaterialButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';
//import notification from '../../components/notification';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateEmail = evt => {
    setEmail(evt.target.value);
  };
  const updatePassword = evt => {
    setPassword(evt.target.value);
  };

  /*const isNotValid = ({ email, password }) => {
    if (email === '' || password === '') {
      return true;
    }
  };*/

  const handleSubmit = e => {
    e.preventDefault();
    /*if (isNotValid()) {
      notification('Please fill out all required fields');
      return;
    }*/
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  const MyButton = styled(MaterialButton)({
      width: 'fit-content',
      backgroundColor: 'palegoldenrod',
      color: 'olive',
    });

  return (
      <div>
        <h1 className={styles.header}>Сторінка для входу</h1>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <TextField
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={updateEmail}
            label="Пошта"
          />

          <TextField
            className={styles.input}
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={updatePassword}
            label="Пароль"
          />

          <MyButton type="submit">Вхід</MyButton>
        </form>
      </div>
    );
  }