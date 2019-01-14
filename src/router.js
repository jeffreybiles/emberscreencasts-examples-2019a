import EmberRouter from "@ember/routing/router";
import config from "../config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('angle-bracket-components', function() {
    this.route('basics');
    this.route('block-component');
    this.route('is-it-one-way');
    this.route('html-attributes');
    this.route('tagless-html-attributes');
    this.route('positional-arguments');
    this.route('one-word-component-names');
  });
});

export default Router;
