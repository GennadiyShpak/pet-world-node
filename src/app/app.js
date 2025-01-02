import express from "express";
import cors from 'cors'

import { routes } from "./app-config.js";
import { proposalRouter } from '../routes/proposal.js';
import { dictionaryRouter } from '../routes/dictionary.js';

const app = express();

app.use(cors());

app.use(routes.PROPOSALS, proposalRouter);
app.use(routes.DICTIONARY, dictionaryRouter);

export default app;