name: Winnie
description: >
  Winnie is a modular AI assistant powered by Gemini via LangChain,
  capable of intelligent, context-aware conversations. It remembers
  past interactions and is easily extendable for additional AI tools or workflows.

features:
  - Intelligent, context-aware conversations with Gemini
  - Modular MVC architecture
  - Persistent or in-memory conversation memory
  - Easily extendable for tools, APIs, or workflows
  - Async and production-ready design
  - REST API endpoint for chat interactions

project_structure:
  - app/
      - main.py: "API entrypoint"
      - routes/: "API routes"
      - controllers/: "Controllers"
      - services/: "Business logic / AI calls"
      - models/: "Pydantic schemas & ORM models"
      - core/: "Agent setup, DB, DB session"
      - utils/: "Logger, helpers"
  - init_db.py: "DB initialization (optional)"
  - requirements.txt
  - .env.example: "API keys and configs"
  - README.md

setup:
  - Clone the repository:
      - git clone https://github.com/yourusername/winnie.git
      - cd winnie
  - Create and activate virtual environment:
      - python -m venv venv
      - source venv/bin/activate
  - Install dependencies:
      - pip install -r requirements.txt
  - Configure environment variables:
      - Copy .env.example to .env
      - Set OPENAI_API_KEY=your_openai_api_key
  - Optional: Initialize database:
      - python init_db.py

usage:
  - Run server:
      - uvicorn app.main:app --reload
  - Send a chat request:
      curl -X POST http://127.0.0.1:8000/chat/ \
           -H "Content-Type: application/json" \
           -d '{"message": "Hello Winnie!"}'
  - Sample response:
      response: "Hello! How can I assist you today?"

extending_winnie:
  - Add tools, APIs, or workflows in services/
  - Integrate embeddings or semantic memory
  - Extend controllers/routes for multiple endpoints
  - Add authentication, logging, or analytics

license:
  type: MIT
  year: 2025
