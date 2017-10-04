var torn_clothes = [
  "knit swe/ater",
  "tu/be socks",
  "blue je/ans",
  "whit/e blouse"
];

/* YOUR CODE HERE */
function mend(clothing_item){
    // return mended_clothing_item;
    return clothing_item.replace(/[^a-zA-Z ]/g, "")

}


/* PRINT RESULT */
console.log("--> Finished running mend.js");
