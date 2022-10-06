function generateHashtag(str) {
  if (!str.replace(/ /g, "") || str.replace(/ /g, "").length >= 140) {
    return false;
  }
  let arr = [];
  str.trim().split(" ").filter((word) => word != "").forEach((element) => {
      arr.push(element[0].toUpperCase() + element.substring(1));
    });
  return "#" + arr.join("");
}

console.log(generateHashtag("a".repeat(140)));
