import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/auth-reducer';
import Header from './Header';

class HeaderAPIComponent extends React.Component {
  render() {
    return (
      <Header {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  }
}

const mapDispatchToProps = {
  logout
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIComponent)

export default HeaderContainer;