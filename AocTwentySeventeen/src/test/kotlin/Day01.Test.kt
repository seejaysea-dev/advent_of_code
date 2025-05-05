package dev.seejaysea.aoc

import AocTwentySeventeen.main.dayone.*
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.CsvSource
import org.junit.jupiter.api.Assertions.assertEquals

class DayOneTests {

    @ParameterizedTest
    @CsvSource(
        "1122, 3",
        "1111,4",
        "1234, 0",
        "91212129, 9"
    )
    fun PartOne(input: String, expected: Int) {
        val result = partOne(input)
        assertEquals(expected, result)
    }

    @ParameterizedTest
    @CsvSource(
        "1212,6",
        "1221,0",
        "123425,4",
        "123123,12",
        "12131415,4"
    )
    fun PartTwo(input: String, expected: Int) {
        val result = partTwo(input)
        assertEquals(expected, result)
    }
}