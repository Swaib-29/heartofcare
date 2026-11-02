import { postToApi } from "./api.js";

export function submitVolunteerApplication(values) {
  return postToApi("/volunteer-applications", values);
}
