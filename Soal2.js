// script.js

function calculateTotal() {
    // Mendapatkan nilai dari input pengguna
    const productCode = document.getElementById('productCode').value;
    const productName = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    // Menghitung total harga
    const total = price * quantity;

    // Menampilkan hasil perhitungan
    document.getElementById('resultCode').textContent = productCode;
    document.getElementById('resultName').textContent = productName;
    document.getElementById('resultPrice').textContent = price.toFixed(0);
    document.getElementById('resultQuantity').textContent = quantity;
    document.getElementById('resultTotal').textContent = total.toFixed(0);

    // Menampilkan hasil pada elemen dengan id 'result'
    document.getElementById('result').style.display = 'block';
}