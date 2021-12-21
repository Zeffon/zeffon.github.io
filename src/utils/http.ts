import qs from 'qs'

interface Config extends RequestInit {
  data?: object
}

export const http = async (url: string, {data, headers, ...customConfig }: Config = {}) => {
  const config = {
    method: "GET",
    headers: {
      "content-Type": data ? "application/json" : ""
    },
    ...customConfig
  }

  if (config.method.toUpperCase() === "GET") {
    url += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || []);
  }

  return window.fetch(`${url}`, config).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  })
}

export const useHttp = () => {
  return (...[url, config]: Parameters<typeof http>) => http(url, {...config});
}