import page from './node_modules/page/page.mjs'
import {displayHome} from './views/home.js'
import { displayStudies } from './views/my-studies.js';
import { displayPast } from './views/past.js';

page('/', displayHome);
page('/studies', displayStudies);
page('/past', displayPast);
page.start();
