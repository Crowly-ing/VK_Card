var info_block = document.getElementById('info');
var btn = document.getElementById('btn');

info_block.style.display = "none";

btn.addEventListener('click', press);

function press() {
    if (info_block.style.display == "none") {
        info_block.style.display = "block";
    } else {
        info_block.style.display = "none";
    }
}