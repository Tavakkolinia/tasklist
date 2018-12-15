import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import TaskList from './components/TaskList';
import ItemModal from './components/itemModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <TaskList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
