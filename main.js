let nugget = document.getElementById("nugget");
let pocet = document.getElementById("pocet");
let autoclicker = document.getElementById("autoclicker");
let costclick = document.getElementById("costautoclick");
let poc = document.getElementById("poc");
let double = 0;
let fifty = 0;


let cursor = 0;
let gold = 0;
let price = 10;
let interval;


const change = () => {
    gold++;
    gold += double;
    gold += fifty;
    pocet.innerText = `Gold: ${gold}`;
};

nugget.onclick = change;
let cost = 10;
let cena = 10;
let cur = 0;

const autoclickerBuy = () => {
    if (gold >= cost) {
        gold -= cost;
        cost = cost + 10;
        pocet.innerText = `Gold: ${gold}`;
        interval = setInterval(change, 5000);
        autoclicker.style.display = "block";
        price = cena;
        cena = cena + 10;
        costclick.innerText = `Cena: ${cena}`;
        cursor = cur;
        cur++;
        poc.innerText = `${cur}`;
    }
}

autoclicker.onclick = autoclickerBuy;

let pickaxe = document.getElementById("pickaxe");
let costclick2 = document.getElementById("costautoclick2");
let poc2 = document.getElementById("poc2");

let pia = 0;
let pio = 0;
let price2 = 100;
let cena2 = 100;
let cost2 = 100;

const pickaxeBuy = () => {
    if (gold >= cost2) {
        gold -= cost2;
        cost2 = cost2 + 75;
        pocet.innerText = `Gold: ${gold}`;
        interval = setInterval(change, 3000);
        pickaxe.style.display = "block";
        price2 = cena2;
        cena2 = cena2 + 75;
        costclick2.innerText = `Cena: ${cena2}`;
        pia = pio;
        pio++;
        poc2.innerText = `${pio}`;
    }
}
pickaxe.onclick = pickaxeBuy;

let miner = document.getElementById("miner");
let costclick3 = document.getElementById("costautoclick3");
let poc3 = document.getElementById("poc3");

let mina = 0;
let mino = 0;
let price3 = 300;
let cena3 = 300;
let cost3 = 300;

const minerBuy = () => {
    if (gold >= cost3) {
        gold -= cost3;
        cost3 = cost3 + 100;
        pocet.innerText = `Gold: ${gold}`;
        interval = setInterval(change, 1500);
        miner.style.display = "block";
        price3 = cena3;
        cena3 = cena3 + 100;
        costclick3.innerText = `Cena: ${cena3}`;
        mina = mino;
        mino++;
        poc3.innerText = `${mino}`;
    }
}
miner.onclick = minerBuy;


let minecart = document.getElementById("minecart");
let costclick4 = document.getElementById("costautoclick4");
let poc4 = document.getElementById("poc4");

let carta = 0;
let carto = 0;
let price4 = 1000;
let cena4 = 1000;
let cost4 = 1000;

const minecartBuy = () => {
    if (gold >= cost4) {
        gold -= cost4;
        cost4 = cost4 + 500;
        pocet.innerText = `Gold: ${gold}`;
        interval = setInterval(change, 750);
        minecart.style.display = "block";
        price4 = cena4;
        cena4 = cena4 + 500;
        costclick4.innerText = `Cena: ${cena4}`;
        carta = carto;
        carto++;
        poc4.innerText = `${carto}`;
    }
}
minecart.onclick = minecartBuy;

let excavator = document.getElementById("excavator");
let costclick5 = document.getElementById("costautoclick5");
let poc5 = document.getElementById("poc5");

let exa = 0;
let exo = 0;
let price5 = 3000;
let cena5 = 3000;
let cost5 = 3000;


const excavatorBuy = () => {
    if (gold >= cost5) {
        gold -= cost5;
        cost5 = cost5 + 1000;
        pocet.innerText = `Gold: ${gold}`;
        interval = setInterval(change, 150);
        excavator.style.display = "block";
        price5 = cena5;
        cena5 = cena5 + 1000;
        costclick5.innerText = `Cena: ${cena5}`;
        exa = exo;
        exo++;
        poc5.innerText = `${exo}`;
    }
}
excavator.onclick = excavatorBuy;


let doubleclick = document.getElementById("doubleclick");
let costclick6 = document.getElementById("costautoclick6");
let onetimedouble = true;
let price6 = 250;
let cena6 = 250;
let cost6 = 250;

const doubleclickBuy = () => {
    if (gold >= cost6 && onetimedouble == true) {
        gold -= cost6;
        pocet.innerText = `Gold: ${gold}`;
        double = 1;
        doubleclick.style.display = "block";
        price6 = cena6;
        costclick6.innerText = `Cena: ${cena6}`;
        onetimedouble = false;
        costclick6.innerText = " ";
    } else {
        return;
    }
}
doubleclick.onclick = doubleclickBuy;

let fiftyclick = document.getElementById("fiftyclick");
let costclick7 = document.getElementById("costautoclick7");
let onetimefifty = true;
let price7 = 5000;
let cena7 = 5000;
let cost7 = 5000;

const fiftyclickBuy = () => {
    if (gold >= cost7 && onetimefifty == true) {
        gold -= cost7;
        pocet.innerText = `Gold: ${gold}`;
        fifty = 49;
        fiftyclick.style.display = "block";
        price7 = cena7;
        costclick7.innerText = `Cena: ${cena7}`;
        onetimefifty = false;
        costclick7.innerText = " ";
    } else {
        return;
    }
}
fiftyclick.onclick = fiftyclickBuy;
