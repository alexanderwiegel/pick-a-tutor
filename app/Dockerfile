FROM node:16.13.0

WORKDIR /usr/src/app

COPY backend ./
RUN npm install

EXPOSE 3000

ENV NPM_CONFIG_LOGLEVEL verbose
CMD ["node", "index.js"]