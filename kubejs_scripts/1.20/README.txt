I advise condensing these into a single file (I don't think you can make optional recipe loads with KubeJS, so I divided them on a per-mod basis).

For the files with mods in their names, they all add recipes to Thermal Expansion's Centrifugal Seperator and as such require the mod to be installed. You can open each file to view its recipes if you want to (best to use VSCode for .js files if you didn't know already).

Assuming you've got all of the TE supported mods installed, you should just be able to toss them into your modpack (alongside the datapack) & be set, though.

KubeJS might print some errors about tags not existing, and if it does just remove (or comment out) the lines for the empty tags. Same goes if you find a recipe with no input item - just remove it from the script and it'll be fine.