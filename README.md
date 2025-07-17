# 🔮 Gemini Clone

A sleek, AI-powered Gemini Chat Clone built using **Next.js 14**, **Tailwind CSS**, and **React Context API**. This project simulates a Gemini-style chat interface with a modern UI, fixed topbar, and real-time input handling.

---

## 🌐 Live Preview

🚀 Coming Soon...  
> Deployment planned via [Vercel](https://vercel.com)

---

## 📸 Demo

### 🖼️ Interface Screenshots

<img src="/media/CHatareaa.png" width="500" alt="Chat Area Screenshot" />
<img src="/media/GeminiHome.png" width="500" alt="Home Page Screenshot" />

### 🎥 Demo Video

<video src="/media/chatVedio.mp4" width="500" controls>Your browser does not support video playback.</video>

---

## ✨ Features

- 🧠 Gemini-style chat simulation
- 💬 Real-time user input & dynamic chat updates
- 🎨 Beautiful responsive UI using Tailwind CSS
- 🌗 Dark/Light mode toggle
- 🔐 Environment-based secure API integration
- ♻️ Global state handling with React Context

---

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- React Context API

---

## 📁 Project Structure

gemini_clone/
│
├── public/
│ └── media/ # Contains images and videos for UI
│
├── src/
│ ├── components/ # Reusable components like Sidebar, Topbar
│ ├── context/ # React Context for state management
│ ├── app/ # Next.js 14 App Router structure
│ └── lib/ # API integration logic (e.g., runChat.js)
│
├── .env.local # Your secret API key (Not pushed to Git)
├── .gitignore # Ignores .env.local, node_modules, etc.
├── package.json
└── tailwind.config.js


---

## 🔐 Environment & API

To keep your API key safe:

- Store it in `.env.local`
- Access using `process.env.YOUR_API_KEY`
- Make sure `.env.local` is listed in `.gitignore`

**✅ Verified Safe:**  
If `git ls-files | grep .env.local` returns nothing, the file was not pushed. You're safe.

---

## 🚀 Getting Started

 **1. Clone the repository:**
   ```bash
   git clone https://github.com/your-username/gemini_clone.git
   cd gemini_clone
   
**2. Install dependencies:**
npm install
 
**3.Set your API key:**
Create .env.local:
GEMINI_API_KEY=your_api_key_here

**4.Run the dev server:**
npm run dev

**🧪 To-Do / Improvements**
✅ Theme toggle

**⏳ Video integration**

⏳ Deploy to Vercel

⏳ Add loading spinner

**📬 Feedback**
Found a bug or want to contribute? Feel free to open an issue or pull request!

**🧑‍💻 Author**
Made with ❤️ by Your Parul Gupta

