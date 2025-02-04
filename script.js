async function convertCurrency() {
    let amount = document.getElementById("amount").value;
    let currency = document.getElementById("currency").value;
    let result = document.getElementById("result");

    if (amount === "" || amount <= 0) {
        result.innerHTML = "Please enter a valid amount.";
        return;
    }

    try {
        // Fetch exchange rates from an API
        let response = await fetch("https://api.exchangerate-api.com/v4/latest/INR");
        let data = await response.json();

        // Check if the selected currency exists in the API response
        if (data.rates[currency.toUpperCase()]) {
            let convertedAmount = amount * data.rates[currency.toUpperCase()];
            result.innerHTML = `Converted Amount: ${convertedAmount.toFixed(2)} ${currency.toUpperCase()}`;
        } else {
            result.innerHTML = "Invalid currency selected.";
        }
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
        result.innerHTML = "Failed to fetch exchange rates. Try again later.";
    }
}
