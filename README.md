
# tasklist
  Aplicacion para llevar tus tareas mediante Docker
  El Frontend esta realizado en React y el Backend en node/express
  Se conecta a una BD mongo alojada en cloud.mongodb.com (MongoDB Atlas)
  para garantizar la persistencia de la informacion

El proyecto consta de dos servicios, backend y frontend

# Ejecucion con Docker
Para su despliegue en docker debe:
  1) Tener instalado Docker y git
  2) Clonar el repositorio Tasklist mediante git clone
  3) Abrir una terminl dentro de la carpeta clonada
  5) Usar el comando:
  
              docker-compose up --build 
      
  5) En terminal deberia observar la ejecucion de las dos imagenes (ver Descripcion)
     con su respectiva etiqueta al inicio (frontend, backend).
     Estaran listas cuando el backend emita: 
     
              app running on port 5000
              
     Y el frontend:
     
              Compiled with warnings.
              
  6) Una vez  vea el mensaje "You can now view frontend in the browser"
    acceda a: http://localhost:8500/
  7) Para finalizar la ejecucion puede pulsar "CRTL + C" en la terminal
  
Nota: mas abajo se encuentra como ejecutar local


# Descripcion

  Para dockerizar tanto el backend como el frontend se utilizaron dos archivos "Dockerfile"
  los cuales estan dentro de sus respectivas carpetas. Luego en el directorio raiz, se uso el 
  archivo "docker-compose.yml" para orquestar la construccion de ambas imagenes , la creacion
  del contenedor y su ejecucion

# Ejecucion local

Se pueden iniciar los servicios localmente mediante:

       cd frontend
       npm start

y

       cd backend
       npm start

pero se debe cambiar el proxy segun sea el caso en la ruta

       tasklist/frontend/src/setupProxy.js
     
el archivo tiene esta apariencia:
  
       module.exports = function(app) {
        // PARA COORER LOCALMENTE

        app.use(proxy('/api/*', { target: 'http://backend:5000' }))

        // PARA COORER CON DOCKER

          //app.use(proxy('/api', { target: 'http://localhost:5000' }))
       }

y posteriormente acceder a http://localhost:3000/
