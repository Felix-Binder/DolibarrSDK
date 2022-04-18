import 'dotenv/config';
import { Dolibarr } from '../src/index';

const main = async () => {
    const dolibarr = new Dolibarr({
        server: process.env.DOLIBARR_SERVER,
        token: process.env.DOLIBARR_TOKEN
    })
    await dolibarr.tickets.listMany().then(response => {
        console.log("Response: ", response.data);
    }).catch(error => {
        console.error("Error: ", error);
    });
}

main();