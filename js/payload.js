window.addEventListener("load", (event) => {
 currentUserAgent = navigator.userAgent;
 allowedAgents = ["Playstation 4", "9.00"];

  if (isUserAgentAllowed(currentUserAgent)) {
//
  } else {
//
  }
});

function checkUA() {
if (isUserAgentAllowed(currentUserAgent)) {
    alert("Compatible! Proceeding...");
    startP();
  }
}

function startP() {
setTimeout(startP, 2000);
alert("test");
}
