# CampusConnect

[![Project Status: In Progress](https://img.shields.io/badge/status-in%20progress-green.svg)](https://github.com/your-username/campus-connect)
[![Build Status](https://img.shields.io/badge/build-pending-lightgrey.svg)](https://github.com/your-username/campus-connect/actions)

CampusConnect is a cloud-native microservices platform designed for students. It combines real-time collaboration with essential campus services like event management and a lost & found board.

The primary focus of this project is not just the application features, but to serve as a comprehensive **showcase of modern DevOps and cloud-native infrastructure skills**. It demonstrates a deep understanding of containerization, orchestration, CI/CD, and observability in a distributed system.

---

### Core Architectural Pillars

This project is built around four key principles of modern software engineering:

*   **📦 Microservices Architecture:** The system is decomposed into small, independent, and loosely coupled services, each responsible for a specific business domain.
*   **🐳 Containerization & Orchestration:** All services are containerized using Docker and will be orchestrated in a Kubernetes cluster for scalability and resilience.
*   **🚀 CI/CD Automation:** A complete CI/CD pipeline using GitHub Actions automates the building, testing, and deployment of all microservices.
*   **📊 Observability:** The system is designed for high observability with a centralized stack for metrics (Prometheus), logging, and distributed tracing (Jaeger).

### Technology Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React, React Router, Axios | Modern, component-based UI |
| **Backend** | Node.js, Express.js | Building lightweight, efficient microservices |
| **Database**| MongoDB | NoSQL database for flexible data modeling |
| **Real-time**| Socket.IO | Real-time chat functionality |
| **Containerization**| Docker, Docker Compose | Packaging services into portable containers |
| **Orchestration**| Kubernetes (Minikube/K3s) | Automating deployment and scaling |
| **CI/CD** | GitHub Actions | Fully automated build & deploy pipeline |
| **Observability**| Prometheus, Grafana, Jaeger | Metrics, Dashboards, and Distributed Tracing |
| **Service Mesh**| Istio / Linkerd | Security, Traffic Management, and mTLS |

### Architecture Overview

The system consists of several independent microservices that communicate via REST APIs and a central API Gateway.

*   **API Gateway:** The single entry point for all frontend requests, handling routing and authentication.
*   **Auth Service:** Manages user registration, login, and JWT issuance.
*   **Events Service:** Handles creation and management of campus events.
*   **Lost & Found Service:** Powers the digital lost and found board.
*   **Chat Service:** Manages real-time communication via WebSockets.

*(A visual architecture diagram will be added in `/docs/architecture.png`)*

---

### 🚧 Project Status: Phase 1 - Foundational Setup 🚧

The project is currently in its initial phase. The core structure is in place, and the foundational services are containerized.

-   [x] Repository & Monorepo Structure
-   [x] Code Quality Tooling (ESLint, Prettier)
-   [x] Full API Contract Definition
-   [x] Containerized Skeletons for Backend & Frontend
-   [ ] **Next:** Phase 2 - MVP Feature Development
-   [ ] **Planned:** Phase 3 - Kubernetes Deployment & CI/CD
-   [ ] **Planned:** Phase 4 - Service Mesh & Observability

---

### Getting Started (Local Development)

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

#### Prerequisites

You must have the following tools installed:
*   Git
*   Node.js (v16 or higher)
*   Docker and Docker Desktop

#### 1. Clone the Repository

```bash
git clone https://github.com/your-username/campus-connect.git
cd campus-connect
```

#### 2. Install Dependencies

This project uses npm workspaces. Run the installation command from the root directory.

```bash
npm install
```

#### 3. Configure Environment Variables

Each service requires its own `.env` file for configuration.

*   **Auth Service:** Create a `.env` file in `/packages/services/auth/`. You can copy the example:
    ```
    cp packages/services/auth/.env.example packages/services/auth/.env
    ```

#### 4. Build and Run the Containers

We will build and run the containerized skeletons for the Auth service and the Frontend.

*   **Build the Auth Service Image:**
    ```bash
    docker build -t campus-connect/auth-service ./packages/services/auth
    ```

*   **Build the Frontend Image:**
    ```bash
    docker build -t campus-connect/frontend ./packages/frontend
    ```

*   **Run the Containers:**
    ```bash
    # Run the backend auth service
    docker run -d -p 8001:8000 --name auth-service campus-connect/auth-service

    # Run the frontend service
    docker run -d -p 3000:80 --name frontend campus-connect/frontend
    ```

You should now be able to access:
*   **Frontend:** [http://localhost:3000](http://localhost:3000)
*   **Auth Service Health Check:** [http://localhost:8001/api/auth/health](http://localhost:8001/api/auth/health)

*(Note: In future phases, a `docker-compose.yml` file will be added to simplify this process.)*

### API Documentation

The full API contract for all microservices is defined in our shared design document.
> **[...]**

---

### Team Members

| Member | GitHub Profile |
| :--- | :--- |
| **Member 1 Name** | [null-dreams](https://github.com/null-dreams) |
| **Member 2 Name** | [Aaratrika-Shelly](https://github.com/Aaratrika-Shelly) |
