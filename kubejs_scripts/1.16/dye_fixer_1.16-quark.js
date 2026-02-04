// Adds recipes that use items from Quark
onEvent("recipes", e => {

    // White
    e.recipes.thermal.centrifuge(["4x white_dye"], "quark:soul_bead", 4).energy(1600).id("kubejs:centrifuge_soul_bead")

    // Yellow
    e.recipes.thermal.centrifuge(["2x yellow_dye"], "quark:tallow", 1).energy(1600).id("kubejs:centrifuge_tallow")

    // Purple
    e.recipes.thermal.centrifuge(["6x purple_dye"], "quark:dragon_scale", 10).energy(1600).id("kubejs:centrifuge_dragon_scale")

    // Red
    e.recipes.thermal.centrifuge(["3x red_dye", Item.of("bone_meal").withChance(0.25)], "quark:crab_shell", 2).energy(1600).id("kubejs:centrifuge_crab_shell")

    // Black
    e.recipes.thermal.centrifuge(["6x black_dye"], "quark:biotite", 10).energy(1600).id("kubejs:centrifuge_biotite")

})