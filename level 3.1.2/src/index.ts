const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3005;
const app = express();
app.use(express.static('front'));
app.use(bodyParser.json());

enum Action{
    Plus='Plus',
    Minus='Minus'
}

let plus = [];
let minus = [];

app.post('/Plus', (req: Action, res: any) => {
    plus.push('Plus');
    res.send(JSON.stringify({res: plus.length}))
}).post('/Minus', (req: Action, res: { send: (arg0: string) => void; }) => {
    minus.push('Minus');
    res.send(JSON.stringify({res: minus.length}))
})

async function start(): Promise<void> {
    try {
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
        });
    } catch (e) { console.log(e); }
}
start();
module.exports = app;
