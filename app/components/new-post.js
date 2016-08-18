import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    save1() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        category: this.get('category'),
        timestamp: -1 * moment(this.get('timestamp')).unix(),
        content: this.get('content')
      };
      this.set('addNewPost', false);
      this.sendAction('save2', params);
    }
  }
});
