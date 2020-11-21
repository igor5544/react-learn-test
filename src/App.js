import React from 'react';
import './App.css';
import store from './redux/redux-store';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Main from './components/Main';
import HeaderContainer from './components/HeaderContainer';
import Preloader from './components/Preloader';

class App extends React.Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert(reason)
  }

  componentDidMount() {
    this.props.initializeApp();

    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {
    return (
      this.props.initialized ?
        <div className="app-wrapper">
          <HeaderContainer />
          <Main />
        </div > :
        <Preloader />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}

const mapDispatchToProps = {
  initializeApp
}

const AppContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(App);

const MainApp = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default MainApp;