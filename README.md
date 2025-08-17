````markdown
# Winnie - FastAPI AI Agent

Winnie is a starter FastAPI AI agent with persistent memory using Neon DB (Postgres).

## Setup

1. Clone the repo
2. Create `.env` from `.env.example` and add your Neon DB URL and OpenAI API key
3. Install dependencies:
```bash
pip install -r requirements.txt
````

1. Initialize DB:

```bash
python init_db.py
```

2. Run server:

```bash
uvicorn app.main:app --reload
```

POST to `/chat/` with JSON:

```json
{ "message": "Hello Winnie!" }
```

```

---

### ✅ Features in Starter Template
- **FastAPI + MVC structure**  
- **Persistent memory with Neon DB**  
- **LangChain + OpenAI LLM**  
- Ready for **extensions**:  
  - Tools, web search, PDF reading  
  - Vector DB / embeddings for semantic memory  
  - Multi-agent orchestration  

---

Do you want me to do that next?
```
