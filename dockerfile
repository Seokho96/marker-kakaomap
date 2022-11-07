# STEP 1
# 1
FROM node:16 AS builder
# 2
WORKDIR /app
# 3
COPY package.json ./
# 4
RUN npm install
# 5
COPY ./ ./


#10
CMD ["node","app"]