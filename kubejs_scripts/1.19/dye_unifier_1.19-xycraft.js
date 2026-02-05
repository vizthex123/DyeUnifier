// Adds recipes that use items from XyCraft World
ServerEvents.recipes(e => {

    // Xychorium dyes
    // Uses 50% more RF than a standard Centrifuge Dye Extraction recipe and gives 4 Dye per item
    e.recipes.thermal.centrifuge(["xycraft_world:xychorium_gem_light", "4x blue_dye"], "xycraft_world:xychorium_gem_blue", 3).energy(2000).id("kubejs:xychorium_blue")
    e.recipes.thermal.centrifuge(["xycraft_world:xychorium_gem_light", "4x green_dye"], "xycraft_world:xychorium_gem_green", 3).energy(2000).id("kubejs:xychorium_green")
    e.recipes.thermal.centrifuge(["xycraft_world:xychorium_gem_light", "4x red_dye"], "xycraft_world:xychorium_gem_red", 3).energy(2000).id("kubejs:xychorium_red")
    e.recipes.thermal.centrifuge(["xycraft_world:xychorium_gem_light", "4x black_dye"], "xycraft_world:xychorium_gem_dark", 3).energy(2000).id("kubejs:xychorium_black")
    e.recipes.thermal.centrifuge(["4x white_dye"], "xycraft_world:xychorium_gem_light", 3).energy(2000).id("kubejs:xychorium_white")

})