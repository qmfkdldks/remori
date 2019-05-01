import { configure } from '@storybook/react';

// import '../assets/css/animate.css';
// import '../assets/css/responsive.css';
// import '../assets/css/slick.css';
// import '../assets/css/style.css';

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
