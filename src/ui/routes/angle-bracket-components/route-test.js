import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | angle-bracket-components', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:angle-bracket-components');
    assert.ok(route);
  });
});
