// Adds recipes to TE's Centrifugal Separator that use items from Alex's Caves
// Requires KubeJS Thermal
ServerEvents.recipes(e => {

    // White
    e.recipes.thermal.centrifuge(["white_dye", Item.of("white_dye").withChance(0.5), Item.of("red_dye").withChance(0.5), "sugar"], "alexscaves:peppermint_powder", 3).energy(1600).id("dyeunifier:centrifuge_peppermint_powder")

    // Orange
    e.recipes.thermal.centrifuge(["2x orange_dye", "yellow_dye", Fluid.of("thermal:sap", 250)], "alexscaves:pewen_sap", 2).energy(1600).id("dyeunifier:centrifuge_pewen_sap")
    e.recipes.thermal.centrifuge(["8x orange_dye", "2x yellow_dye", Fluid.of("thermal:sap", 1000)], "alexscaves:amber", 2).energy(2000).id("dyeunifier:centrifuge_amber")

    // Ice Cream Scoops
    e.recipes.thermal.centrifuge(["4x brown_dye", Fluid.of("minecraft:milk", 250)], "alexscaves:chocolate_ice_cream_scoop", 3).energy(1700).id("dyeunifier:centrifuge_ice_cream_chocolate")
    e.recipes.thermal.centrifuge(["4x pink_dye", Fluid.of("minecraft:milk", 250)], "alexscaves:sweetberry_ice_cream_scoop", 3).energy(1700).id("dyeunifier:centrifuge_ice_cream_sweetberry")
    e.recipes.thermal.centrifuge(["4x white_dye", Fluid.of("minecraft:milk", 250)], "alexscaves:vanilla_ice_cream_scoop", 3).energy(1700).id("dyeunifier:centrifuge_ice_cream_vanilla")

})