addLayer("w", {
    name: "walls", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "W", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "red",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "walls", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.bricks}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "B: Use bricks to build walls", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})
addLayer("r", {
    name: "rooms",
    symbol: "R",
    position: 0,
    startData { return {
        unlocked: false,
        points: new Decimal(4),
    }},
    color: "white",
    requires: new Decimal(10),
    resource: "rooms",
    baseResource: "walls",
    baseAmount() {return player.walls},
    type: "normal",
    exponent: 0.1,
    gainMult() {
        mult = new Decimal(1)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 1,
    hotkeys: [
        {key: "b", description: "B: Use walls to build rooms", onPress(){if (canReset(this.layer)) doReset(this.layer)}}
    ]
})
