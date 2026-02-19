# CollabDocs - System Architecture (WIP)

> Status: Day 1 - scaffolding + local infra (Docker Compose) ready  
> This document will be expanded along the roadmap.

---

## High-Level Architecture

> Note: Nginx/Load Balancer is planned for deployment stage.

┌─────────────┐
│ Browser │
│ (React/Vite)│
└──────┬──────┘
│ HTTP / WebSocket (planned)
▼
┌──────────────────────────────┐
│ NestJS Backend │
│ ┌────────────┐ ┌──────────┐ │
│ │ REST API │ │ WebSocket │ │
│ │ Controllers │ │ Gateway │ │
│ └─────┬──────┘ └─────┬────┘ │
│ │ │ │
│ ┌─────▼──────────────▼─────┐ │
│ │ Service Layer │ │
│ │ Auth / Documents / ... │ │
│ └──────────┬───────────────┘ │
└─────────────┼──────────────────┘
│
┌─────────┼─────────┐
│ │ │
▼ ▼ ▼
┌────────┐ ┌────────┐ ┌──────────────┐
│ MySQL │ │ Redis │ │ MongoDB │
│ Primary│ │ Cache │ │ (planned logs)│
└────────┘ └────────┘ └──────────────┘
│
▼
┌──────────────┐
│ Elasticsearch │ (planned search)
└──────────────┘

yaml
复制代码

---

## Components

### 1) Frontend (React)

- Responsibilities: UI rendering, user interactions, calling backend APIs
- Planned: real-time updates via WebSocket (Socket.io-client)
- State: React Query (planned), local state/hooks

### 2) Backend (NestJS)

- Responsibilities: business logic, authentication, document CRUD
- Architecture: modular monolith (modules by feature)
- Planned Modules:
  - Auth: JWT login/register/logout
  - Documents: CRUD + permissions
  - Collaboration: OT/CRDT (planned)
  - Search: Elasticsearch (planned)

### 3) Data Layer

- MySQL: users, documents, permissions
- Redis: cache/session (planned usage)
- MongoDB: operation history/snapshots (planned)
- Elasticsearch: full-text search (planned)

---

## Local Development Ports (Docker Compose)

- MySQL: `localhost:3307`
- Redis: `localhost:6379`
- MongoDB: `localhost:27017`
- Elasticsearch: `localhost:9200`

---

## OT / CRDT Collaboration Flow

Planned to be documented after the collaboration module is implemented.

---

## Security Architecture

Planned:

- JWT + refresh token strategy
- logout() clears localStorage (frontend) and invalidates tokens (backend planned)
- rate limiting / brute-force protection (planned)

---

## Deployment Architecture

Planned:

- Nginx reverse proxy
- SSL
- CI/CD pipeline
- monitoring (Prometheus/Grafana)
