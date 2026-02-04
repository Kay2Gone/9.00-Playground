(function(){
  var out = document.querySelector('.boxout');
  if(!out) return;
  var _log = console.log;
  console.log = function(){
    _log.apply(console, arguments);
    out.value += Array.prototype.slice.call(arguments).join(' ') + '\n';
    out.scrollTop = out.scrollHeight;
  };
})();
