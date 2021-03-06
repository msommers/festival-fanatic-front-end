import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('festival', params.festival_id);
  },
  actions: {
    delete () {
      this.sendAction('delete', this.get('festival'));
    },
  },
});
