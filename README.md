# 🚀 Enterprise ERP System with AI Analytics

<div align="center">
  
  <!-- Animated 3D Cube (Pure CSS) -->
  <div class="cube-container" style="width: 100px; height: 100px; perspective: 500px; margin: 50px auto;">
    <div class="cube" style="width: 100%; height: 100%; position: relative; transform-style: preserve-3d; animation: rotate 10s infinite linear;">
      <div style="position: absolute; width: 100px; height: 100px; background: rgba(0, 116, 217, 0.7); border: 2px solid white; transform: rotateY(0deg) translateZ(50px);"></div>
      <div style="position: absolute; width: 100px; height: 100px; background: rgba(255, 65, 54, 0.7); border: 2px solid white; transform: rotateY(90deg) translateZ(50px);"></div>
      <div style="position: absolute; width: 100px; height: 100px; background: rgba(46, 204, 64, 0.7); border: 2px solid white; transform: rotateY(180deg) translateZ(50px);"></div>
      <div style="position: absolute; width: 100px; height: 100px; background: rgba(255, 220, 0, 0.7); border: 2px solid white; transform: rotateY(-90deg) translateZ(50px);"></div>
      <div style="position: absolute; width: 100px; height: 100px; background: rgba(177, 13, 201, 0.7); border: 2px solid white; transform: rotateX(90deg) translateZ(50px);"></div>
      <div style="position: absolute; width: 100px; height: 100px; background: rgba(0, 0, 0, 0.7); border: 2px solid white; transform: rotateX(-90deg) translateZ(50px);"></div>
    </div>
  </div>

  <style>
    @keyframes rotate {
      from { transform: rotateX(0deg) rotateY(0deg); }
      to { transform: rotateX(360deg) rotateY(360deg); }
    }
  </style>

  **A full-stack ERP system with AI-driven analytics**  
  *Built with Spring Boot, React, Oracle, and FastAPI*  
  ![Java](https://img.shields.io/badge/Java-ED8B00?style=flat&logo=java&logoColor=white)
  ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
  ![Kafka](https://img.shields.io/badge/Kafka-231F20?style=flat&logo=apache-kafka&logoColor=white)

</div>

---

## ✨ Features
- **Payroll Processing**: Spring Batch + Kafka for async high-volume transactions.
- **AI Forecasting**: Python/FastAPI microservice for demand prediction.
- **Real-time UI**: React with Web Workers for CSV exports.
- **Database**: Oracle partitioning for billion-row scalability.

---

## 🛠️ Tech Stack
| Layer          | Technologies                          |
|----------------|---------------------------------------|
| **Frontend**   | React, TypeScript, Redux Toolkit      |
| **Backend**    | Spring Boot, Kafka, Hibernate         |
| **Database**   | Oracle, MySQL, Redis (Cache)          |
| **AI/ML**      | FastAPI, Scikit-learn                 |
| **DevOps**     | Docker, GitHub Actions                |

---

## 🚀 Quick Start
```bash
# Backend (Spring Boot)
cd backend && mvn spring-boot:run

# Frontend (React)
cd frontend && npm start

# AI Service (FastAPI)
docker-compose up -d ai-service
