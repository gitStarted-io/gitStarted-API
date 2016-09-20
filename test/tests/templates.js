/**
 * Created by Durzo on 5/28/2016.
 */

import should from 'should';

class TemplateTests {
    static executeTests(opts, callback) {

        describe("GitStarted: Templates", function() {

            this.timeout(10000);

            after(() => {
                callback();
            });

            // '/template/comment/
            it("Templates: Get Comments for Template", (done) => {

                opts.agent
                    .get(`${opts.API_ROOT}/template/comment/1`)
                    .send()
                    .end((err, res) => {
                        res.should.have.property("status").eql(200);
                        res.body.should.have.property("templateId").eql(1);
                        res.body.should.have.property("numberOfCommments");
                        res.body.comments.forEach((comment) => {
                            comment.should.have.property("templateId");
                            comment.should.have.property("comment");
                            comment.should.have.property("id");
                            comment.should.have.property("userId");
                            comment.should.have.property("username");
                            comment.should.have.property("time");
                        });
                        done();
                    });
            });

            // '/template/search/:term'
            it("Templates: Search Term", (done) => {

                opts.agent
                    .get(`${opts.API_ROOT}/template/search/gitstarted`)
                    .send()
                    .end((err, res) => {
                        res.should.have.property("status").eql(200);
                        res.body.should.have.property("searchResults");
                        res.body.searchResults.forEach((result) => {
                            result.should.have.property("score");
                            result.should.have.property("name");
                        });
                        done();
                    });
            });


            // '/template/get/top'
            it("Templates: Get Top Templates", (done) => {
                opts.agent
                    .get(`${opts.API_ROOT}/template/get/top`)
                    .send()
                    .end((err, res) => {
                        res.should.have.property("status").eql(200);
                        res.body.forEach((result) => {
                            result.should.have.property("templateId");
                            result.should.have.property("templateName");
                            result.should.have.property("description");
                            result.should.have.property("tags");
                            result.should.have.property("version");
                            result.should.have.property("upvotes");
                            result.should.have.property("downvotes");
                            result.should.have.property("author");
                        });
                        done();
                    });
            });

            // '/template/:template/download'
            it("Templates: Download Template", (done) => {

                opts.agent
                    .get(`${opts.API_ROOT}/template/gitstarted/download`)
                    .send()
                    .end((err, res) => {
                        res.should.have.property("status").eql(200);
                        
                        done();
                    });
            });

            // '/template/:templateId'
            it("Templates: Search Template By Id", (done) => {

                opts.agent
                    .get(`${opts.API_ROOT}/template/1`)
                    .send()
                    .end((err, res) => {
                        res.should.have.property("status").eql(200);
                        res.body.should.have.property("templateId");
                        res.body.should.have.property("templateName");
                        res.body.should.have.property("description");
                        res.body.should.have.property("tags");
                        res.body.should.have.property("version");
                        res.body.should.have.property("upvotes");
                        res.body.should.have.property("downvotes");
                        res.body.should.have.property("author");
                        done();
                    });
            });
        });

    }
}

module.exports = TemplateTests;