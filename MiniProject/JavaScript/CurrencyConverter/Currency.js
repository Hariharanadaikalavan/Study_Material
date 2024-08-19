const exchangeRates = {
    USD: { USD: 1, EUR: 0.85, GBP: 0.75, INR: 85 },
    EUR: { USD: 1.18, EUR: 1, GBP: 0.88, INR: 87 },
    GBP: { USD: 1.34, EUR: 1.14, GBP: 1, INR: 99 },
    INR: { USD: 0.013, EUR: 0.011, GBP: 0.010, INR: 1 }
};

const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const convertBtn = document.getElementById('convert-btn');
const resultContainer = document.getElementById('result-container');

convertBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (isNaN(amount)) {
        resultContainer.textContent = "Please enter a valid amount.";
        return;
    }

    const a = (amount * exchangeRates[from][to]).toFixed(2);
    resultContainer.innerHTML =`${amount} ${from}= ${a}${to}`;
});
