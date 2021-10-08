var now_page = 0

function changePage(page_num){
    console.log(now_page, page_num);
    if(page_num == now_page)return;
    else {
        console.log(document.getElementById("button_"+String(now_page)).classList, document.getElementById("button_"+String(page_num)).classList)
        document.getElementById("button_"+String(now_page)).classList.remove("button_now_page");
        document.getElementById("button_"+String(page_num)).classList.add("button_now_page");

        now_page = page_num;
    }
}