import UsersBar from './UsersBar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    topFriends: state.navbar.topFriends,
  }
}

const UsersBarContainer = connect(mapStateToProps)(UsersBar);


export default UsersBarContainer;