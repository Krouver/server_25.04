const { readFileSync } = require('fs')
const { Server } = require('http')
const server = new Server
const users = [{ name: 'Tom' }, { name: 'no Tom' }, { name: 'no no Tom' }]

server.listen(1000)
server.on('request', handleRequest)

function handleRequest(request, response) {
  let { method, url } = request

  console.log(method, url)

  if (url == '/') url = '/index.html'

  try {
    const filePath = 'public' + url
    const fileContent = readFileSync(filePath)

    response.end(fileContent)

  } catch {
    response.end('я хз що ти шукаєш')
  }

}
