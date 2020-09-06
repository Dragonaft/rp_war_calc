function summary() {
    var def_army = document.getElementById('def_army').value;
    def_army = parseInt(def_army);

    let att_army = document.getElementById('att_army').value;
    att_army = parseInt(att_army);

    let def_buff = document.getElementById('def_buff').value;
    def_buff = parseInt(def_buff);

    let att_buff = document.getElementById('att_buff').value;
    att_buff = parseInt(att_buff);

    let def_supp = document.getElementById('def_supp').value;
    def_supp = parseInt(def_supp);

    let att_supp = document.getElementById('att_supp').value;
    att_supp = parseInt(att_supp);

    let def_build = document.getElementById('def_build').value;
    def_build = parseInt(def_build);

    let att_gen = document.getElementById('att_gen').value;
    att_gen = parseInt(att_gen);

    let def_wall = document.getElementById('def_wall').value;
    def_wall = parseInt(def_wall);

    let def_terran = document.getElementById('def_terran').value;
    def_terran = parseInt(def_terran);

    let def_gen = document.getElementById('def_gen').value;
    def_gen = parseInt(def_gen);

    let def_power,att_power,survives,result;

    def_power = def_army * def_buff * def_supp * (def_build + def_wall + def_terran + def_gen);
    att_power = att_army * att_buff * att_supp * att_gen;
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