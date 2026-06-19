import 'dotenv/config'

import app from './app.js'
import { connectDatabase } from './utils/database.js'

const PORT = process.env.PORT ?? 5000
const MONGODB_URI = process.env.MONGODB_URI

async function startServer() {
  try {
    if (MONGODB_URI) {
      await connectDatabase(MONGODB_URI)
    } else {
      console.warn('MONGODB_URI is not set. Database connection skipped.')
    }

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

startServer()
