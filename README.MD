# TRABAJO FINAL DE PRACTICA I : APP CRUD
Trabajo final de la materia Practica I, dictada por el profesor Luis Romano de la Tecnicatura Desarrollo de Software.
La aplicacion esta dividida en tres versiones:
1_ Tabla y funcionalidades de Persona.
2_ Tabla y funcionalidades de Oficina.
3_ Repositorio subido a Docker-hub.
Todo lo anterior se realizo con el fin de poder administrar datos basicos de personas y oficina a las cuales pertenece cada uno.
Los programas y/o recursos que se utilzo son: nodejs,express, java scrip, docker y sqlite browser.

## Requisitos previos
1_contar con sistema operativo Linux o Windows
2_Tener conexion a Internet
3_Tener instalado o bajar sqlBrowser,Docker,Visual Studio Code,etc.

## Instalacion
1_Clona el repositorio:

'git clone https://github.com/ramlor/gitvamos.git'

2_Instala las dependencias:

'cd vamos'

'npm install'

3_Configura cualquier archivo de entorno necesario.Ejemplo

'docker-compose up -d'



# # Estructura del Proyecto
'El proyecto cuenta con 5 carpetas fundamentales creadas con el express, acontinuacion se detalla brevemente el contenido de las mismas'
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
APP.JS:
es el archivo que genera express desde aqui llego al resto de mi proyecto.
***Luego se genera la carpeta 
NODE_MODULES
codigo reutilizable, que son dependenicas que satisface lo que solicita package.json'

## Reversionado
Se puede encontrar las versiones en : https://hub.docker.com/repository/docker/loreits/crudnodejs/general 
o ingresar a https://hub.docker.com/repository/docker/loreits/crudnodejs/general 
para colaborar con el reversionado del proyecto.

 ## Contacto
 
 Alumna: Ramos Lorena

 lorena.ramos@itscordoba.edu.ar 

 ## 


 
