function loadClient() {
    gapi.client.setApiKey("AIzaSyBI6hpyHbsOD7Qk2e2C3d0Ti5kLW59QPc4");
    return gapi.client.load("https://civicinfo.googleapis.com/$discovery/rest?version=v2")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded before calling this method.
  function execute() {
    return gapi.client.civicinfo.representatives.representativeInfoByAddress({
      "address": "seattle",
      "includeOffices": true,
      "roles": [
        "legislatorUpperBody"
      ]
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
//   gapi.load("client");
