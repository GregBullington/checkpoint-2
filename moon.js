let diamonds = 90
let totalMultiplier = 1
let autoMultiplier = 0


let clickUpgrades = {
  pickaxe: {
    price: 100,
    quantity: 0,
    Multiplier: 2
  },
  drill: {
    price: 250,
    quantity: 0,
    Multiplier: 3
  }
}

let automaticUpgrades = {
  rover: {
    price: 600,
    quantity: 0,
    automaticMultiplier: 20
  },
  miner: {
    price: 350,
    quantity: 0,
    automaticMultiplier: 5
  }
}

function checkFunds() {
  if (diamonds >= clickUpgrades.pickaxe.price) {
    document.getElementById('pickaxe').classList.remove("disabled", "text-decoration-line-through")
  }
  else {
    document.getElementById('pickaxe').classList.add("disabled", "text-decoration-line-through")
  }
  if (diamonds >= clickUpgrades.drill.price) {
    document.getElementById('drill').classList.remove("disabled", "text-decoration-line-through")
  }
  else {
    document.getElementById('drill').classList.add("disabled", "text-decoration-line-through")
  }
  if (diamonds >= automaticUpgrades.miner.price) {
    document.getElementById('miner').classList.remove("disabled", "text-decoration-line-through")
  }
  else {
    document.getElementById('miner').classList.add("disabled", "text-decoration-line-through")
  }
  if (diamonds >= automaticUpgrades.rover.price) {
    document.getElementById('rover').classList.remove("disabled", "text-decoration-line-through")
  }
  else {
    document.getElementById('rover').classList.add("disabled", "text-decoration-line-through")
  }
}
checkFunds()

function drawTotals() {
  document.getElementById('totalDiamonds').innerText = ` ${diamonds}`
  document.getElementById('totalPickaxes').innerText = ` ${clickUpgrades.pickaxe.quantity}`
  document.getElementById('totalDrills').innerText = ` ${clickUpgrades.drill.quantity}`
  document.getElementById('totalMiners').innerText = ` ${automaticUpgrades.miner.quantity}`
  document.getElementById('totalRovers',).innerText = ` ${automaticUpgrades.rover.quantity}`
  document.getElementById('price-pickaxe').innerText = ` ${clickUpgrades.pickaxe.price}`
  document.getElementById('price-drill').innerText = ` ${clickUpgrades.drill.price}`
  document.getElementById('price-miner').innerText = ` ${automaticUpgrades.miner.price}`
  document.getElementById('price-rover',).innerText = ` ${automaticUpgrades.rover.price}`
  document.getElementById('TCM').innerText = ` ${totalMultiplier}`
  document.getElementById('TAM').innerText = ` ${autoMultiplier}`

}
drawTotals()


function mine() {
  diamonds += totalMultiplier
  drawTotals()
  checkFunds()
}
function autoMine() {
  diamonds += autoMultiplier
  drawTotals()
  checkFunds()
}

function buyPickaxe() {
  if (diamonds >= clickUpgrades.pickaxe.price) {
    diamonds -= clickUpgrades.pickaxe.price
    clickUpgrades.pickaxe.quantity++
    totalMultiplier += clickUpgrades.pickaxe.Multiplier
    clickUpgrades.pickaxe.price *= 2
    checkFunds()
  }
  drawTotals()
}

function buyDrill() {
  if (diamonds >= clickUpgrades.drill.price) {
    diamonds -= clickUpgrades.drill.price
    clickUpgrades.drill.quantity++
    totalMultiplier += clickUpgrades.drill.Multiplier
    clickUpgrades.drill.price *= 2
    checkFunds()
  }
  drawTotals()
}

function buyMiner() {
  if (diamonds >= automaticUpgrades.miner.price) {
    diamonds -= automaticUpgrades.miner.price
    automaticUpgrades.miner.quantity++
    autoMultiplier += automaticUpgrades.miner.automaticMultiplier
    automaticUpgrades.miner.price *= 2
    checkFunds()
  }
  setInterval(autoMine, 3000)
  drawTotals()
}

function buyRover() {
  if (diamonds >= automaticUpgrades.rover.price) {
    diamonds -= automaticUpgrades.rover.price
    automaticUpgrades.rover.quantity++
    autoMultiplier += automaticUpgrades.rover.automaticMultiplier
    automaticUpgrades.rover.price *= 2
    checkFunds()
  }
  setInterval(autoMine, 3000)
  drawTotals()
}
