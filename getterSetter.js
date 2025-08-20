class Mahasiswa {
    #nama;

    constructor(nama) {
        this.#nama = nama;
    }

    get nama() {
        return this.#nama.toUpperCase();
    }

    set nama(value) {
        if(value.length < 3) {
            console.log("nama terlalu pendek!");
            return;
        }
        this.#nama = value;
    }
}

const mhs = new Mahasiswa("Ari");

console.log(mhs.nama);

mhs.nama = "Li";
mhs.nama = "Putri";
console.log(mhs.nama);