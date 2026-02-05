// Makes dye recipes use the tags from the datapack
// Only wet & dry items require smelting (like in vanilla)
ServerEvents.recipes(e => {

    // Removals
    e.remove({type: "crafting_shapeless", output: "white_dye"})
    e.remove({type: "crafting_shapeless", output: "orange_dye"})
    e.remove({type: "crafting_shapeless", output: "magenta_dye"})
    e.remove({type: "crafting_shapeless", output: "light_blue_dye"})
    e.remove({type: "crafting_shapeless", output: "yellow_dye"})
    e.remove({type: "crafting_shapeless", output: "lime_dye"})
    e.remove({type: "crafting_shapeless", output: "pink_dye"})
    e.remove({type: "crafting_shapeless", output: "gray_dye"})
    e.remove({type: "crafting_shapeless", output: "light_gray_dye"})
    e.remove({type: "crafting_shapeless", output: "cyan_dye"})
    e.remove({type: "crafting_shapeless", output: "purple_dye"})
    e.remove({type: "crafting_shapeless", output: "blue_dye"})
    e.remove({type: "crafting_shapeless", output: "brown_dye"})
    e.remove({type: "crafting_shapeless", output: "green_dye"})
    e.remove({type: "smelting", output: "green_dye"})
    e.remove({type: "crafting_shapeless", output: "red_dye"})
    e.remove({type: "crafting_shapeless", output: "black_dye"})

    e.remove({id: "biomemakeover:dye/magenta_dye_from_magenta_petals"})
    e.remove({id: "biomemakeover:dye/pink_dye_from_pink_petals"})
    e.remove({id: "biomemakeover:dye/blue_dye_from_blue_petals"})
    e.remove({id: "biomemakeover:dye/brown_dye_from_brown_petals"})
    e.remove({id: "biomemakeover:dye/cyan_dye_from_cyan_petals"})
    e.remove({id: "biomemakeover:dye/gray_dye_from_gray_petals"})
    e.remove({id: "biomemakeover:dye/light_blue_dye_from_light_blue_petals"})
    e.remove({id: "biomemakeover:dye/purple_dye_from_purple_petals"})

    // White
    e.shapeless("white_dye", ["#dyetagger:dye_materials/white"]).id("kubejs:white_dye")
    e.shapeless("2x white_dye", ["#dyetagger:dye_materials/white_double"]).id("kubejs:white_dye_double")
    // e.smelting("white_dye", ["#dyetagger:dye_materials/white_smeltables"], 1).id("kubejs:white_dye_smelting")

    // Orange
    e.shapeless("orange_dye", ["#dyetagger:dye_materials/orange"]).id("kubejs:orange_dye")
    e.shapeless("2x orange_dye", ["#dyetagger:dye_materials/orange_double"]).id("kubejs:orange_dye_double")
    e.shapeless("2x orange_dye", ["#forge:dyes/yellow", "#forge:dyes/red"]).id("kubejs:orange_dye_combine")

    // Magenta
    e.shapeless("magenta_dye", ["#dyetagger:dye_materials/magenta"]).id("kubejs:magenta_dye")
    e.shapeless("2x magenta_dye", ["#dyetagger:dye_materials/magenta_double"]).id("kubejs:magenta_dye_double")
    e.shapeless("2x magenta_dye", ["#forge:dyes/purple", "#forge:dyes/pink"]).id("kubejs:magenta_dye_combine")
    e.shapeless("3x magenta_dye", ["#forge:dyes/red", "#forge:dyes/blue", "#forge:dyes/pink"]).id("kubejs:magenta_dye_triple_combine")
    e.shapeless("4x magenta_dye", ["#forge:dyes/red", "#forge:dyes/red", "#forge:dyes/blue", "#forge:dyes/white"]).id("kubejs:magenta_dye_quadruple_combine")

    // Light Blue
    e.shapeless("light_blue_dye", ["#dyetagger:dye_materials/light_blue"]).id("kubejs:light_blue_dye")
    e.shapeless("2x light_blue_dye", ["#dyetagger:dye_materials/light_blue_double"]).id("kubejs:light_blue_dye_double")
    e.shapeless("2x light_blue_dye", ["#forge:dyes/white", "#forge:dyes/blue"]).id("kubejs:light_blue_dye_combine")

    // Yellow
    e.shapeless("yellow_dye", ["#dyetagger:dye_materials/yellow"]).id("kubejs:yellow_dye")
    e.shapeless("2x yellow_dye", ["#dyetagger:dye_materials/yellow_double"]).id("kubejs:yellow_dye_double")
    e.shapeless("3x yellow_dye", ["#dyetagger:dye_materials/yellow_triple"]).id("kubejs:yellow_dye_triple")
    e.smelting("yellow_dye", "#dyetagger:dye_materials/yellow_smeltables", 1).id("kubejs:yellow_dye_smelting")

    // Lime
    e.shapeless("lime_dye", ["#dyetagger:dye_materials/lime"]).id("kubejs:lime_dye")
    e.shapeless("2x lime_dye", ["#dyetagger:dye_materials/lime_double"]).id("kubejs:lime_dye_double")
    e.smelting("lime_dye", "#dyetagger:dye_materials/lime_smeltables", 1).id("kubejs:lime_dye_smelting")

    // Pink
    e.shapeless("pink_dye", ["#dyetagger:dye_materials/pink"]).id("kubejs:pink_dye")
    e.shapeless("2x pink_dye", ["#dyetagger:dye_materials/pink_double"]).id("kubejs:pink_dye_double")
    e.shapeless("2x pink_dye", ["#forge:dyes/white", "#forge:dyes/red"]).id("kubejs:pink_dye_combine")

    // Gray
    e.shapeless("gray_dye", ["#dyetagger:dye_materials/gray"]).id("kubejs:grey_dye")
    e.shapeless("gray_dye", ["#forge:dyes/white", "#forge:dyes/black"]).id("kubejs:grey_dye_combine")

    // Light Gray
    e.shapeless("light_gray_dye", ["#dyetagger:dye_materials/light_gray"]).id("kubejs:light_gray_dye")
    e.shapeless("2x light_gray_dye", ["#forge:dyes/white", "#forge:dyes/gray"]).id("kubejs:light_gray_dye_combine")
    e.shapeless("3x light_gray_dye", ["#forge:dyes/white", "#forge:dyes/white", "#forge:dyes/black"]).id("kubejs:light_grey_dye_triple_combine")

    // Cyan
    e.shapeless("cyan_dye", ["#dyetagger:dye_materials/cyan"]).id("kubejs:cyan_dye")
    e.shapeless("2x cyan_dye", ["#dyetagger:dye_materials/cyan_double"]).id("kubejs:cyan_dye_double")
    e.shapeless("2x cyan_dye", ["#forge:dyes/green", "#forge:dyes/blue"]).id("kubejs:cyan_dye_combine")

    // Purple
    e.shapeless("purple_dye", ["#dyetagger:dye_materials/purple"]).id("kubejs:purple_dye")
    e.shapeless("2x purple_dye", ["#dyetagger:dye_materials/purple_double"]).id("kubejs:purple_dye_double")
    e.shapeless("2x purple_dye", ["#forge:dyes/red", "#forge:dyes/blue"]).id("kubejs:purple_dye_combine")
    e.smelting("purple_dye", "#dyetagger:dye_materials/purple_smeltables", 1).id("kubejs:purple_dye_smelting")

    // Blue
    e.shapeless("blue_dye", ["#dyetagger:dye_materials/blue"]).id("kubejs:blue_dye")
    e.shapeless("2x blue_dye", ["#dyetagger:dye_materials/blue_double"]).id("kubejs:blue_dye_double")
    e.shapeless("blue_dye", ["#forge:dyes/black", "#forge:dyes/light_blue"]).id("kubejs:blue_dye_combine")

    // Brown
    e.shapeless("brown_dye", ["#dyetagger:dye_materials/brown"]).id("kubejs:brown_dye")
    e.shapeless("2x brown_dye", ["#dyetagger:dye_materials/brown_double"]).id("kubejs:brown_dye_double")
    e.smelting("brown_dye", "#dyetagger:dye_materials/brown_smeltables", 1).id("kubejs:brown_dye_smelting")

    // Green
    e.shapeless("green_dye", ["#dyetagger:dye_materials/green"]).id("kubejs:green_dye")
    e.shapeless("2x green_dye", ["#dyetagger:dye_materials/green_double"]).id("kubejs:green_dye_double")
    e.smelting("green_dye", "#dyetagger:dye_materials/green_smeltables", 1).id("kubejs:green_dye_smelting")
    e.smelting("green_dye", "scute", 2).id("kubejs:scute_green")

    // Red
    e.shapeless("red_dye", ["#dyetagger:dye_materials/red"]).id("kubejs:red_dye")
    e.shapeless("2x red_dye", ["#dyetagger:dye_materials/red_double"]).id("kubejs:red_dye_double")

    // Black
    e.shapeless("black_dye", ["#dyetagger:dye_materials/black"]).id("kubejs:black_dye")
    e.shapeless("2x black_dye", ["#dyetagger:dye_materials/black_double"]).id("kubejs:black_dye_double")

})