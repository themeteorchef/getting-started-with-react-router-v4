/* eslint-disable max-len */

import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App.js';

Meteor.startup(() => {
  render(<App />, document.getElementById('react-root'));
});
