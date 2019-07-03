const express = require('express')
const vhost = require('vhost');

const udiatech = require('./src/udiatech/app');
const doublek  = require('./src/doublek/app');

const app = express();

app.use(vhost('udiatech.com', udiatech));
app.use(vhost('doublek.com', doublek));

// Error
app.use((req, res) => res.status(404).send('<div style=\'border:1px solid\'>Not Found Page</div>'));

app.listen(3000, () => console.log('HostManger listening on port 3000'));