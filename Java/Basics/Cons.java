class Pokemon {
    String name;
    String type;
    int gen;

    // Non-parameterized Cons
    Pokemon() {
        System.out.println("Non-parameterized cons called.");
        name = "Eevee";
        type = "Normal";
        gen = 1;
    }

    // Parameterized Cons
    Pokemon(String name, String type, int gen) {
        System.out.println("Parameterized cons called.");
        this.name = name;
        this.type = type;
        this.gen = gen;
    }
    // Copy cons
    Pokemon (Pokemon pkmn) {
        System.out.println("Copy cons called.");
        this.name = pkmn.name;
        this.type = pkmn.type;
        this.gen = pkmn.gen;
    }

    void displayInfo() {
        System.out.println("Pokemon info displayed.");
        System.out.println("Name of this Pokemon is " + name);
        System.out.println("Type of this Pokemon is " + type);
        System.out.println("Gen of this Pokemon is " + gen);
    }
}

public class Cons {
    public static void main(String[] args) {
        Pokemon eevee = new Pokemon();
        Pokemon latias = new Pokemon("Latias", "Dragon", 3);
        Pokemon latios = new Pokemon(latias);

        eevee.displayInfo();   
        latias.displayInfo();    
        latios.displayInfo(); 
    }
}