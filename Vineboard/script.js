var keys = {
  65: 'c',
  87: 'csharp',
  83: 'd',
  69: 'dsharp',
  68: 'e',
  70: 'f',
  84: 'fsharp',
  71: 'g',
  89: 'gsharp',
  72: 'a',
  85: 'asharp',
  74: 'b',
  75: 'c2',
  79: 'c2sharp',
  76: 'd2',
  80: 'd2sharp',
  186: 'e2',
  222: 'f2',
  221: 'f2sharp',
  220: 'g2'
};

var sustain = false;
var sustainedNotes = [];

// var audioContext = new webkitAudioContext;

// var audioElement = document.querySelector('audio');
// var mediaSourceNode = context.createMediaElementSource(audioElement);
// mediaSourceNode.connect(filter);
// filter.connect(context.destination);

// var mediaElement = document.getElementById('mediaElementID');
// var sourceNode = context.createMediaElementSource(mediaElement);
// sourceNode.connect(audioContext.destination);
 
// this.gainNode.connect(audioContext.destination);

var onkeydown = function(aEvent) {
    console.log(aEvent.keyCode);

    // Don't intercept keyboard shortcuts
    if (aEvent.altKey
      || aEvent.ctrlKey
      || aEvent.metaKey
      || aEvent.shiftKey) {
      return;
    }

    if (aEvent.keyCode == 32) {
      sustain = true;
    } else {

      var key = keys[aEvent.keyCode];
      var robVid = document.getElementById(key);

      if (robVid) {
        robVid.classList.add('active');
        robVid.childNodes[1].play();
      }

    }

  }

  var onkeyup = function(aEvent) {

    // Don't intercept keyboard shortcuts
    if (aEvent.altKey
      || aEvent.ctrlKey
      || aEvent.metaKey
      || aEvent.shiftKey) {
      return;
    }

    if (aEvent.keyCode == 32) {
      sustain = false;
      // pause any vines that aren't currently being pressed
      sustainedNotes.forEach(function(note, i) {
        note.classList.remove('active');
        note.childNodes[1].pause();
      });
    } else {

      var key = keys[aEvent.keyCode];
      var robVid = document.getElementById(key);

      if (robVid) {
        if (sustain) {
          sustainedNotes.push(robVid);
        } else {
          robVid.classList.remove('active');
          robVid.childNodes[1].pause();
        }
      } 
    }
  }

window.onkeydown = onkeydown;
document.onkeydown = window.onkeydown;

window.onkeyup = onkeyup;
document.onkeyup = window.onkeyup;