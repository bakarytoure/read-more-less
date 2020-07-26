function lire_plus_ou_moin() {
  var d = document.getElementById("dots");
  var plus_de_text = document.getElementById("more");
  var monBoutton = document.getElementById("mybutton");
  if (d.style.display === "none") {
    d.style.display = "inline";
    plus_de_text.style.display = "none";
    monBoutton.innerHTML = "Read more";
  } else {
    d.style.display = "none";
    plus_de_text.style.display = "inline";
    monBoutton.innerHTML = "Read less";
  }
}
