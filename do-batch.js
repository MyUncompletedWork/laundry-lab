var batch_input = [
  [ "pLe*A/tED SKirt", "f*AncY T/Ie" ],
  ["cumber*bund"],
  ["rEd tuX/edo", "red* soCks"]
];

/* TODO: copy `clean` function here */
function clean(clothing_item){
    // return clean_clothing_item;
    return clothing_item.replace(/[^a-zA-Z ]/g,'');
}
/* TODO: copy `mend` function here */
function mend(clothing_item){
    // return mended_clothing_item;
    return clothing_item.replace(/[^a-zA-Z ]/g, "")

}
/* TODO: copy `iron` function here */
function iron(clothing_item){
    // return ironed_clothing_item;
    return clothing_item.toLowerCase().replace(/[^a-zA-Z ]/g, "");
}



/* YOUR CODE HERE */
function doBatch(clothes){
    // your code here
    return clothes.toLowerCase().replace(/[^a-zA-Z ]/g, "")
}


/* PRINT RESULT */
console.log("--> Finished running do-batch.js");
