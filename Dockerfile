FROM mhart/alpine-node AS builder

WORKDIR /app

COPY . ./

ARG ENV

RUN npm install --force

ENV NODE_ENV=$ENV

RUN npm run build --env=$ENV

FROM nginx:alpine

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY /dist /usr/share/nginx/html
COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]