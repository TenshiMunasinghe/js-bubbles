var container = document.getElementById('container');
var positionBubbleRandomly = function (bubble, size) {
    bubble.style.top = (window.innerHeight - size * 2) * Math.random() + size + 1 + "px";
    bubble.style.left = (window.innerWidth - size * 2) * Math.random() + size + 1 + "px";
};
var createBubble = function () {
    var bubble = document.createElement('div');
    var size = Math.floor(Math.random() * (window.innerWidth / 7) + 50);
    var r = Math.floor(Math.random() * 255 + 1);
    var g = Math.floor(Math.random() * 255 + 1);
    var b = Math.floor(Math.random() * 255 + 1);
    bubble.style.width = bubble.style.height = size + "px";
    bubble.style.borderRadius = size / 2 + "px";
    bubble.style.background = "rgb(" + r + ", " + g + ", " + b + ")";
    positionBubbleRandomly(bubble, size);
    bubble.addEventListener('mouseover', function () {
        bubble.style.width = bubble.style.height = size * 2 + "px";
        bubble.style.borderRadius = size + "px";
    });
    bubble.addEventListener('mouseleave', function () {
        bubble.style.width = bubble.style.height = size + "px";
        bubble.style.borderRadius = size / 2 + "px";
    });
    container.appendChild(bubble);
    setTimeout(function () { return (bubble.style.opacity = Math.random().toString()); }, 500);
    setInterval(function () {
        positionBubbleRandomly(bubble, size);
    }, Math.random() * 500 + 1000);
    setTimeout(function () {
        bubble.style.opacity = '0';
        setTimeout(function () {
            bubble.removeEventListener('mouseover', function () {
                bubble.style.width = bubble.style.height = size * 2 + "px";
                bubble.style.borderRadius = size + "px";
            });
            bubble.removeEventListener('mouseleave', function () {
                bubble.style.width = bubble.style.height = size + "px";
                bubble.style.borderRadius = size / 2 + "px";
            });
            bubble.remove();
        }, 1000);
    }, Math.floor(Math.random() * 5000 + 5001));
};
setInterval(function () {
    setTimeout(createBubble, Math.random() * 1000 + 1);
}, 500);
