'use strict';

let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect

chai.use(chaiHttp);

describe('Dummy test', () => {
  it('should run', (done) => {
    expect(true).to.equal(true);
    done();
  });
});

