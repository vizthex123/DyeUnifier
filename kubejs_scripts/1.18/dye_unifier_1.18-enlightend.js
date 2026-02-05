// Adds TE Centrifuge recipes that use items from Enlightend
onEvent("recipes", e => {

    // White
    e.recipes.thermal.centrifuge(["2x white_dye", Item.of("light_gray_dye").withChance(0.5)], "enlightened_end:stalker_tooth", 2).energy(1800).id("kubejs:centrifuge_stalker_tooth")

    // Cyan
    e.recipes.thermal.centrifuge(["cyan_dye", Item.of("cyan_dye").withChance(0.5)], "enlightened_end:malachite", 3).energy(2000).id("kubejs:centrifuge_malachite")

})