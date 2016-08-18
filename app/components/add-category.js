import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategory: false,
  actions: {
    saveCategory1() {
      var params = {
        name: this.get('name')
      };
      this.set('addNewCategory', false);
      this.sendAction("saveCategory2", params);
    },
    showCategoryForm() {
      this.set('addNewCategory', true);
    },

  }
});
