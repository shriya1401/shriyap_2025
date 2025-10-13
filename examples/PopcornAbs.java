public class PopcornAbs {

    public static int abs(int x) {
        return (x < 0) ? -x : x;
    }

    public static double abs(double x) {
        return (x < 0) ? -x : x;
    }

    public static long abs(long x) {
        return (x < 0) ? -x : x;
    }

    public static void main(String[] args) {
        System.out.println(abs(-5));        // int
        System.out.println(abs(-3.14));     // double
        System.out.println(abs(-12345678901L)); // long
    }
}
