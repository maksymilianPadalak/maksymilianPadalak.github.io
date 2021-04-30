async function sendHttpRequest(method, url, headers, data) {
  try {
    const response = await fetch(url, {
      method: method,
      headers: headers,
      body: data,
    });
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      return response.json().then((errData) => {
        console.log(errData);
        throw new Error("Something went wrong - server-side");
      });
    }
  } catch (error) {
    console.log(errData);
    throw new Error("Something went wrong!");
  }
}

export default {sendHttpRequest}

//in order to use this function in other scripts change script type to type="module" 