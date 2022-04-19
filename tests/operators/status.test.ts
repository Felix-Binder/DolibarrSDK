import 'dotenv/config';
import { Dolibarr } from '../../src';
import { expect } from 'chai';

describe("Test Operator: Status", ():void => {
    const dolibarr = new Dolibarr({
        server: process.env.DOLIBARR_SERVER,
        token: process.env.DOLIBARR_TOKEN
    });
    it("dolibarr.system.status => /status", (done):void => {
        dolibarr.system.status.list()
        .then(response => {
            expect(response).to.have.property("status").which.equals(200);
        }).then(done, done);
    });
});
