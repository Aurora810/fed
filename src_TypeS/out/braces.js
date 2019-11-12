function IsWellFormedBrackets(string, input) {
    string;
    previous = "";
    while (input.Length != previous.Length) {
        previous = input;
        input = input
            .Replace("()", String.Empty)
            .Replace("[]", String.Empty)
            .Replace("{}", String.Empty);
    }
    return (input.Length == 0);
}
console.log(IsWellFormedBrackets("(){}[]"));
//# sourceMappingURL=braces.js.map