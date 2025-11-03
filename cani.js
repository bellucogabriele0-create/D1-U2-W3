class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  compare = function (pet) {
    if (this.ownerName === pet.ownerName) {
      return true;
    }
  };
}

const firstNameInput = document.getElementById("firstName");
const firstANameInput = document.getElementById("firstAName");
const animaleInput = document.getElementById("animale");
const razzaInput = document.getElementById("razza");

// const petPrimo = new Pet("leo", "silvio", "gatto", "soriano");
// const petSecondo = new Pet("sissi", "vito", "gatto", "siamese");
// const petTerzo = new Pet("orso", "luca", "gatto", "bengala");
// const petQuarto = new Pet("osso", "silvio", "cane", "bull terrier");
// const petQuinto = new Pet("asso", "habibiyalla", "ermellino", "boh");
const form = document.getElementById("rubrica-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = firstNameInput.value;
  const firstAName = firstANameInput.value;
  const animale = animaleInput.value;
  const razza = razzaInput.value;

  const pet = new Pet(firstName, firstAName, animale, razza);
  console.log(pet);
  console.log(this.ownerName.compare(pet.ownerName));
});
