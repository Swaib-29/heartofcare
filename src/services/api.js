const viteEnv = (typeof import.meta !== "undefined" && import.meta.env) || {};
const API_BASE_URL = viteEnv.VITE_API_BASE_URL ?? "";

export async function postToApi(path, payload) {
  if (!API_BASE_URL) {
    return { submitted: false, mode: "development", message: "No API is configured. Your information was not sent or saved." };
  }
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
  return response.json();
}
