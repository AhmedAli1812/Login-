document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let cardNumber = document.getElementById("cardNumber").value;
    let cardName = document.getElementById("cardName").value;
    let expiryDate = document.getElementById("expiryDate").value;
    let cvv = document.getElementById("cvv").value;

    if (validatePaymentDetails(cardNumber, cardName, expiryDate, cvv)) {
        document.getElementById("paymentStatus").textContent = "تم الدفع بنجاح!";
        document.getElementById("paymentStatus").style.color = "green";
    } else {
        document.getElementById("paymentStatus").textContent = "الرجاء التحقق من البيانات المدخلة.";
        document.getElementById("paymentStatus").style.color = "red";
    }
});

function validatePaymentDetails(cardNumber, cardName, expiryDate, cvv) {
    // تحقق بسيط من صحة بيانات البطاقة
    let cardNumberRegex = /^[0-9]{16}$/;
    let expiryDateRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
    let cvvRegex = /^[0-9]{3}$/;

    if (!cardNumberRegex.test(cardNumber)) {
        return false;
    }

    if (!expiryDateRegex.test(expiryDate)) {
        return false;
    }

    if (!cvvRegex.test(cvv)) {
        return false;
    }

    return true;
}
