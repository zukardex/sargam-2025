# Use Node.js 20 image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all source files
COPY . .

# Expose Vite's development port (3000 by default)
EXPOSE 3000

# Run Vite in development mode
CMD ["npm", "run", "dev"]
