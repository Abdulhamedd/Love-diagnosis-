function getDiagnosis() {
    let symptom = document.getElementById("symptom").value.toLowerCase();
    let result = document.getElementById("result");

    let responses = {
        "heart racing": "Diagnosis: Love Overload ❤️. Prescription: Call your boyfriend ASAP!",
        "butterflies": "Diagnosis: Crush Syndrome 🦋. Prescription: A romantic dinner date!",
        "missing you": "Diagnosis: Severe Love Deficiency 😢. Prescription: A video call NOW!",
        "can't sleep": "Diagnosis: Lovesickness 🌙. Prescription: Listen to your favorite song together!"
    };

    if (responses[symptom]) {
        result.innerHTML = responses[symptom];
    } else {
        result.innerHTML = "Diagnosis: Unknown Love Condition! ❤️ Prescription: A warm hug from your boyfriend.";
    }
}