![Status](https://img.shields.io/badge/status-active-development-blue)

# CollabDocs - Real-time Collaborative Document Platform (WIP)

CollabDocs is a full-stack collaborative document platform built with **React + NestJS**.
This repository focuses on **engineering-level project structure**, **DevOps-ready local environment**, and a roadmap toward **real-time editing** with OT/CRDT.

> Status: Day 1 Complete - Infrastructure & scaffolding ready

## 🎯 Project Goals

- User authentication (Register / Login / Logout)
- Document CRUD + permission system
- Favorites collection
- Real-time collaborative editing (planned)
- Production-grade DevOps & monitoring (planned)

## 🛠 Tech Stack

### Backend

- NestJS (TypeScript)
- MySQL (users, documents, permissions)
- MongoDB (operation history - planned)
- Redis (cache/session - planned)
- Elasticsearch (search - planned)
- WebSocket (Socket.io - planned)
- JWT authentication

### Frontend

- React 18 + TypeScript (strict)
- Vite
- TailwindCSS (planned)
- React Router v6
- React Query (planned)

### DevOps

- Docker + Docker Compose
- Git commit convention (commitizen + commitlint + husky)

## 📁 Project Structure

collabdocs/
├── backend/ # NestJS backend
├── frontend/ # React frontend
├── docker/ # Docker configurations
├── docker-compose.yml # Local infra stack
└── docs/ # Project documentation (planned)

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- Docker Desktop (Windows/macOS/Linux)

### 1) Start infrastructure (MySQL/Redis/Mongo/ES)

```bash
docker compose up -d
Ports:

MySQL: localhost:3307

Redis: localhost:6379

MongoDB: localhost:27017

Elasticsearch: localhost:9200

2) Backend setup
cd backend
npm install
npm run start:dev


Backend API:

http://localhost:3000

3) Frontend setup
cd frontend
npm install
npm run dev


Frontend:

http://localhost:5173

🧪 Testing (Backend)
cd backend
npm run test

🧾 Git Commit Convention

This repo uses Conventional Commits via Commitizen + Commitlint.

cd backend
npm run commit


Example:

feat(project-setup): complete day 1 backend setup

🗺 Roadmap

 Auth module (register/login/logout)

 Favorites module

 Document permission model

 WebSocket collaboration

 OT/CRDT algorithm implementation

 Monitoring: Prometheus + Grafana

 CI/CD: GitHub Actions

 VPS deployment: Nginx + SSL
```
