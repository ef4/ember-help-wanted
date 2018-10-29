import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  // these fields come directly from GitHub. This list should match the
  // `neededFields` list in the server repo.
  number: attr('number'),
  title: attr('string'),
  state: attr('string'),
  createdAt: attr('date'),
  updatedAt: attr('date'),
  body: attr('string'),
  url: attr('string'),
  htmlUrl: attr('string'),
  repositoryUrl: attr('string'),
  labels: hasMany('labels', { async: false }),

  // these fields are synthesized on our server
  repositoryName: attr('string'),
  repositoryHtml: attr('string')
});
