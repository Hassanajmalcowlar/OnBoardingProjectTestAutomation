import http from "k6/http";
import { sleep } from "k6";
import { config } from "./config.js";
export const options = {
  vus: 100,
  duration: "15s",
};
export default function () {
  const payload = {
    userName: "Admin",
    password: "admin123",
  };
  http.post(`${config.baseUrl}/index.php/auth/validate`, payload);
  sleep(1);
}
