
// TODO require precognition

(function(window) {
  if (window.Isocode) { return; }

  var mode = window.IsocodeMode || 'server';

  window.Isocode = {
    mode: function() {
      var args = arguments;
      return args.length ? mode = args[0] : mode;
    }
  };

  // on start
  if (mode == 'server') {
    Precognition.record();
  } else {
    Precognition.replay();
  }

})(window);
