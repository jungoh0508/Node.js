var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    // console.log(queryData.id);
    var title = queryData.id;
    // console.log(url);
  
    
    // console.log(url.parse(_url, true).pathname);
    var pathname = url.parse(_url, true).pathname;
    // console.log(url.parse(_url, true));
    if(pathname === '/'){  
      if(queryData.id === undefined){

        fs.readdir('./data', function(error, filelist){
          // console.log(filelist);

          var title = 'Welcome'
          var description = "Hello, Node.js!";
          // var list = `<ul>
          // <li><a href="/?id=HTML">HTML</a></li>
          // <li><a href="/?id=CSS">CSS</a></li>
          // <li><a href="/?id=JavaScript">JavaScript</a></li>
          // </ul>`;

          var list = '<ul>';
          
          var i = 0;
          while(i < filelist.length){
            list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
            i += 1;
          }
          list = list+'</ul>';

          var template = `
            <html>
              <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
              </head>
              <body>
                <h1><a href="/">WEB</a></h1>
                ${list}
                <h2>${title}</h2>
                <p>${description}</p>
                <p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
                </p>
              </body>
            </html>
          `;
        
        response.writeHead(200);
        response.end(template);


        })
        // console.log(file_list);
        
      
      } else {
      fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){

        fs.readdir('./data', function(error, filelist){
          // console.log(filelist);
          // var list = `<ul>
          // <li><a href="/?id=HTML">HTML</a></li>
          // <li><a href="/?id=CSS">CSS</a></li>
          // <li><a href="/?id=JavaScript">JavaScript</a></li>
          // </ul>`;

          var list = '<ul>';
          
          var i = 0;
          while(i < filelist.length){
            list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
            i += 1;
          }
          list = list+'</ul>';
        var template = `
          <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              ${list}
              <h2>${title}</h2>
              <p>${description}</p>
              <p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
              </p>
            </body>
          </html>
        `;
      
      response.writeHead(200);
      response.end(template);
      })
    })}} else {
      response.writeHead(404);
      response.end('Not found');
    }

    
    
    // response.end(fs.readFileSync(__dirname + _url));
    // response.end(template);
 
});
app.listen(3000);