const catAges = (cat) => {
    const after2 = (cat - 2) * 4 + 24;
    if (cat === 1) {
        return `Umur kucing dalam kalender manusia 15 tahun`;
    } else if (cat === 2) {
        return `Umur kucing dalam kalender manusia 24 tahun`;
    } else if (cat >= 2) {
        return `Umur kucing dalam kalender manusia ${after2} tahun`;
    }
};

console.log(catAges(2));
