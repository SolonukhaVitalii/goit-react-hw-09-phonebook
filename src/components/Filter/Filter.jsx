/*import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

import TextField from '@material-ui/core/TextField';

class Filter extends Component {
  componentWillUnmount() {
    this.props.resetFilter();
  }

  render() {
    const { filter, onChange } = this.props;

    return (
      <TextField
        className={styles.input}
        type="text"
        value={filter}
        onChange={onChange}
        label="Find contacts by name"
        size="small"
        variant="outlined"
      />
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  resetFilter: PropTypes.func.isRequired,
};

export default Filter;*/

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import styles from './Filter.module.css';
import TextField from '@material-ui/core/TextField';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);
  const onChange = dispatch(contactsActions.changeFilter());
  useEffect(() => {
    dispatch(contactsActions.resetFilter());
  }, [dispatch]);

  return (
      <TextField
        className={styles.input}
        type="text"
        value={filter}
        onChange={onChange}
        label="Find contacts by name"
        size="small"
        variant="outlined"
      />
    );
}