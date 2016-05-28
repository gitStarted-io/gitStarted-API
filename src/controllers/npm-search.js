/**
 * Created by Durzo on 5/26/2016.
 */

const path = require("path");
const request = require("request");
const NPMResults = require("../models/npm-search-response");

const ENDPOINTS = {
    NPM_SEARCH: "http://npmsearch.com/query"
};

class NPMSearch {

    static getResults(req, res, next) {

        if (!req.params.term) {
            res.status(400).send("Invalid request.");
            return;
        } else {

            const url = `${ENDPOINTS.NPM_SEARCH}?q=${generateQuery(req.params.term)}&fields=name,version,description`;

            var options = {
                url: url,
                json:true
            };

            request.get(options, (err, response, body) => {
                if (err) {
                    res.status(response.statusCode).send(err);
                    return;
                } else {
                    if (response.statusCode === 200) {
                        let results = new NPMResults(body);
                        res.send(results.getResponse());
                        return;
                    } else {
                        res.status(response.statusCode).send("Npm Search invalid.");
                        return;
                    }
                }
            });
        }
    }
}

function generateQuery(str) {
    return str.split(" ").join(",");
}

module.exports = NPMSearch;