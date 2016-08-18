import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    saveComment1(){
      var params= {
        username: this.get('username'),
        body: this.get('body'),
        post: this.get('post'),
        timestamp: moment().unix() * -1
      };
      this.sendAction('saveComment2', params);
    }
  }
});
