import express from 'express';
import path from 'path';
import ip from "ip";
const app = express();
const __dirname = './'
app.use(express.json({ extended: true }))





app.use(express.static(path.resolve(__dirname, 'client')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
})
app.listen(3000, () => { console.log('Srver has been started on port 3000...' + ' href => http://localhost:3000' + '  ' + 'http://' + ip.address() + ':3000') }); 