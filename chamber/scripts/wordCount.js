function checkCharacterCount(textarea) {
    let charCount = textarea.value.length;

    document.getElementById('charCount').innerText = charCount + "/150 characters";

    if (charCount > 150) {
        // If the textarea has more than 150 characters, trim the textarea value:
        textarea.value = textarea.value.substring(0, 150);
    }
}