# Build stage
FROM node:14 AS build

# Install Angular CLI
RUN npm install -g @angular/cli@14.2.1

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build the application
RUN ng build --prod --verbose

# Production stage
FROM nginx:1.19-alpine

# Copy the built application from the build stage
COPY --from=build /app/dist/ /usr/share/nginx/html/

# Expose the port for the application
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
