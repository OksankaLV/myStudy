
function readHttpLikeInput(){
 // см. предыдущую задачу
   var fs = require("fs");
    var res = "";
    var buffer = Buffer.alloc ? Buffer.alloc(1) : new Buffer(1);
    let was10 = 0;
    for(;;){ 
        try { fs.readSync(0 /*stdin fd*/, buffer, 0, 1); } catch (e) {break; /* windows */}
        if(buffer[0] === 10 || buffer[0] === 13) {
            if (was10 > 10) 
                break;
            was10++;
        } else 
           was10 = 0;
        res += new String(buffer);
    }

    return res;
}

let contents = readHttpLikeInput();

function outputHttpResponse(statusCode, statusMessage, headers, body) {
 let http = /HTTP.[\d.]*/.exec(contents);
    let txt = `${http} ${statusCode} ${statusMessage}
Date: ${new Date()}
Server: Apache/2.2.14 (Win32)
Conection: Closed
Content-type: text/html; charset=utf-8
Content-Length: ${(body+"").length}

${body}`
    
    console.log(txt);
}

function processHttpRequest($method, $uri, $headers, $body) {
  const reg = /(\/sum)?(\?nums=)((\d,?)*)/;
    let statusCode;
    let statusMessage;
    let body;
    const regArrey = $uri[0].match(/(\/sum)?(\?nums=)((\d,?)*)/);
    if ($method[0].toLowerCase() === "get" && regArrey) {
        if (regArrey[1] != undefined) {
            statusCode = 200;
            statusMessage = "OK"
            body = regArrey[3].split(",").map(elem => +elem).reduce((sum, elem) => sum + elem);
        } else {
            statusCode = 404;
            statusMessage = "Not Found";
            body = "not found";
            
        }
    } else {
        statusCode = 400;
        statusMessage = "Bad Request";
        body = "bad request";
    }
    // ... проанализировать входящие данные, вычислить результат
    // и специальной командой красиво вывести ответ
    outputHttpResponse(statusCode, statusMessage, $headers, body);
}

function parseTcpStringAsHttpRequest(string) {
    // ну это вы уже написали
  return { 
      method: (/^\w*/).exec(string),
      uri : (/\/[^\s]*/).exec(string),
      headers: ()=>{const arr = new Map();
                let arrKey = string.match(/^[\w-]*(?=:)/mg);
                let arrValue = string.match(/(?<=: ).*$/mg);
                 for(let i = 0; i <arrKey.length; i++) { arr.set(arrKey[i], arrValue[i]) }
                 return arr;
        }, 
      body:(/(?<=\n\n).*$/mg).exec(string), 
  }; 
  
}

http = parseTcpStringAsHttpRequest(contents);
processHttpRequest(http.method, http.uri, http.headers, http.body);

