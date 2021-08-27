import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Context
import { MenuContextProvider } from './context/MenuContext';
import { AuthContextProvider } from './context/AuthContext';
 
// Sub Routes
import { AdminRouter } from './pages/Admin/AdminRouter';
import { Cadastro } from './pages/Client/Cadastro';
import { Home } from './pages/Client/Home';
import { Main } from './components/Main';
import { Header } from './components/Header';
/* import { NotFound } from './pages/NotFound'; */

import './styles/global.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthContextProvider>
          <MenuContextProvider>
            <Main>
              <Header />
              <Route path="/" exact component={ Home }/>
              <Route path="/cadastro" exact component={ Cadastro }/>
              <Route path="/admin" component={ AdminRouter }/>
              {/* <Route path="*" component={ NotFound }/> */}
            </Main>
          </MenuContextProvider>
        </AuthContextProvider>
      </Switch>
    </BrowserRouter>
  );
}