import Ember from 'ember';

export default Ember.Component.extend({
  updateComment: false,
  actions: {
    updateCommentShow() {
      this.set('updateComment', true);
    },
    saveUpdatedComment1(comment) {
      comment.save();
      // var params= {
      //   username: this.get('username'),
      //   body: this.get('body')
      // };
      this.set('updateComment', false);
      // this.sendAction('saveUpdatedComment1', comment, params);
    },
    deleteComment(comment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        // this.set('updateComment', false);
        this.sendAction("deleteComment", comment);
      }
    }
  }
});
