var wrinkled_clothes = [
  "grEEn shIrt",
  "TubE sockS",
  "TIe Dye shIrt",
  "gray pants",
  "HAndKerChief",
  "whItE bLousE"
];

/* YOUR CODE HERE */
function iron(clothing_item){
    // return ironed_clothing_item;
    return clothing_item.toLowerCase().replace(/[^a-zA-Z ]/g, "");
}


/* PRINT RESULT */
console.log("--> Finished running iron.js");
