$(document).ready(function() {
	console.log("this is from")
if (localStorage.getItem("login")) {
  $('#login_btn').hide();
} else {
  $('#logout_btn').hide();
}
 
 $("#login").click(function() {
    localStorage.setItem("login", true);
    window.location.assign("index.html")
 });

 $('#logout_btn').click(function() {
    localStorage.removeItem("login");
    $("#login_link").attr("herf", "Login.html");
 });

 $("#register").click(function() {
    window.location.assign("login.html")
 });
});