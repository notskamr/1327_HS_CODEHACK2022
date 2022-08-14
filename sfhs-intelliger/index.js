import express from "express"
import * as  http from "http"

const app = express()
app.use(express.json())

const server = http.Server(app)

app.set('view engine', 'ejs')
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.redirect("/home")
})

app.get('/home', (req, res) => {
    res.render("home")
})

app.get('/app', (req, res) => {
    res.render("app")
})
const listener = server.listen(process.env.PORT || 1250, () => {
	console.log(`Listening on ${listener.address().port}`)
})
