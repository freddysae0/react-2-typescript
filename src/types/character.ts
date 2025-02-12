interface BaseCharacter {
  strength: number;
  dexterity: number;
  intelligence: number;
}

interface Warrior extends BaseCharacter {
  weapon: "Sword";
}

interface Wizard extends BaseCharacter {
  weapon: "Staff";
  magic: true;
}

interface Rogue extends BaseCharacter {
  weapon: "Bow";
}

type Character = Warrior | Wizard | Rogue;

export const fighter: Character = {
  strength: 15,
  dexterity: 10,
  intelligence: 8,
  weapon: "Sword",
};

export const mage: Character = {
  strength: 5,
  dexterity: 8,
  intelligence: 15,
  weapon: "Staff",
  magic: true,
};

export const thief: Character = {
  strength: 10,
  dexterity: 15,
  intelligence: 8,
  weapon: "Bow",
};

export const paladin: Character = {
  strength: 15,
  dexterity: 10,
  intelligence: 8,
  weapon: "Sword",
  // @ts-expect-error: a sword character cannot be magic!
  magic: true,
};

// @ts-expect-error: a weapon is required on the Character type!
export const civilian: Character = {
  strength: 8,
  dexterity: 8,
  intelligence: 8,
};
