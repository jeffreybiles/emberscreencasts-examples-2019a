import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | angle-bracket-component/block-component', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:angle-bracket-component/block-component');
    assert.ok(route);
  });
});
