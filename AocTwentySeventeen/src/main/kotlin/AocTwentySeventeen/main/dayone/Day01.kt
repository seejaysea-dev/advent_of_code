package AocTwentySeventeen.main.dayone

import readInput;

fun List<Char>.convertToIntArray(): List<Int> {
    val res = mutableListOf<Int>();

    this.forEach {
        res.add(it.digitToInt())
    }

    return res;
}

fun partOne(input: String): Int {
    val digits = input.toList().convertToIntArray();

    val lastIdx = digits.size - 1;

    // Handle last digit matches first digit
    var sum = if (digits[0] == digits[lastIdx]) digits[lastIdx] else 0;

    // Handle matching up to the last digit
    for (i in 1..lastIdx) {
        sum += if(digits[i-1] == digits[i]) digits[i] else 0
    }

    return sum;
}


fun partTwo(input: String): Int {
    val digits = input.toList().convertToIntArray();
    val seqLen = digits.size;
    val halfway = seqLen / 2; // Fractional part is discarded, implies Floor operation

    var sum = 0;

    for (i in 0..<halfway) {
        sum += if(digits[i] == digits[(i+halfway)]) digits[i] else 0
    }

    for (i in halfway..<seqLen) {
        sum += if(digits[i-halfway]==digits[i]) digits[i] else 0
    }


    return sum;
}

fun main() {
    println("Start day one...")

    val data = readInput("day01")[0]

    println("Part One: ${partOne(data)}")
    println("Part Two: ${partTwo(data)}")

}