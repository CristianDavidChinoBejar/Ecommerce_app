import { Link } from 'react-router-dom';
import { Header, Logo, NavLinks, NavList } from './Nav.styled';
import './_navList.scss';

const Nav = () => {
  return (
    <Header>
      <NavLinks>
          <Logo className='logo'>
              <a href='/'>Mi tienda</a>
          </Logo>

          <NavLinks>
              <NavList><Link className='li-styled' to="/productlist">Productos añadidos al carrito de compras</Link></NavList>
              <NavList><Link className='li-styled' to="/ayuda">Ayuda</Link></NavList>
          </NavLinks>

          <NavLinks>
              <NavList><Link className='li-styled' to="/carrito">Carrito🛒0</Link></NavList>
              <NavList><Link className='li-styled' to="/cuenta">👤</Link></NavList>
          </NavLinks>
      </NavLinks>
    </Header>
  )
}

export default Nav