const configureSkryreContraption = require("../configureSkryreContraption");

describe("ConfigureSkryreContraption", () => {
  test("returns an object with two empty arrays when given an empty array", () => {
    const input = [];
    const expectedOutput = { validComponents: [], invalidComponents: [] };
    expect(configureSkryreContraption(input)).toEqual(expectedOutput);
  });
  test("returns an object of a component given", () => {
    const input = [{ name: "Power Cell", type: "power source", rating: 5 }];
    const expectedOutput = {
      validComponents: [
        { name: "Power Cell", type: "power source", rating: 5 },
      ],
      invalidComponents: [],
    };
    expect(configureSkryreContraption(input)).toEqual(expectedOutput);
  });
  test("returns an object of multiple components given", () => {
    const input = [
      { name: "Power Cell", type: "power source", rating: 5 },
      { name: "Connector A", type: "connector", rating: 3 },
      { name: "Circuit X", type: "circuit", rating: 2 },
      { name: "Power Unit", type: "power source", rating: 4 },
      { name: "Circuit Y", type: "circuit", rating: 3 },
    ];
    const expectedOutput = {
      validComponents: [
        { name: "Power Cell", type: "power source", rating: 5 },
        { name: "Connector A", type: "connector", rating: 3 },
        { name: "Circuit X", type: "circuit", rating: 2 },
        { name: "Power Unit", type: "power source", rating: 4 },
        { name: "Circuit Y", type: "circuit", rating: 3 },
      ],
      invalidComponents: [],
    };
    expect(configureSkryreContraption(input)).toEqual(expectedOutput);
  });
  test("checks components all have properties of name, type and rating ", () => {
    const input = [
      { name: "Power Cell", type: "power source", rating: 5 },
      { name: "Connector A", type: "connector", rating: 3 },
      { name: "Circuit X", type: "circuit", rating: 2 },
      { name: "cheese", rating: 100 },
      { type: "connector", rating: 1 },
      { name: "Circuit Y", type: "circuit" },
      { broken: "I wanna be a REAL component :(" },
    ];
    const expectedOutput = {
      validComponents: [
        { name: "Power Cell", type: "power source", rating: 5 },
        { name: "Connector A", type: "connector", rating: 3 },
        { name: "Circuit X", type: "circuit", rating: 2 },
      ],
      invalidComponents: [
        { name: "cheese", rating: 100 },
        { type: "connector", rating: 1 },
        { name: "Circuit Y", type: "circuit" },
        { broken: "I wanna be a REAL component :(" },
      ],
    };
    expect(configureSkryreContraption(input)).toEqual(expectedOutput);
  });
  test("checks component types match one of the predefined types", () => {
    const input = [
      { name: "Power Cell", type: "power source", rating: 5 },
      { name: "Connector Z", type: "not real part!", rating: 5 },
    ];
    const expectedOutput = {
      validComponents: [
        { name: "Power Cell", type: "power source", rating: 5 },
      ],
      invalidComponents: [
        { name: "Connector Z", type: "not real part!", rating: 5 },
      ],
    };
    expect(configureSkryreContraption(input)).toEqual(expectedOutput);
  });
  test("checks component ratings are positive integers", () => {
    const input = [
      { name: "Power Cell", type: "power source", rating: 5 },
      { name: "Connector Z", type: "not real part!", rating: 5 },
      { name: "Connector A", type: "connector", rating: -1 },
    ];
    const expectedOutput = {
      validComponents: [
        { name: "Power Cell", type: "power source", rating: 5 },
      ],
      invalidComponents: [
        { name: "Connector Z", type: "not real part!", rating: 5 },
        { name: "Connector A", type: "connector", rating: -1 },
      ],
    };
    expect(configureSkryreContraption(input)).toEqual(expectedOutput);
  });
  test("checks contraptions have a power source", () => {
    const input = [
      { name: "Connector Z", type: "connector", rating: 5 },
      { name: "Connector A", type: "connector", rating: 1 },
    ];
    const expectedOutput = {
      validComponents: [],
      invalidComponents: [
        { name: "Connector Z", type: "connector", rating: 5 },
        { name: "Connector A", type: "connector", rating: 1 },
      ],
    };
    expect(configureSkryreContraption(input)).toEqual(expectedOutput);
  });
  test("checks contraptions don't have components with duplicate names", () => {
    const input = [
      { name: "Power Cell", type: "power source", rating: 5 },
      { name: "Connector Z", type: "connector", rating: 5 },
      { name: "Connector A", type: "connector", rating: 1 },
      { name: "Connector Z", type: "connector", rating: 2 },
      { name: "Circuit X", type: "circuit", rating: 3 },
    ];
    const expectedOutput = {
      validComponents: [],
      invalidComponents: [
        { name: "Power Cell", type: "power source", rating: 5 },
        { name: "Connector Z", type: "connector", rating: 5 },
        { name: "Connector A", type: "connector", rating: 1 },
        { name: "Connector Z", type: "connector", rating: 2 },
        { name: "Circuit X", type: "circuit", rating: 3 },
      ],
    };
    expect(configureSkryreContraption(input)).toEqual(expectedOutput);
  });
});
