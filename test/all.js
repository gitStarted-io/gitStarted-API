/**
 * Created by Durzo on 5/28/2016.
 */

import should from 'should';
import superagent from 'superagent';
import config from './testconfig';

import server from '../app.js';

import NPMSearchTests from './tests/npm-search';
import TemplateTests from './tests/templates';
import UserTests from './tests/user';

describe("gitStarted API", function() {
    this.timeout(20000);

    const agent = superagent.agent();
    const opts = {};

    opts.API_ROOT = config.apiRoot;
    opts.agent = agent;

    NPMSearchTests.executeTests(opts, () => {});
    TemplateTests.executeTests(opts, () => {});
    UserTests.executeTests(opts, () => {});

});