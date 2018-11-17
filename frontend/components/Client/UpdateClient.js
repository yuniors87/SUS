import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Form from '../styles/Form';
import PageWrapper from '../UI/PageWrapper';
import Error from '../ErrorMessage';

const SINGLE_CLIENT_QUERY = gql`
  query SINGLE_CLIENT_QUERY($id: ID!) {
    client(where: { id: $id }) {
      id
      name
      shortName
      state
    }
  }
`;

const UPDATE_CLIENT_MUTATION = gql`
  mutation UPDATE_CLIENT_MUTATION(
    $id: ID!
    $name: String
    $shortName: String
    $state: Int
  ) {
    updateClient(id: $id, name: $name, shortName: $shortName, state: $state) {
      id
      name
      shortName
      state
    }
  }
`;
class UpdateClient extends Component {
  state = {};

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'select-one' ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  updateClient = async (e, updateClientMutation) => {
    e.preventDefault();
    const { id } = this.props;
    const res = await updateClientMutation({
      variables: {
        id,
        ...this.state,
      },
    });
  };

  render() {
    const { name, shortName, state } = this.state;
    const { id } = this.props;
    return (
      <Query query={SINGLE_CLIENT_QUERY} variables={{ id }}>
        {({ data, loading }) => {
          if (loading) return <p>Cargando...</p>;
          if (!data.client) return <p>El cliente no existe</p>;
          return (
            <Mutation mutation={UPDATE_CLIENT_MUTATION} variables={this.state}>
              {(updateClient, { loading, error }) => (
                <PageWrapper title="Edición de Cliente">
                  <Form onSubmit={e => this.updateClient(e, updateClient)}>
                    <Error error={error} />
                    <fieldset disabled={loading} aria-busy={loading}>
                      <label htmlFor="name">
                        Nombre
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Nombre"
                          required
                          defaultValue={data.client.name}
                          onChange={this.handleChange}
                        />
                      </label>
                      <label htmlFor="shortName">
                        Nombre Corto
                        <input
                          type="text"
                          name="shortName"
                          id="shortName"
                          placeholder="Nombre Corto"
                          required
                          defaultValue={data.client.shortName}
                          onChange={this.handleChange}
                        />
                      </label>
                      <label htmlFor="state">
                        Estado
                        <select
                          required
                          name="state"
                          id="state"
                          defaultValue={data.client.state}
                          onChange={this.handleChange}
                        >
                          <option value="1">Activo</option>
                          <option value="2">Inactivo</option>
                        </select>
                      </label>
                      <button type="submit">
                        Guard
                        {loading ? 'ando...' : 'ar 💾'}
                      </button>
                    </fieldset>
                  </Form>
                </PageWrapper>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UpdateClient;
export { UPDATE_CLIENT_MUTATION };
export { SINGLE_CLIENT_QUERY };
