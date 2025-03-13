function openTab(event, tabName) {
    let i, tabContent, tabButtons;
    
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
        tabContent[i].classList.remove("active");
    }
    
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }
    
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Set the first tab as active by default
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-button").click();
});