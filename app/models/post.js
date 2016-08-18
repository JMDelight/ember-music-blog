import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  category: DS.belongsTo('category', { async: true }),
  content: DS.attr(),
  timestamp: DS.attr('number'),
  comments: DS.hasMany('comment', { async: true })
});
