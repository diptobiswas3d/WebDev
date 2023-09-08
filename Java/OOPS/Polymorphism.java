class PokemonRegion {
    String region;
    int gen;

    public void info(String region) {
        System.out.println("This is the " + region + " region.");
    }

    public void info(int gen) {
        System.out.println("This is Pokemon Gen " + gen);
    }

    public void info(String region, int gen) {
        System.out.println("This is the " + region + " region of Pokemon Gen " + gen);
    }

    public void attack() {
        System.out.println("Pokemon Attacked!");
    }
}

class Latias extends PokemonRegion {
    String name;

     public void attack() {
        System.out.println(name + " use Mist Ball.");
     }
}
class Latios extends PokemonRegion {
    String name;

     public void attack() {
        System.out.println(name + " use Luster Purge.");
     }
}

public class Polymorphism {
    public static void main(String args[]) {
        PokemonRegion hoenn = new PokemonRegion();

        hoenn.region = "Hoenn";
        hoenn.gen = 3;

        hoenn.info(hoenn.region);
        hoenn.info(hoenn.gen);
        hoenn.info(hoenn.region, hoenn.gen);
        hoenn.attack();

        Latias latias = new Latias();
        Latios latios = new Latios();

        latias.name = "Latias";
        latios.name = "Latios";

        latias.attack();
        latios.attack();
    }
}