const UtilityService = require('../lib/utility-service');
/**
 * Created by Durzo on 5/26/2016.
 */

class NPMSearchResponse {
  constructor(response) {
    this.results = response.map((result) => {
      const module = result.module;
      const description = UtilityService.removeMarkdown(module.description);
      return {
        name: module.name,
        description,
        version: module.version,
        url: module.links.npm,
      };
    });
  }

  getResponse() {
    return this.results;
  }
}

module.exports = NPMSearchResponse;
