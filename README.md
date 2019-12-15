
# tasklist
Aplicacion para llevar tus tareas mediante Docker
El Frontend esta realizado en React y el Backend en node/express
Se conecta a una BD mongo alojada en cloud.mongodb.com (MongoDB Atlas)
para garantizar la persistencia de la informacion

El proyecto consta de dos servicios, backend y frontend

Para su despliegue en docker debe:
  1) Tener instalado Docker y git
  2) Clonar el repositorio Tasklist mediante git clone
  3) Abrir una terminl dentro de la carpeta clonada
  5) Usar el comando:
  
    docker-compose up --build 
       
  6) Una vez  vea el mensaje "You can now view frontend in the browser"
    acceda a: http://localhost:8500/
  7) Para finalizar la ejecucion puede pulsar "CRTL + C" en la terminal

Se pueden iniciar los servicios localmente mediante:

       cd frontend
       npm start

y

       cd backend
       npm start


y posteriormente acceder a http://localhost:3000/
