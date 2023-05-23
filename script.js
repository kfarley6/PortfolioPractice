let itemOne = document.getElementById('itemOne')
let itemTwo = document.getElementById('itemTwo');
let itemThree = document.getElementById('itemThree');

function hoverImageOne() {
    itemTwo.style.filter = "blur(2px)";
    itemThree.style.filter = "blur(2px)";
}

function hoverImageTwo() {
    itemOne.style.filter = "blur(2px)";
    itemThree.style.filter = "blur(2px)";
}

function hoverImageThree() {
    itemOne.style.filter = "blur(2px)";
    itemTwo.style.filter = "blur(2px)";
}

function resetBlur() {
    itemOne.style.filter = "blur(0px)";
    itemTwo.style.filter = "blur(0px)";
    itemThree.style.filter = "blur(0px)";
}

itemOne.onmouseover = hoverImageOne;
itemOne.onmouseout = resetBlur;
itemTwo.onmouseover = hoverImageTwo;
itemTwo.onmouseout = resetBlur;
itemThree.onmouseover = hoverImageThree;
itemThree.onmouseout = resetBlur;
