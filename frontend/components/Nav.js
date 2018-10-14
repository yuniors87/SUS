import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="clients">
      <a>Clientes</a>
    </Link>
    <Link href="soportes">
      <a>Soportes</a>
    </Link>
    <Link href="notas">
      <a>Notas</a>
    </Link>
    <Link href="me">
      <a>Contact</a>
    </Link>
  </NavStyles>
);

export default Nav;
