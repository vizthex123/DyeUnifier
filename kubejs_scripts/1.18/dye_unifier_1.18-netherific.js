// Adds TE Centrifuge recipes that use items from Netherific
onEvent("recipes", e => {

    // Light Grey
    e.recipes.thermal.centrifuge(["light_gray_dye", Item.of("white_dye").withChance(0.5)], "nourished_nether:ash_lump", 2).energy(1700).id("kubejs:centrifuge_ash_lump")

})