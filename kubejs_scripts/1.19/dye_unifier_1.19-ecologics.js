// Adds TE Centrifuge recipes that use items from Ecologics
ServerEvents.recipes(e => {

    // Red
    e.recipes.thermal.centrifuge(["4x red_dye", Item.of("2x bone_meal").withChance(0.25)], "ecologics:crab_claw", 3).energy(1800).id("kubejs:centrifuge_crab_claw")

})