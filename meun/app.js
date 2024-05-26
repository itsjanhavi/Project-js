document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const menuItems = document.querySelectorAll(".menu-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-id");

            menuItems.forEach(item => {
                if (category === "all" || item.classList.contains(category)) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
