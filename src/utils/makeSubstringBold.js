export function makeSubstringBold(strings, substrings) {
  return strings.map((str) => {
    substrings.forEach((sub) => {
      str = str.replace(new RegExp(sub, "gi"), `<b>${sub}</b>`);
    });
    return str;
  });
}
