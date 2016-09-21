/**
 * Created by Durzo on 5/28/2016.
 */

class Index {
  static showWorking(req, res, next) {
    res.send('<h1>Dis works doe!</h1>');
  }
}

module.exports = Index;
