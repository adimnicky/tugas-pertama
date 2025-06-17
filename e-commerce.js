// Array data produk
const products = [
  {
    id: 1,
    nama: "Buku Novel",
    harga: 25000,
    deskripsi: "Novel fiksi terbaru dengan alur menarik dan karakter mendalam.",
    gambar: "https://images.unsplash.com/photo-1724500307191-a4f2f7351334",
  },
  {
    id: 2,
    nama: "Pensil 2B",
    harga: 5000,
    deskripsi: "Pensil 2B berkualitas tinggi untuk menulis dan menggambar.",
    gambar: "https://images.unsplash.com/photo-1608737957742-d0b674e60ab9",
  },
  {
    id: 3,
    nama: "Penghapus Faber-Castell",
    harga: 3000,
    deskripsi: "Penghapus lembut tanpa merusak kertas.",
    gambar: "https://via.placeholder.com/300x200?text=Penghapus",
  },
  {
    id: 4,
    nama: "Tas Ransel",
    harga: 150000,
    deskripsi: "Tas ransel besar dengan banyak kompartemen, cocok untuk sekolah atau bekerja.",
    gambar: "https://via.placeholder.com/300x200?text=Tas+Ransel",
  },
  {
    id: 5,
    nama: "Mouse Wireless",
    harga: 75000,
    deskripsi: "Mouse nirkabel ergonomis untuk penggunaan sehari-hari.",
    gambar: "https://via.placeholder.com/300x200?text=Mouse+Wireless",
  },
];

let cart = [];
let total = 0;

// Fungsi untuk menampilkan produk
function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Kosongkan konten sebelumnya

  // Looping array produk dengan for...of
  for (const product of products) {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
            <div class="card product-card h-100">
                <img src="${product.gambar}" class="card-img-top" alt="${product.nama}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.nama}</h5>
                    <p class="card-text text-muted">${product.deskripsi}</p>
                    <p class="card-text fw-bold">Rp ${product.harga.toLocaleString()}</p>
                    <button class="btn btn-primary mt-auto" onclick="addToCart(${product.id}, '${product.nama}', ${product.harga})">
                        Tambah ke Keranjang
                    </button>
                </div>
            </div>
        `;

    productList.appendChild(col);
  }
}

// Fungsi menambahkan ke keranjang
function addToCart(productId, productName, price) {
  cart.push({ id: productId, name: productName, price: price });
  total += price;
  updateCart();
}

// Fungsi memperbarui tampilan keranjang
function updateCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
            ${item.name} 
            <span>Rp ${item.price.toLocaleString()}</span>
            <button class="btn btn-sm btn-danger" onclick="removeItem(${i})">Hapus</button>
        `;
    cartList.appendChild(li);
  }

  document.getElementById("total").textContent = total.toLocaleString();
}

// Fungsi hapus item dari keranjang
function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

// Fungsi checkout simulasi
function checkout() {
  if (cart.length === 0) {
    alert("Keranjang kosong!");
    return;
  }
  alert("Terima kasih telah berbelanja!\nTotal pembayaran: Rp " + total.toLocaleString());
  cart = [];
  total = 0;
  updateCart();
}

// Jalankan fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", displayProducts);
