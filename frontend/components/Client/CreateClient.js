import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from '../styles/Form';
import Error from '../ErrorMessage';

const CREATE_CLIENT_MUTATION = gql`
  mutation CREATE_CLIENT_MUTATION(
    $name: String!
    $shortName: String!
    $state: Int!
  ) {
    createClient(name: $name, shortName: $shortName, state: $state) {
      id
    }
  }
`;

class CreateClient extends Component {
  state = {
    name: '',
    shortName: '',
    state: 1,
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'select-one' ? parseInt(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    const { name, shortName, state } = this.state;
    return (
      <Mutation mutation={CREATE_CLIENT_MUTATION} variables={this.state}>
        {(createClient, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await createClient();
              Router.push({
                pathname: '/client2',
                query: { id: res.data.createClient.id },
              });
            }}
          >
            <h2>Registro de Cliente</h2>
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
                  value={name}
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
                  value={shortName}
                  onChange={this.handleChange}
                />
              </label>
              <label htmlFor="state">
                Estado
                <select
                  required
                  name="state"
                  id="state"
                  value={state}
                  onChange={this.handleChange}
                >
                  <option value="1">Activo</option>
                  <option value="2">Inactivo</option>
                </select>
              </label>
              <button type="submit">Guardar 💾</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateClient;
export { CREATE_CLIENT_MUTATION };
