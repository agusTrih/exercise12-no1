const button = document.getElementById("button");
button.addEventListener("click", onlineStore);
function onlineStore() {
    const name = document.getElementById("name").value;
    const product = document.getElementById("product").value;
    const show = (document.getElementById(
        "results"
    ).innerHTML = `Terima kasih ${name} telah membeli produk ${product}`);
    return show;
}
