import React from "react";
import { Route, Routes } from "react-router-dom";
import { getUserLogged, putAccessToken } from "./utils/api";
import Navbar from "./components/layout/Navbar";
import ColorBlur from "./components/colorBlur/ColorBlur";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//Pages
import About from "./pages/About";
import MyRecipes from "./pages/MyRecipes";
import NotFound from "./pages/NotFound";
import MyRecipesDetail from "./pages/MyRecipesDetail";
import Detail from "./pages/RecipesDetail";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AddPage from "./pages/AddPage";
import RegisterPage from "./pages/RegisterPage";
import Explore from "./pages/ExplorePage";
import Cuisine from "./components/explore/Cuisine";
import Searched from "./pages/Searched";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      swal: withReactContent(Swal),
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

  onLogout(event) {
    event.preventDefault();
    this.state.swal
      .fire({
        title: <strong>Logout</strong>,
        html: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout!",
      })
      .then((res) => {
        if (res.isConfirmed) {
          putAccessToken("");
          event.preventDefault();
          this.setState(() => {
            return {
              authedUser: null,
            };
          });
        }
      });
  }

  render() {
    if (this.state.initializing) {
      return null;
    }
    if (this.state.authedUser === null) {
      return (
        <div>
          <ColorBlur />
          <Navbar />
          <main>
            <Routes>
              <Route
                path="/*"
                element={<LoginPage loginSuccess={this.onLoginSuccess} />}
              />
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/about" element={<About />} />
              <Route path="/recipe/:id" element={<Detail />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/cuisines/:type" element={<Cuisine />} />
              <Route path="/searched/:search" element={<Searched />} />
            </Routes>
          </main>
        </div>
      );
    }

    return (
      <div>
        <ColorBlur />
        <Navbar logout={this.onLogout} name={this.state.authedUser.name} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/myrecipes" element={<MyRecipes />} />
            <Route path="/notes/:id" element={<MyRecipesDetail />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipe/:id" element={<Detail />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/cuisines/:type" element={<Cuisine />} />
            <Route path="/searched/:search" element={<Searched />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
