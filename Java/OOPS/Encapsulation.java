// public
// private
// protected
// default
class Secret {
    private String username;

    public String getUsername() {
        return username;
    }

    public void setUsername(String name) {
        username = name;
    }

    private void secretInfo() {
        System.out.println("This is the secret info.");
    }

    public void getSecretInfo() {
        secretInfo();
    }
}

public class Encapsulation {
    public static void main(String[] args) {
        Secret secret = new Secret();

        secret.setUsername("ashketchum10");
        String secretUsername = secret.getUsername();
        System.out.println("The secret user is " + secretUsername);    
    }
}
