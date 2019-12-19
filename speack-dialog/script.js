// speack dialog script js v.1 Developer Javados
console.time('speed speack dialog script js');

// подключаемся к API
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
var synth = window.speechSynthesis;

// создаем массив всех используемых системой цветов
var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];
// создаем шаблон
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

// инициализируем встроенный интерфейс контроллера для распознавания речи
var recognition = new SpeechRecognition();
// инициализируем список обьектов SpeechGrammar
var speechRecognitionList = new SpeechGrammarList();

speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'ru-RU';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var responseNode = document.querySelector('.response');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');

// var colorHTML= '';
// colors.forEach(function(v, i, a){
//   // console.log(v, i);
//   colorHTML += '<span style="background-color:' + v + ';width:20%;display:inline-block;padding:3px 6px;margin:4px 8px;border-radius:3px;">' + v + '</span>';
// });
// hints.innerHTML = '<div style="width:100%;font-size:22px;padding:12px 15px;text-align:center;";>Кликни в любом месте и скажи название цвета </div>'+ colorHTML + '.';

window.onclick = function() {
    recognition.start();
  }

recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The [last] returns the SpeechRecognitionResult at the last position.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object

  var last = event.results.length - 1;
  var color = event.results[last][0].transcript;
  var spkResponse = spkLogica(color);

  console.log(color);

  diagnostic.textContent = color;
  bg.style.backgroundColor = color;
  responseNode.textContent = spkResponse;

  var utterThis = new SpeechSynthesisUtterance(spkResponse);
    utterThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
    }

  synth.speak(utterThis);
//   console.log('Confidence: ' + event.results[0][0].confidence);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function(event) {
  diagnostic.textContent = "I didn't recognise that color.";
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}


// end speack dialog script js
console.timeEnd('speed speack dialog script js');