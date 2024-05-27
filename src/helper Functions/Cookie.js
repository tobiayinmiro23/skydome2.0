export  const setCookie = (value) => {
    document.cookie = `skydome=${JSON.stringify(value)};expires=Thu, 18 Dec 2059 12:00:00 UTC;path=/`;
  };

export  const getCookie = () => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === 'skydome') {
             return JSON.parse(cookieValue);
        }
    }
    return null;
  };