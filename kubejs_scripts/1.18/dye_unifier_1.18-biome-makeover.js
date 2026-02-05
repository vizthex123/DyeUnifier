// Adds TE Centrifuge recipes that use items from Biome Makeover
onEvent("recipes", e => {

    // Green
    //e.recipes.thermal.centrifuge(["2x green_dye", Item.of("2x lime_dye").withChance(0.5)], "biomemakeover:ectoplasm", 4).energy(1600).id("kubejs:centrifuge_ectoplasm")
    e.recipes.thermal.centrifuge(["green_dye", Item.of("lime_dye").withChance(0.5)], "biomemakeover:wart", 1).energy(1600).id("kubejs:centifuge_moth_scales")

    // Purple
    e.recipes.thermal.centrifuge(["purple_dye", Item.of("pink_dye").withChance(0.5)], "biomemakeover:moth_scales", 1).energy(1600).id("kubejs:centifuge_moth_scales")

})