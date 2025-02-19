import { app } from './app';
import { envs, connectDB } from './util';

app.listen(envs.port, () => {
	console.log(`Server is running on port ${envs.port}`);
	connectDB();
});
