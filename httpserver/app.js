var http = require('http');

let sv = (req,res) => {

    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Hello world\n');

}

http.createServer(sv).listen(1337,'127.0.0.1');


/*Al ejecutar, a primera vista, nada sucede, de hecho la consola se queda estatica y no permite interactuar con ella.*/
/*Cuando vamos a la direccion de localhost:1337 es cuando podemos ver lo que en realidad sucedió: el servidor del codigo está corriendo.
En la página del servidor no vemos mas que el "Hello world" */

/* Al dirigirnos a los "headers" o encabezados, podemos ver información variada y especificaciones del protocolo http en las solicitudes y peticiones de nuestro servidor. 
Entre tanto se puede observar que se usa el método GET para solicitar el recurso del servidor, detalles como que navegador estamos usando, que plataforma, entre otros*/


/*
HTTP/1.1 200 OK
Content-Type: text/plain
Date: Sun, 20 Mar 2022 10:56:03 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked
*/

/*
GET / HTTP/1.1
Host: localhost:1337
Connection: keep-alive
Cache-Control: max-age=0
sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="99", "Microsoft Edge";v="99"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36 Edg/99.0.1150.39
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*;q=0.8,application/signed-exchange;v=b3;q=0.9
Sec-Fetch-Site: none
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Accept-Encoding: gzip, deflate, br
Accept-Language: es-419,es;q=0.9,es-ES;q=0.8,en;q=0.7,en-GB;q=0.6,en-US;q=0.5
*/



