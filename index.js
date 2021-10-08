var now_page = 0

function changePage(page_num){
    console.log(now_page, page_num);
    if(page_num == now_page)return false;
    else {
        console.log(document.getElementById("button_"+String(now_page)).classList, document.getElementById("button_"+String(page_num)).classList)
        document.getElementById("button_"+String(now_page)).classList.remove("button_now_page");
        document.getElementById("page_"+String(now_page)).style.display = "none";

        document.getElementById("button_"+String(page_num)).classList.add("button_now_page");
        document.getElementById("page_"+String(page_num)).style.display = "block";

        now_page = page_num;
        return true;
    }
}

function inputClass(){
    if(!changePage(0))return;
}

function generation(){
    if(!changePage(1))return;
}