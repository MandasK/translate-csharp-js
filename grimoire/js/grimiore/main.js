function main() {
  // Put your code here
  console.log("Do you believe in magic?");
  console.log("------------------------")
  const allSpells = getAllSpells()
  const goodBook = MakeGoodSpellBook(allSpells);
  const evilBook = MakeEvilSpellBook(allSpells);

  displaySpellBook(goodBook)
  displaySpellBook(evilBook)
}

const displaySpellBook = (book) => {
  console.log(book.title)
  book.spells.forEach(spell => console.log(spell.name))
}

const MakeEvilSpellBook = (spells) => {
  return {
    title: "Evil Book",
    spells: spells.filter(spell => spell.isEvil)
  }
}

const MakeGoodSpellBook = (spells) => {
  return {
    title: "Good Book",
    spells: spells.filter(spell => !spell.isEvil)
  }
}

const getAllSpells = () => {
  const allSpells = [
    {
      name: "Turn enemy into a newt",
      isEvil: true,
      energyRequired: 5.1
    },
    {
      name: "Conjure some gold for a local charity",
      isEvil: false,
      energyRequired: 2.99
    },
    {
      name: "Give a deaf person the ability to heal",
      isEvil: false,
      energyRequired: 12.2
    },
    {
      name: "Make yourself emperor of the universe",
      isEvil: true,
      energyRequired: 100.0
    },
    {
      name: "Convince your relatives your political views are correct",
      isEvil: false,
      energyRequired: 2921.5
    }
  ]
  return allSpells
}

main();