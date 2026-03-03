// Adds recipes to TE's Centrifugal Separator that use items from End's Phantasm
// Requires KubeJS Thermal
ServerEvents.recipes(e => {

    // Magenta
    e.recipes.thermal.centrifuge(["3x magenta_dye", "pink_dye", "2x black_dye"], "phantasm:void_crystal_shard", 3).energy(2000).id("dyeunifier:centrifuge_void_crystal_shard")

    // Purple
    e.recipes.thermal.centrifuge(["3x purple_dye", "pink_dye", "2x white_dye"], "phantasm:crystal_shard", 3).energy(2000).id("dyeunifier:centrifuge_crystal_shard")

})