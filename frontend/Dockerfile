FROM node:latest

MAINTAINER Yoonhee Jo

ENV NODE_ENV=development
ENV PORT=3000

COPY . /var/www
WORKDIR /var/www

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]

#docker build -f Dockerfile -t yoonjo/node .
#docker run -d --name my-mongodb mongo
#docker run -d -p 3000:3000 --link my-mongodb:mongodb yoonjo/node