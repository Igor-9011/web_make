import express from 'express';
import path from 'path';
import ip from "ip";
const app = express();
const __dirname = './'
const host = 5500
app.use(express.json({ extended: true }))



//другие запросы

app.use(express.static(path.resolve(__dirname, 'client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
})
app.listen(host, () => { console.log(`Srver has been started on port ${host}...   \n href => http://localhost:${host}    \n         http://${ip.address()}:${host}`) }); 