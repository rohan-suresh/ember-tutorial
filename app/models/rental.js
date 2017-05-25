import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  owner: DS.attr(),
  city: DS.attr(),
  property_type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  description: DS.attr()
});
