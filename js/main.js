  //-------------------------\\
 //......UserAgent Check......\\
//-----------------------------\\

window.addEventListener("load", (event) => {
  currentUserAgent = navigator.userAgent;
  allowedAgents = ["Playstation 4", "9.00"];

  if (isUserAgentAllowed(currentUserAgent)) {
    alert("Pass: " + currentUserAgent);
  } else {
    alert("Not a Playstation. Tools will not work.");
  }
});

function uaCheck() {
  if (isUserAgentAllowed(currentUserAgent)) {
    alert(currentUserAgent + "  |  You are on compatable hardware");
  } else {
    console.log(
      currentUserAgent + "  |  Please open the tool on a Playstation 4",
    );
  }
}

function isUserAgentAllowed(userAgent) {
  return allowedAgents.some((agent) => userAgent.includes(agent));
}

  //-------------------------\\
 //.......Simple  Tools.......\\
//-----------------------------\\

function writeMem() {
  console.log("function not implemented");
}

function executeJS() {
  console.log("Attempting to execute JS...");
  var input = document.querySelector('input[placeholder="javascript..."]');
  if (!input) {
    console.log("No JS input found");
    return;
  }
  var code = input.value || "";
  if (!code.trim()) {
    console.log("No code to execute");
    return;
  }

  // try to evaluate as an expression first to capture a value
  try {
    var fn = new Function('"use strict"; return (' + code + ")");
    var res = fn();

    try {
      var _r =
        typeof res === "undefined"
          ? "undefined"
          : typeof res === "object"
            ? JSON.stringify(res)
            : String(res);
    } catch (se) {
      _r = String(res);
    }
    console.log("Result: " + _r);
    return res;
  } catch (e) {
    // if expression failed, try executing as statements
    try {
      var fn2 = new Function('"use strict"; ' + code);
      var r2 = fn2();
      try {
        var _r2 =
          typeof r2 === "undefined"
            ? "undefined"
            : typeof r2 === "object"
              ? JSON.stringify(r2)
              : String(r2);
      } catch (se2) {
        _r2 = String(r2);
      }
      console.log("Executed. Result: " + _r2);
      return r2;
    } catch (err) {
      console.error(err);
      alert("Script error: " + (err && err.message));
    }
  }
}

function proccessList() {}

// Written by Kay2Gone. hit me on one of my socials to contribute or ask any questions :)
// Note: Many things do not work at the moment as they are still being written, but i will be updating as much as possible.
