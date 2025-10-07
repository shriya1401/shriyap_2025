import java.util.Scanner;

public class CalculatorMenu {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("==== Calculator Menu ====");
        System.out.println("1. Add");
        System.out.println("2. Subtract");
        System.out.println("3. Multiply");
        System.out.println("4. Divide");

        System.out.print("Choose an option: ");
        int option = sc.nextInt();

        System.out.print("Enter first number: ");
        double num1 = sc.nextDouble();
        System.out.print("Enter second number: ");
        double num2 = sc.nextDouble();

        double result = 0;
        if (option == 1) result = num1 + num2;
        else if (option == 2) result = num1 - num2;
        else if (option == 3) result = num1 * num2;
        else if (option == 4) result = num1 / num2;

        System.out.println("Result: " + result);
        sc.close();
    }
}
