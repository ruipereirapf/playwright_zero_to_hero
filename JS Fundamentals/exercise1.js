let familySize = 2;
let plannedDistanceToDrive = 100;

function recommendedCar(familySize, plannedDistanceToDrive) {
  if (familySize <= 4 && plannedDistanceToDrive < 200) {
    return "Tesla";
  } else if (familySize <= 4 && plannedDistanceToDrive > 100) {
    return "Toyota Camry";
  } else {
    return "Minivan";
  }
}

console.log(recommendedCar(familySize, plannedDistanceToDrive));
