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
        timestamp: moment(this.get('timestamp')).unix(),
        content: this.get('content')
      };
      console.log(params.timestamp);
      if (parseInt(params.timestamp) === -1471472809) {
        params.timestamp = undefined;
        console.log("Hi " + params.timestamp);
      }
      this.set('editPost', false);
      this.sendAction('edit', post, params);
    }
  }
});
