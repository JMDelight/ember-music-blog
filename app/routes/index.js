import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.query('post', {
        orderBy: 'timestamp',
        limitToLast: 5
    }),
      comments: this.store.query('comment', {
        orderBy: 'timestamp',
        limitToLast: 3
      })
    });

  }
});
