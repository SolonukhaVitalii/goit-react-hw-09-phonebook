/*import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import MyNavLink from '../MyNavLink';
import styles from './Navigation.module.css';

import MaterialButton from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

const MyButton = styled(MaterialButton)({
  padding: '0',
});

const Navigation = ({ isAuthenticated }) => (
  <nav>
    {isAuthenticated && (
      <MyButton className={styles.btn}>
        <MyNavLink to="/contacts" exact>
          Контакти
        </MyNavLink>
      </MyButton>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);*/


import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import MyNavLink from '../MyNavLink';
import styles from './Navigation.module.css';
import MaterialButton from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

const MyButton = styled(MaterialButton)({
  padding: '0',
});

function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
  <nav>
    {isAuthenticated && (
      <MyButton className={styles.btn}>
        <MyNavLink to="/contacts" exact>
          Контакти
        </MyNavLink>
      </MyButton>
    )}
  </nav>
  );
}

export default React.memo(Navigation);


