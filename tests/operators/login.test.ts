import 'dotenv/config';
import { Dolibarr } from '../../src';
import { expect } from 'chai';

describe("Test Operator: Login", ():void => {
    const dolibarr = new Dolibarr({
        server: process.env.DOLIBARR_SERVER,
        token: process.env.DOLIBARR_TOKEN
    });
    let credentials = {
        username: process.env.DOLIBARR_USER,
        password: process.env.DOLIBARR_PASS
    }
    it("dolibarr.system.login => /login (GET)", (done):void => {
        dolibarr.system.login.post({
            login : credentials.username,
            password: credentials.password
        }).then(response => {
            expect(response).to.have.property("status").which.equals(200);
        }).then(done, done);
    });
    it("dolibarr.system.login => /login (POST)", (done):void => {
        dolibarr.system.login.post({
            login : credentials.username,
            password: credentials.password
        }).then(response => {
            expect(response).to.have.property("status").which.equals(200);
        }).then(done, done);
    });
});
