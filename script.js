function createCloseButton(li){
    let span = document.createElement("SPAN")
    span.className="close"
    li.appendChild('span')
}
document.querySelectorAll('li').forEach(createCloseButton);
function add()
