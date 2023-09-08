abstract class Pokemon {
    String move;
    
    abstract void attack (String move);
    void description () {
        System.out.println("Pokemon means Pocket monsters.");
    }
    
    Pokemon() {
        System.out.println("Who's that Pokemon?");
    }
}

class Charizard extends Pokemon {
    public void attack(String move) {
        System.out.println("Charizard use " + move);
    }
    
    Charizard() {
        System.out.println("It's Charizard!");
    }
}
class Mewtwo extends Pokemon {
    public void attack (String move) {
        System.out.println("Mewtwo use " + move);
    }

    Mewtwo() {
        System.out.println("It's Mewtwo!");
    }
}

public class Abstraction {
    public static void main(String args[]) {
        Mewtwo mewtwo = new Mewtwo();

        mewtwo.move = "Shadow Ball";

        mewtwo.attack(mewtwo.move);

        Charizard charizard = new Charizard();

        charizard.move = "Flamethrower";

        charizard.attack(charizard.move);
        charizard.description();
    }    
}
