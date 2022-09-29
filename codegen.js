// Append the qrcode script
var script = document.createElement("script");
script.src = "https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js";
document.head.appendChild(script);

const qrcode = document.querySelectorAll(".qrcode-cont button");
qrcode.forEach((el, index) => {
    el.addEventListener("click", handleOnClickQrCode);
});

function handleOnClickQrCode(e) {

    var divCont = e.target.parentNode

    if (divCont.children[0].value == "") return;

    // Remove span inside div
    divCont.children[2].innerHTML = "";

    // Div in cui verra creato il qr code - Input with the value
    var qrcode = new QRCode(divCont.children[2], {
    	text: divCont.children[0].value,
    	width: 180,
    	height: 180,
    	colorDark : "#000",
    	colorLight : "#fff",
    	correctLevel : QRCode.CorrectLevel.H
    });
}