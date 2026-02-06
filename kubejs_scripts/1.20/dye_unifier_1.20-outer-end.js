// Adds recipes that use items from The Outer End
ServerEvents.recipes(e => {

    // White
    e.recipes.thermal.centrifuge(["2x white_dye", "2x light_gray_dye"], "outer_end:halite_crystal", 3).energy(2000).id("dyeunifier:centrifuge_halite_crystal")
    e.recipes.thermal.centrifuge(["2x white_dye", "light_gray_dye"], "outer_end:sinker_tooth", 2).energy(1800).id("dyeunifier:centrifuge_sinker_tooth")

    // Cyan
    e.recipes.thermal.centrifuge(["2x cyan_dye", "light_blue_dye"], "outer_end:spectragel", 2).energy(1800).id("dyeunifier:centrifuge_spectragel")

    // Blue
    e.recipes.thermal.centrifuge(["2x blue_dye", "2x light_blue_dye"], "outer_end:cobalt_crystal_shard", 3).energy(2000).id("dyeunifier:centrifuge_cobalt_crystal_shard")

    // Lime
    e.recipes.thermal.centrifuge(["2x lime_dye", "2x white_dye"], "outer_end:mint_crystal_shard", 3).energy(2000).id("dyeunifier:centrifuge_mint_crystal_shard")

    // Red
    e.recipes.thermal.centrifuge(["2x red_dye", "2x pink_dye"], "outer_end:rose_crystal_shard", 3).energy(2000).id("dyeunifier:centrifuge_rose_crystal_shard")

})