/*import React from 'react';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import MaterialAppBar from '@material-ui/core/AppBar';
import MaterialToolbar from '@material-ui/core/Toolbar';
import { styled } from '@material-ui/core/styles';

const MyToolbar = styled(MaterialToolbar)({
  justifyContent: 'space-between',
  backgroundColor: 'green',
});

const AppBar = ({ isAuthenticated }) => (
  <MaterialAppBar>
    <MyToolbar>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </MyToolbar>
  </MaterialAppBar>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);*/

import React from 'react';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import MaterialAppBar from '@material-ui/core/AppBar';
import MaterialToolbar from '@material-ui/core/Toolbar';
import { styled } from '@material-ui/core/styles';

export default function AppBar() {
  const MyToolbar = styled(MaterialToolbar)({
  justifyContent: 'space-between',
  backgroundColor: 'green',
  });
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <MaterialAppBar>
    <MyToolbar>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </MyToolbar>
  </MaterialAppBar>
  );
}