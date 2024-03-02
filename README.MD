# TRABAJO FINAL DE PRACTICA I : CRUD APP 
Este trabajo final se realizo mediante nodejs,express

# # Instalacion

'git clone https://github.com/ramlor/gitvamos.git'
 'cd vamos'
 'docker-compose up -d'

 # # Contacto
 lorena.ramos@itscordoba.edu.ar




CARPETAS 
1_BIN:
servivio web que se encarga de responder 
2_PUBLIC:
archivos estativos, imagen, o scrip (algun efecto)
3_ROUTES:
aqui van todas las rutas que nosotros vayamos creando con varios niveles
por ejemple /persona/id
index.js= van todas mis rutas
4_VIEWS:
De aqui  suerge el MVC son las plantillas dinamicas.Tiene un modelo similar al html.Contine secciones que se generan de manera dinamica.
index.js: plantilla que se genera
5_PAKAGE.JSON
Aqui van mis dependencias, las cuales voy a ir instalando.(node_modules)
APP.JS
express genera un require que se pide para 
***Luego se genera la carpeta 
NODE_MODULES
codigo reutilizable, que son dependenicas que satisface lo que solicita package.json



lorena@lorena-h55ms2v:~$ sudo apt install nodejs
[sudo] contraseña para lorena: 
Leyendo lista de paquetes... Hecho
Creando árbol de dependencias       
Leyendo la información de estado... Hecho
Los paquetes indicados a continuación se instalaron de forma automática y ya no son necesarios.
  gyp javascript-common libgtkglext1 libjs-inherits libjs-is-typedarray libjs-psl libjs-typedarray-to-buffer libnode-dev
  libpangox-1.0-0 libpython2-stdlib libpython2.7-minimal libpython2.7-stdlib libssl-dev libuv1-dev python-pkg-resources python2
  python2-minimal python2.7 python2.7-minimal
Utilice «sudo apt autoremove» para eliminarlos.
Paquetes sugeridos:
  npm
Se instalarán los siguientes paquetes NUEVOS:
  nodejs
0 actualizados, 1 nuevos se instalarán, 0 para eliminar y 24 no actualizados.
Se necesita descargar 0 B/61,4 kB de archivos.
Se utilizarán 158 kB de espacio de disco adicional después de esta operación.
debconf: no se pudo inicializar la interfaz: Dialog
debconf: (Necesita una pantalla de al menos 13 líneas de alto y 31 columnas de ancho para la interfaz «dialog».)
debconf: probando ahora la interfaz: Readline
N: Omitiendo fichero «anydesk-stable» del directorio «/etc/apt/sources.list.d/», ya que no tiene extensión de nombre de fichero
Seleccionando el paquete nodejs previamente no seleccionado.
(Leyendo la base de datos ... 281079 ficheros o directorios instalados actualmente.)
Preparando para desempaquetar .../nodejs_10.19.0~dfsg-3ubuntu1.3_amd64.deb ...
Desempaquetando nodejs (10.19.0~dfsg-3ubuntu1.3) ...
Configurando nodejs (10.19.0~dfsg-3ubuntu1.3) ...
update-alternatives: utilizando /usr/bin/nodejs para proveer /usr/bin/js (js) en modo automático
Procesando disparadores para man-db (2.9.1-1) ...
N: Omitiendo fichero «anydesk-stable» del directorio «/etc/apt/sources.list.d/», ya que no tiene extensión de nombre de fichero
lorena@lorena-h55ms2v:~$ sudo npm install express-generator -g
ERROR: npm v10.4.0 is known not to run on Node.js v10.19.0.  This version of npm supports the following node versions: `^18.17.0 || >=20.5.0`. You can find the latest version at https://nodejs.org/.

ERROR:
/usr/local/lib/node_modules/npm/lib/utils/exit-handler.js:19
  const hasLoadedNpm = npm?.config.loaded
                           ^

SyntaxError: Unexpected token .
    at Module._compile (internal/modules/cjs/loader.js:723:23)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at module.exports (/usr/local/lib/node_modules/npm/lib/cli-entry.js:15:23)
    at module.exports (/usr/local/lib/node_modules/npm/lib/es6/validate-engines.js:39:10)
    at module.exports (/usr/local/lib/node_modules/npm/lib/cli.js:4:31)
lorena@lorena-h55ms2v:~$ express --view=ejs vamos
                                                                                                                                        
   create : vamos/
   create : vamos/public/
   create : vamos/public/javascripts/
   create : vamos/public/images/
   create : vamos/public/stylesheets/
   create : vamos/public/stylesheets/style.css
   create : vamos/routes/
   create : vamos/routes/index.js
   create : vamos/routes/users.js
   create : vamos/views/
   create : vamos/views/error.ejs
   create : vamos/views/index.ejs
   create : vamos/app.js
   create : vamos/package.json
   create : vamos/bin/
   create : vamos/bin/www

   change directory:
     $ cd vamos

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=vamos:* npm start

lorena@lorena-h55ms2v:~$ 
lorena@lorena-h55ms2v:~/vamos$ npm install                                                                                              
ERROR: npm v10.4.0 is known not to run on Node.js v10.19.0.  This version o                                                             f npm supports the following node versions: `^18.17.0 || >=20.5.0`. You can                                                              find the latest version at https://nodejs.org/.                                                                                        
                                                                                                                                        
ERROR:                                                                                                                                  
/usr/local/lib/node_modules/npm/lib/utils/exit-handler.js:19                                                                            
  const hasLoadedNpm = npm?.config.loaded                                                                                               
                           ^                                                                                                            
                                                                                                                                        
SyntaxError: Unexpected token .                                                                                                         
    at Module._compile (internal/modules/cjs/loader.js:723:23)                                                                          
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10                                                             )                                                                                                                                       
    at Module.load (internal/modules/cjs/loader.js:653:32)                                                                              
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at module.exports (/usr/local/lib/node_modules/npm/lib/cli-entry.js:15:23)
    at module.exports (/usr/local/lib/node_modules/npm/lib/es6/validate-engines.js:39:10)
    at module.exports (/usr/local/lib/node_modules/npm/lib/cli.js:4:31)
lorena@lorena-h55ms2v:~/vamos$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--   100 15037  100 15037    0     0  50800      0 --:--:-- --:--:-- --:--:-- 50629
=> Downloading nvm from git to '/home/lorena/.config/nvm'
=> Clonando en '/home/lorena/.config/nvm'...
remote: Enumerating objects: 365, done.
remote: Counting objects: 100% (365/365), done.
remote: Compressing objects: 100% (312/312), done.
remote: Total 365 (delta 43), reused 167 (delta 27), pack-reused 0
Recibiendo objetos: 100% (365/365), 365.21 KiB | 2.75 MiB/s, listo.
Resolviendo deltas: 100% (43/43), listo.
* (HEAD desacoplada en FETCH_HEAD)
  master
=> Compressing and cleaning up git repository

=> Appending nvm source string to /home/lorena/.bashrc
=> Appending bash_completion source string to /home/lorena/.bashrc
ERROR: npm v10.4.0 is known not to run on Node.js v10.19.0.  This version of npm supports the following node versions: `^18.17.0 || >=20.5.0`. You can find the latest version at https://nodejs.org/.

ERROR:
/usr/local/lib/node_modules/npm/lib/utils/exit-handler.js:19
  const hasLoadedNpm = npm?.config.loaded
                           ^

SyntaxError: Unexpected token .
    at Module._compile (internal/modules/cjs/loader.js:723:23)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at module.exports (/usr/local/lib/node_modules/npm/lib/cli-entry.js:15:23)
    at module.exports (/usr/local/lib/node_modules/npm/lib/es6/validate-engines.js:39:10)
    at module.exports (/usr/local/lib/node_modules/npm/lib/cli.js:4:31)
=> Close and reopen your terminal to start using nvm or run the following to use it now:

export NVM_DIR="$HOME/.config/nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
lorena@lorena-h55ms2v:~/vamos$ source ~/.bashrc
lorena@lorena-h55ms2v:~/vamos$ nvm install 18.17.0
Downloading and installing node v18.17.0...
Downloading https://nodejs.org/dist/v18.17.0/node-v18.17.0-linux-x64.tar.xz...
#################################################################### 100,0%
Computing checksum with sha256sum
Checksums matched!
Now using node v18.17.0 (npm v9.6.7)
Creating default alias: default -> 18.17.0 (-> v18.17.0)
lorena@lorena-h55ms2v:~/vamos$ nvm use 18.17.0
Now using node v18.17.0 (npm v9.6.7)
lorena@lorena-h55ms2v:~/vamos$ node -v
v18.17.0
lorena@lorena-h55ms2v:~/vamos$ npm -v
9.6.7
lorena@lorena-h55ms2v:~/vamos$ npm install

added 54 packages, and audited 55 packages in 4s

4 vulnerabilities (3 high, 1 critical)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
npm notice 
npm notice New major version of npm available! 9.6.7 -> 10.4.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.4.0
npm notice Run npm install -g npm@10.4.0 to update!
npm notice 
lorena@lorena-h55ms2v:~/vamos$ 
lorena@lorena-h55ms2v:~/vamos$ npm install                                                                                              
ERROR: npm v10.4.0 is known not to run on Node.js v10.19.0.  This version o                                                             f npm supports the following node versions: `^18.17.0 || >=20.5.0`. You can                                                              find the latest version at https://nodejs.org/.                                                                                        
                                                                                                                                        
ERROR:                                                                                                                                  
/usr/local/lib/node_modules/npm/lib/utils/exit-handler.js:19                                                                            
  const hasLoadedNpm = npm?.config.loaded                                                                                               
                           ^                                                                                                            
                                                                                                                                        
SyntaxError: Unexpected token .                                                                                                         
    at Module._compile (internal/modules/cjs/loader.js:723:23)                                                                          
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10                                                             )                                                                                                                                       
    at Module.load (internal/modules/cjs/loader.js:653:32)                                                                              
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at module.exports (/usr/local/lib/node_modules/npm/lib/cli-entry.js:15:23)
    at module.exports (/usr/local/lib/node_modules/npm/lib/es6/validate-engines.js:39:10)
    at module.exports (/usr/local/lib/node_modules/npm/lib/cli.js:4:31)
lorena@lorena-h55ms2v:~/vamos$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--   100 15037  100 15037    0     0  50800      0 --:--:-- --:--:-- --:--:-- 50629
=> Downloading nvm from git to '/home/lorena/.config/nvm'
=> Clonando en '/home/lorena/.config/nvm'...
remote: Enumerating objects: 365, done.
remote: Counting objects: 100% (365/365), done.
remote: Compressing objects: 100% (312/312), done.
remote: Total 365 (delta 43), reused 167 (delta 27), pack-reused 0
Recibiendo objetos: 100% (365/365), 365.21 KiB | 2.75 MiB/s, listo.
Resolviendo deltas: 100% (43/43), listo.
* (HEAD desacoplada en FETCH_HEAD)
  master
=> Compressing and cleaning up git repository

=> Appending nvm source string to /home/lorena/.bashrc
=> Appending bash_completion source string to /home/lorena/.bashrc
ERROR: npm v10.4.0 is known not to run on Node.js v10.19.0.  This version of npm supports the following node versions: `^18.17.0 || >=20.5.0`. You can find the latest version at https://nodejs.org/.

ERROR:
/usr/local/lib/node_modules/npm/lib/utils/exit-handler.js:19
  const hasLoadedNpm = npm?.config.loaded
                           ^

SyntaxError: Unexpected token .
    at Module._compile (internal/modules/cjs/loader.js:723:23)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:692:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at module.exports (/usr/local/lib/node_modules/npm/lib/cli-entry.js:15:23)
    at module.exports (/usr/local/lib/node_modules/npm/lib/es6/validate-engines.js:39:10)
    at module.exports (/usr/local/lib/node_modules/npm/lib/cli.js:4:31)
=> Close and reopen your terminal to start using nvm or run the following to use it now:

export NVM_DIR="$HOME/.config/nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
lorena@lorena-h55ms2v:~/vamos$ source ~/.bashrc
lorena@lorena-h55ms2v:~/vamos$ nvm install 18.17.0
Downloading and installing node v18.17.0...
Downloading https://nodejs.org/dist/v18.17.0/node-v18.17.0-linux-x64.tar.xz...
#################################################################### 100,0%
Computing checksum with sha256sum
Checksums matched!
Now using node v18.17.0 (npm v9.6.7)
Creating default alias: default -> 18.17.0 (-> v18.17.0)
lorena@lorena-h55ms2v:~/vamos$ nvm use 18.17.0
Now using node v18.17.0 (npm v9.6.7)
lorena@lorena-h55ms2v:~/vamos$ node -v
v18.17.0
lorena@lorena-h55ms2v:~/vamos$ npm -v
9.6.7
lorena@lorena-h55ms2v:~/vamos$ npm install

added 54 packages, and audited 55 packages in 4s

4 vulnerabilities (3 high, 1 critical)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
npm notice 
npm notice New major version of npm available! 9.6.7 -> 10.4.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.4.0
npm notice Run npm install -g npm@10.4.0 to update!
npm notice 
lorena@lorena-h55ms2v:~/vamos$ 


