FROM mhart/alpine-node AS builder


ARG ENV
ENV NODE_ENV=$ENV

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]