import Component from '@ember/component';

export default class TaglessCoolParagraphComponent extends Component {
  tagName = ''
  // attributeBindings = ['class', 'data-test']
  // you're not allowed to use attributeBindings on a tagless component
}
