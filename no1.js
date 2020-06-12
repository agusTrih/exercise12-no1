function onlineStore(user, product) {
    return `Terima kasih ${user} telah membeli produk ${product}`;
}
document.write(
    onlineStore(
        prompt("Tulis Nama kamu:"),
        prompt("Product apa yang kamu beli:")
    )
);
