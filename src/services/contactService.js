import { postToApi } from "./api.js";

export function submitContactEnquiry(values) {
  return postToApi("/contact-enquiries", values);
}
