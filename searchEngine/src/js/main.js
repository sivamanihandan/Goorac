class AudioVisualizer {
  constructor( audioContext, processFrame, processError ) {
    this.audioContext = audioContext;
    this.processFrame = processFrame;
    this.connectStream = this.connectStream.bind( this );
    navigator.mediaDevices.getUserMedia( { audio: true, video: false } )
      .then( this.connectStream )
      .catch( ( error ) => {
        if ( processError ) {
          processError( error );
        }
      } );
  }

  connectStream( stream ) {
    this.analyser = this.audioContext.createAnalyser();
    const source = this.audioContext.createMediaStreamSource( stream );
    source.connect( this.analyser );
    this.analyser.smoothingTimeConstant = 0.5;
    this.analyser.fftSize = 32;

    this.initRenderLoop( this.analyser );
  }

  initRenderLoop() {
    const frequencyData = new Uint8Array( this.analyser.frequencyBinCount );
    const processFrame = this.processFrame || ( () => {} );

    const renderFrame = () => {
      this.analyser.getByteFrequencyData( frequencyData );
      processFrame( frequencyData );

      requestAnimationFrame( renderFrame );
    };
    requestAnimationFrame( renderFrame );
  }
}

const visualMainElement = document.querySelector( 'main' );
const visualValueCount = 16;
let visualElements;
const createDOMElements = () => {
  let i;
  for ( i = 0; i < visualValueCount; ++i ) {
    const elm = document.createElement( 'div' );
    visualMainElement.appendChild( elm );
  }

  visualElements = document.querySelectorAll( 'main div' );
};
createDOMElements();

const init = () => {
  // Creating initial DOM elements
  const audioContext = new AudioContext();
  const initDOM = () => {
    visualMainElement.innerHTML = '';
    createDOMElements();
  };
  initDOM();

  // Swapping values around for a better visual effect
  const dataMap = { 0: 15, 1: 10, 2: 8, 3: 9, 4: 6, 5: 5, 6: 2, 7: 1, 8: 0, 9: 4, 10: 3, 11: 7, 12: 11, 13: 12, 14: 13, 15: 14 };
  const processFrame = ( data ) => {
    const values = Object.values( data );
    let i;
    for ( i = 0; i < visualValueCount; ++i ) {
      const value = values[ dataMap[ i ] ] / 255;
      const elmStyles = visualElements[ i ].style;
      elmStyles.transform = `scaleY( ${ value } )`;
      elmStyles.opacity = Math.max( .25, value );
    }
  };

  const processError = () => {
    visualMainElement.classList.add( 'error' );
    visualMainElement.innerText = 'Please allow access to your microphone in order to see this demo.\nNothing bad is going to happen... hopefully :P';
  }

  const a = new AudioVisualizer( audioContext, processFrame, processError );
};
//End of voice visuvalizer
//start of search page autofocus
function searchPageAutoFocus() {
  var qw = localStorage.getItem("data");
  if( qw == null ){
    document.getElementById("qw").innerHTML = "<center><br><br><br><br><img src='https://cdn.dribbble.com/users/1785190/screenshots/3906047/search.gif'" + 'style="width:200px;hight:auto"' + "><br>You can block custom words on <b>Settings>History Controls>Custom Word Blocking</b><br>You can view back searches under <b> Data in Search</b> option </center>"
    localStorage.setItem("data", "<center>Siva Manikandan</center>" );
  }
  else{
    document.getElementById("dggfdf").focus();
    document.getElementById("qw").style.display = "none";
  }
}
//Start of previus search result
var nkfjfd = localStorage.getItem("data");
document.getElementById("before").innerHTML = nkfjfd;
function ss(){
  var q = document.getElementById("dggfdf").value;
  var p = localStorage.getItem("data");
  var g =   "<p type='button'" + 'style="font-size:16px"' + 'onclick="handleClick(event)">' + "🕒 " + q  + "," + p +"</p>";
  var res = g.replace(",", "<hr>");
  localStorage.setItem("data", res );
  document.getElementById("before").innerHTML = res ;
  ws();
}
// In response to https://www.facebook.com/groups/programmershub1/permalink/3140659149326773

function handleClick(event) {
  // if the click target is not a button, just return
  // so nothing below runs
  if (event.target.tagName !== "P") {
    return;
  }

  // get the button text
  let buttonValue = event.target.innerText;
  
  // display the value in #result
  document
    .querySelector("#dggfdf")
    .value = buttonValue.replace("🕒", "" );
    jghhh()
}

// add event listener to the group of buttons
// and not every single button
document
  .querySelector(".buttons")
  .addEventListener("click", handleClick);
  //start of voice recoganation
  function runSpeechRecognition() {
    // get output div reference
    var output = document.getElementById("dggfdf");
        // new speech recognition object
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
        // This runs when the speech recognition service starts
        recognition.onstart = function() {
        };
        recognition.onspeechend = function() {
          $('#myModal').modal('hide')
            recognition.stop();
        }
        // This runs when the speech recognition service returns result
        recognition.onresult = function(event) {
            var transcript = event.results[0][0].transcript;
           output.value = transcript;
           ffdrhffh() ;
        };
         // start recognition
         recognition.start();
  }
  //RECOGANATIOM 2
  function runSpeechRecognition2() {
    // get output div reference
    var output = document.getElementById("dggfdf");
        // new speech recognition object
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
        // This runs when the speech recognition service starts
        recognition.onstart = function() {
        };
        recognition.onspeechend = function() {
          $('#myModal').modal('hide')
            recognition.stop();
        }
        // This runs when the speech recognition service returns result
        recognition.onresult = function(event) {
            var transcript = event.results[0][0].transcript;
           output.value = transcript;
           ffdrhffh2() ;
        };
         // start recognition
         recognition.start();
  }
//redirect to result page
var input = document.getElementById("dggfdf");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
   ffdrhffh();
  }
});
function  ffdrhffh() {
  var y = document.getElementById("dggfdf").value ;
  if( y == "" ) {
    alert("Please fill out the  search box to continue")
  }
  else {
  jghhh();
  }
}
function jghhh() {
  var t = document.getElementById("dggfdf").value ;
  document.getElementById("asd").value = t;
  localStorage.setItem("res" , "https://www.bing.com/search?q=" + t );
  resr()
   ss()
   show('Page3','Page2');
   setTimeout(
    function(){
   responsiveVoice.speak(t)
     } , 1500);
}
function  ffdrhffh2() {
  var y = document.getElementById("dggfdf").value ;
  if( y == "" ) {
    alert("Please fill out the  search box to continue")
  }
  else {
  jghhh2();
  }
}
function jghhh2() {
  var t = document.getElementById("dggfdf").value ;
  document.getElementById("asd").value = t;
  localStorage.setItem("res" , "https://www.bing.com/search?q=" + t );
  resr()
   ss()
   show('Page3','Page1');
   setTimeout(
    function(){
   responsiveVoice.speak(t)
     } , 1500);
}

function login() {
  var pa = localStorage.getItem("userPassword");
  if( pa == null ){
 window.location.href = "pages/login/login.html";
  }

}
//bad word filter
function check_val(){
  var sd = localStorage.getItem("dataB");
  var up = sd.toUpperCase();
  var bad_words = up.split("✖️");
  var inp = document.getElementById("dggfdf").value;
 var check_text= inp.toUpperCase();
 var error=0;
 for(var i=0;i<bad_words.length;i++)
 {
  var val=bad_words[i];
  if(check_text.indexOf(val.toString())>-1){
   document.getElementById("dggfdf").style.backgroundColor = "red"
   location.reload();
   wordU();
  }
 }
}
function wordU() {
  var pyw = localStorage.getItem("dataW");
  if( pyw == "" ){
    localStorage.setItem("dataW","Appear here")
  }
  var d = new Date();
  var qw = document.getElementById("dggfdf").value;
  var py = localStorage.getItem("dataW");
  var ga =   "<p type='button'" + 'style="font-size:16px"' + '>' + "🕒 " + qw + "<br>" + d + "," + py + "</p>";
  var res = ga.replace(",", "<hr>");
  localStorage.setItem("dataW", res );
}
function ws(){
  
  var d = new Date();
  var q = document.getElementById("dggfdf").value;
  var p = localStorage.getItem("dataA");
  var g =   "<p type='button'" + 'style="font-size:16px"' + 'onclick="handleClick(event)">' + "🕒 " + q +"<br>" + d  + "," + p +"</p>";
  var res = g.replace(",", "<hr>");
  localStorage.setItem("dataA", res );
}
//hide voice icon if anything on search 
function hideIcon() {
  var v = document.getElementById("dggfdf").value;
if( v == "" ){
 document.getElementById("voicee").style.display ='block'
 document.getElementById("voicee").style = "margin-top:0.5px;position:relative"
}
else{
  document.getElementById("voicee").style.display = 'none'
}
}
//animation of a resultsection
onload=function() {	
	var lF = document.getElementById('hh').contentWindow;
	if(window.pageYOffset!=undefined){ //opera, firefox,& gecko browsers
		lF.onscroll = function(){
			document.getElementById('leftIn').value= lF.pageYOffset;
      var t = lF.pageYOffset;
      document.getElementById("rtr").style.marginTop =  -t;
      if(t > 58 ){
      document.getElementById("rtr").style.marginTop = "-48";
      document.getElementById("rtr").className = "bar99";
      document.getElementById("trt").style = "position:absolute;left: 50%;-webkit-transform: translateX(-50%);transform: translateX(-50%);width:100%;margin-top:-30px"
      document.getElementById("sear").innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/G_LOGO.png"' + 'class="voice"'+'style="left:2px">'
      document.getElementById("trt").style.backgroundColor = "#0031CB"; 
      document.getElementById("lk").style.display = "block"; 
    }
      else{
        document.getElementById("lk").style.display = "none"; 
        document.getElementById("sear").innerHTML = "&#xf002;"
        document.getElementById("rtr").className = "bar99";
        document.getElementById("trt").style ="background-color:rgba(255, 255, 255, 0);position:absolute;top:7.5px;left: 50%;-webkit-transform: translateX(-50%);transform: translateX(-50%);width:100%"; 
      }
		}
	}
	else{//IE	
  		if(lF.document.documentElement)lF= lF.document.documentElement; 
  		else lF=document.body;  		
 		lF.onscroll=function(){
			document.getElementById('leftIn').value= lF.scrollTop;
		}		
	}
  btime()
}
function resr() {
  var iframe = document.getElementById('hh');
  var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  innerDoc.getElementById("rt").src = localStorage.getItem("res")
  innerDoc.getElementById("myVideo").play()
}
//bed time controls
function btime() {
  var t =   localStorage.getItem("bTimeS");
  var p =   localStorage.getItem("bTimeE");
  var d = new Date();
   var h = d.getHours();
   var m = d.getMinutes();
   var c = h + ":" + m ;
   var cc = c.replace(":","")
 var tt = t.replace(":","")
 var pp = p.replace(":","")
   if(cc > tt && cc < pp ){
     location.href = "pages/bedTimeReminder/betTimeReminder.html"
 }
}