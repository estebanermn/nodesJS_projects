import express, {Application} from 'express';
import morgan from 'morgan';

const app: Application = express();

//settings
app.set('port', 400);


//midlwards
app.use(morgan('dev'));
app.use(express.json());

export default app;