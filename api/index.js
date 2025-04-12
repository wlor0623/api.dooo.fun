import app from "../index.js"
app.get('/', async (req, res) => {
    res.send('hello world');
});
