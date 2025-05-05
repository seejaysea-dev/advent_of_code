import kotlin.io.path.Path
import kotlin.io.path.readText

fun readInput(day: String) = Path("src/inputs/${day}.txt").readText().trim().lines()