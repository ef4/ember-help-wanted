import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    query: {
      refreshModel: true
    }
  },

  model({ category, query }) {
    return this.store.query('github-issue', { category, query });
  }
});
