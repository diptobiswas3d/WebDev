// Single-level Inheritance
// Multi-level Inheritance
// Hierarchical Inheritance
// Hybrid inheritance
class Pokemon {
    String name;

    public void displayName() {
        System.out.println("Name of this Pokemon is " + name);
    }
}

class PokemonType extends Pokemon {
    String type;

    public void displayNameAndType() {
        System.out.println(name + " is a " + type + " type Pokemon");
    }
}

class SecondaryType extends PokemonType {
    String secondaryType;

    public void displaySecondaryType() {
        System.out.println(name + " has no secondary type.");
    }

    public void displaySecondaryType(String secondaryType) {
        System.out.println(name + " has a secondary type " + secondaryType);
    }
}

class PokemonGen extends Pokemon {
    int gen;

    public void displayNameAndGen() {
        System.out.println(name + " is from Gen " + gen);
    }
}

// Multiple Inheritance
// Diamond Problem
// interface

public class Inheritance {
    public static void main(String args[]) {
        Pokemon eevee = new Pokemon();

        eevee.name = "Eevee";

        eevee.displayName();

        // Single-level inheritance
        PokemonType water = new PokemonType();

        water.name = "Blastoise";
        water.type = "Water";

        water.displayName();
        water.displayNameAndType();

        // Multi-level inheritance
        SecondaryType flying = new SecondaryType();

        flying.name = "Charizard";
        flying.type = "Fire";
        flying.secondaryType = "Flying";

        flying.displayName();
        flying.displayNameAndType();
        flying.displaySecondaryType(flying.secondaryType);

        // Hierarchical Inheritance
        PokemonGen two = new PokemonGen();
        
        two.name = "Celebi";
        two.gen = 2;

        two.displayName();
        two.displayNameAndGen();
    }
}
