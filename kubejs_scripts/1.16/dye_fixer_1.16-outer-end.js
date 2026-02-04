// Adds recipes that use items from The Outer End
onEvent("recipes", e => {

    // Blue
    e.recipes.thermal.centrifuge(["2x blue_dye", "2x light_blue_dye"], "outer_end:cobalt_crystal_shard", 2).energy(1600).id("kubejs:centrifuge_cobalt_crystal_shard")

    // Lime
    e.recipes.thermal.centrifuge(["2x lime_dye", "2x white_dye"], "outer_end:mint_crystal_shard", 2).energy(1600).id("kubejs:centrifuge_mint_crystal_shard")

    // Red
    e.recipes.thermal.centrifuge(["2x red_dye", "2x pink_dye"], "outer_end:rose_crystal_shard", 2).energy(1600).id("kubejs:centrifuge_rose_crystal_shard")

})