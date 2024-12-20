import axios from "axios";

export const DOMAIN = "https://elearning0706.cybersoft.edu.vn";
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 3000,
});

http.interceptors.request.use((req) => {
  req.headers = { ...req.headers };
  return req;
});

http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    switch (err?.response.status) {
      case 400:
        {
          alert("Wrong data");
          // navigateHistory.push("/admin");
        }
        break;
      case 404:
        {
          alert("Not found");
          // navigateHistory.push("/admin");
        }
        break;
      case 401:
        {
          alert("Your token is invalid.");
          // navigateHistory.push("/admin");
        }
        break;
      case 403:
        {
          alert("You do not have sufficient access rights.");
          // navigateHistory.push("/");
        }
        break;

      case 500:
        {
          alert("error in sever");
          // navigateHistory.push("/admin");
        }
        break;
    }

    return Promise.reject(err);
  }
);

export function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
export function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
export function deleteCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
