import "./App.css";
import ContactCard from "./Components/ContactCard/ContactCard";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Switch } from "react-router";
import Home from "./Pages/Home/Home";
import ContactList from "./Pages/ContactList/ContactList";
import ErrorPage from "./Pages/Error/Error";
import AddContact from "./Pages/AddContact/AddContact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacts" component={ContactList} />
        <Route path={["/add", "/edit/:id"]} component={AddContact} />
        <Route path="/*" component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
