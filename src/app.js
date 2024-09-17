import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))


import serviceRouter from "./routes/service.route.js"

app.use("/api/v1", serviceRouter)

export { app }
