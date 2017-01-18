import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('festival-list/view', 'Integration | Component | festival list/view', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{festival-list/view}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#festival-list/view}}
      template block text
    {{/festival-list/view}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
