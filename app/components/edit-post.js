import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  editPost: false,
  actions: {
    editPostShow() {
      this.set('editPost', true);
    },
    edit(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        category: this.get('category'),
        content: this.get('content')
      };
      this.set('editPost', false);
      this.sendAction('edit', post, params);
    }
  }
});
