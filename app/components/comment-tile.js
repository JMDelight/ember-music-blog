import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveUpdatedComment1(comment, params){
      this.sendAction('saveUpdatedComment1', comment, params);
    },
    deleteComment(comment) {
      this.sendAction('deleteComment', comment);
    }
  }
});
