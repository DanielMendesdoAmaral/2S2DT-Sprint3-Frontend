import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

//Páginas
import Home from './pages/home';
import Login from "./pages/login";
import Cadastrar from "./pages/cadastrar";
import NaoEncontrada from "./pages/404";

//Estilo bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Para trabalhar com rotas
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const routing = (
  <Router>
    <Switch> {/*Vai escolher.. quando o caminho for /, renderiza a home, quando for /login, renderiza o component login, etc.*/}
      <Route exact path="/" component={Home}/> {/*Tem que por exact por que como todos tem / se não tiver esse exact ele sempre vai pra home*/}
      <Route path="/login" component={Login}/>
      <Route path="/cadastrar" component={Cadastrar}/>
      {/*Se não encontrar, renderiza essa padrão.*/}
      <Route component={NaoEncontrada}/>
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

serviceWorker.unregister();