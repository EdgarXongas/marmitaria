// Components
import { Basket } from '../../components/Basket';
import { Menu } from './Menu';
//Hooks
import { useOrder } from '../../hooks/useOrder';
import { Container } from '../../components/Container';

export function Home(){
  const { menu } = useOrder();

  return(
    <Container classname="main">
      <Menu menu={menu}/>
      <Basket />
    </Container>
  )
}
 /* <Container>
        <Menu menu={menu}/>
      </Container>
      <Basket /> */