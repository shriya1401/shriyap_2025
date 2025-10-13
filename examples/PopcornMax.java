public class PopcornMax {

    // int version of max
    public static int max(int a, int b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }

    // double version of max
    public static double max(double a, double b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }

    public static void main(String[] args) {
        System.out.println(max(3, 9));      // expected: 9
        System.out.println(max(-2, -7));    // expected: -2
        System.out.println(max(3.5, 2.9));  // expected: 3.5
        System.out.println(max(2, 2.0));    // should call double version → 2.0
    }
}
