window.addEventListener("load", (event) => {
  currentUserAgent = navigator.userAgent;
  allowedAgents = ["Playstation 4", "9.00"];

  if (isUserAgentAllowed(currentUserAgent)) {
    alert("Pass");
  } else {
    alert("Not a Playstation. Tools will not work.");
    alert(currentUserAgent);
  }
});

function isUserAgentAllowed(userAgent) {
  return allowedAgents.some((agent) => userAgent.includes(agent));
}
