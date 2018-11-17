import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  margin: 0;
  position: relative;
  z-index: 2;
  background: ${props => props.theme.red};
  display: flex;
  align-items: center;
  a {
    padding: 0.5rem 1rem;
    padding-left: 2rem;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    padding: 0.5rem;
    margin: 0;
    text-align: center;
    line-height: 1.2;
  }
`;
const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.yellow};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Support System</a>
        </Link>
      </Logo>
      <Nav />
    </div>
  </StyledHeader>
);

export default Header;
