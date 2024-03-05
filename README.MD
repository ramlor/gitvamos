# TRABAJO FINAL DE PRACTICA I : CRUD APP 
Este trabajo final de la materia Practica I,  se realizo mediante nodejs,express, java scrip y sqlite browser.

## Instalacion

'git clone https://github.com/ramlor/gitvamos.git'

'cd vamos'

'docker-compose up -d'

 ## Contacto
 lorena.ramos@itscordoba.edu.ar

# # Procedimientos realizados para crear el proyecto
'CARPETAS 
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
codigo reutilizable, que son dependenicas que satisface lo que solicita package.json'



'lorena@lorena-h55ms2v:~$ sudo apt install nodejs
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
ERROR: npm v10.4.0 is known not to run on Node.js v10.19.0.  This version of npm supports the following node versions: `^18.17.0 || >=20.5.0`. You can find the latest version at https://nodejs.org/.'

'ERROR:
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
lorena@lorena-h55ms2v:~$ express --view=ejs vamos'
                                                                                                                                        
   'create : vamos/
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
                           ^'

'SyntaxError: Unexpected token .
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
=> Close and reopen your terminal to start using nvm or run the following to use it now:'

'export NVM_DIR="$HOME/.config/nvm"
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
ERROR: npm v10.4.0 is known not to run on Node.js v10.19.0.  This version of npm supports the following node versions: `^18.17.0 || >=20.5.0`. You can find the latest version at https://nodejs.org/.'

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

# # ARCHIVO: Docker-compose

lorena@lorena-h55ms2v:~/vamos$ git init
Inicializado repositorio Git vacío en /home/lorena/vamos/.git/
lorena@lorena-h55ms2v:~/vamos$ git remote add origin https://github.com/ramlor/gitvamos.git
lorena@lorena-h55ms2v:~/vamos$ git status
En la rama master

No hay commits todavía

Archivos sin seguimiento:
  (usa "git add <archivo>..." para incluirlo a lo que se será confirmado)
        .gitignore
        README.MD
        app.js
        bin/
        package-lock.json
        package.json
        persona.db
        public/
        routes/
        views/

no hay nada agregado al commit pero hay archivos sin seguimiento presentes (usa "git add" para hacerles seguimiento)
lorena@lorena-h55ms2v:~/vamos$ git add .
lorena@lorena-h55ms2v:~/vamos$ git commit -m "comenzando proyecto"
[master (commit-raíz) c07bef4] comenzando proyecto
 18 files changed, 2602 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.MD
 create mode 100644 app.js
 create mode 100755 bin/www
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 persona.db
 create mode 100644 public/stylesheets/style.css
 create mode 100644 routes/index.js
 create mode 100644 routes/users.js
 create mode 100644 views/agregar.ejs
 create mode 100644 views/busqueda.ejs
 create mode 100644 views/delete.ejs
 create mode 100644 views/edit.ejs
 create mode 100644 views/error.ejs
 create mode 100644 views/index.ejs
 create mode 100644 views/personas.ejs
 create mode 100644 views/resultados.ejs
lorena@lorena-h55ms2v:~/vamos$ git origin master
git: 'origin' no es un comando de git. Mira 'git --help'.
lorena@lorena-h55ms2v:~/vamos$ git push origin master
Enumerando objetos: 25, listo.
Contando objetos: 100% (25/25), listo.
Compresión delta usando hasta 4 hilos
Comprimiendo objetos: 100% (21/21), listo.
Escribiendo objetos: 100% (25/25), 27.37 KiB | 3.42 MiB/s, listo.
Total 25 (delta 1), reusado 0 (delta 0)
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/ramlor/gitvamos.git
 * [new branch]      master -> master
lorena@lorena-h55ms2v:~/vamos$ git commit -m "actualizado"
En la rama master
Cambios no rastreados para el commit:
  (usa "git add <archivo>..." para actualizar lo que será confirmado)
  (usa "git restore <archivo>..." para descartar los cambios en el directorio de trabajo)
        modificados:     README.MD

Archivos sin seguimiento:
  (usa "git add <archivo>..." para incluirlo a lo que se será confirmado)
        docker-compose.yml

sin cambios agregados al commit (usa "git add" y/o "git commit -a")
lorena@lorena-h55ms2v:~/vamos$ git add .
lorena@lorena-h55ms2v:~/vamos$ git commit -m "actualizado"
[master 1e294ac] actualizado
 2 files changed, 33 insertions(+), 6 deletions(-)
 create mode 100644 docker-compose.yml
lorena@lorena-h55ms2v:~/vamos$ git push origin master
Enumerando objetos: 6, listo.
Contando objetos: 100% (6/6), listo.
Compresión delta usando hasta 4 hilos
Comprimiendo objetos: 100% (4/4), listo.
Escribiendo objetos: 100% (4/4), 806 bytes | 806.00 KiB/s, listo.
Total 4 (delta 2), reusado 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/ramlor/gitvamos.git
   c07bef4..1e294ac  master -> master
lorena@lorena-h55ms2v:~/vamos$ git branch feature/personas
lorena@lorena-h55ms2v:~/vamos$ git checout
git: 'checout' no es un comando de git. Mira 'git --help'.

El comando más similar es
        checkout
lorena@lorena-h55ms2v:~/vamos$ git checkout
lorena@lorena-h55ms2v:~/vamos$ git branch feature/personas
fatal: Una rama llamada 'feature/personas' ya existe.
lorena@lorena-h55ms2v:~/vamos$ git checkout
lorena@lorena-h55ms2v:~/vamos$ git checkout feature/personas
Cambiado a rama 'feature/personas'
lorena@lorena-h55ms2v:~/vamos$ 



## IMAGEN DOCKER

lorena@lorena-h55ms2v:~/vamos$ docker login -u loreits/crudnodejs
Password: 
Error response from daemon: Get "https://registry-1.docker.io/v2/": unauthorized: incorrect username or password
lorena@lorena-h55ms2v:~/vamos$ docker image ls
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
hello-world   latest    9c7a54a9a43c   10 months ago   13.3kB
lorena@lorena-h55ms2v:~/vamos$ docker build -t loreits/crudnodejs:1.0 .
[+] Building 27.1s (9/9) FINISHED                             docker:default
 => [internal] load build definition from Dockerfile                    0.5s
 => => transferring dockerfile: 121B                                    0.0s
 => [internal] load metadata for docker.io/library/node:18-slim         2.9s
 => [internal] load .dockerignore                                       0.3s
 => => transferring context: 2B                                         0.0s
 => [1/4] FROM docker.io/library/node:18-slim@sha256:7642244621c75012  11.3s
 => => resolve docker.io/library/node:18-slim@sha256:7642244621c75012a  0.2s
 => => sha256:7642244621c75012ab49a03156639537fd7ab654 1.21kB / 1.21kB  0.0s
 => => sha256:4b0f3d811ff3b3636eaba9ff0cc300d4977fa4de 1.37kB / 1.37kB  0.0s
 => => sha256:563795a7d8518a67cdbfa6e2b16df86945e0d0ae 7.62kB / 7.62kB  0.0s
 => => sha256:e1caac4eb9d2ec24aa3618e5992208321a9249 29.12MB / 29.12MB  2.2s
 => => sha256:6e4d260b7fd8f82e7e2c52fe4ad99468397055eb 3.35kB / 3.35kB  1.2s
 => => sha256:4710d45b431c340bb138d9f958216de60ae842 38.57MB / 38.57MB  3.8s
 => => extracting sha256:e1caac4eb9d2ec24aa3618e5992208321a92492aef5fe  2.6s
 => => sha256:346c1f9a56bddf7d296ef6dd069ebe21142b3a4d 2.67MB / 2.67MB  4.0s
 => => sha256:bca7b3bb079fd08a17860905ac43633c94d5037f4de3 452B / 452B  4.7s
 => => extracting sha256:6e4d260b7fd8f82e7e2c52fe4ad99468397055eb2e489  0.0s
 => => extracting sha256:4710d45b431c340bb138d9f958216de60ae84265b6ffc  2.5s
 => => extracting sha256:346c1f9a56bddf7d296ef6dd069ebe21142b3a4dcdc38  0.2s
 => => extracting sha256:bca7b3bb079fd08a17860905ac43633c94d5037f4de3d  0.0s
 => [internal] load build context                                       5.5s
 => => transferring context: 13.61MB                                    4.9s
 => [2/4] WORKDIR /app                                                  3.5s
 => [3/4] COPY . /app                                                   1.6s
 => [4/4] RUN npm install                                               5.2s
 => exporting to image                                                  0.9s
 => => exporting layers                                                 0.9s
 => => writing image sha256:618e52a4aa1f0f5e404089b591402049f7486006c2  0.0s
 => => naming to docker.io/loreits/crudnodejs:1.0                       0.1s
lorena@lorena-h55ms2v:~/vamos$ docker push loreits/crudnodejs:1.0
The push refers to repository [docker.io/loreits/crudnodejs]
2f273f42f751: Preparing 
5ec6a63c523c: Preparing 
a913260235b2: Preparing 
7c0b4acdf325: Preparing 
864a2e9512f8: Preparing 
91875cfadb69: Waiting 
b1cf80d308ef: Waiting 
ceb365432eec: Waiting 
denied: requested access to the resource is denied
lorena@lorena-h55ms2v:~/vamos$ docker build -t loreits/crudnodejs:1.0 .
[+] Building 9.7s (9/9) FINISHED                              docker:default
 => [internal] load build definition from Dockerfile                    0.1s
 => => transferring dockerfile: 121B                                    0.0s
 => [internal] load metadata for docker.io/library/node:18-slim         1.5s
 => [internal] load .dockerignore                                       0.1s
 => => transferring context: 2B                                         0.0s
 => [1/4] FROM docker.io/library/node:18-slim@sha256:7642244621c75012a  0.0s
 => [internal] load build context                                       0.4s
 => => transferring context: 117.17kB                                   0.1s
 => CACHED [2/4] WORKDIR /app                                           0.0s
 => [3/4] COPY . /app                                                   1.3s
 => [4/4] RUN npm install                                               4.6s
 => exporting to image                                                  0.9s
 => => exporting layers                                                 0.8s
 => => writing image sha256:36c958f834e3ddef75869864cbcc9bc26ead7a0f89  0.0s
 => => naming to docker.io/loreits/crudnodejs:1.0                       0.1s
lorena@lorena-h55ms2v:~/vamos$ git commit -m "Fin"
En la rama master
Cambios no rastreados para el commit:
  (usa "git add <archivo>..." para actualizar lo que será confirmado)
  (usa "git restore <archivo>..." para descartar los cambios en el directorio de trabajo)
        modificados:     docker-compose.yml

Archivos sin seguimiento:
  (usa "git add <archivo>..." para incluirlo a lo que se será confirmado)
        Dockerfile

sin cambios agregados al commit (usa "git add" y/o "git commit -a")
lorena@lorena-h55ms2v:~/vamos$ git add .
lorena@lorena-h55ms2v:~/vamos$ git commit -m "Fin"
[master b655b52] Fin
 2 files changed, 22 insertions(+), 1 deletion(-)
 create mode 100644 Dockerfile
lorena@lorena-h55ms2v:~/vamos$ git push origin master
Enumerando objetos: 6, listo.
Contando objetos: 100% (6/6), listo.
Compresión delta usando hasta 4 hilos
Comprimiendo objetos: 100% (4/4), listo.
Escribiendo objetos: 100% (4/4), 564 bytes | 564.00 KiB/s, listo.
Total 4 (delta 2), reusado 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/ramlor/gitvamos.git
   30dee63..b655b52  master -> master
lorena@lorena-h55ms2v:~/vamos$ git push origin  v1.0
Everything up-to-date
lorena@lorena-h55ms2v:~/vamos$ git status
En la rama master
nada para hacer commit, el árbol de trabajo está limpio
lorena@lorena-h55ms2v:~/vamos$