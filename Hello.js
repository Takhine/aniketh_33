
function sayHello () {
  var name =
   document.getElementById("name").value;
   var message = "<h2>Hello " + name + "!</h2>";
   if(name=="parmar")
   {
 var title = 
      document
        .querySelector("#title")
        .textContent;
    title = " Get lost ";
    document
        .querySelector("h1")
        .textContent = title;
   }

  // document
  //   .getElementById("content")
  //   .textContent = message;

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "student") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title += " & Lovin' it!";
    document
        .querySelector("h1")
        .textContent = title;
  }

}