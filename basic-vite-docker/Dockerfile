FROM node:16
WORKDIR /metavolt
ENV PATH /metavolt/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
EXPOSE 8080
CMD ["npm", "run", "dev"]