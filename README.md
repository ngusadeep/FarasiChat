# FarasiChat - AI Assistant

**FarasiChat** is a modular AI assistant powered by a fine-tuned **Gemma model** (`Nadhari/gemma-3n-swahili-E2B-it`).  
It provides intelligent, context-aware Swahili conversations, is built on a clean **MVC architecture**, and integrates with **PostgreSQL** for persistence.  
The system is fully Dockerized, async-ready, and designed for production deployments.  


## Features

- Intelligent, context-aware Swahili conversations  
- Fine-tuned model integration with Hugging Face Transformers  
- Modular **MVC architecture** (models, views, controllers, routes)  
- PostgreSQL database with SQLAlchemy ORM + Alembic migrations  
- REST API endpoints for chat and user management  
- Async, scalable, and production-ready design  
- Docker + Docker Compose setup for easy deployment  

## Project Structure

```

farasichat\_backend/
│── app/
│   ├── main.py              # API entrypoint
│   ├── routes/              # API routes
│   ├── controllers/         # Controllers (business logic)
│   ├── services/            # AI service (chat model, inference)
│   ├── models/              # ORM models (SQLAlchemy)
│   ├── schemas/             # Pydantic schemas
│   ├── core/                # Config, DB setup, logger
│   └── utils/               # Helpers
│── migrations/              # Alembic migrations
│── tests/                   # Unit tests
│── Dockerfile
│── docker-compose.yml
│── requirements.txt
│── .env.example             # Env variables (DB URL, model name, etc.)
│── README.md

````


## Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/farasichat.git
cd farasichat_backend
````

### 2. Create and activate a virtual environment

```bash
python -m venv venv
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure environment variables

Copy `.env.example` to `.env` and update values:

```env
DATABASE_URL=postgresql://postgres:password@db:5432/farasi
MODEL_NAME=Nadhari/gemma-3n-swahili-E2B-it
```

### 5. Run with Docker (recommended)

```bash
docker-compose up --build
```


## Usage

### Run the server locally

```bash
uvicorn app.main:app --reload
```

### Send a chat request

```bash
curl -X POST http://127.0.0.1:8000/chat/ \
     -H "Content-Type: application/json" \
     -d '{"prompt": "Habari yako FarasiChat?"}'
```

### Sample response

```json
{
  "response": "Nzuri sana! Naweza kukusaidia vipi leo?"
}
```


## Extending FarasiChat

* Add new tools, APIs, or workflows in `services/`
* Extend `controllers/` and `routes/` for new endpoints
* Store chat history in PostgreSQL via ORM models
* Add authentication, logging, or analytics


## License

MIT License © 2025

```
