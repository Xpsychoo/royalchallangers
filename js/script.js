function myFunction() {
    var sidebar = document.getElementById("responsiveNav");
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
    } else if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
}