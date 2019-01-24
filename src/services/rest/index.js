const axios = require('axios')

const serverGet = (url, data) => {
  return fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "omit", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        //body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses response to JSON
}

const getCompanyFromCode = async companyCode => {
  return fetch(`http://172.17.0.1:8080/api/companies?code=${companyCode}`)
    .then(response => response.json())
}

export const company = {
  getCompanyFromCode
}
