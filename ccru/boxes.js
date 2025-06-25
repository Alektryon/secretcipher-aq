function toggleBoxes() {
  var checkBox = document.getElementById("showidentity");
  var div = document.getElementById("identity");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showcthulhu");
  var div = document.getElementById("cthulhu");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showaxsys");
  var div = document.getElementById("axsys");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showatlantis");
  var div = document.getElementById("atlantis");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showbarker");
  var div = document.getElementById("barker");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showsarkon");
  var div = document.getElementById("sarkon");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showcybergothic");
  var div = document.getElementById("cybergothic");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  var checkBox = document.getElementById("showpandemonium");
  var div = document.getElementById("pandemonium");
  if (checkBox.checked == true){
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
  input.dispatchEvent(new Event('input'));
}
document.addEventListener('DOMContentLoaded', function() {
   toggleBoxes();
}, false);
