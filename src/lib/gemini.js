export default async function runChat(prompt) {
  try {
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch from Gemini API route");
    }

    const data = await res.json();
    return data.text;
  } catch (error) {
    console.error("Client error:", error);
    return "Sorry, I couldn't get a response.";
  }
}
