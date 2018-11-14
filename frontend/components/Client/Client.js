import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

const StyledClient = styled.div.attrs({
  colorstate: props =>
    props.state === 1 ? props.theme.active : props.theme.inactive,
})`
  border: 1px ${props => props.theme.blak} solid;
  border-bottom: 5px black solid;
  border-bottom-color: ${props => props.colorstate};
  border-radius: 10px;
  cursor: pointer;
`;
const Content = styled.a`
  display: flex;
  flex-direction: column;
`;

const ShortName = styled.span`
  font-size: 1.5rem;
`;
const Name = styled.span`
  font-size: 1.1rem;
  color: ${props => props.theme.blacklight};
`;

export default class Client extends Component {
  static propTypes = {
    client: PropTypes.shape({
      name: PropTypes.string.isRequired,
      shortName: PropTypes.string.isRequired,
      state: PropTypes.number.isRequired,
    }),
  };

  render() {
    const { client } = this.props;
    return (
      <StyledClient state={client.state}>
        <Link
          href={{
            pathname: '/client',
            query: { id: client.id },
          }}
        >
          <Content>
            <ShortName>{client.shortName}</ShortName>
            <Name>{client.name}</Name>
          </Content>
        </Link>
      </StyledClient>
    );
  }
}
