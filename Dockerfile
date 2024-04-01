
FROM node:18-alpine
LABEL author="shirokodev <lethanhtrung.trungle@gmail>"
WORKDIR /app
COPY package.json package-lock.json ./
RUN apk add --no-cache git \
    && npm install --frozen-lockfile \
    && npm cache clean
COPY . .
RUN npm run build
EXPOSE 2222
CMD ["npm", "start"]