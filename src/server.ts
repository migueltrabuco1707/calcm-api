import { app } from './app';
import { envs } from './util/env';

app.listen(envs.port, () => {
	console.log(`Server is running on port ${envs.port}`);
});
