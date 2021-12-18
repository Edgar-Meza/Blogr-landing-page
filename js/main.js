function padreSelect() {
    console.log('hhh');
    document.getElementById('start').style.backgroundColor = "transparent";
    document.getElementById('start').style.color = '#FFFFFF';
    document.getElementById('start').style.border = '1px solid #FFFFFF';
}
function removeStyle() {
    document.getElementById('start').removeAttribute('style');
}
function openMenu() {
    document.getElementById('options').style.display = 'block';
    document.getElementById('log').style.display = 'block';
    document.getElementById('open').style.display = 'none';
    document.getElementById('close').style.display = 'block';
}
function closeMenu() {
    document.getElementById('options').style.display = 'none';
    document.getElementById('log').style.display = 'none';
    document.getElementById('open').style.display = 'block';
    document.getElementById('close').style.display = 'none';
}