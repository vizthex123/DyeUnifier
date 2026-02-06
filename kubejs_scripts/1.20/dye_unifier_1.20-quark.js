// Adds TE Centrifuge recipes that use items from Quark
ServerEvents.recipes(e => {

    // Light Blue
    e.recipes.thermal.centrifuge(["3x light_blue_dye", "white_dye"], "quark:soul_bead", 4).energy(1800).id("dyeunifier:centrifuge_soul_bead")

    // Yellow
    e.recipes.thermal.centrifuge(["yellow_dye", "white_dye"], "quark:frog_leg", 1).energy(1800).id("dyeunifier:centrifuge_frog_leg")

    // Purple
    e.recipes.thermal.centrifuge(["4x purple_dye", "2x black_dye"], "quark:dragon_scale", 10).energy(1800).id("dyeunifier:centrifuge_dragon_scale")

    // Red
    e.recipes.thermal.centrifuge(["3x red_dye", Item.of("bone_meal").withChance(0.25)], "quark:crab_shell", 2).energy(1800).id("dyeunifier:centrifuge_crab_shell")
    e.recipes.thermal.centrifuge(["2x red_dye", Item.of("bone_meal").withChance(0.2)], "quark:crab_leg", 2).energy(1800).id("dyeunifier:centrifuge_crab_leg")

    //// Parrot Eggs
    e.recipes.thermal.centrifuge(["2x red_dye", Item.of("red_dye").withChance(0.5), Item.of("bone_meal").withChance(0.75)], "quark:egg_parrot_red_blue", 2).energy(1800).id("dyeunifier:centrifuge_red_egg")
    e.recipes.thermal.centrifuge(["2x blue_dye", Item.of("blue_dye").withChance(0.5), Item.of("bone_meal").withChance(0.75)], "quark:egg_parrot_blue", 2).energy(1800).id("dyeunifier:centrifuge_blue_egg")
    e.recipes.thermal.centrifuge(["2x green_dye", Item.of("green_dye").withChance(0.5), Item.of("bone_meal").withChance(0.75)], "quark:egg_parrot_green", 2).energy(1800).id("dyeunifier:centrifuge_green_egg")
    e.recipes.thermal.centrifuge(["2x yellow_dye", Item.of("yellow_dye").withChance(0.5), Item.of("bone_meal").withChance(0.75)], "quark:egg_parrot_yellow_blue", 2).energy(1800).id("dyeunifier:centrifuge_yellow_egg")
    e.recipes.thermal.centrifuge(["2x light_gray_dye", Item.of("light_gray_dye").withChance(0.5), Item.of("bone_meal").withChance(0.75)], "quark:egg_parrot_grey", 2).energy(1800).id("dyeunifier:centrifuge_grey_egg")

})