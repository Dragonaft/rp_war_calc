function summary() {
    let def_army = document.getElementById('def_army').value;
    def_army = parseFloat(def_army);

    let att_army = document.getElementById('att_army').value;
    att_army = parseFloat(att_army);

    let def_buff = document.getElementById('def_buff').value;
    def_buff = parseFloat(def_buff);

    let att_buff = document.getElementById('att_buff').value;
    att_buff = parseFloat(att_buff);

    let def_supp = document.getElementById('def_supp').value;
    def_supp = parseFloat(def_supp);

    let att_supp = document.getElementById('att_supp').value;
    att_supp = parseFloat(att_supp);

    let def_build = document.getElementById('def_build').value;
    def_build = parseFloat(def_build);

    let att_gen = document.getElementById('att_gen').value;
    att_gen = parseFloat(att_gen);

    let def_wall = document.getElementById('def_wall').value;
    def_wall = parseFloat(def_wall);

    let def_terran = document.getElementById('def_terran').value;
    def_terran = parseFloat(def_terran);

    let def_gen = document.getElementById('def_gen').value;
    def_gen = parseFloat(def_gen);

    console.log(att_army);
    console.log(att_supp);
    console.log(att_buff);
    console.log(att_gen);

    let def_power,att_power,survives,result;

    def_power = def_army * def_buff * def_supp * (def_build + def_wall + def_terran + def_gen);
    console.log(def_power);
    att_power = att_army * att_buff * att_supp * att_gen;
    console.log(att_power);
    result = att_power - def_power;

    if (att_power > def_power){
        document.getElementById('result').innerHTML = 'Победа атакующего';
        survives = result / (att_buff * att_supp * att_gen);
        document.getElementById('survives').innerHTML = 'Выжившие: ' + survives;
    }
    else {
        document.getElementById('result').innerHTML = 'Победа защитника';
        result = result * -1;
        survives = result / (def_buff * def_supp * (def_build + def_wall + def_terran + def_gen));
        document.getElementById('survives').innerHTML = 'Выжившие: ' + survives;
    }
}