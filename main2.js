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




//In kết quả
function result(ketQua, alert){
    var txtKiemTra = getElement("txtKetQua");
    txtKiemTra.setAttribute("class","alert alert-"+alert);
    txtKiemTra.innerHTML = ketQua;
}


//sự kiện change
function changeSelect(){
    var loaiKh = getElement("selectLoaiKH").value;
    var soKN   = getElement("inputSoKetNoi");
    switch(loaiKh){
        case "1":
            soKN.setAttribute("disabled",true);
            soKN = 1;
            break;
        case "2":
            soKN.removeAttribute("disabled");
            soKN = (soKN.value != 0) ? soKN.value: 0;
            break;
    }
    return [loaiKh,soKN];
}

//tinh toan
function calCash(loaiKh,soKenh,maKh){
    var ketQua = 0;
    
    switch(loaiKh[0]){
        case "1":
            ketQua = 4.5 + 20.5 + 7.5 * soKenh;
            result(`Mã khách hàng ${maKh} - tiền thuê là ${ketQua}`,"success");
            break;
        case "2":
            if(loaiKh[1] <= 10){
                ketQua = 15 + 75 + 50 * soKenh;
            }else{
                ketQua = 15 + 75 + (parseFloat(loaiKh[1]) - 10) * 5 + 50 * soKenh;
            }
            result(`Mã khách hàng ${maKh} - tiền thuê là ${ketQua}`,"success");
            break;
    }
    

}


//sư kiện submit
var btnTinh = getElement("btnTinh").addEventListener("click",function(e){
    e.preventDefault();
    
    var maKh   = getElement("inputMaKH").value;
    var soKenh = getElement("inputThueKenh").value;
    var loaiKh = changeSelect();
    
    if(isCheckEmpty(maKh) || isCheckEmpty(soKenh)){
        result("chưa nhập thông tin", "danger");
    }else{
        soKenh = parseFloat(soKenh);
        calCash(loaiKh,soKenh,maKh);
    }

});