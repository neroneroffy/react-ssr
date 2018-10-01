import express from 'express'
import { render } from './util'
const app = express()

app.use(express.static('public'))
app.get('*', function (req, res) {
    res.send(render(req))
})

app.listen(3000, function () {
    console.log('server listening on port 3000!');
})