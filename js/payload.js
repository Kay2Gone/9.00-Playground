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
 else {
  alert("0")
 }
}

function startP() {
alert("test");
}
