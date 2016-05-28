/**
 * Created by Durzo on 5/28/2016.
 */

class Download {
    // GET: '/download'
    static download(req, res, next) {
        res.send('<h1>downloadRoute GitStarted</h1>');
    }
}

module.exports = Download;