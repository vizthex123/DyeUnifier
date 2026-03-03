// Adds recipes to Create's Millstone
// Requires KubeJS Create
ServerEvents.recipes(e => {

    //// Milling gives 50% more dye than crafting does (compared to TE's double). The base recipes are all over the place, though (and i'm sure i'll forget to adhere to this lol).
	/// Also gives extra dyes based on item texture colours (seems to be 1 extra output, 2 for double dye items)
    /// Smelting recipes are automatically added to Bulk Blasting

    // White
    e.recipes.create.milling(["white_dye", Item.of("white_dye").withChance(0.5), Item.of("light_gray_dye").withChance(0.5), Item.of("2x green_dye").withChance(0.25)], "biomemakeover:buttonbush").id("dyeunifier:mill_buttonbush")


    e.recipes.create.milling(["white_dye", Item.of("white_dye").withChance(0.5), Item.of("lime_dye").withChance(0.25)], "biomeswevegone:white_allium").id("dyeunifier:mill_white_allium")
    e.recipes.create.milling(["white_dye", Item.of("white_dye").withChance(0.5), Item.of("green_dye").withChance(0.35)], "biomeswevegone:white_allium_flower_bush").id("dyeunifier:mill_white_allium_flower_bush")
    e.recipes.create.milling(["2x white_dye", Item.of("white_dye").withChance(0.5), Item.of("2x green_dye").withChance(0.5), Item.of("lime_dye").withChance(0.25)], "biomeswevegone:tall_white_allium").id("dyeunifier:mill_tall_white_allium")
    e.recipes.create.milling(["3x white_dye"], "biomeswevegone:white_puffball_cap").id("dyeunifier:mill_white_puffball_cap")
    e.recipes.create.milling(["white_dye", Item.of("white_dye").withChance(0.5), Item.of("light_gray_dye").withChance(0.35), Item.of("green_dye").withChance(0.25)], "biomeswevegone:white_sage").id("dyeunifier:mill_white_sage")

    e.recipes.create.milling(["2x white_dye", Item.of("white_dye").withChance(0.5), Item.of("light_gray_dye").withChance(0.5), Item.of("cyan_dye").withChance(0.25)], "phantasm:starflower").id("dyeunifier:mill_starflower")


    e.recipes.create.milling(["white_dye", Item.of("white_dye").withChance(0.5), Item.of("light_gray_dye").withChance(0.5), Item.of("cyan_dye").withChance(0.25)], "regions_unexplored:white_magnolia_flowers").id("dyeunifier:mill_white_magnolia_flowers")



    // Orange
	// Blaze Powder intentionally excluded because reasons™
    e.recipes.create.milling(["orange_dye", Item.of("orange_dye").withChance(0.5)], "#dyetagger:dye_materials/milling/orange").id("dyeunifier:mill_generic_orange")

    e.recipes.create.milling(["orange_dye", Item.of("orange_dye").withChance(0.5), Item.of("lime_dye").withChance(0.1)], "carrot").id("dyeunifier:mill_carrot")
    e.recipes.create.milling(["2x orange_dye", Item.of("green_dye").withChance(0.1)], "glow_berries").id("dyeunifier:mill_glow_berries")


    e.recipes.create.milling(["4x orange_dye"], "alexscaves:caramel").id("dyeunifier:mill_caramel")


    e.recipes.create.milling(["2x orange_dye", Item.of("orange_dye").withChance(0.5), Item.of("2x green_dye").withChance(0.5)], "biomemakeover:marigold").id("dyeunifier:mill_marigold")


    e.recipes.create.milling(["orange_dye", Item.of("orange_dye").withChance(0.5), Item.of("lime_dye").withChance(0.05)], "#forge:fruits/orange").id("dyeunifier:mill_orange")


    e.recipes.create.milling(["orange_dye", Item.of("orange_dye").withChance(0.5), Item.of("purple_dye").withChance(0.65)], "phantasm:pream_berry").id("dyeunifier:mill_pream_berry")


    e.recipes.create.milling(["orange_dye", Item.of("orange_dye").withChance(0.5), Item.of("magenta_dye").withChance(0.15)], "regions_unexplored:cave_hyssop").id("dyeunifier:mill_cave_hyssop")



    // Magenta
    e.recipes.create.milling(["magenta_dye", Item.of("magenta_dye").withChance(0.5)], "#dyetagger:dye_materials/milling/magenta").id("dyeunifier:mill_generic_magenta")

    e.recipes.create.milling(["2x magenta_dye", Item.of("magenta_dye").withChance(0.5)], "#dyetagger:dye_materials/milling/magenta_double").id("dyeunifier:mill_generic_magenta_double")


    e.recipes.create.milling(["magenta_dye", Item.of("magenta_dye").withChance(0.5), Item.of("green_dye").withChance(0.15)], "biomemakeover:magenta_bud").id("dyeunifier:mill_magenta_bud")


	e.recipes.create.milling(["magenta_dye", Item.of("magenta_dye").withChance(0.5), Item.of("green_dye").withChance(0.15)], "twilightforest:huge_water_lily").id("dyeunifier:mill_huge_water_lily")



    // Light Blue
	// Banshee Powder intentionally excluded because reasons™
    e.recipes.create.milling(["light_blue_dye", Item.of("light_blue_dye").withChance(0.5)], "#dyetagger:dye_materials/milling/light_blue").id("dyeunifier:mill_generic_light_blue")

    e.recipes.create.milling(["4x light_blue_dye"], "alexscaves:bioluminesscence").id("dyeunifier:mill_bioluminesscence")
    e.recipes.create.milling(["4x light_blue_dye", Item.of("white_dye").withChance(0.15)], "alexscaves:ping_pong_sponge").id("dyeunifier:mill_ping_pong_sponge")


    e.recipes.create.milling(["2x light_blue_dye", Item.of("green_dye").withChance(0.1), Item.of("blue_dye").withChance(0.05)], "netherexp:soul_torchflower").id("dyeunifier:mill_soul_torchflower")


    e.recipes.create.milling(["light_blue_dye", Item.of("light_blue_dye").withChance(0.5), Item.of("white_dye").withChance(0.25)], "regions_unexplored:blue_magnolia_flowers").id("dyeunifier:mill_blue_magnolia_flowers")


    e.recipes.create.milling(["light_blue_dye", Item.of("light_blue_dye").withChance(0.5), Item.of("blue_dye").withChance(0.35)], "outer_end:azure_bud").id("dyeunifier:mill_azure_bud")
    e.recipes.create.milling(["2x light_blue_dye", Item.of("light_blue_dye").withChance(0.5), Item.of("blue_dye").withChance(0.35)], "outer_end:floral_paste").id("dyeunifier:mill_floral_paste")


    e.recipes.create.milling(["light_blue_dye", Item.of("light_blue_dye").withChance(0.5), Item.of("blue_dye").withChance(0.35)], "yungscavebiomes:frost_lily").id("dyeunifier:mill_frost_lily")



    // Yellow
    e.recipes.create.milling(["yellow_dye", Item.of("yellow_dye").withChance(0.5)], "#dyetagger:dye_materials/milling/yellow").id("dyeunifier:mill_generic_yellow")


    e.recipes.create.milling(["2x yellow_dye", Item.of("yellow_dye").withChance(0.5)], "regions_unexplored:tall_yellow_bioshroom").id("dyeunifier:mill_tall_yellow_bioshroom")



	// Lime
    e.recipes.create.milling(["lime_dye", Item.of("lime_dye").withChance(0.5)], "#dyetagger:dye_materials/milling/lime").id("dyeunifier:mill_generic_lime")


    e.recipes.create.milling(["3x lime_dye", Item.of("lime_dye").withChance(0.5), Item.of("green_dye").withChance(0.05), Item.of("green_dye").withChance(0.05)], "alexscaves:curly_fern").id("dyeunifier:mill_curly_fern")


    e.recipes.create.milling(["lime_dye", Item.of("lime_dye").withChance(0.5), Item.of("green_dye").withChance(0.1)], "atmospheric:passion_vine").id("dyeunifier:mill_passion_vine")


    e.recipes.create.milling(["lime_dye", Item.of("white_dye").withChance(0.35)], "forestry:phosphor").id("dyeunifier:mill_phosphor")


    e.recipes.create.milling(["lime_dye", Item.of("lime_dye").withChance(0.5), Item.of("2x white_dye").withChance(0.75)], "mushroomquest:oyster_mushroom").id("dyeunifier:mill_oyster_mushroom")


    e.recipes.create.milling(["lime_dye", Item.of("lime_dye").withChance(0.5), Item.of("white_dye").withChance(0.15)], "quark:glow_shroom").id("dyeunifier:mill_glow_shroom")


    e.recipes.create.milling(["lime_dye", Item.of("lime_dye").withChance(0.5), Item.of("green_dye").withChance(0.05)], "regions_unexplored:green_bioshroom").id("dyeunifier:mill_green_bioshroom")
    e.recipes.create.milling(["2x lime_dye", Item.of("lime_dye").withChance(0.5), Item.of("green_dye").withChance(0.05)], "regions_unexplored:tall_green_bioshroom").id("dyeunifier:mill_tall_green_bioshroom")



    // Pink
    e.recipes.create.milling(["pink_dye", Item.of("pink_dye").withChance(0.5)], "#dyetagger:dye_materials/milling/pink").id("dyeunifier:mill_generic_pink")


    e.recipes.create.milling(["pink_dye", Item.of("pink_dye").withChance(0.5), Item.of("green_dye").withChance(0.15)], "biomemakeover:pink_bud").id("dyeunifier:mill_pink_bud")


    e.recipes.create.milling(["3x pink_dye", Item.of("green_dye").withChance(0.1)], "biomeswevegone:japanese_orchid").id("dyeunifier:mill_japanese_orchid")


    e.recipes.create.milling(["pink_dye", Item.of("pink_dye").withChance(0.5), Item.of("green_dye").withChance(0.25)], "ecologics:azalea_flower").id("dyeunifier:mill_azalea_flower")


    e.recipes.create.milling(["pink_dye", Item.of("pink_dye").withChance(0.5), Item.of("green_dye").withChance(0.25)], "phantasm:choral_fan").id("dyeunifier:mill_choral_fan")


    e.recipes.create.milling(["3x pink_dye"], "mushroomquest:pink_waxcap").id("dyeunifier:mill_pink_waxcap")


    e.recipes.create.milling(["2x pink_dye", Item.of("pink_dye").withChance(0.5)], "regions_unexplored:tall_pink_bioshroom").id("dyeunifier:mill_tall_pink_bioshroom")


    e.recipes.create.milling(["pink_dye", Item.of("pink_dye").withChance(0.5), Item.of("red_dye").withChance(0.1), Item.of("green_dye").withChance(0.05)], "yungscavebiomes:prickly_peach").id("dyeunifier:mill_prickly_peach")



	// Grey
    e.recipes.create.milling(["gray_dye", Item.of("gray_dye").withChance(0.5), Item.of("green_dye").withChance(0.15)], "biomemakeover:gray_bud").id("dyeunifier:mill_gray_bud")


    e.recipes.create.milling(["gray_dye", Item.of("gray_dye").withChance(0.5), Item.of("green_dye").withChance(0.15)], "forestry:ash").id("dyeunifier:mill_ash")


    e.recipes.create.milling(["gray_dye", Item.of("gray_dye").withChance(0.5), Item.of("brown_dye").withChance(0.25)], "mushroomquest:black_truffle").id("dyeunifier:mill_black_truffle")
    e.recipes.create.milling(["gray_dye", Item.of("gray_dye").withChance(0.5), Item.of("black_dye").withChance(0.6)], "mushroomquest:dead_mans_fingers").id("dyeunifier:mill_dead_mans_fingers")
    e.recipes.create.milling(["gray_dye", Item.of("gray_dye").withChance(0.5), Item.of("black_dye").withChance(0.5), Item.of("white_dye").withChance(0.45)], "mushroomquest:black_velvet_bolete").id("dyeunifier:mill_black_velvet_bolete")



    // Light Grey - all covered by Create's built-in compat, pog



    // Cyan
    e.recipes.create.milling(["cyan_dye", Item.of("cyan_dye").withChance(0.5)], "#dyetagger:dye_materials/milling/cyan").id("dyeunifier:mill_generic_cyan")


    e.recipes.create.milling(["2x cyan_dye", Item.of("cyan_dye").withChance(0.5)], "aquamirae:elodea").id("dyeunifier:mill_elodea")


    e.recipes.create.milling(["2x cyan_dye"], "atmospheric:agave").id("dyeunifier:mill_agave")


	e.recipes.create.milling(["cyan_dye", Item.of("cyan_dye").withChance(0.5), Item.of("green_dye").withChance(0.15)], "biomemakeover:cyan_bud").id("dyeunifier:mill_cyan_bud")


    e.recipes.create.milling(["cyan_dye", Item.of("cyan_dye").withChance(0.5), Item.of("green_dye").withChance(0.25)], "biomeswevegone:winter_cyclamen").id("dyeunifier:mill_winter_cyclamen")



    e.recipes.create.milling(["2x cyan_dye", Item.of("cyan_dye").withChance(0.5)], "phantasm:tall_vivid_nihilis").id("dyeunifier:mill_tall_vivid_nihilis")


    e.recipes.create.milling(["cyan_dye", Item.of("cyan_dye").withChance(0.5), Item.of("brown_dye").withChance(0.6)], "mushroomquest:bluing_bolete").id("dyeunifier:mill_bluing_bolete")
	e.recipes.create.milling(["cyan_dye", Item.of("cyan_dye").withChance(0.5), Item.of("lime_dye").withChance(0.6), Item.of("green_dye").withChance(0.3)], "mushroomquest:verdigris_agaric").id("dyeunifier:mill_verdigris_agaric")


    e.recipes.create.milling(["cyan_dye", Item.of("cyan_dye").withChance(0.5), Item.of("white_dye").withChance(0.05)], "regions_unexplored:hyacinth_flowers").id("dyeunifier:mill_hyacinth_flowers")



	// Purple
    e.recipes.create.milling(["purple_dye", Item.of("purple_dye").withChance(0.5)], "#dyetagger:dye_materials/milling/purple").id("dyeunifier:mill_generic_purple")
    e.recipes.create.milling(["purple_dye", Item.of("purple_dye").withChance(0.5), Item.of("gray_dye").withChance(0.05)], "ad_astra:strophar_mushroom").id("dyeunifier:mill_strophar_mushroom")


    e.recipes.create.milling(["purple_dye", Item.of("purple_dye").withChance(0.5)], "alexscaves:licoroot_vine").id("dyeunifier:mill_licoroot_vine")


    e.recipes.create.milling(["purple_dye", Item.of("purple_dye").withChance(0.5), Item.of("orange_dye").withChance(0.2)], "atmospheric:passion_fruit").id("dyeunifier:mill_passion_fruit")


    e.recipes.create.milling(["2x purple_dye", Item.of("purple_dye").withChance(0.5), Item.of("green_dye").withChance(0.15)], "biomemakeover:foxglove").id("dyeunifier:mill_foxglove")
    e.recipes.create.milling(["purple_dye", Item.of("purple_dye").withChance(0.5), Item.of("green_dye").withChance(0.15)], "biomemakeover:purple_bud").id("dyeunifier:mill_purple_bud")


    e.recipes.create.milling(["purple_dye", Item.of("purple_dye").withChance(0.5), Item.of("pink_dye").withChance(0.35), Item.of("green_dye").withChance(0.25)], "biomeswevegone:purple_sage").id("dyeunifier:mill_purple_sage")


    e.recipes.create.milling(["purple_dye", Item.of("purple_dye").withChance(0.5), Item.of("brown_dye").withChance(0.5)], "mushroomquest:cinnamon_bracket").id("dyeunifier:mill_cinnamon_bracket")



    // Blue
	e.recipes.create.milling(["blue_dye", Item.of("blue_dye").withChance(0.5), Item.of("green_dye").withChance(0.15)], "biomemakeover:blue_bud").id("dyeunifier:mill_blue_bud")

    e.remove({id: "create:milling/compat/biomeswevegone/blue_sage"})
    e.recipes.create.milling(["blue_dye", Item.of("blue_dye").withChance(0.5), Item.of("cyan_dye").withChance(0.35), Item.of("green_dye").withChance(0.25)], "biomeswevegone:blue_sage").id("dyeunifier:mill_blue_sage")


    e.recipes.create.milling(["blue_dye", Item.of("blue_dye").withChance(0.5), Item.of("light_blue_dye").withChance(0.1)], "mushroomquest:blue_chanterelle").id("dyeunifier:mill_blue_chanterelle")


	e.recipes.create.milling(["blue_dye", Item.of("blue_dye").withChance(0.5), Item.of("green_dye").withChance(0.05)], "biomeswevegone:blueberries").id("dyeunifier:mill_blueberries")
	e.recipes.create.milling(["2x blue_dye", Item.of("blue_dye").withChance(0.5), Item.of("green_dye").withChance(0.25)], "biomeswevegone:blue_rose_bush").id("dyeunifier:mill_blue_rose_bush")


	e.recipes.create.milling(["2x blue_dye", Item.of("blue_dye").withChance(0.5), Item.of("light_blue_dye").withChance(0.25), Item.of("green_dye").withChance(0.25)], "regions_unexplored:meadow_sage").id("dyeunifier:mill_meadow_sage")



    // Brown
    e.recipes.create.milling(["brown_dye", Item.of("brown_dye").withChance(0.5)], "#dyetagger:dye_materials/milling/brown").id("dyeunifier:mill_generic_brown")


    e.recipes.create.milling(["brown_dye", Item.of("brown_dye").withChance(0.5), Item.of("bone_meal").withChance(0.75)], "alexscaves:guano").id("dyeunifier:mill_guano")


    e.recipes.create.milling(["2x brown_dye", Item.of("brown_dye").withChance(0.5)], "biomemakeover:bulbus_root").id("dyeunifier:mill_bulbus_root")
	e.recipes.create.milling(["brown_dye", Item.of("brown_dye").withChance(0.5), Item.of("green_dye").withChance(0.15)], "biomemakeover:brown_bud").id("dyeunifier:mill_brown_bud")
    e.recipes.create.milling(["2x brown_dye", Item.of("brown_dye").withChance(0.5), Item.of("green_dye").withChance(0.2)], "biomemakeover:cattail").id("dyeunifier:mill_cattail")
    e.recipes.create.milling(["brown_dye", Item.of("brown_dye").withChance(0.5), Item.of("green_dye").withChance(0.15)], "biomemakeover:reed").id("dyeunifier:mill_reeds")


    e.recipes.create.milling(["brown_dye", Item.of("brown_dye").withChance(0.5), Item.of("green_dye").withChance(0.25)], "biomeswevegone:cattail_sprout").id("dyeunifier:mill_cattail_sprout")


    e.recipes.create.milling(["brown_dye", Item.of("brown_dye").withChance(0.5), Item.of("green_dye").withChance(0.05)], "environmental:cattail").id("dyeunifier:mill_environmental_cattail")


    e.recipes.create.milling(["4x brown_dye"], "mushroomquest:penny_bun").id("dyeunifier:mill_penny_bun")


    e.recipes.create.milling(["2x brown_dye", Item.of("brown_dye").withChance(0.5), Item.of("green_dye").withChance(0.25)], "regions_unexplored:cattail").id("dyeunifier:mill_regions_cattail")



    // Green
    e.recipes.create.milling(["green_dye", Item.of("green_dye").withChance(0.5)], "#dyetagger:dye_materials/milling/green").id("dyeunifier:mill_generic_green")
    //e.recipes.create.milling(["2x green_dye", Item.of("green_dye").withChance(0.5)], "#dyetagger:dye_materials/milling/green_double").id("dyeunifier:mill_generic_green_double")

    e.recipes.create.milling(["3x green_dye", Item.of("lily_pad").withChance(0.1)], "#dyetagger:huge_lily_pads").id("dyeunifier:mill_huge_lily_pads")


    e.recipes.create.milling(["green_dye", Item.of("green_dye").withChance(0.5), Item.of("lime_dye").withChance(0.5)], "alexscaves:archaic_vine").id("dyeunifier:mill_archaic_vine")


    e.recipes.create.milling(["2x green_dye", Item.of("green_dye").withChance(0.5), Item.of("lime_dye").withChance(0.25), Item.of("2x white_dye").withChance(0.35)], "aquamirae:wisteria_niveis").id("dyeunifier:mill_wisteria_niveis")



	// Red
    e.recipes.create.milling(["red_dye", Item.of("red_dye").withChance(0.5)], "#dyetagger:dye_materials/milling/red").id("dyeunifier:mill_generic_red")

    e.recipes.create.milling(["2x red_dye", Item.of("green_dye").withChance(0.1)], "#forge:fruits/cherry").id("dyeunifier:mill_cherry")

    e.recipes.create.milling(["red_dye", Item.of("red_dye").withChance(0.5), Item.of("green_dye").withChance(0.1)], "#forge:fruits/strawberry").id("dyeunifier:mill_strawberry")

    e.recipes.create.milling(["red_dye", Item.of("red_dye").withChance(0.5), Item.of("green_dye").withChance(0.1), Item.of("2x melon_seeds").withChance(0.1)], "melon_slice").id("dyeunifier:mill_melon_slice")


    e.recipes.create.milling(["2x red_dye", Item.of("red_dye").withChance(0.5), Item.of("green_dye").withChance(0.75)], "alexscaves:flytrap").id("dyeunifier:mill_flytrap")
    e.recipes.create.milling(["2x red_dye", Item.of("red_dye").withChance(0.6)], "alexscaves:giant_sweetberry").id("dyeunifier:mill_giant_sweetberry")


    e.recipes.create.milling(["red_dye", Item.of("red_dye").withChance(0.5), Item.of("green_dye").withChance(0.05)], "biomemakeover:moth_blossom").id("dyeunifier:mill_moth_blossom")


    e.recipes.create.milling(["red_dye", Item.of("red_dye").withChance(0.5), Item.of("black_dye").withChance(0.05)], "netherexp:ancient_wax").id("dyeunifier:mill_ancient_wax")
    e.recipes.create.milling(["red_dye", Item.of("red_dye").withChance(0.5)], "netherexp:treacherous_flame").id("dyeunifier:mill_treacherous_flame")


    e.recipes.create.milling(["2x red_dye", Item.of("2x white_dye").withChance(0.85)], "mushroomquest:bleeding_tooth_fungus").id("dyeunifier:mill_bleeding_tooth_fungus")
    e.recipes.create.milling(["2x red_dye", Item.of("orange_dye").withChance(0.5)], "mushroomquest:strawberry_bracket").id("dyeunifier:mill_strawberry_bracket")
    e.recipes.create.milling(["2x red_dye", Item.of("2x brown_dye").withChance(0.65)], "mushroomquest:bleeding_fairy_helmet").id("dyeunifier:mill_bleeding_fairy_helmet")
    e.recipes.create.milling(["2x red_dye", Item.of("orange_dye").withChance(0.6)], "mushroomquest:red_tear_mushroom").id("dyeunifier:mill_red_tear_mushroom")

    e.recipes.create.milling(["red_dye", Item.of("red_dye").withChance(0.5), Item.of("green_dye").withChance(0.1)], "twilightforest:thorn_rose").id("dyeunifier:mill_thorn_rose")



	// Black
    e.recipes.create.milling(["black_dye", Item.of("black_dye").withChance(0.5)], "#dyeunifier:dye_materials/milling/black").id("dyeunifier:mill_generic_black")


    e.recipes.create.milling(["3x black_dye"], "netherexp:fossil_fuel").id("dyeunifier:mill_fossil_fuel")


    e.recipes.create.milling(["2x black_dye", Item.of("black_dye").withChance(0.5), Item.of("green_dye").withChance(0.6)], "biomemakeover:black_thistle").id("dyeunifier:mill_black_thistle")


    e.recipes.create.milling(["2x black_dye", Item.of("black_dye").withChance(0.5), Item.of("white_dye").withChance(0.4)], "mushroomquest:shaggy_mane_block").id("dyeunifier:mill_shaggy_mane")


    e.recipes.create.milling(["black_dye", Item.of("black_dye").withChance(0.5), Item.of("magenta_dye").withChance(0.15)], "phantasm:dralgae").id("dyeunifier:mill_dralgae")



	/// TE Centrifuge Carryover
	/// Excludes fluid outputs since the Millstone can't handle that (but I might add them later as mixing recipes or something, I dunno)
	/// Takes 12 seconds to process instead of the standard 5 (14 for recipes that cost 1,800 RF, and 16 for minerals)

	// Minecraft
    e.recipes.create.milling(["light_blue_dye", Item.of("blue_dye").withChance(0.25)], "prismarine_shard").processingTime(300).id("dyeunifier:mill_prismarine_shard")
    // gotta make this a mixing recipe or some shit to prevent conflicts
	// e.recipes.create.milling([Item.of("light_blue_dye").withChance(0.5), Item.of("blue_dye").withChance(0.25)], "prismarine_crystals").id("dyeunifier:mill_prismarine_crystals")

	// Alex's Caves
    e.recipes.create.milling(["white_dye", Item.of("white_dye").withChance(0.4), Item.of("red_dye").withChance(0.4), "sugar"], "alexscaves:peppermint_powder").processingTime(240).id("dyeunifier:mill_peppermint_powder")


	// Biome Makeover
    e.recipes.create.milling(["green_dye", Item.of("lime_dye").withChance(0.4)], "biomemakeover:wart").processingTime(240).id("dyeunifier:mill_wart")

    e.recipes.create.milling(["purple_dye", Item.of("pink_dye").withChance(0.4)], "biomemakeover:moth_scales").processingTime(240).id("dyeunifier:mill_moth_scales")


	// Biomes o' Plenty
    e.recipes.create.milling(["2x red_dye", "2x stick"], "biomesoplenty:bramble").processingTime(240).id("dyeunifier:mill_bramble")


	// End's Phantasm
    e.recipes.create.milling(["3x purple_dye", "pink_dye", "2x white_dye"], "phantasm:crystal_shard").processingTime(320).id("dyeunifier:mill_crystal_shard")

    e.recipes.create.milling(["3x magenta_dye", "pink_dye", "2x black_dye"], "phantasm:void_crystal_shard").processingTime(320).id("dyeunifier:mill_void_crystal_shard")


	// Forestry
    e.recipes.create.milling(["2x orange_dye"], "forestry:amber").processingTime(320).id("dyeunifier:mill_amber")


	// Jaden's Nether Expansion
    e.recipes.create.milling(["2x blue_dye", "2x light_blue_dye"], "netherexp:warphopper_fur").processingTime(240).id("dyeunifier:mill_warphopper_fur")


	// The Outer End
    e.recipes.create.milling(["2x white_dye", "2x light_gray_dye"], "outer_end:halite_crystal").processingTime(320).id("dyeunifier:mill_halite_crystal")

    e.recipes.create.milling(["2x white_dye", "light_gray_dye", "2x bone_meal"], "outer_end:sinker_tooth").processingTime(280).id("dyeunifier:mill_sinker_tooth")

    e.recipes.create.milling(["2x cyan_dye", "light_blue_dye"], "outer_end:spectragel").processingTime(280).id("dyeunifier:mill_spectragel")

    e.recipes.create.milling(["2x blue_dye", "2x light_blue_dye"], "outer_end:cobalt_crystal_shard").processingTime(320).id("dyeunifier:mill_cobalt_crystal_shard")
    e.recipes.create.milling(["2x lime_dye", "2x white_dye"], "outer_end:mint_crystal_shard").processingTime(320).id("dyeunifier:mill_mint_crystal_shard")
    e.recipes.create.milling(["2x red_dye", "2x pink_dye"], "outer_end:rose_crystal_shard").processingTime(320).id("dyeunifier:mill_rose_crystal_shard")


	// Quark
    e.recipes.create.milling(["3x light_blue_dye", "white_dye"], "quark:soul_bead").processingTime(280).id("dyeunifier:mill_soul_bead")

    e.recipes.create.milling(["2x purple_dye", "black_dye"], "quark:dragon_scale").processingTime(280).id("dyeunifier:mill_dragon_scale")

    e.recipes.create.milling(["2x red_dye", Item.of("bone_meal").withChance(0.2)], "quark:crab_shell").processingTime(280).id("dyeunifier:mill_crab_shell")
    e.recipes.create.milling(["2x red_dye", Item.of("bone_meal").withChance(0.15)], "quark:crab_leg").processingTime(280).id("dyeunifier:mill_crab_leg")


    e.recipes.create.milling(["2x red_dye", Item.of("red_dye").withChance(0.4), Item.of("bone_meal").withChance(0.6)], "quark:egg_parrot_red_blue").processingTime(280).id("dyeunifier:mill_red_parrot_egg")
    e.recipes.create.milling(["2x blue_dye", Item.of("blue_dye").withChance(0.4), Item.of("bone_meal").withChance(0.6)], "quark:egg_parrot_blue").processingTime(280).id("dyeunifier:mill_blue_parrot_egg")
    e.recipes.create.milling(["2x green_dye", Item.of("green_dye").withChance(0.4), Item.of("bone_meal").withChance(0.6)], "quark:egg_parrot_green").processingTime(280).id("dyeunifier:mill_green_parrot_egg")
    e.recipes.create.milling(["2x yellow_dye", Item.of("yellow_dye").withChance(0.4), Item.of("bone_meal").withChance(0.6)], "quark:egg_parrot_yellow_blue").processingTime(280).id("dyeunifier:mill_yellow_parrot_egg")
    e.recipes.create.milling(["2x light_gray_dye", Item.of("light_gray_dye").withChance(0.4), Item.of("bone_meal").withChance(0.6)], "quark:egg_parrot_gray").processingTime(280).id("dyeunifier:mill_grey_parrot_egg")


	// The Twilight Forest
    e.recipes.create.milling(["2x white_dye", Item.of("light_gray_dye").withChance(0.4)], "twilightforest:arctic_fur").processingTime(280).id("dyeunifier:mill_arctic_fur")

    e.recipes.create.milling(["red_dye", "string"], "twilightforest:red_thread").processingTime(280).id("dyeunifier:mill_red_thread")

    e.recipes.create.milling(["2x red_dye", Item.of("ghast_tear").withChance(0.2)], "twilightforest:carminite").processingTime(280).id("dyeunifier:mill_carminite")

	// Might make these mixing recipes in the future
    e.recipes.create.milling(["2x red_dye", Item.of("glass_bottle").withChance(0.15)], "twilightforest:fiery_tears").processingTime(280).id("dyeunifier:mill_fiery_tears")
    e.recipes.create.milling(["3x red_dye", Item.of("glass_bottle").withChance(0.2)], "twilightforest:fiery_blood").processingTime(280).id("dyeunifier:mill_fiery_blood")


	// Upgrade Aquatic
    e.recipes.create.milling(["2x light_blue_dye", Item.of("2x cyan_dye").withChance(0.4), "2x bone_meal", "2x prismarine_shard"], "#upgrade_aquatic:prismarine_corals").processingTime(280).id("dyeunifier:mill_prismarine_corals")

    e.recipes.create.milling([Item.of("gray_dye").withChance(0.5), Item.of("light_gray_dye").withChance(0.4), "bone_meal", "prismarine_shard"], "#upgrade_aquatic:elder_prismarine_corals").processingTime(280).id("dyeunifier:mill_elder_prismarine_corals")


	// XyCraft World
    e.recipes.create.milling([Item.of("xycraft_world:xychorium_gem_light").withChance(0.5), "2x blue_dye"], "xycraft_world:xychorium_gem_blue").processingTime(320).id("dyeunifier:mill_xychorium_blue")
    e.recipes.create.milling([Item.of("xycraft_world:xychorium_gem_light").withChance(0.5), "2x green_dye"], "xycraft_world:xychorium_gem_green").processingTime(320).id("dyeunifier:mill_xychorium_green")
    e.recipes.create.milling([Item.of("xycraft_world:xychorium_gem_light").withChance(0.5), "2x red_dye"], "xycraft_world:xychorium_gem_red").processingTime(320).id("dyeunifier:mill_xychorium_red")
    e.recipes.create.milling([Item.of("xycraft_world:xychorium_gem_light").withChance(0.5), "2x black_dye"], "xycraft_world:xychorium_gem_dark").processingTime(320).id("dyeunifier:mill_xychorium_black")
    e.recipes.create.milling(["2x white_dye"], "xycraft_world:xychorium_gem_light").processingTime(320).id("dyeunifier:mill_xychorium_white")

})