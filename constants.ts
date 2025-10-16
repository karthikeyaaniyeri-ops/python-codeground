
import type { CodeSnippet } from './types';

export const PYTHON_PROGRAMS: CodeSnippet[] = [
  {
    id: 1,
    title: "Temperature Converter",
    code: `def convert_temp():
    print("Temperature Conversion Menu")
    print("1. Celsius to Fahrenheit")
    print("2. Fahrenheit to Celsius")
    print("3. Celsius to Kelvin")
    print("4. Kelvin to Celsius")
    print("5. Fahrenheit to Kelvin")
    print("6. Kelvin to Fahrenheit")

    choice = int(input("Enter your Choice (1 to 6): "))

    if choice == 1:
        c = float(input("Enter temperature in Celsius: "))
        f = (c * 9/5) + 32
        print(f"Temperature in Fahrenheit: {f}")
    elif choice == 2:
        f = float(input("Enter temperature in Fahrenheit: "))
        c = (f - 32) * 5/9
        print(f"Temperature in Celsius: {c}")
    elif choice == 3:
        c = float(input("Enter temperature in Celsius: "))
        k = c + 273.15
        print(f"Temperature in Kelvin: {k}")
    elif choice == 4:
        k = float(input("Enter temperature in Kelvin: "))
        c = k - 273.15
        print(f"Temperature in Celsius: {c}")
    elif choice == 5:
        f = float(input("Enter temperature in Fahrenheit: "))
        k = (f - 32) * 5/9 + 273.15
        print(f"Temperature in Kelvin: {k}")
    elif choice == 6:
        k = float(input("Enter temperature in Kelvin: "))
        f = (k - 273.15) * 9/5 + 32
        print(f"Temperature in Fahrenheit: {f}")
    else:
        print("Invalid choice. Please enter a number from 1 to 6.")

# Example usage:
convert_temp()
`,
  },
  {
    id: 2,
    title: "Factorial Calculator",
    code: `def factorial_iterative(n):
    if n < 0:
        return "Factorial is not defined for negative numbers"
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

try:
    number = int(input("Enter a non-negative number to find its factorial: "))
    factorial = factorial_iterative(number)
    print(f"The factorial of {number} is: {factorial}")
except ValueError:
    print("Please enter a valid integer")
`,
  },
  {
    id: 3,
    title: "Fibonacci Series",
    code: `limit = int(input("Enter the Limit: "))
a, b = 0, 1
print(f"Fibonacci Series up to {limit}:")
result = []
while a <= limit:
    result.append(str(a))
    a, b = b, a + b
print(" ".join(result))
`,
  },
  {
    id: 4,
    title: "Display User Information",
    code: `def display_information():
    name = input("Enter your name: ")
    address = input("Enter your full address: ")
    mobile_number = input("Enter your Mobile Number: ")
    college_name = input("Enter your College name: ")
    course = input("Enter your course: ")
    subjects = input("Enter your Subjects (comma-separation): ")

    print("\\n--- Information ---")
    print(f"Name: {name}")
    print(f"Address: {address}")
    print(f"Mobile Number: {mobile_number}")
    print(f"College Name: {college_name}")
    print(f"Course: {course}")
    print(f"Subjects: {subjects}")

display_information()
`,
  },
  {
    id: 5,
    title: "Find Largest Number",
    code: `def find_largest_number():
    try:
        n = int(input("Enter the number of elements: "))
        if n <= 0:
            print("Please enter a positive integer.")
            return

        numbers = []
        for i in range(n):
            number = float(input(f"Enter number {i + 1}: "))
            numbers.append(number)
        
        largest_number = max(numbers)
        print(f"The largest number among the entered numbers is: {largest_number}")
    except ValueError:
        print("Please enter valid numbers.")

find_largest_number()
`,
  },
  {
    id: 6,
    title: "Sum of Primes (1-1000)",
    code: `import math

def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            return False
    return True

def sum_of_primes(limit):
    total = 0
    for num in range(2, limit + 1):
        if is_prime(num):
            total += num
    return total

result = sum_of_primes(1000)
print(f"The sum of all prime numbers between 1 and 1000 is: {result}")
`,
  },
   {
    id: 7,
    title: "Find 1st & 2nd Largest",
    code: `def find_largest_and_second_largest(numbers):
    if len(numbers) < 2:
        return "Please enter at least two numbers.", None

    largest = float('-inf')
    second_largest = float('-inf')

    for num in numbers:
        if num > largest:
            second_largest = largest
            largest = num
        elif num > second_largest and num != largest:
            second_largest = num
    
    if second_largest == float('-inf'):
        return largest, "No second largest (all numbers are same)"
    
    return largest, second_largest

try:
    num_list = list(map(int, input("Enter a set of integers separated by space: ").split()))
    largest, second_largest = find_largest_and_second_largest(num_list)
    print(f"Largest number: {largest}")
    if second_largest is not None:
        print(f"Second largest number: {second_largest}")
except ValueError:
    print("Invalid input. Please enter integers separated by spaces.")
`,
  },
  {
    id: 8,
    title: "Sum of N Natural Numbers",
    code: `try:
    n = int(input("Enter a positive integer: "))
    if n < 0:
        print("Please enter a positive integer.")
    else:
        # Formula: sum of first n natural numbers = n*(n+1)//2
        sum_natural = n * (n + 1) // 2
        print(f"The sum of first {n} natural numbers is: {sum_natural}")
except ValueError:
    print("Invalid input. Please enter an integer.")
`,
  },
  {
    id: 9,
    title: "Matrix Multiplication",
    code: `A = [[1, 2, 3],
     [4, 5, 6]]

B = [[7, 8],
     [9, 10],
     [11, 12]]

# Initialize result matrix with zeros (2x2)
result = [[0, 0],
          [0, 0]]

# Perform matrix multiplication
for i in range(len(A)):
    for j in range(len(B[0])):
        for k in range(len(B)):
            result[i][j] += A[i][k] * B[k][j]

print("Result of matrix multiplication:")
for row in result:
    print(row)
`,
  },
  {
    id: 10,
    title: "Palindrome Checker",
    code: `def is_palindrome(text):
    # Remove spaces and convert to lowercase
    cleaned_text = text.replace(" ", "").lower()
    
    # Check if cleaned text is equal to its reverse
    if cleaned_text == cleaned_text[::-1]:
        return "The string is a palindrome"
    else:
        return "The string is not a palindrome"

# Input from user
input_string = input("Enter a string: ")

# Check & display result
result = is_palindrome(input_string)
print(result)
`,
  },
];

