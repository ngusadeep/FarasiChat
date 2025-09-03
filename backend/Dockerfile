FROM oven/bun:latest

WORKDIR /app

# Copy package files including lock
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy all source files
COPY . .

EXPOSE 3000

# Start NestJS in dev mode with hot reload
CMD ["bun", "run", "start:dev", "--watch"]
