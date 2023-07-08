var acc = document.getElementsByClassName("accordion-button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        // Before toggling the clicked accordion, close all others.
        for (var j = 0; j < acc.length; j++) {
            if (acc[j] !== this) { // Don't close the accordion being clicked
                acc[j].classList.remove("active");
                acc[j].nextElementSibling.style.maxHeight = null;
            }
        }

        // Now, toggle the clicked accordion
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
