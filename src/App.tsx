import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Context
import { OrderContextProvider } from './context/OrderContext';
import { UserContextProvider } from './context/UserContext';
import { AuthContextProvider } from './context/AuthContext';
import { AdminContextProvider } from './context/AdminContext';
 
// Pages
import { Home } from './pages/Home';
import { Cadastro } from './pages/Cadastro';
import { NewOrders } from './pages/Admin/NewOrders';
import { Shipping } from './pages/Admin/Shipping';
import { OrderDetails } from './pages/Admin/OrderDetails';
import { Login } from './pages/Admin/Login';
import { EditarMenu } from './pages/Admin/EditarMenu';
//import { NotFound } from './pages/NotFound';

// Components
import { Container } from './components/Container';

import './styles/global.scss';

export default function App() {
  return (
    <Container classname="responsive">
      <BrowserRouter>
        <Switch>
          <OrderContextProvider>
            <AuthContextProvider>
              <UserContextProvider>
                <AdminContextProvider> 
                  <Route path="/" exact component={ Home } />
                  <Route path="/cadastro" component={ Cadastro } />
                  <Route path="/admin" exact component={ Login }/>
                  <Route path="/admin/shipping" component={ Shipping }/>
                  <Route path="/admin/new-orders" component={ NewOrders }/>
                  <Route path="/admin/order-details/:orderId" component={ OrderDetails }/>
                  <Route path="/admin/edit-menu" component={ EditarMenu }/>
                 {/*  <Route path="*" component={ NotFound }/> */}
                </AdminContextProvider>
              </UserContextProvider>
            </AuthContextProvider>
          </OrderContextProvider>
        </Switch>
      </BrowserRouter>
    </Container>
  );
}