function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}
function cc() {
var p = document.getElementById("pass1").value ;
 sessionStorage.setItem( "userPasswordCheck", p )
  if (p == "") {
    document.getElementById("pass1").style.backgroundColor = "#ffcccb";
    return false;
  }
  else{
      cc2();
  }
}
function c2() {
    document.getElementById("pass1").style.backgroundColor = "white";
  }
  function cc2() {
      var ab = localStorage.getItem("userPassword");
      var ba = sessionStorage.getItem("userPasswordCheck");
      if( ab == ba ){
        show('Page2','Page1');
      }
else{
  cg();
}
  }
  window.onload = cc2;
  function cg() {
    var baa = sessionStorage.getItem("userPasswordCheck");
    if( baa == null ){
return false
    }
    else{
      document.getElementById("pass1").style.backgroundColor = "#ffcccb";
      alert("Attempt saved to cloud")
    }
  }