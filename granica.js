function myFunction() {
    var x = document.getElementById('shou');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
    window.open("https://www.google.hr","_blank","top=100,width=400,height=600")
}
var w = window.innerWidth;
var h = window.innerHeight;
console.log(w,h)
