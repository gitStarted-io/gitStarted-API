const removeMd = require('remove-markdown');

class UtilityService {
    static removeMarkdown(str) {
        return removeMd(str);
    }
}

module.exports = UtilityService;