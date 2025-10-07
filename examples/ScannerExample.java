import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        if (sc.hasNextInt()) {
            int num = sc.nextInt();
            System.out.println("You entered: " + num);
        } else {
            System.out.println("Invalid input. Please enter a number.");
        }
        sc.close();
    }
}
