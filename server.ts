import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express, { application } from 'express'
import { createServer as createViteServer } from 'vite'
// import { handleRoutes } from './src/api_routes'
import bodyParser from 'body-parser'

async function createServer() {
  const app = express()

  app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))

  // parse application/json
  app.use(bodyParser.json( { limit: '50mb' } ))

  // Create Vite server in middleware mode and configure the app type as
  // 'custom', disabling Vite's own HTML serving logic so parent server
  // can take control
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })

  // use vite's connect instance as middleware
  // if you use your own express router (express.Router()), you should use router.use
  app.use(vite.middlewares)

  // read all the files from directory
  let v: any = fs.readdirSync( path.join( process.cwd(), '/api' ) )
  let names: any = fs.readdirSync( path.join( process.cwd(), '/api' ) )
  // remove file extention from file name
  v = v.map( async ( e: any ) => await import( './api/' + e.replace( /.ts/, "" ) ) )

  // @ts-ignore
  // console.log( import( "./api/*" ) )

  // for each cannot be async
  v.forEach( ( e: any, ind: number ) => {
    const api_name = '/api/' + names[ ind ].replace( /.ts/, "" )
    // hence async await inside app.use
    app.use( api_name, async(req, res) => {
      const func = await e;
      func.default( req, res )
    } )
  } )


  app.use('*', async (req, res, next) => {
    const url = req.originalUrl
  
    try {
      // 1. Read index.html
      let template = fs.readFileSync(
        path.resolve(process.cwd(), 'index.html'),
        'utf-8'
      )
  
      // 2. Apply Vite HTML transforms. This injects the Vite HMR client, and
      //    also applies HTML transforms from Vite plugins, e.g. global preambles
      //    from @vitejs/plugin-react
      template = await vite.transformIndexHtml(url, template)

      // 3. Load the server entry. vite.ssrLoadModule automatically transforms
      //    your ESM source code to be usable in Node.js! There is no bundling
      //    required, and provides efficient invalidation similar to HMR.
      const { render } = await vite.ssrLoadModule('/src/main.tsx')
  
      // 4. render the app HTML. This assumes entry-server.js's exported `render`
      //    function calls appropriate framework SSR APIs,
      //    e.g. ReactDOMServer.renderToString()
      const appHtml = typeof window !== "undefined" && await render(url)
  
      // 5. Inject the app-rendered HTML into the template.
      const html = template.replace(`<!--ssr-outlet-->`, appHtml)
  
      // 6. Send the rendered HTML back.
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      // If an error is caught, let Vite fix the stack trace so it maps back to
      // your actual source code.
      vite.ssrFixStacktrace(e as any)
      next(e)
    }
  })
  
  const PORT = 5000 || process.env.PORT
  app.listen(PORT, () => console.log( `??? app is running on http://localhost:${ PORT }` ))
}

createServer()
