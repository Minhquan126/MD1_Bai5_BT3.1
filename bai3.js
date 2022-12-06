

function maytinh(){
    let duLieu1 = +document.getElementById('nhap1').value
    let duLieu2 = +document.getElementById('nhap2').value
    let kq1 = duLieu1 + duLieu2
    document.getElementById('ketqua').innerText = kq1

}
function maytinh2(){
    let duLieu1 = +document.getElementById('nhap1').value
    let duLieu2 = +document.getElementById('nhap2').value
    let kq2 = duLieu1 - duLieu2
    document.getElementById('ketqua').innerText = kq2

}
function maytinh3(){
    let duLieu1 = +document.getElementById('nhap1').value
    let duLieu2 = +document.getElementById('nhap2').value
    let kq3 = duLieu1 * duLieu2
    document.getElementById('ketqua').innerText = kq3
}
function maytinh4(){
    let duLieu1 = +document.getElementById('nhap1').value
    let duLieu2 = +document.getElementById('nhap2').value
    let kq4 = duLieu1 / duLieu2
    document.getElementById('ketqua').innerText = kq4
}