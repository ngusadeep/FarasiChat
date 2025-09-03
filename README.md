# FarasiChat - AI Assistant

**FarasiChat** is a modular AI assistant powered by a fine-tuned **Gemma model** (`Nadhari/gemma-3n-swahili-E2B-it`).
It provides intelligent, context-aware Swahili conversations, built on a **NestJS modular backend** and a **React + Vite frontend**.
The system integrates with **PostgreSQL** (via TypeORM), is fully Dockerized, and designed for production deployments.


## Features

* Intelligent, context-aware Swahili conversations
* Fine-tuned model integration with Hugging Face Transformers
* **Backend (NestJS)** with modular architecture (`users/`, `auth/`, `chat/`, …)
* **Frontend (React + Vite)** with reusable components and API integration
* PostgreSQL with TypeORM + migrations
* Authentication & authorization (JWT-based)
* Async, scalable, and production-ready design
* Docker + Docker Compose setup for easy deployment


## Project Structure

```
farasichat/
│── backend/                     # NestJS backend (modular)
│   ├── src/
│   │   ├── main.ts              # App entrypoint
│   │   ├── app.module.ts        # Root module
│   │   ├── config/              # DB, env, logger setup
│   │   ├── common/              # Interceptors, guards, filters
│   │   ├── modules/
│   │   │   ├── users/           # User module
│   │   │   │   ├── users.controller.ts
│   │   │   │   ├── users.service.ts
│   │   │   │   ├── users.module.ts
│   │   │   │   └── entities/user.entity.ts
│   │   │   ├── auth/            # Auth module (JWT, guards, strategies)
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── auth.module.ts
│   │   │   │   └── strategies/jwt.strategy.ts
│   │   │   ├── chat/            # Chat module (AI assistant logic)
│   │   │   │   ├── chat.controller.ts
│   │   │   │   ├── chat.service.ts
│   │   │   │   └── chat.module.ts
│   │   └── utils/               # Helpers
│   ├── test/                    # Unit & e2e tests
│   ├── Dockerfile
│   ├── ormconfig.ts
│   ├── package.json
│   └── .env.example
│
│── frontend/                    # React + Vite frontend
│   ├── src/
│   │   ├── components/          # UI components
│   │   ├── pages/               # App pages
│   │   ├── hooks/               # Custom React hooks
│   │   ├── services/            # API calls (Axios/fetch)
│   │   └── App.tsx              # Root component
│   ├── public/
│   ├── vite.config.ts
│   ├── package.json
│   └── .env.example
│
│── docker-compose.yml
│── README.md
│── LICENSE
```


## Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/farasichat.git
cd farasichat
```


### 2. Backend Setup (NestJS)

```bash
cd backend
npm install
cp .env.example .env
```

Run migrations & start dev server:

```bash
npm run migration:run
npm run start:dev
```


### 3. Frontend Setup (React + Vite)

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```


### 4. Run with Docker (recommended)

```bash
docker-compose up --build
```


### 5. Usage

#### API (NestJS Backend)

```bash
POST /api/chat
{
  "prompt": "Habari yako FarasiChat?"
}
```

Response:

```json
{
  "response": "Nzuri sana! Naweza kukusaidia vipi leo?"
}
```

#### Frontend (React + Vite)

* Open browser at: `http://localhost:5173`


## Extending FarasiChat

* Add new backend modules in `backend/src/modules/`
* Add new React components or pages in `frontend/src/`
* Extend authentication, logging, or analytics features
* Store chat history and user data in PostgreSQL


## License

MIT License © 2025
