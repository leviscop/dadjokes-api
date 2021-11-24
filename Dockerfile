FROM node
WORKDIR /usr/src/app
COPY app.js /usr/src/app
RUN cd /usr/src/app \
    && npm init -y \
    && npm install node-fetch
CMD "node" "app.js"
