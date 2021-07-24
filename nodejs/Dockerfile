FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN ["chmod", "+x", "/usr/src/app/entrypoint.sh"]

EXPOSE 3000

ENTRYPOINT [ "/usr/src/app/entrypoint.sh" ]