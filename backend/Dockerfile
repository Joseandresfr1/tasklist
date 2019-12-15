# Use a lighter version of Node as a parent image
FROM node:10.13-alpine
WORKDIR /backend
COPY package*.json /backend/
RUN npm install
COPY . /backend/
CMD ["npm", "run","dev"]