import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header';
import Meta from './Meta';

const theme = {
  red: '#fc493e',
  yellow: '#ffbf25',
  black: '#272b3a',
  blacklight: '#757575',
  maxWidth: '1200px',
  active: '#a5d6a7',
  inactive: '#ef5350',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;
const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 1rem;
`;

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'radnika_next';
  src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
  font-style: normal;
  font-weight: normal;
}
  html {
     box-sizing: border-box;
     font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a{
    text-decoration: none;
    color: ${theme.black};
  }
`;
class Page extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <GlobalStyle />
          <Meta />
          <Header />
          <Inner>{children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
Page.propTypes = {
  children: PropTypes.element.isRequired,
};
