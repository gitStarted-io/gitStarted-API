/**
 * Created by Durzo on 5/28/2016.
 */

import should from 'should';

class NPMSearchTests {
    static executeTests(opts, callback) {

        describe("GitStarted: NPM-Search", function() {

            this.timeout(10000);

            after(() => {
                callback();
            });

            it("NPM-Search: Basic Search", (done) => {

                opts.agent
                    .get(`${opts.API_ROOT}/npmsearch/express`)
                    .send()
                    .end((err, res) => {
                        res.should.have.property("status").eql(200);
                        res.body[0].should.have.property("name");
                        done();
                    });
            });

        });

    }
}

module.exports = NPMSearchTests;