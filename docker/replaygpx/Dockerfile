from node:8

RUN apt-get update
RUN apt-get -y install libzmq-dev
RUN mkdir /usr/src/app/
COPY package.json /usr/src/app/
WORKDIR /usr/src/app/
RUN npm install
COPY index.js /usr/src/app/
COPY demo.gpx /usr/src/app/

CMD ["npm", "start"]
