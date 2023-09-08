class PokemonType {
    String type;

    public void printType() {
        System.out.println("This is a " + type + " type Pokemon.");
    }
}

class Water extends PokemonType {
    public void printType() {
        System.out.println("This is a " + type + " type Pokemon.");
    }
}

public class Inheritance {
    public static void main(String args[]) {
        System.out.println("Hello World");

        PokemonType fire = new PokemonType();

        fire.type = "Fire";

        Water water = new Water();

        water.type = "Water";

        fire.printType();
        water.printType();
    }
}
