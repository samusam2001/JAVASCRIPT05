//lấy thẻ Element
function getElement(elementID){
    return document.getElementById(elementID);
}

//kiểm tra rỗng
function isCheckEmpty(param){
    return (param == "") ? true : false;
}

//kiểm tra nhập phải là số ko
function isCheckNumber(number){
    return isNaN(number) ? false : true
}

const luongSo = 1600000;
const luong00 = 4000000;
const luong01 = 60000000;
const luong02 = 120000000;
const luong03 = 210000000;
const luong04 = 384000000;
const luong05 = 624000000;
const luong06 = 960000000;

// tính thuế
function calTax(soNguoi,luong,hoTen){
    var resultTax = 0;
    if(luong < 0 && soNguoi < 0){
        result("ko dc nhập số âm","danger");
    }else{
        if(luong < luong01){
            result("bạn ko cần nộp thuế","success");
        }else if(luong == luong01){
            resultTax = (luong - luong00 - soNguoi * luongSo) * 0.05;
            result(`tổng thuế thu nhập của ${hoTen} là ${resultTax}`,"success");
        }else if(luong > luong01 && luong <= luong02){
            resultTax = (luong01 - luong00 - soNguoi * luongSo) * 0.05 + (luong - luong01 - soNguoi * luongSo) * 0.1;
            result(`tổng thuế thu nhập của ${hoTen} là ${resultTax}`,"success");
        }else if(luong > luong02 && luong <= luong03){
            resultTax = (luong01 - luong00 - soNguoi * luongSo) * 0.05 + (luong02 - luong01 - soNguoi * luongSo) * 0.1 + (luong - luong03 - soNguoi * luongSo) * 0.15;
            result(`tổng thuế thu nhập của ${hoTen} là ${resultTax}`,"success");
        }else if(luong > luong03 && luong <= luong04){
            resultTax = (luong01 - luong00 - soNguoi * luongSo) * 0.05 + (luong02 - luong01 - soNguoi * luongSo) * 0.1 + (luong03 - luong02 - soNguoi * luongSo) * 0.15 + (luong - luong03 - soNguoi * luongSo) * 0.2;
            result(`tổng thuế thu nhập của ${hoTen} là ${resultTax}`,"success");
        }else if(luong > luong04 && luong <= luong05){
            resultTax = (luong01 - luong00 - soNguoi * luongSo) * 0.05 + (luong02 - luong01 - soNguoi * luongSo) * 0.1 + (luong03 - luong02 - soNguoi * luongSo) * 0.15 + (luong04 - luong03 - soNguoi * luongSo) * 0.2 + (luong - luong04 - soNguoi * luongSo) * 0.25;
            result(`tổng thuế thu nhập của ${hoTen} là ${resultTax}`,"success");
        }else if(luong > luong05 && luong <= luong06){
            resultTax = (luong01 - luong00 - soNguoi * luongSo) * 0.05 + (luong02 - luong01 - soNguoi * luongSo) * 0.1 + (luong03 - luong02 - soNguoi * luongSo) * 0.15 + (luong04 - luong03 - soNguoi * luongSo) * 0.2 + (luong05 - luong04 - soNguoi * luongSo) * 0.25 + (luong - luong05 - soNguoi * luongSo) * 0.3;
            result(`tổng thuế thu nhập của ${hoTen} là ${resultTax}`,"success");
        }else if(luong > luong06){
            resultTax = (luong01 - luong00 - soNguoi * luongSo) * 0.05 + (luong02 - luong01 - soNguoi * luongSo) * 0.1 + (luong03 - luong02 - soNguoi * luongSo) * 0.15 + (luong04 - luong03 - soNguoi * luongSo) * 0.2 + (luong05 - luong04 - soNguoi * luongSo) * 0.25 + (luong06 - luong05 - soNguoi * luongSo) * 0.23 + (luong - luong06 - soNguoi * luongSo) * 0.35;
            result(`tổng thuế thu nhập của ${hoTen} là ${resultTax}`,"success");
        }
    }

    
}



//In kết quả
function result(ketQua, alert){
    var txtKiemTra = getElement("txtKetQua");
    txtKiemTra.setAttribute("class","alert alert-"+alert);
    txtKiemTra.innerHTML = ketQua;
}


//sư kiện submit
var btnTinh = getElement("btnTinh").addEventListener("click",function(e){
    e.preventDefault();
    
    var hoTen   = getElement("inputHoten").value;
    var soNguoi = getElement("inputSo").value;
    var luong   = getElement("inputLuong").value;

    if(isCheckEmpty(hoTen) || isCheckEmpty(soNguoi) || isCheckEmpty(luong)){
        result("chưa nhập thông tin", "danger");
    }else{
        if(!isCheckNumber(soNguoi) || !isCheckNumber(luong)){
            result("ko có dữ liệu số", "danger");
        }else{
            luong   = parseFloat(luong);
            soNguoi = parseFloat(soNguoi);
            calTax(soNguoi,luong,hoTen);
        }
    }

});