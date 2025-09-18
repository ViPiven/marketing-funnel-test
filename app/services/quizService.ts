export async function sendQuizEmail(email: string) {
  const res = await fetch("/api/quiz", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    throw new Error(`Failed to send email: ${res.status}`);
  }

  return res.json();
}
