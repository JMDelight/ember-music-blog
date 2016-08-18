import Ember from 'ember';

export default Ember.Component.extend({
  displayPosts: false,
  actions: {
    showPosts() {
      this.set('displayPosts', true);
    },
    hidePosts() {
      this.set('displayPosts', false);
    }
  }
});
