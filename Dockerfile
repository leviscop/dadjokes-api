FROM node
WORKDIR /usr/src/app
COPY package.json app.js /usr/src/app
RUN cd /usr/src/app \
    && npm install
CMD "node" "app.js"
