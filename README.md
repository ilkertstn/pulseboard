# 📊 PulseBoard

PulseBoard is a **modern SaaS analytics dashboard** built with **Next.js**, **React**, and **Tailwind CSS**.  
It showcases real-world dashboard patterns such as metrics overview, data visualization, role-based access control, and theme management.

This project was designed as a **production-oriented frontend case study**, focusing on scalable UI architecture and best practices.

---

## 🚀 Live Demo

🔗 **Live:** https://pulseboard.vercel.app  
🔐 **Demo login:**  
- **Admin:** `admin@mail.com`  
- **Viewer:** `user@mail.com`  

> Any email containing **“admin”** is treated as **Admin** for demo purposes.

---

## ✨ Features

### 🔐 Authentication & Authorization
- Client-side authentication simulation
- Role-based access control (**Admin / Viewer**)
- Route protection and redirect handling

### 📈 Analytics Dashboard
- Key metrics overview (users, revenue, growth, activity)
- Active users **line chart** with date range toggle (7d / 30d)
- Feature usage **bar chart**
- Subscription plan distribution **pie chart**

### 🧾 Data Tables
- Searchable and paginated events table
- Efficient handling of large datasets
- Clean and accessible table UI

### 🎨 UI & UX
- Dark / Light mode with system preference detection
- Theme persistence using `localStorage`
- Fully responsive, mobile-first layout
- Hydration-safe rendering for Next.js App Router

### 🧩 Architecture Highlights
- Component-based and reusable UI structure
- Custom hooks and context-based state management
- Clear separation of data, UI, and logic layers
- SaaS-oriented dashboard patterns

---

## 🛠 Tech Stack

**Frontend**
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS (v4 – CSS-based theming)
- Recharts (data visualization)

**State & Patterns**
- React Context
- Role-based rendering
- Client-side routing guards

**Tooling**
- Git
- Vercel (deployment)

---

## 🧠 Key Concepts Demonstrated

- SaaS dashboard UX patterns
- Data-driven UI rendering
- Role-based UI authorization
- Dark / Light theme management
- Hydration-safe Next.js patterns
- Scalable frontend architecture

---

## 📂 Project Structure

src/
├─ app/
│ ├─ dashboard/
│ └─ login/
├─ components/
│ ├─ charts/
│ ├─ tables/
│ └─ ui/
├─ context/
├─ lib/
├─ types/


---

## 🧪 Demo Notes

- All analytics data is **mocked** for demonstration purposes
- Designed to be easily replaceable with real APIs
- Authentication logic simulates real SaaS behavior

---

## 🎯 Why PulseBoard?

PulseBoard demonstrates how a modern frontend developer can:
- Design scalable analytics dashboards
- Handle complex UI and state flows
- Apply real SaaS product patterns
- Write clean, maintainable, production-ready code

---

## 📌 Author

**İlker Taştan**  
Frontend Developer  
🔗 GitHub: https://github.com/ilkertstn  

---

