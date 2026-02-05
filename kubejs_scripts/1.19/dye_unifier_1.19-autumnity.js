// Adds TE Centrifuge recipes that use items from Autumnity
ServerEvents.recipes(e => {

    // Orange
    e.recipes.thermal.centrifuge(["3x orange_dye", Item.of("redstone").withChance(0.75)], "autumnity:redstone_jack_o_lantern", 3).energy(1600).id("kubejs:centrifuge_redstone_jack_o_lantern")
    e.recipes.thermal.centrifuge(["3x orange_dye", Item.of("redstone").withChance(0.75)], "autumnity:large_redstone_jack_o_lantern_slice", 3).energy(1600).id("kubejs:centrifuge_large_redstone_jack_o_lantern")

})