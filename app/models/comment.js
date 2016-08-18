import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  username: DS.attr(),
  timestamp: DS.attr('number'),
  post: DS.belongsTo('post', {async: true})
});
