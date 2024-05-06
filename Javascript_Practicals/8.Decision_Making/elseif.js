let temperature = 25; // Current temperature in Celsius

if (temperature >= 40) {
    console.log("High temperature alert! Cooling system activated.");
} else if (temperature >= 30) {
    console.log("Moderate temperature alert. Monitoring...");
} else if (temperature >= 20) {
    console.log("Normal temperature. No action required.");
} else {
    console.error("Low temperature alert! Heating system activated.");
}
