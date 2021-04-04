/*import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './RegisterView.module.css';

import MaterialButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';
import notification from '../../components/notification';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  isNotValid = ({ email, password, name }) => {
    if (email === '' || password === '' || name === '') {
      return true;
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.isNotValid(this.state)) {
      notification('Please fill out all required fields');
      return;
    }

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    const MyButton = styled(MaterialButton)({
      width: 'fit-content',
      backgroundColor: 'palegoldenrod',
      color: 'olive',
    });

    return (
      <div>
        <h1 className={styles.header}>Сторінка для реєстрації</h1>

        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <TextField
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            label="Ім'я"
          />

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

          <MyButton type="submit">Зареєструватися</MyButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);*/

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from './RegisterView.module.css';

import MaterialButton from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';
//import notification from '../../components/notification';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateName = evt => {
    setName(evt.target.value);
  };
  const updateEmail = evt => {
    setEmail(evt.target.value);
  };
  const updatePassword = evt => {
    setPassword(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(authOperations.register);
    setName('');
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
        <h1 className={styles.header}>Сторінка для реєстрації</h1>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <TextField
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={updateName}
            label="Ім'я"
          />

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

          <MyButton type="submit">Зареєструватися</MyButton>
        </form>
      </div>
    );
  }