
FROM node:20
LABEL author="shirokodev <lethanhtrung.trungle@gmail>"
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 2222
CMD ["npm", "start"]