class Pokemon {
    String name;
    String type;
    int gen;

    // Non-parameterized Constructor
    Pokemon () {
        System.out.println("Non-parameterized Constructor called.");
        name = "Eevee";
        type = "Normal";
        gen = 1;
    }

    // Parameterized Constructor
    Pokemon (String name, String type, int gen) {
        System.out.println("Parameterized Constructor called.");
        this.name = name;
        this.type = type;
        this.gen = gen;
    }

    // Copy Constructor
    Pokemon (Pokemon pkmn) {
        System.out.println("Copy Constructor called.");
        this.name = pkmn.name;
        this.type = pkmn.type;
        this.gen = pkmn.gen;
    }

    void displayInfo() {
        System.out.println("Pokemon info displayed.");
        System.out.println("Name of this Pokemon is " + name);
        System.out.println("Type of this Pokemon is " + type);
        System.out.println("This Pokemon is from Gen " + gen);
    }
}




public class Cons {
    public static void main(String[] args) {
        Pokemon eevee = new Pokemon();
        Pokemon pikachu = new Pokemon("Pikachu", "Electric", 1);
        Pokemon shinyPikachu = new Pokemon(pikachu);

        eevee.displayInfo();
        pikachu.displayInfo();
        shinyPikachu.displayInfo();
    }
}