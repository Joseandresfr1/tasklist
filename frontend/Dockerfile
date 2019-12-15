# Use a lighter version of Node as a parent image
FROM node:10.13-alpine
WORKDIR /frontend
COPY package*.json /frontend/
RUN yarn install
COPY . /frontend/
CMD ["npm", "start"]