# 🚗 Car Service App

A lightweight web application to manage rally crews and their service times. Built using **TypeScript**, **Vanilla JavaScript**, and **Bulma CSS** for UI styling. Data is persisted with `localStorage`.

---

## 🌐 Live Preview

Check out the live demo here:

👉 [https://car-service-seven-tau.vercel.app/](https://car-service-seven-tau.vercel.app/)

> Hosted with Vercel

## 📦 Getting Started

```bash
git clone https://github.com/Garfieldas/car-service
cd car-service
npm install
npm run build
npm run serve
```

## 📸 Screenshots

### ⏱️ Main Page
Main Page on load

![Main Page](https://i.ibb.co/BV7CJf8p/Screenshot-2025-05-30-at-23-52-26.png
)

### 🖼️ Add Crew Form
Shows the modal form where users can input crew number, driver, co-driver, car, and service times.

![Add Crew Modal](https://i.ibb.co/MDcCTnxZ/Screenshot-2025-05-30-at-23-53-26.png)

---

### 🧾 Crew Card Display
Once submitted, the crew is displayed as a card with all information and service timing.

![Crew Card](https://i.ibb.co/Z6RbTJcP/Screenshot-2025-05-30-at-23-53-12.png)

---

## 📦 Features

- Add crews with details:
  - Crew number
  - Driver
  - Co-driver
  - Car
  - Service start and end times
- Display crews in tables
- Automatically calculates service time duration
- Data saved in localStorage (persists after page reload)

---

## 🧰 Technologies Used

- TypeScript
- HTML & Vanilla JavaScript (ES Modules)
- Bulma CSS Framework
- localStorage API
- Vite for bundling 

---

### 🗂️ Folder Overview

- **components/** – Reusable presentational elements like modals, notifications, or card/table renderers.
- **features/** – App logic that relates to user interactions or advanced functionality (e.g., stopwatch).
- **utils/** – Application logic and data management (e.g., crew creation, storage helpers).
- **main.ts** – Initializes the app, sets up event listeners, and coordinates all parts.
- **style.css** – Styling layer, often extending Bulma's CSS.
- **vite-env.d.ts** – Enables TypeScript features in Vite projects.

---


## 🙋‍♂️ Author

Created by **Grafield** 2025

