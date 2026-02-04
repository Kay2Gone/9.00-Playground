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
    console.log("Pass");
    startP();
  }
 else {
  alert("no");
  console.log("Not Compatible. Haulting..");
  return 1;
 }
}

function startP() {
 alert("test");
 return 0;
}
