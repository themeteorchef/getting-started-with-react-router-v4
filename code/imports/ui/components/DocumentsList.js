import React, { PropTypes } from 'react';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

const handleNav = (history, _id) => {
  history.push(`/documents/${_id}`);
};

const DocumentsList = ({ history, documents }) => (
  documents.length > 0 ? <ListGroup className="DocumentsList">
    {documents.map(({ _id, title }) => (
      <ListGroupItem key={ _id } onClick={ () => handleNav(history, _id) }>
        { title }
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No documents yet.</Alert>
);

DocumentsList.propTypes = {
  history: PropTypes.object,
  documents: PropTypes.array,
};

export default DocumentsList;
