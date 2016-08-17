import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {

    deletePost(post) {
      post.destroyRecord();
      this.transitionTo('admin');
    },
    save3(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('admin');
    }
  }
});
