const mysql = require('mysql3');

const db = mysql.createConnection({
    host: 'localhost',
    //host: 'mysql',
    user: 'root',
    password: 'virgendeurkupiña',
});

module.exports = db;

// conexion al servidor con sqlite
/*version: "2.1"
services:
sqlitebrowser:
  image: lscr.io/linuxserver/sqlitebrowser:latest
  container_name: sqlitebrowser
  environment:
    - PUID=1000
    - PGID=1000
    - TZ=Europe/London
  volumes:
    - /path/to/config:/config
  ports:
    - 3000:3000
  restart: unless-stopped 
  */