window.addEventListener("load", (event) => {
  currentUserAgent = navigator.userAgent;
  allowedAgents = ["Playstation 4", "9.00"];

  if (isUserAgentAllowed(currentUserAgent)) {
    alert("Pass");
  } else {
    alert("Not a Playstation. Tools will not work.");
  }
});

function uaCheck() {
  alert(cuurentUserAgent);
}

function isUserAgentAllowed(userAgent) {
  return allowedAgents.some((agent) => userAgent.includes(agent));
}

function parseJS() {
  alert("parser will go here later");
}

function payloadListener() {
  if (isUserAgentAllowed(currentUserAgent)) {
    alert("Try sending payload to port 9020.");
  } else {
    alert("You must be on Playstation to use this tool.");
  }
}
