# ⚽ eFootball PES Data Provider API

Ushbu loyiha eFootball (avvalgi PES) o'yinchilari va ma'lumotlarini taqdim etuvchi yuqori samarali API wrapper hisoblanadi. Loyiha Next.js (App Router) yordamida qurilgan va ma'lumotlarni real vaqt rejimida scraping qilish orqali taqdim etadi.

## 🚀 Live Demo
API manzili: [https://api-pes-db.vercel.app/](https://api-pes-db.vercel.app/)

## ✨ Xususiyatlari
* **Real-time Scraping:** PESDB va boshqa manbalardan eng so'nggi ma'lumotlarni olish.
* **Fast Response:** Ma'lumotlarni tezkor qayta ishlash va JSON formatida uzatish.
* **Mobile Ready:** Flutter yoki React Native ilovalari uchun tayyor backend.
* **Vercel Optimized:** Serverless funksiyalar orqali barqaror ishlash.

## 🛠 Texnologiyalar
* **Framework:** [Next.js 14](https://nextjs.org/)
* **Language:** TypeScript
* **Deployment:** [Vercel](https://vercel.com/)
* **Tools:** Cheerio (scraping uchun), Tailwind CSS (landing page uchun)

## 📡 API Endpoints (Yo'nalishlar)

Hozirda mavjud asosiy API yo'nalishlari:

| Method | Endpoint | Tavsif |
| :--- | :--- | :--- |
| `GET` | `/api/players` | Barcha o'yinchilar ro'yxatini olish |
| `GET` | `/api/player/[id]` | Maxsus o'yinchi haqida batafsil ma'lumot |
| `GET` | `/api/categories` | O'yinchi kategoriyalarini ko'rish |

## 💻 Mahalliy o'rnatish

Loyihani o'z kompyuteringizda ishga tushirish uchun:

1. Repozitoriyani klonlang:
   ```bash
   git clone [https://github.com/usmoxan-design/api_pes_db.git](https://github.com/usmoxan-design/api_pes_db.git)
