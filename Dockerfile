FROM node
WORKDIR /usr/src/app
COPY index.js /usr/src/app
RUN cd /usr/src/app \
    && npm init -y \
    && npm install node-fetch@2.0
CMD "npm" "start"
