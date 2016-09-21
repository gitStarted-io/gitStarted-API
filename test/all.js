/**
 * Created by Durzo on 5/28/2016.
 */

const should = require('should');
const superagent = require('superagent');
const config = require('./testconfig');

const server = require('../app.js');

const NPMSearchTests = require('./tests/npm-search');
const TemplateTests = require('./tests/templates');
const UserTests = require('./tests/user');

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