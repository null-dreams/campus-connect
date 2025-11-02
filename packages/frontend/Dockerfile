# Stage 1: Builder
# Use a specific Node.js version for consistency
FROM node:22-alpine AS builder

# Set the working directory
WORKDIR /app

# Install pnpm globally within the build stage
RUN npm install -g pnpm

# Copy dependency definition files
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm's --frozen-lockfile for CI/CD
RUN pnpm install --frozen-lockfile --prod=false

# Copy the rest of the application source code
COPY . .

# Build the React application for production
RUN pnpm build

# Stage 2: Server
# Use a lightweight Nginx server
FROM nginx:stable-alpine

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static files from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]