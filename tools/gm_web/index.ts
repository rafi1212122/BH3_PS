import { createServer } from 'vite'
import react from '@vitejs/plugin-react'

(async () => {
  const server = await createServer({
    // any valid user config options, plus `mode` and `configFile`
    configFile: false,
    plugins: [react()],
    root: __dirname + "/frontend",
    server: {
      port: 1338,
      open: true,
      host: true
    },
  })
  await server.listen()

  server.printUrls()
})()