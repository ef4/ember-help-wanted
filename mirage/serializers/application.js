import { JSONAPISerializer } from 'ember-cli-mirage';
export default JSONAPISerializer.extend({
  include: Object.freeze(['labels', 'labels.categories'])
});
