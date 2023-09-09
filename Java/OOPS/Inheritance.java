class Pokemon {
    String name;

    public void displayName () {
        System.out.println("Name of this Pokemon is " + name);
    }
}

// 1. Single-level inheritance
class PokemonType extends Pokemon {
    String type;

    public void displayNameAndType () {
        System.out.println(name + " is a " + type + " type Pokemon");
    }
}

// 2. Multi-level inheritance
class SecondaryType extends PokemonType {
    String secondaryType;

    public void displaySecondary () {
        System.out.println(name + " has no secondary type.");
    }

    public void displaySecondary (String secondaryType) {
        System.out.println(name + " has a secondary type " + secondaryType);
    }
}

// 3. Hierarchical inheritance
class PokemonGen extends Pokemon {
    int gen;

    public void displayNameAndGen() {
        System.out.println(name + " is from Gen " + gen);
    }
}

// 4. Hybrid inheritance
public class Inheritance {
    public static void main(String args[]) {
        Pokemon eevee = new Pokemon();

        eevee.name = "Eevee";

        eevee.displayName();

        PokemonType blastoise = new PokemonType();

        blastoise.name = "Blastoise";
        blastoise.type = "Water";

        blastoise.displayName();
        blastoise.displayNameAndType();

        SecondaryType charizard = new SecondaryType();

        charizard.name = "Charizard";
        charizard.type = "Fire";
        charizard.secondaryType = "Flying";

        charizard.displayName();
        charizard.displayNameAndType();
        charizard.displaySecondary(charizard.secondaryType);

        PokemonGen celebi = new PokemonGen();

        celebi.name = "Celebi";
        celebi.gen = 2;

        celebi.displayName();
        celebi.displayNameAndGen();
    }
}

// Multiple inheritance
// interface
// Diamond Problem