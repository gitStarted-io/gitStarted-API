const UtilityService = require("../lib/utility-service");
/**
 * Created by Durzo on 5/26/2016.
 */

class NPMSearchResponse {
    constructor(response) {
        this.results = response.map((result) => {
            let module = result.module;
            let description = UtilityService.removeMarkdown(module.description);
            return {
                name: module.name,
                description: description,
                version: module.version,
                url: module.links.npm
            };
        });
    }

    getResponse() {
        return this.results;
    }
}

module.exports = NPMSearchResponse;