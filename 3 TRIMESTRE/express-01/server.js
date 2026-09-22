
import express from 'express'
import path from 'path'
const PORT = process.env.PORT || 3000
const app = express()
const baseDir = import.meta.dirname
// middleware (guardião)
app.use(express.static(path.join(baseDir, 'src/publico')))

app.get('/', (req, res) => {
  res.sendFile('paginas/index.html', {root: baseDir})
})

app.listen(PORT, ()=> {console.log('Servidor Ok na porta '+PORT)})