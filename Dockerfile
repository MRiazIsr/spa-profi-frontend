# Stage 1: Build the React application
FROM node:latest as build

# Set the working directory in the builder stage
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install app dependencies inside the container
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the application using a web server
FROM nginx:alpine

# Copy the build output from the builder stage to the Nginx server
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Copy the Nginx configuration file to the container
COPY nginx.conf /etc/nginx/nginx.conf
# Expose the port Nginx is listening on
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]