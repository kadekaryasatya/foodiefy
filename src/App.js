import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
    };
  }
  render() {
    if (this.state.authedUser === null) {
      return (
        <div className='contact-app'>
          <header className='contact-app__header'>
            <h1>Aplikasi Kontak</h1>
          </header>
          <main>
            <Routes>
              <Route path='/*' element={<p>Halaman Login</p>} />
              <Route path='/register' element={<p>Halaman Register</p>} />
            </Routes>
          </main>
        </div>
      );
    }

    return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add' element={<AddPage />} />
      </Routes>
    );
  }
}

export default App;
