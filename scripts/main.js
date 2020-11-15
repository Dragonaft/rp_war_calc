const generals = [
    {id:0, name: 'Соня/жрец', gen_att: 0.9, gen_def: 0.9},
    {id:1, name: 'Рыцарь-череп/Рыцарь-смерти', gen_att: 1.3, gen_def: 1.3},
    {id:2, name: 'Майрон/Паладин', gen_att: 1.1, gen_def: 1.5},
    {id:3, name: 'Гатс/Берсерк', gen_att: 1.3, gen_def: 0.7},
    {id:4, name: 'Бубун/Варвар', gen_att: 1.5, gen_def: 0.5},
    {id:5, name: 'Бладис/чернокнижник', gen_att: 1.1, gen_def: 1.4},
    {id:6, name: 'Сергио/Разбойник', gen_att: 0.8, gen_def: 1},
    {id:7, name: 'Пендальф/Маг', gen_att: 1, gen_def: 0.8},
    {id:8, name: 'Леогнид/Воин', gen_att: 1.3, gen_def: 1.1}
];

let current_phase = 0;

let game_phase = 1;

let morale = 1;

let def_power;

let att_power;

let survives;

function summary() {
    console.log('generals:', generals)

    let def_nick = document.getElementById('def_nick').value;
    console.log(def_nick);

    let att_nick = document.getElementById('att_nick').value;
    console.log(att_nick);

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

    let def_wall = document.getElementById('def_wall').value;
    def_wall = parseFloat(def_wall);

    let def_terran = document.getElementById('def_terran').value;
    def_terran = parseFloat(def_terran);

    let att_value = document.getElementById('att_gen').value;
    let def_value = document.getElementById('deff_gen').value;


    let att_gen = generals[att_value];
    let def_gen = generals[def_value];

    // let test_att = att_gen[0];
    console.log('staff', att_gen);
    console.log('staff2', def_gen);

    console.log('logggg', att_gen.gen_att);
    console.log(att_army);
    console.log(att_supp);
    console.log(att_buff);

    current_phase++;

    if (current_phase % 2 === 0){
        morale = morale - 0.05;
        console.log(morale);
        game_phase++;
    }

    power(att_army ,att_supp, att_gen, att_buff, def_army, def_supp, def_buff, def_build, def_wall, def_terran, def_gen);
    survivals(att_power, att_army, att_supp, att_gen, att_buff, def_power, def_supp, def_buff, def_build, def_wall, def_terran, def_gen);


    if (att_gen.id === 1){
        if (current_phase % 2 === 0){
            survives = survives * 0.4;
        }
    }

    console.log('deeeeeffff',def_army)
    document.getElementById('phase').innerHTML = 'Текущий код:' + game_phase;
}

function power(att_army ,att_supp, att_gen, att_buff, def_army, def_supp, def_buff, def_build, def_wall, def_terran, def_gen) {

    def_power = (def_army * def_supp * (def_build + def_wall + def_terran + def_gen.gen_def + def_buff)) * morale;
    console.log(def_power);
    att_power = att_army * att_supp * (att_gen.gen_att + att_buff);
    console.log(att_power);

    return att_power, def_power;
}

function survivals(att_power, att_army, att_supp, att_gen, att_buff, def_power, def_supp, def_buff, def_build, def_wall, def_terran, def_gen) {

    let result = att_power - def_power;

    if (att_power > def_power) {
        document.getElementById('result').innerHTML = 'Победа атакующего';
        survives = result / (att_supp * (att_gen.gen_att + att_buff));
        document.getElementById('survives').innerHTML = 'Выжившие: ' + survives;
        document.getElementById('def_army').value = survives.toString();
        document.getElementById('att_army').value = 0;
        document.getElementById('att_buff').value = 0;
        document.getElementById('att_supp').value = 0;
    } else {
        document.getElementById('result').innerHTML = 'Победа защитника';
        result = result * -1;
        survives = result / ((def_supp * (def_buff + def_build + def_wall + def_terran + def_gen.gen_def)) / morale);
        document.getElementById('survives').innerHTML = 'Выжившие: ' + survives;
    }

}

