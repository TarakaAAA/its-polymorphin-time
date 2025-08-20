class Burung {
    constructor(nama){
        this.nama = nama;
    }
    bersuara() {
        console.log(`${this.nama}cuit cuit`);
    }
}

class Ayam extends Burung {
    constructor(nama) {
        super(nama);
    }
}

class Bebek extends Burung {
    constructor(nama) {
        super(nama);
    }
}

const daftarBurung =[new Ayam("Ayam jago"), new Bebek("Bebek pekin"), new Burung("Merpati")];

daftarBurung.forEach(burung =>{
    burung.bersuara();
});