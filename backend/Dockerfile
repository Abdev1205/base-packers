FROM node:18-alpine

WORKDIR /app

# Install OpenSSL for the current stage
RUN apk add --no-cache openssl

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy Prisma schema and generate the client
COPY prisma ./prisma
RUN npx prisma generate

# Copy the rest of the application
COPY . .

# # Build the TypeScript code
# RUN npm run build

EXPOSE 4000

CMD ["node", "dist/index.js"]
