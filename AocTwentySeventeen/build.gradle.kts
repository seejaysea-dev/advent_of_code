plugins {
    kotlin("jvm") version "2.1.20"
}

group = "dev.seejaysea.aoc"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(kotlin("test"))
    testImplementation("org.junit.jupiter:junit-jupiter")
    testImplementation("org.junit.jupiter:junit-jupiter-params")
}

tasks {
    wrapper {
        gradleVersion = "8"
    }
    test {
        useJUnitPlatform()
    }
}
kotlin {
    jvmToolchain(11)
}