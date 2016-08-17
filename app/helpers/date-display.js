import Ember from 'ember';
import moment from 'moment';

export function dateDisplay(params) {
  var timestamp = params[0] * -1;
  console.log("Hi " + timestamp);
  var date = moment.unix(timestamp).format("MM/DD/YYYY");
  return date;
}

export default Ember.Helper.helper(dateDisplay);
