function selectTab(tabname) {

    var tabcontent1 = document.getElementById("allEvent");
    var tabcontent2 = document.getElementById("yourEvent");
    var tab1 = document.getElementsByClassName("tab1");
    var tab2 = document.getElementsByClassName("tab2");

    if (tabname == "all") {
        tabcontent1.style.display = "block"
        tabcontent2.style.display = "none"
        tab1[0].classList.add("active");
        tab2[0].classList.remove("active");
    }
    else if (tabname == "yourevt") {
        tabcontent2.style.display = "block"
        tabcontent1.style.display = "none"
        tab1[0].classList.remove("active");
        tab2[0].classList.add("active");
    }


}