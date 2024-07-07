let submitButton = document.getElementById('btnSubmit')

let carts = []
function submitHandler(){

    let id;

    if(carts.length === 0){
        id = 1;
    }else{
        id = carts[carts.length - 1].id +1
    }

    let namaValue = document.getElementById('nama').value
    let barangValue = document.getElementById('barang').value
    let hargaValue = document.getElementById('harga').value

    let tempObj = {
        id,
        nama : namaValue,
        barang : barangValue,
        harga : +hargaValue
    }

    document.getElementById('namaPrint').innerHTML = namaValue
    carts.push(tempObj)
    getCart()
    console.log(carts)
}
submitButton.addEventListener('click',submitHandler)


function getCart(){
    let tBody = document.getElementById('tBody')
    tBody.innerHTML = ''
    carts.forEach( cart =>{
        tBody.innerHTML += `<tr>
        <td>${cart.id}</td>
        <td>${cart.barang}</td>
        <td>${cart.harga}</td>
        </tr>`
    })
}

let printButton = document.getElementById('btnPrint')

function printHandler(){
    document.querySelector('.form-box').style.display = 'none'
    document.querySelector('.print-button').style.display = 'none'
    window.print()
}

printButton.addEventListener('click',printHandler)