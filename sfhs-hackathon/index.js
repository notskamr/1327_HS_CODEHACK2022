import express from "express"
import * as  http from "http"

const app = express()
app.use(express.json())

const server = http.Server(app)

app.set('view engine', 'ejs')
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.redirect("/pomodoro/timer")
})

app.get('/home', (req, res) => {
    res.render("home")
})

app.get("/pomodoro/summary", (req, res) => {
    res.render("pomodoro-summary")
})

app.get('/pomodoro/next', (req, res) => {
    res.render("pomodoro-next")
})

app.get('/pomodoro/timer', (req, res) => {
    res.render("pomodoro-timer")
})

app.get('/pomodoro/short-break', (req, res) => {
    res.render("short-break")
})

app.get('/pomodoro/long-break', (req, res) => {
    res.render("long-break")
})

app.get('/sticky-notes', (req, res) => {
    res.render("sticky-notes")
})

app.get('/todo-list', (req, res) => {
    res.render("todo-list")
})
app.get("/debug/:id?", (req, res) => {
    var id = req.params.id

    res.render(id)
})

const listener = server.listen(process.env.PORT || 3000, () => {
	console.log(`Listening on ${listener.address().port}`)
})
