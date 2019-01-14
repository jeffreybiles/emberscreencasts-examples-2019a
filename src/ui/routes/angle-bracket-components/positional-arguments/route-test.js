import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | angle-bracket-components/positional-arguments', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:angle-bracket-components/positional-arguments');
    assert.ok(route);
  });
});
