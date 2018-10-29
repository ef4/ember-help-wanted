import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return `${i}`;
  },
  number(i) {
    return `${i + 3000}`;
  },
  title: faker.hacker.phrase,
  state: () => faker.random.arrayElement(['open', 'closed']),
  createdAt: faker.date.recent,
  updatedAt: faker.date.recent,
  body: faker.hacker.phrase,
  url: 'https://api.github.com/repos/ember-learn/guides-source/issues/117',
  htmlUrl: 'https://github.com/ember-learn/guides-source/issues/117',
  repositoryUrl: 'https://github.com/ember-learn/guides-source',

  afterCreate(issue, server) {
    let label = server.schema.labels.findBy({
      name: 'good first issue'
    });
    if (!label) {
      label = server.create('label', {
        color: '84b6eb',
        default: true,
        id: 26457840,
        name: 'good first issue',
        url: 'https://api.github.com/repos/emberjs/ember-inspector/labels/good%20first%20issue'
      });
    }
    issue.update('labels', [label]);
  }
});
