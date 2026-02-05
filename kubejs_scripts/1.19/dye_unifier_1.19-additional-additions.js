// Adds TE Centrifuge recipes that use items from Additional Additions
ServerEvents.recipes(e => {

    // Cyan
    e.recipes.thermal.centrifuge(["2x cyan_dye", "green_dye", "lime_dye"], "additionaladditions:copper_patina", 2).energy(1900).id("kubejs:centrifuge_copper_patina")

})