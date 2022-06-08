FROM node:14-alpine as builder
WORKDIR '/app'
COPY package.json .
COPY .env .
COPY nginx/ ./
RUN npm install --production

COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/.env /usr/share/nginx/html/build/.env
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
