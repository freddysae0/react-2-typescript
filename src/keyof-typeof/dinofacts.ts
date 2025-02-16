export const dinosaurFacts = {
  "t-rex": {
    latinName: "Tyrannosaurus rex",
    nickName: "T-rex",
    habitat: "forest",
    attributes: {
      weight: { amount: 15_500, units: "lbs" },
      height: { amount: 12, units: "ft" },
      length: { amount: 40, units: "ft" },
    },
  },
  velociraptor: {
    latinName: "velociraptor",
    nickName: "raptor",
    habitat: "desert",
    attributes: {
      weight: { amount: 100, units: "lbs" },
      height: { amount: 1.6, units: "ft" },
      length: { amount: 6, units: "ft" },
    },
  },
};

type DinosaurFacts = typeof dinosaurFacts;
type Dinosaur = keyof DinosaurFacts;

export const getDinoFact = (
  facts: DinosaurFacts,
  dino: Dinosaur
): DinosaurFacts[Dinosaur] => {
  return facts[dino];
};
