import express, { Request, Response } from 'express';
import cors from 'cors';


const app = express(); // Não é necessário tipar explicitamente como express.Express

app.use(cors());
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
	res.status(200).json({ message: 'Calcm API is running' });
});

export { app };
