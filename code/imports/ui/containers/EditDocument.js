import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Documents from '../../api/documents/documents.js';
import EditDocument from '../pages/EditDocument.js';
import Loading from '../components/Loading.js';

const composer = ({ match }, onData) => {
  const documentId = match.params._id;
  const subscription = Meteor.subscribe('documents.view', documentId);

  if (subscription.ready()) {
    const doc = Documents.findOne(documentId);
    onData(null, { doc });
  }
};

export default composeWithTracker(composer, Loading)(EditDocument);
