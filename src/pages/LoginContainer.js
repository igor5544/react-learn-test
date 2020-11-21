import { connect } from 'react-redux';
import { compose } from 'redux';
import { login } from '../redux/auth-reducer';
import Login from './Login';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  }
}

const mapDispatchToProps = {
  login,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Login);
