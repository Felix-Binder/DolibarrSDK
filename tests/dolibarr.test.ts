import 'dotenv/config';
import { Dolibarr } from '../src';

const main = async () => {
    const dolibarr = new Dolibarr({
        server: process.env.DOLIBARR_SERVER||"",
        token: process.env.DOLIBARR_TOKEN||""
    })
    await dolibarr.items.users.info().then(response => {
        console.log("Response: ", response.data);
    }).catch(error => {
        console.error("Error: ", error);
    });
}

main();