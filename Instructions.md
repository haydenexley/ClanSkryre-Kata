# Advanced Skryre Contraption Configuration

## Background 🧪

In the secretive laboratories of Clan Skryre, contraptions come in all shapes and sizes, each with a unique configuration of components. Your mission is to create a function that can validate and manage complex Skryre contraption configurations.

## Task Description 🛠️

Create a JavaScript function, `configureSkryreContraption`, that can validate and manage Skryre contraption configurations. Contraptions are made up of components, and each component can have various properties.

The function should accept an array of components, and for each component, it should check if it has the required properties. The function should return an array of valid components and an array of invalid components.

### Component Properties 🧲

Each component should have the following properties:

- `name` (string) - The name of the component.
- `type` (string) - The type of the component (e.g., "power source," "connector," "circuit").
- `rating` (number) - The component's rating, a positive integer.

### Validation Rules 📏

1. All components must have a `name`, `type`, and `rating`.
2. Component names must be unique within the contraption.
3. Component types must match one of the predefined types: "power source," "connector," or "circuit."
4. Component ratings must be positive integers.
5. Contraptions must contain at least one "power source."

### Output 🚀

The function should return an object with two arrays:

- `validComponents` - an array of components that meet the validation rules.
- `invalidComponents` - an array of components that do not meet the validation rules.
