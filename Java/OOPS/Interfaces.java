interface Pokemon {
    int gen = 2;
    void attack();
}

class Tyranitar implements Pokemon {
    String name;
    String move;

    public void attack() {
        System.out.println(name + " use " + move);
    }

    public void info() {
        System.out.println(name + " is from Gen " + gen);
    }
}

class Rayquaza implements Pokemon {
    String name;
    String move;

    public void attack() {
        System.out.println(name + " use " + move);
    }

    public void info() {
        System.out.println(name + " is from Gen " + gen);
    }
}

public class Interfaces {
    public static void main (String[] args) {
        Tyranitar tyranitar = new Tyranitar();

        tyranitar.name = "Tyranitar";
        tyranitar.move = "Earthquake";

        tyranitar.attack();
        tyranitar.info();

        Rayquaza rayquaza = new Rayquaza();

        rayquaza.name = "rayquaza";
        rayquaza.move = "Fly";

        rayquaza.attack();
        rayquaza.info();
    }
}
