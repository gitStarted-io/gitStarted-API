/**
 * Created by Durzo on 5/28/2016.
 */

import should from 'should';

class UserTests {
    static executeTests(opts, callback) {

        describe("GitStarted: User Tests", function() {

            this.timeout(10000);

            after(() => {
                callback();
            });

            // '/user/:user'
            it("User Tests: Basic Search with Valid User", (done) => {

                opts.agent
                    .get(`${opts.API_ROOT}/user/jalsemgeest`)
                    .send()
                    .end((err, res) => {
                        res.should.have.property("status").eql(200);
                        res.body.should.have.property("id");
                        res.body.should.have.property("username");
                        res.body.should.have.property("thumbnail");
                        res.body.should.have.property("templates");
                        done();
                    });
            });

            it("User Tests: Basic Search with invalid user", (done) => {
                opts.agent
                    .get(`${opts.API_ROOT}/user/1`)
                    .send()
                    .end((err, res) => {
                        res.should.have.property("status").eql(404);
                        res.body.should.have.property("message").eql("User 1 not found.");
                        done();
                    });
            });

        });

    }
}

module.exports = UserTests;