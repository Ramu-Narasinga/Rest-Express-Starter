import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.get('/', (req, res) => {
    res.send('Well done!');
})


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`The application is listening on port ${PORT}!`);
})