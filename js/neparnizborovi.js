function evenstring(stringSplit) {
    const wordsWithSplit = stringSplit.split(' ');
    obj = {};
    for (let i = 1; i < wordsWithSplit.length; i += 2) {
        if (obj[wordsWithSplit[i]] === undefined) {
            obj[wordsWithSplit[i]] = 1;
        } else {
            obj[wordsWithSplit[i]]++;
        }
        console.log(wordsWithSplit[i]);
    }
    console.log(obj);
}

var arr1 = "I am a student in Computer Science and JavaScript academy at Semos Education. I am taking a course for JavaScript currently. My goals are to become a Software Developer after that, so I am working toward it right now.";
evenstring(arr1);