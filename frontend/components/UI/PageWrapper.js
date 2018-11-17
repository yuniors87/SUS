import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;
const Title = styled.h2`
  font-size: 2rem;
  margin: 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme.black};
`;

export default class PageWrapper extends Component {
  render() {
    const { children, title } = this.props;
    return (
      <div>
        <Title>{title}</Title>
        <Wrapper> {children}</Wrapper>
      </div>
    );
  }
}
PageWrapper.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
