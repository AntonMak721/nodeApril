module.exports = (req, res )=>{
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.send = (data)=>{
        res.write(JSON.stringify(data))
        res.end()
    }
}