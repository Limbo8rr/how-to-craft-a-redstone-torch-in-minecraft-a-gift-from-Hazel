function startFest () {
    if (Math.percentChance(20)) {
        game.showLongText("in minecraft to craft a redstone torch, you will need to go get some wood, then you craft all that wood into oak planks, with the oak planks put the op(oak planks) in all four corners, then you will get a crafting table, then place the ct(crafting table) down and right click on it. then use your remaining op and craft a pickaxe you can see all the crafts if you go in the left side you can go start diging a cave, once you've got at least 3 stone you can upgrade your wooden pick to a stone pick. and if you end up finding 3 iron befor you find redstone(redstone is a red ore that looks like stone but has pixels of red inside it.) you can upgrade your stone pick to an iron pick. once you've got redstone go back to your ct(crafting table). once you've gotten to your crafting table get one stick and put it in any slot as long as their's a slot above it and in that slot above it guess what? yep thats why you got the redstone you probably gussed it, place the redstone on top of the stick and you know what you got a redstone torch.", DialogLayout.Full)
        tiles.setTilemap(tilemap`level1`)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    startFest()
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    startFest()
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    startFest()
})
startFest()
