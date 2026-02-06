// Adds recipes that use items from The Outer End
ServerEvents.recipes(e => {

    // White
    e.recipes.thermal.centrifuge(["2x white_dye", Item.of("red_dye").withChance(0.5)], "alexscaves:peppermint_powder", 3).energy(1800).id("dyeunifier:centrifuge_peppermint_powder")

    // Orange
    e.recipes.thermal.centrifuge(["2x orange_dye", "yellow_dye"], "alexscaves:pewen_sap", 2).energy(1600).id("dyeunifier:centrifuge_pewen_sap")

    // Ice Cream Scoops
    e.recipes.thermal.centrifuge(["4x brown_dye", Fluid.of("minecraft:milk", 250)], "alexscaves:chocolate_ice_cream_scoop", 3).energy(1700).id("dyeunifier:centrifuge_ice_cream_chocolate")
    e.recipes.thermal.centrifuge(["4x pink_dye", Fluid.of("minecraft:milk", 250)], "alexscaves:sweetberry_ice_cream_scoop", 3).energy(1700).id("dyeunifier:centrifuge_ice_cream_sweetberry")
    e.recipes.thermal.centrifuge(["4x white_dye", Fluid.of("minecraft:milk", 250)], "alexscaves:vanilla_ice_cream_scoop", 3).energy(1700).id("dyeunifier:centrifuge_ice_cream_vanilla")

})