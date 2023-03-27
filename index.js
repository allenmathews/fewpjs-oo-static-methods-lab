class Formatter {
    //add static methods here
    static capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    static sanitize(string) {
        return string.replace(/[^A-Za-z0-9-\s']+/g, "");
    }

    static titleize(string) {
        let lowerCaseWords = [
            "the",
            "a",
            "an",
            "but",
            "of",
            "and",
            "for",
            "at",
            "by",
            "from",
        ];
        let words = string.toLowerCase().split(" ");
        for (let i = 0; i < words.length; i++) {
            if (!lowerCaseWords.includes(words[i]) || i === 0)
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(" ");
    }
}