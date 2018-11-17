import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';
import styled from 'styled-components';
import PageWrapper from '../UI/PageWrapper';
import Client from './Client';

const ALL_CLIENTS_QUERY = gql`
  query ALL_CLIENTS_QUERY {
    clients {
      id
      name
      shortName
      state
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const StyledClient = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

class Clients extends Component {
  render() {
    return (
      <PageWrapper title="Clientes registrados">
        <Center>
          <Link href="client">
            <a>Nuevo</a>
          </Link>
          <Query query={ALL_CLIENTS_QUERY}>
            {({ data, error, loading }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error: {error.message}</p>;
              return (
                <StyledClient>
                  {data.clients.map(client => (
                    <Client client={client} key={client.id} />
                  ))}
                </StyledClient>
              );
            }}
          </Query>
        </Center>
      </PageWrapper>
    );
  }
}
export default Clients;
export { ALL_CLIENTS_QUERY };
