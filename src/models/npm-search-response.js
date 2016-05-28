/**
 * Created by Durzo on 5/26/2016.
 */

class NPMSearchResponse {
    constructor(response) {
        this.results = response.results.map((result) => {
            return {
                name: result.name[0],
                description: result.description[0],
                version: result.version[0]
            };
        });
    }

    getResponse() {
        return this.results;
    }
}

module.exports = NPMSearchResponse;