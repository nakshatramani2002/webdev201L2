
const http = require("http");
const fs = require("fs");
//const process = require("process");
//var minimist = require('minimist')
//const hostname = "127.0.0.1";
//const port = !process.env.npm_config_port ? 3000 : process.env.npm_config_port;


//var arguments = minimist(process.argv);


//const port = arguments.port || 5000;


let url = request.url
let homeContent = "";
let projectContent = "";
let regContent="";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  regContent = registration;
});

let args = require("minimist")(process.argv.slice(2));
  http
    .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(100, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/registration":
        response.write(regContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  }).listen(args["port"]);
  //const server = http.createServer((req,res)=>{
    //res.statusCode=200;
    //res.setHeader("Content-Type" , "text/html");
    //res.write('Hello there!');
    //res.end("hi");
  //});
  

  //server.listen(port, hostname, () => {
    //console.log(`Server running at http://${hostname}:${port}/`);
  //});