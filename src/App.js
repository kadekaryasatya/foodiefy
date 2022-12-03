import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUserLogged, putAccessToken } from './utils/api';

import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import Navbar from './components/layout/Navbar';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import About from './pages/About';
import MyRecipes from './pages/MyRecipes';
import NotFound from './pages/NotFound';
import MyRecipesDetail from './pages/MyRecipesDetail';
import ColorBlur from './components/colorBlur/ColorBlur';
import Detail from './pages/RecipesDetail';
import Footer from './components/layout/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
    };
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });
    putAccessToken('');
  }

  render() {
    if (this.state.initializing) {
      return null;
    }
    if (this.state.authedUser === null) {
      return (
        <div>
          <Navbar />
          <main>
            <Routes>
              <Route path='/*' element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
              <Route path='/' element={<HomePage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/about' element={<About />} />
              <Route path='/recipe/:id' element={<Detail />} />
            </Routes>
          </main>
        </div>
      );
    }

    return (
      <div>
        <ColorBlur />
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/myrecipes' element={<MyRecipes />} />
          <Route path='/add' element={<AddPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/notes/:id' element={<MyRecipesDetail />} />
          <Route path='/recipe/:id' element={<Detail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
