function sentencePyramid(sentence) {
    const words = sentence.split(" ");
    let currentLine = "";

    for (let i = 0; i < words.length; i++) {
        if (currentLine === "") {
            currentLine = words[i];
        } else {
            currentLine += " " + words[i];
        }

        console.log(currentLine);
    }
}

sentencePyramid("This is a simple sentence pyramid");