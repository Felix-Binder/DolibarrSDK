import 'dotenv/config';
import { Dolibarr } from '../src';
import { expect } from 'chai';

describe("Test Config", ():void => {
    const dolibarr = new Dolibarr({
        server: process.env.DOLIBARR_SERVER,
        token: process.env.DOLIBARR_TOKEN
    });
    it("Config URL", (done):void => {
        const url = dolibarr.url;
        console.log(url)
        expect(url).to.be.a("string");
        done()
    });
});
