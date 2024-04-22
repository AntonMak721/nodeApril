const Port = process.env.PORT || 5000;
const Application = require('./framework/application');
const userRouter = require('./src/user-router');
const jsonParser = require('./framework/parseJson');
const parseUrl = require('./framework/parseUrl');
const mongoose = require('mongoose');


const app = new Application();

app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'));
app.addRouter(userRouter);


const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://<user><password>@cluster0.hc29q6f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('connected to db');
        app.listen(Port, () => {console.log('listening on port'+ Port)})

    } catch (e) {
        console.log(e);
    }
}

start();
// anton140496
// jhDQrJud1xBTCWoZ
//
//