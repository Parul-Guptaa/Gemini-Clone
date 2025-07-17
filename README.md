# Gemini Clone 🔮✨

A sleek, AI-powered Gemini Chat clone built using **Next.js 14** with **Tailwind CSS**, simulating a chat interface with Gemini-like features. This project showcases responsive design, fixed topbar, real-time input handling, and state management using React Context.

---

## 🌐 Live Preview

> 🚀 Coming Soon...  
> We'll deploy it using [Vercel](https://vercel.com)

---

## 📸 Demo

### Interface Preview:

![Gemini Chat Area](/media/CHatareaa.png)
![Gemini Home Page](/media/GeminiHome.png)

> 🎥 For demo video:  
> Place your `.mp4` video inside `/public/media`, but HTML `<img>` cannot show videos. To embed a video, use HTML5 video tag (see below):

```html
<video width="500" controls>
  <source src="/media/chatVedio.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
🚀 Features
🧠 Gemini-style chat simulation

💬 Real-time input and chat display

🎨 Modern, responsive UI with Tailwind CSS

🌙 Light/Dark theme toggle

🔐 Secure API key usage via .env.local

💡 Global state management using React Context API

🛠️ Tech Stack
Next.js 14

React

Tailwind CSS

Lucide Icons

Context API

📁 Project Structure
pgsql
Copy
Edit
Gemini-Clone/
├── public/
│   └── media/
│       ├── CHatareaa.png
│       ├── GeminiHome.png
│       └── chatVedio.mp4
├── app/
│   ├── layout.jsx
│   └── page.jsx
├── components/
│   ├── Sidebar.jsx
│   ├── Topbar.jsx
│   └── GeminiBody.jsx
├── context/
│   └── ContextProvider.jsx
├── lib/
│   └── gemini.js
├── styles/
│   └── globals.css
├── .env.local
├── README.md
└── package.json
📦 Installation & Setup
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/Gemini-Clone.git
cd Gemini-Clone
Install dependencies:

bash
Copy
Edit
npm install
Create .env.local file:

env
Copy
Edit
GOOGLE_API_KEY=your_gemini_api_key
Run the development server:

bash
Copy
Edit
npm run dev
Visit http://localhost:3000 🚀

⚠️ Notes
Ensure all media files (CHatareaa.png, GeminiHome.png, chatVedio.mp4) are inside the public/media folder.

When using images or video from /public, always start path with / (i.e., /media/filename.ext)

Video tags must use <video> not <img>.

📬 Contact
Made with ❤️ by Parul Gupta
GitHub: @parulgupta
LinkedIn: Parul Gupta

📜 License
This project is licensed under the MIT License - feel free to use and modify!

yaml
Copy
Edit

---










