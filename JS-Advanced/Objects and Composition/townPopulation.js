function townPopulation(input) {
  let register = {};

  input.forEach((line) => {
    let [town, population] = line.split(" <-> ");
    if (register.hasOwnProperty(town)) {
      register[town] += Number(population);
    } else {
      register[town] = Number(population);
    }
  });

  Object.entries(register).forEach((el) => console.log(`${el[0]} : ${el[1]}`));
}

townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);

// Sofia : 1200000
// Montana : 20000
// New York : 10000000
// Washington : 2345000
// Las Vegas : 1000000

townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
