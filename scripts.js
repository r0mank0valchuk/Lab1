function numberToWords(num) {
        let ones = ["", "один", "два", "три", "чотири", "п'ять", "шість", "сім", "вісім", "дев'ять"];
        let teens = ["десять", "одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п'ятнадцять", "шістнадцять", "сімнадцять", "вісімнадцять", "дев'ятнадцять"];
        let tens = ["", "десять", "двадцять", "тридцять", "сорок", "п'ятдесят", "шістдесят", "сімдесят", "вісімдесят", "дев'яносто"];
        let hundreds = ["", "сто", "двісті", "триста", "чотириста", "п'ятсот", "шістсот", "сімсот", "вісімсот", "дев'ятсот"];
        if (num == 0) return "нуль";
        if (num < 10) return ones[num];
        if (num < 20) return teens[num - 10];
        if (num < 100) return tens[Math.floor(num / 10)] + " " + ones[num % 10];
        
        let result = hundreds[Math.floor(num / 100)];
        let remainder = num % 100;

        if (remainder > 0) {
            if (remainder < 10) {
                result += " " + ones[remainder];
            } else if (remainder < 20) {
                result += " " + teens[remainder - 10];
            } else {
                result += " " + tens[Math.floor(remainder / 10)] + " " + ones[remainder % 10];
            }
        }
        return result;
    }

    function convertNumberToWords() {
        let num = parseInt(document.getElementById("numberInput").value);
        let output = document.getElementById("numberOutput");
        if (isNaN(num) || num < 0 || num > 1000) {
            output.innerHTML = "<strong>Помилка:</strong> Введіть число від 0 до 1000!";
        } else {
            output.innerHTML = "<strong>Результат:</strong> " + numberToWords(num);
        }
    }

    function calculateTriangle() {
        let a = parseFloat(document.getElementById("triangleA").value);
        let b = parseFloat(document.getElementById("triangleB").value);
        let output = document.getElementById("triangleOutput");
        if (!a || !b || a <= 0 || b <= 0) {
            output.innerHTML = "<strong>Помилка:</strong> Введіть додатні числа!";
            return;
        }
        let c = Math.sqrt(a * a + b * b);
        let alpha = Math.atan(a / b) * 180 / Math.PI;
        let beta = 90 - alpha;
        output.innerHTML = "<strong>гіпотенуза:</strong> " + c.toFixed(2) + "<br><strong>Кути:</strong> " + alpha.toFixed(2) + "°, " + beta.toFixed(2) + "°";
    }
    function countVowels(str) {
        let vowels = "аеєиіїоуюяAEIOU";
        let count = 0;
        for (let char of str.toLowerCase()) {
            if (vowels.includes(char)) count++;
        }
        return count;
    }
    function countVowelsDisplay() {
        let inputText = document.getElementById("inputText").value;
        document.getElementById("vowelOutput").innerHTML = "<strong>кількість голосних:</strong> " + countVowels(inputText);
    }
    function calculateSumAndProduct() {
        let inputElement = document.getElementById("sumProductInput");
        let num = "";
        for (let char of inputElement.value) {
            if (!isNaN(char) && char !== " ") {
                num += char;
            }
        }
        let sum = 0, product = 1;
        if (!num) {
            document.getElementById("sumProductOutput").innerHTML = "<strong>Помилка:</strong> іведіть хоча б одну цифру!";
            return;
        }
        for (let digit of num) {
            let n = parseInt(digit);
            sum += n;
            product *= n;
        }
        document.getElementById("sumProductOutput").innerHTML = "<strong>сума цифр:</strong> " + sum + "<br><strong>добуток цифр:</strong> " + product;
    }

    window.convertNumberToWords = convertNumberToWords;
    window.calculateTriangle = calculateTriangle;
    window.countVowelsDisplay = countVowelsDisplay;
    window.calculateSumAndProduct = calculateSumAndProduct;
;
