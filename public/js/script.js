window.onload = function() {
    var devour = document.querySelectorAll("#devour");

    devour.forEach(function(el) {
        el.addEventListener('click', function() {
            console.log(el.dataset.id);
        });
    });
};