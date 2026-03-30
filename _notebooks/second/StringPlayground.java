public class StringPlayground {
    public static void main(String[] args) {

        // 1. Basic string creation
        String greeting = "Hello, World!";
        System.out.println("Original: " + greeting);

        // 2. Length
        System.out.println("Length: " + greeting.length());

        // 3. Uppercase and Lowercase
        System.out.println("Uppercase: " + greeting.toUpperCase());
        System.out.println("Lowercase: " + greeting.toLowerCase());

        // 4. Substring
        String sub = greeting.substring(7, 12); // extracts "World"
        System.out.println("Substring (7–12): " + sub);

        // 5. Replace characters/words
        String replaced = greeting.replace("World", "Java");
        System.out.println("Replaced: " + replaced);

        // 6. Check if it contains a word
        boolean hasHello = greeting.contains("Hello");
        System.out.println("Contains 'Hello': " + hasHello);

        // 7. Trim whitespace
        String padded = "   too much space   ";
        System.out.println("Trimmed: '" + padded.trim() + "'");

        // 8. Split a sentence into words
        String sentence = "Java is fun to learn";
        String[] words = sentence.split(" ");
        System.out.print("Words: ");
        for (String word : words) {
            System.out.print("[" + word + "] ");
        }
        System.out.println();

        // 9. Reverse a string (manual loop)
        String original = "abcde";
        StringBuilder reversed = new StringBuilder(original).reverse();
        System.out.println("Reversed '" + original + "': " + reversed);

        // 10. Check if a string is a palindrome
        String test = "racecar";
        String testReversed = new StringBuilder(test).reverse().toString();
        boolean isPalindrome = test.equals(testReversed);
        System.out.println("Is '" + test + "' a palindrome? " + isPalindrome);

        // 11. Count occurrences of a character
        String text = "banana";
        long count = text.chars().filter(c -> c == 'a').count();
        System.out.println("Count of 'a' in '" + text + "': " + count);

        // 12. String formatting
        String name = "Alice";
        int age = 30;
        String formatted = String.format("Name: %s, Age: %d", name, age);
        System.out.println(formatted);
    }
}
