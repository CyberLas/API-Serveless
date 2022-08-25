import 'dotenv/config'

import { server as app } from './server'

app.listen(3000, () => {
	console.log(`🏃 Server Express Running ${3000}`)
})