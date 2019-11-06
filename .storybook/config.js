/* eslint-disable import/no-extraneous-dependencies */
import '@fortawesome/fontawesome-pro/css/all.css'

import Vue from 'vue';
import Vuex from 'vuex';
import {addDecorator, addParameters, configure } from '@storybook/vue';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from 'storybook-addon-vue-info'
import { addReadme } from 'storybook-readme/vue';

// import centered from '@storybook/addon-centered/vue';

// import { themes } from '@storybook/theming';
// import newTheme from './newTheme';

import i18n from '../src/i18n'
import '../public/assets/css/tailwind.css'
import '../src/plugins/fontawesome'

// import '../src/index.css';
// from NPM modules
// import 'bootstrap/dist/css/bootstrap.css';

// from local path
// import './styles.css';

// import '!style-loader!css-loader!./styles.css';

// import { GlobalStyle } from '../src/shared/global';

// Import your global components.
import BaseButton from '../src/components/BaseButton/BaseButton.vue';
import BaseAvatar from '../src/components/BaseAvatar/BaseAvatar.vue';

// Option defaults:
addParameters({
  options: {
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullscreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * where to show the addon panel
     * @type {('bottom'|'right')}
     */
    panelPosition: 'bottom',
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\/|\./,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: /\|/,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true,
    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: true,
    /**
     * theme storybook, see link below
     */
    theme: undefined,
    /**
     * function to sort stories in the tree view
     * common use is alphabetical `(a, b) => a[1].id.localeCompare(b[1].id)`
     * if left undefined, then the order in which the stories are imported will
     * be the order they display
     * @type {Function}
     */
    storySort: undefined,
  },
  docs: {
    inlineStories: true,
    iframeHeight: '60px',
  },
  a11y: {
    // ... axe options
    element: '#root', // optional selector which element to inspect
    config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    options: {} // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
  },
});


// addDecorator(centered);
// addDecorator(withA11y);
addDecorator(withInfo);
addDecorator(addReadme);
addDecorator(() => ({
  i18n,
  withA11y,
  template: '<story />'
}))

// addDecorator(story => (
//   <>
//     <GlobalStyle />
//     {story()}
//   </>
// ));

// Install Vue plugins.
Vue.use(Vuex);

// Register global components.
Vue.component('BaseAvatar', BaseAvatar);
Vue.component('BaseButton', BaseButton);


// automatically import all files ending in *.stories.js|mdx
configure(
  [
    // require.context('../src', false, /Intro\.stories\.mdx/),
    require.context('../src', true, /\.stories\.(js|mdx)$/),
  ],
  module
);

const out = console;
out.log(process.env.STORYBOOK_THEME);
out.log(process.env.STORYBOOK_DATA_KEY);
