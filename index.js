const cron=require('node-cron')
const express=require('express')

const app=express()

cron.schedule("*/1 * * * * *",function(){
    console.log("running task")
})

app.listen(3000)

