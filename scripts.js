function qtysch() {
    let goldgm, qty;
    goldgm = document.getElementById("goldgm").value;

    if (goldgm == 1) {
        document.getElementById("quantity").value = 840;
    } else if (goldgm == 2) {
        document.getElementById("quantity").value = 1200;
    } else if (goldgm == 3) {
        document.getElementById("quantity").value = 1560;
    } else if (goldgm == 4) {
        document.getElementById("quantity").value = 1800;
    } else if (goldgm == 5) {
        document.getElementById("quantity").value = 2160;
    } else {
        document.getElementById("quantity").value = ""
    }
}

function calcpur() {
    let dpl, pp, sp, gold, inbill, scheme, goldgm, goldValue, sp1, pl, qty;

    qty = document.getElementById("quantity").value;
    gold = document.getElementById("gold").value;
    goldgm = document.getElementById("goldgm").value;
    goldValue = (goldgm * gold) / qty;
    inbill = document.getElementById("inbill").value;
    dpl = document.getElementById("dpl1kgwp").innerHTML;
    pp = (dpl * 100 - 4795.923) / 100 - goldValue * 1 - inbill * 1;
    sp = (2 / 100) * pp + pp;
    sp1 = dpl - 1 * 60;
    scheme = dpl - pp;
    pl = sp1 - pp;

    document.getElementById("purchase").innerHTML = Math.round(pp);
    document.getElementById("schwp1").innerHTML = Math.round(scheme);
    document.getElementById("wp1sp").innerHTML = Math.round(sp1);
    document.getElementById("p&l1").innerHTML = Math.round(pl);
    document.getElementById("profitspwp1").innerHTML = Math.round(sp);
}

function calcpur1() {
    let dpl, pp, sp, gold, inbill, scheme, goldgm, goldValue, sp1, pl, qty;

    qty = document.getElementById("quantity").value;
    gold = document.getElementById("gold").value;
    goldgm = document.getElementById("goldgm").value;
    goldValue = (goldgm * gold) / qty;
    inbill = document.getElementById("inbill").value;
    dpl = document.getElementById("dpl2kgwp").innerHTML;
    pp = (dpl * 50 - 4795.923) / 50 - goldValue * 2 - (inbill * 2);
    sp = (2 / 100) * pp + pp;
    sp1 = dpl - 2 * 60;
    scheme = (dpl - pp) / 2;
    pl = sp1 - pp;

    document.getElementById("purchase2").innerHTML = Math.round(pp);
    document.getElementById("schwp2").innerHTML = Math.round(scheme);
    document.getElementById("wp2sp").innerHTML = Math.round(sp1);
    document.getElementById("p&l2").innerHTML = Math.round(pl);
    document.getElementById("profitspwp2").innerHTML = Math.round(sp);
}

function calcpur2() {
    let dpl, pp, sp, gold, inbill, scheme, goldgm, goldValue, sp1, pl, qty;

    qty = document.getElementById("quantity").value;
    gold = document.getElementById("gold").value;
    goldgm = document.getElementById("goldgm").value;
    goldValue = (goldgm * gold) / qty;
    inbill = document.getElementById("inbill").value;
    dpl = document.getElementById("dpl5kgwp").innerHTML;
    pp = (dpl * 20 - 4795.923) / 20 - goldValue * 5 - (inbill * 5);
    sp = (2 / 100) * pp + pp;
    sp1 = dpl - 5 * 60;
    scheme = (dpl - pp) / 5;
    pl = sp1 - pp;

    document.getElementById("purchase3").innerHTML = Math.round(pp);
    document.getElementById("schwp3").innerHTML = Math.round(scheme);
    document.getElementById("wp3sp").innerHTML = Math.round(sp1);
    document.getElementById("p&l3").innerHTML = Math.round(pl);
    document.getElementById("profitspwp3").innerHTML = Math.round(sp);
}

function calcpur3() {
    let dpl, pp, sp, gold, inbill, scheme, goldgm, goldValue, sp1, pl, qty;

    qty = document.getElementById("quantity").value;
    gold = document.getElementById("gold").value;
    goldgm = document.getElementById("goldgm").value;
    goldValue = (goldgm * gold) / qty;
    inbill = document.getElementById("inbill").value;
    dpl = document.getElementById("dpl10kgwp").innerHTML;
    pp = (dpl * 10 - 4795.923) / 10 - goldValue * 10 - (inbill * 10);
    sp = (2 / 100) * pp + pp;
    sp1 = dpl - 10 * 65;
    scheme = (dpl - pp) / 10;
    pl = sp1 - pp;

    document.getElementById("purchase4").innerHTML = Math.round(pp);
    document.getElementById("schwp4").innerHTML = Math.round(scheme);
    document.getElementById("wp4sp").innerHTML = Math.round(sp1);
    document.getElementById("p&l4").innerHTML = Math.round(pl);
    document.getElementById("profitspwp4").innerHTML = Math.round(sp);
}

function calcpur4() {
    let dpl, pp, sp, gold, inbill, scheme, goldgm, goldValue, sp1, pl, qty;

    qty = document.getElementById("quantity").value;
    gold = document.getElementById("gold").value;
    goldgm = document.getElementById("goldgm").value;
    goldValue = (goldgm * gold) / qty;
    inbill = document.getElementById("inbill").value;
    dpl = document.getElementById("dpl20kgwp").innerHTML;
    pp = (dpl * 5 - 4795.923) / 5 - goldValue * 20 - (inbill * 20);
    sp = (2 / 100) * pp + pp;
    sp1 = dpl - 20 * 65;
    scheme = (dpl - pp) / 20;
    pl = sp1 - pp;

    document.getElementById("purchase5").innerHTML = Math.round(pp);
    document.getElementById("schwp5").innerHTML = Math.round(scheme);
    document.getElementById("wp5sp").innerHTML = Math.round(sp1);
    document.getElementById("p&l5").innerHTML = Math.round(pl);
    document.getElementById("profitspwp5").innerHTML = Math.round(sp);
}

function calcpur5() {
    let dpl, pp, sp, gold, inbill, scheme, goldgm, goldValue, sp1, pl, qty;

    qty = document.getElementById("quantity").value;
    gold = document.getElementById("gold").value;
    goldgm = document.getElementById("goldgm").value;
    goldValue = (goldgm * gold) / qty;
    inbill = document.getElementById("inbill").value;
    dpl = document.getElementById("dpl30kgwp").innerHTML;
    pp = (dpl * 3.33 - 4795.923) / 3.33 - goldValue * 30 - (inbill * 30);
    sp = (2 / 100) * pp + pp;
    sp1 = dpl - 30 * 65;
    scheme = (dpl - pp) / 30;
    pl = sp1 - pp;

    document.getElementById("purchase6").innerHTML = Math.round(pp);
    document.getElementById("schwp6").innerHTML = Math.round(scheme);
    document.getElementById("wp6sp").innerHTML = Math.round(sp1);
    document.getElementById("p&l6").innerHTML = Math.round(pl);
    document.getElementById("profitspwp6").innerHTML = Math.round(sp);
}

function calcpur6() {
    let dpl, pp, sp, sp1, gold, inbill, scheme, goldgm, goldValue, silver, silvergm, silverValue, pl, qty;

    qty = document.getElementById("quantity").value;
    gold = document.getElementById("gold").value;
    goldgm = document.getElementById("goldgm").value;
    goldValue = (goldgm * gold) / qty;
    silver = document.getElementById("silver").value;
    silvergm = document.getElementById("silvergm").value;
    inbill = document.getElementById("inbill").value;
    dpl = document.getElementById("dpl50kgwp").innerHTML;
    silverValue = dpl - (dpl * 10 - (silver * 20)) / 10;
    pp = (dpl * 2 - 4795.923) / 2 - goldValue * 50 - (inbill * 50) - silverValue;
    sp = (2 / 100) * pp + pp;
    sp1 = dpl - 50 * 70;
    scheme = (dpl - pp) / 50;
    pl = sp1 - pp;

    document.getElementById("purchase7").innerHTML = Math.round(pp);
    document.getElementById("schwp7").innerHTML = Math.round(scheme);
    document.getElementById("wp7sp").innerHTML = Math.round(sp1);
    document.getElementById("p&l7").innerHTML = Math.round(pl);
    document.getElementById("profitspwp7").innerHTML = Math.round(sp);
}

function calcpur7() {
    let dpl, pp, sp, sp1, gold, inbill, scheme, goldgm, goldValue, silver, silvergm, silverValue, pl, qty;

    qty = document.getElementById("quantity").value;
    gold = document.getElementById("gold").value;
    goldgm = document.getElementById("goldgm").value;
    goldValue = (goldgm * gold) / qty;
    silver = document.getElementById("silver").value;
    silvergm = document.getElementById("silvergm").value;
    inbill = document.getElementById("inbill").value;
    dpl = document.getElementById("dpl60kgwp").innerHTML;
    silverValue = dpl - (dpl * 10 - (silver * 20)) / 10;
    pp = (dpl * 1.66 - 4795.923) / 1.66 - goldValue * 60 - (inbill * 60) - silverValue;
    sp = (2 / 100) * pp + pp;
    sp1 = dpl - 60 * 70
    scheme = (dpl - pp) / 60;
    pl = sp1 - pp;
    document.getElementById("purchase8").innerHTML = Math.round(pp);
    document.getElementById("schwp8").innerHTML = Math.round(scheme);
    document.getElementById("wp8sp").innerHTML = Math.round(sp1);
    document.getElementById("p&l8").innerHTML = Math.round(pl);
    document.getElementById("profitspwp8").innerHTML = Math.round(sp);
}


function calcpur8() {
    let dpl, pp, sp, gold, inbill, scheme, goldgm, goldValue, sp1, pl, qty;

    qty = document.getElementById("quantity").value;
    gold = document.getElementById("gold").value;
    goldgm = document.getElementById("goldgm").value;
    goldValue = (goldgm * gold) / qty;
    inbill = document.getElementById("inbill").value;
    dpl = document.getElementById("dpl1kgultra").innerHTML;
    pp = (dpl * 100 - 5531.02) / 100 - goldValue * 1 - inbill * 1;
    sp = (2 / 100) * pp + pp;
    sp1 = dpl - 1 * 70;
    scheme = dpl - pp;
    pl = sp1 - pp;

    document.getElementById("purchase9").innerHTML = Math.round(pp);
    document.getElementById("schultra1").innerHTML = Math.round(scheme);
    document.getElementById("ultra1sp").innerHTML = Math.round(sp1);
    document.getElementById("p&l9").innerHTML = Math.round(pl);
    document.getElementById("profitspultra1").innerHTML = Math.round(sp);
}

function calcpur9() {
    let dpl, pp, sp, gold, inbill, scheme, goldgm, goldValue, sp1, pl, qty;

    qty = document.getElementById("quantity").value;
    gold = document.getElementById("gold").value;
    goldgm = document.getElementById("goldgm").value;
    goldValue = (goldgm * gold) / qty;
    inbill = document.getElementById("inbill").value;
    dpl = document.getElementById("dpl2kgultra").innerHTML;
    pp = (dpl * 50 - 5531.02) / 50 - goldValue * 2 - (inbill * 2);
    sp = (2 / 100) * pp + pp;
    sp1 = dpl - 2 * 70;
    scheme = (dpl - pp) / 2;
    pl = sp1 - pp;

    document.getElementById("purchase10").innerHTML = Math.round(pp);
    document.getElementById("schultra2").innerHTML = Math.round(scheme);
    document.getElementById("ultra2sp").innerHTML = Math.round(sp1);
    document.getElementById("p&l10").innerHTML = Math.round(pl);
    document.getElementById("profitspultra2").innerHTML = Math.round(sp);
}

function calcpur10() {
    let dpl, pp, sp, gold, inbill, scheme, goldgm, goldValue, sp1, pl, qty;

    qty = document.getElementById("quantity").value;
    gold = document.getElementById("gold").value;
    goldgm = document.getElementById("goldgm").value;
    goldValue = (goldgm * gold) / qty;
    inbill = document.getElementById("inbill").value;
    dpl = document.getElementById("dpl5kgultra").innerHTML;
    pp = (dpl * 20 - 5531.02) / 20 - goldValue * 5 - (inbill * 5);
    sp = (2 / 100) * pp + pp;
    sp1 = dpl - 5 * 70;
    scheme = (dpl - pp) / 5;
    pl = sp1 - pp;

    document.getElementById("purchase11").innerHTML = Math.round(pp);
    document.getElementById("schultra3").innerHTML = Math.round(scheme);
    document.getElementById("ultra3sp").innerHTML = Math.round(sp1);
    document.getElementById("p&l11").innerHTML = Math.round(pl);
    document.getElementById("profitspultra3").innerHTML = Math.round(sp);
}

function calcpur11() {
    let dpl, pp, sp, gold, inbill, scheme, goldgm, goldValue, sp1, pl, qty;

    qty = document.getElementById("quantity").value;
    gold = document.getElementById("gold").value;
    goldgm = document.getElementById("goldgm").value;
    goldValue = (goldgm * gold) / qty;
    inbill = document.getElementById("inbill").value;
    dpl = document.getElementById("dpl10kgultra").innerHTML;
    pp = (dpl * 10 - 5531.02) / 10 - goldValue * 10 - (inbill * 10);
    sp = (2 / 100) * pp + pp;
    sp1 = dpl - 10 * 75;
    scheme = (dpl - pp) / 10;
    pl = sp1 - pp;

    document.getElementById("purchase12").innerHTML = Math.round(pp);
    document.getElementById("schultra4").innerHTML = Math.round(scheme);
    document.getElementById("ultra4sp").innerHTML = Math.round(sp1);
    document.getElementById("p&l12").innerHTML = Math.round(pl);
    document.getElementById("profitspultra4").innerHTML = Math.round(sp);
}

function calcpur12() {
    let dpl, pp, sp, gold, inbill, scheme, goldgm, goldValue, sp1, pl, qty;

    qty = document.getElementById("quantity").value;
    gold = document.getElementById("gold").value;
    goldgm = document.getElementById("goldgm").value;
    goldValue = (goldgm * gold) / qty;
    inbill = document.getElementById("inbill").value;
    dpl = document.getElementById("dpl20kgultra").innerHTML;
    pp = (dpl * 5 - 5531.02) / 5 - goldValue * 20 - (inbill * 20);
    sp = (2 / 100) * pp + pp;
    sp1 = dpl - 20 * 75;
    scheme = (dpl - pp) / 20;
    pl = sp1 - pp;

    document.getElementById("purchase13").innerHTML = Math.round(pp);
    document.getElementById("schultra5").innerHTML = Math.round(scheme);
    document.getElementById("ultra5sp").innerHTML = Math.round(sp1);
    document.getElementById("p&l13").innerHTML = Math.round(pl);
    document.getElementById("profitspultra5").innerHTML = Math.round(sp);
}

function calcpur13() {
    let dpl, pp, sp, gold, inbill, scheme, goldgm, goldValue, sp1, pl, qty;

    qty = document.getElementById("quantity").value;
    gold = document.getElementById("gold").value;
    goldgm = document.getElementById("goldgm").value;
    goldValue = (goldgm * gold) / qty;
    inbill = document.getElementById("inbill").value;
    dpl = document.getElementById("dpl30kgultra").innerHTML;
    pp = (dpl * 3.33 - 5531.02) / 3.33 - goldValue * 30 - (inbill * 30);
    sp = (2 / 100) * pp + pp;
    sp1 = dpl - 30 * 75;
    scheme = (dpl - pp) / 30;
    pl = sp1 - pp;

    document.getElementById("purchase14").innerHTML = Math.round(pp);
    document.getElementById("schultra6").innerHTML = Math.round(scheme);
    document.getElementById("ultra6sp").innerHTML = Math.round(sp1);
    document.getElementById("p&l14").innerHTML = Math.round(pl);
    document.getElementById("profitspultra6").innerHTML = Math.round(sp);
}

function calcpur14() {
    let dpl, pp, sp, sp1, gold, inbill, scheme, goldgm, goldValue, silver, silvergm, silverValue, pl, qty;

    qty = document.getElementById("quantity").value;
    gold = document.getElementById("gold").value;
    goldgm = document.getElementById("goldgm").value;
    goldValue = (goldgm * gold) / qty;
    silver = document.getElementById("silver").value;
    silvergm = document.getElementById("silvergm").value;
    inbill = document.getElementById("inbill").value;
    dpl = document.getElementById("dpl50kgultra").innerHTML;
    silverValue = dpl - (dpl * 10 - (silver * 20)) / 10;
    pp = (dpl * 2 - 5531.02) / 2 - goldValue * 50 - (inbill * 50) - silverValue;
    sp = (2 / 100) * pp + pp;
    sp1 = dpl - 50 * 80;
    scheme = (dpl - pp) / 50;
    pl = sp1 - pp;

    document.getElementById("purchase15").innerHTML = Math.round(pp);
    document.getElementById("schultra7").innerHTML = Math.round(scheme);
    document.getElementById("ultra7sp").innerHTML = Math.round(sp1);
    document.getElementById("p&l15").innerHTML = Math.round(pl);
    document.getElementById("profitspultra7").innerHTML = Math.round(sp);
}

function calcpur15() {
    let dpl, pp, sp, sp1, gold, inbill, scheme, goldgm, goldValue, silver, silvergm, silverValue, pl, qty;

    qty = document.getElementById("quantity").value;
    gold = document.getElementById("gold").value;
    goldgm = document.getElementById("goldgm").value;
    goldValue = (goldgm * gold) / qty;
    silver = document.getElementById("silver").value;
    silvergm = document.getElementById("silvergm").value;
    inbill = document.getElementById("inbill").value;
    dpl = document.getElementById("dpl60kgultra").innerHTML;
    silverValue = dpl - (dpl * 10 - (silver * 20)) / 10;
    pp = (dpl * 1.66 - 5531.02) / 1.66 - goldValue * 60 - (inbill * 60) - silverValue;
    sp = (2 / 100) * pp + pp;
    sp1 = dpl - 60 * 80
    scheme = (dpl - pp) / 60;
    pl = sp1 - pp;

    document.getElementById("purchase16").innerHTML = Math.round(pp);
    document.getElementById("schultra8").innerHTML = Math.round(scheme);
    document.getElementById("ultra8sp").innerHTML = Math.round(sp1);
    document.getElementById("p&l16").innerHTML = Math.round(pl);
    document.getElementById("profitspultra8").innerHTML = Math.round(sp);
}