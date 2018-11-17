import UpdateClient from '../components/Client/UpdateClient';

const ClientUpdate = ({ query }) => (
  <div>
    <UpdateClient id={query.id} />
  </div>
);

export default ClientUpdate;
