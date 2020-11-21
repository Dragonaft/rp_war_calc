const generals = [
    {id:0, name: 'Нет', gen_att: 0, gen_def: 0},
    {id:1, name: 'Соня/жрец', gen_att: 0.9, gen_def: 0.9},
    {id:2, name: 'Рыцарь-череп/Рыцарь-смерти', gen_att: 1.3, gen_def: 1.3},
    {id:3, name: 'Майрон/Паладин', gen_att: 1.1, gen_def: 1.5},
    {id:4, name: 'Гатс/Берсерк', gen_att: 1.3, gen_def: 0.7},
    {id:5, name: 'Бубун/Варвар', gen_att: 1.5, gen_def: 0.5},
    {id:6, name: 'Бладис/чернокнижник', gen_att: 1.1, gen_def: 1.4},
    {id:7, name: 'Сергио/Разбойник', gen_att: 0.8, gen_def: 1},
    {id:8, name: 'Пендальф/Маг', gen_att: 1, gen_def: 0.8},
    {id:9, name: 'Леогнид/Воин', gen_att: 1.3, gen_def: 1.1}
];

const wall = [
    {id:0, def_wall:1},
    {id:1, def_wall:0},
]

const supp = [
    {id:0, supply: 1},
    {id:1, supply: 0.5}
]

const buildings = [
    {id:0, name: 'Нет', def_val: 0},
    {id:1, name: 'Село', def_val: 0.6},
    {id:2, name: 'Город', def_val: 1},
    {id:3, name: 'Крепость', def_val: 2},
    {id:4, name: 'Лесопилка', def_val: 0.5},
    {id:5, name: 'Шахта', def_val: 0.5},
    {id:6, name: 'Центр снабжения', def_val: 0.6},
    {id:7, name: 'Столица', def_val: 2},
    {id:8, name: 'Порт', def_val: 0.4},
    {id:9, name: 'Исследовательский лагерь', def_val: 0.5}
]

const terran = [
    {id:0, name:'Равнины', def_val_t: 0.5},
    {id:1, name:'Горы', def_val_t: 1.6},
    {id:2, name:'Плато', def_val_t: 1},
    {id:3, name:'Леса', def_val_t: 0.7},
    {id:4, name:'Тайга', def_val_t: 0.9},
    {id:5, name:'Джунгли', def_val_t: 1.1},
    {id:6, name:'Пустыня', def_val_t: 0.8},
    {id:7, name:'Пустыня с оазисом', def_val_t: 0.7},
    {id:8, name:'Болото', def_val_t: 1.3},
    {id:9, name:'Ледяная пустыня', def_val_t: 1.2},
    {id:10, name:'Пепельный земли', def_val_t: 0.4},
    {id:11, name:'Мёртвая земля', def_val_t: 0},
    {id:12, name:'Смешанный биом', def_val_t: 1}
]

const buffs_att = [
    {id:0, name:'Нет', buff:0},
    {id:1, name:'Малое зелье битвы', buff:0.5},
    {id:2, name:'Большое зелье битвы', buff:1},
]

const buffs_def = [
    {id:0, name:'Нет', buff:0},
    {id:1, name:'Малое зелье защиты', buff:0.2},
    {id:2, name:'Большое зелье защиты', buff:0.4},
]

let current_phase = 0;

let game_phase = 1;

let morale = 1;

let def_power;

let att_power;

let survives;



function summary() {

    let def_nick = document.getElementById('def_nick').value;
    console.log(def_nick);

    let att_nick = document.getElementById('att_nick').value;
    console.log(att_nick);

    let def_army = document.getElementById('def_army').value;
    def_army = parseFloat(def_army);

    let att_army = document.getElementById('att_army').value;
    att_army = parseFloat(att_army);

    let def_buff_value = document.getElementById('def_buff').value;

    let att_buff_value = document.getElementById('att_buff').value;

    let def_supp_value = document.getElementById('def_supp').value;

    let att_supp_value = document.getElementById('att_supp').value;

    let def_build = document.getElementById('def_build').value;
    def_build = parseFloat(def_build);

    let wall_value = document.getElementById('def_wall').value;

    let def_terran_value = document.getElementById('def_terran').value;

    let att_value = document.getElementById('att_gen').value;

    let def_value = document.getElementById('def_gen').value;


    let att_gen = generals[att_value];
    let def_gen = generals[def_value];
    let def_wall = wall[wall_value]
    let def_supp = supp[def_supp_value];
    let att_supp = supp[att_supp_value];
    let att_buff = buffs_att[att_buff_value];
    let def_buff = buffs_att[def_buff_value];
    let def_terran = terran[def_terran_value];


    // let test_att = att_gen[0];

    current_phase++;

    if (current_phase % 2 === 0){
        morale = morale - 0.05;
        console.log(morale);
        game_phase++;
        if (att_gen.id === 1){
            let rand = getRandomInt(100)
            if (rand <= 20){
                alert('Ход пропущен');
                game_phase++;
            }
        }
        if (def_gen.id === 1){
            let rand = getRandomInt(100)
            if (rand <= 20){
                alert('Ход пропущен');
                game_phase++;
            }
        }
    }

    if (att_gen.id === 2 && att_gen.gen_def < 3 && game_phase >= 2){
        att_gen.gen_def = att_gen.gen_def + 0.5;
    }
    if (def_gen.id === 2 && def_gen.gen_def < 3 && game_phase >= 2){
        def_gen.gen_def = def_gen.gen_def + 0.5;
    }

    if (att_gen.id === 7){
        def_gen.gen_def = def_gen.gen_def - 0.3;
    }
    if (def_gen.id === 7){
        att_gen.gen_def = att_gen.gen_def - 0.3;
    }

    power(att_army ,att_supp.supply, att_gen, att_buff.buff, def_army, def_supp.supply, def_buff.buff, def_build, def_wall.def_wall, def_terran.def_val_t, def_gen);
    survivals(att_power, att_army, att_supp.supply, att_gen, att_buff.buff, def_power, def_supp.supply, def_buff.buff, def_build, def_wall.def_wall, def_terran.def_val_t, def_gen);


    if (att_gen.id === 1){
        if (current_phase % 2 === 0){
            survives = survives * 1.4;
        }
    }

    if (def_gen.id === 1){
        if (current_phase % 2 === 0){
            survives = survives * 1.4;
        }
    }

    console.log('deeeeeffff',def_army)
    document.getElementById('def_nick').value = att_nick;

    document.getElementById('att_nick').value = def_nick;
    document.getElementById('phase').innerHTML = 'Текущий код:' + game_phase;
}

function power(att_army ,att_supp, att_gen, att_buff, def_army, def_supp, def_buff, def_build, def_wall, def_terran, def_gen) {

    def_power = (def_army * def_supp * (def_build + def_wall + def_terran + def_gen.gen_def + def_buff)) * morale;
    console.log(def_power);
    att_power = att_army * att_supp * (att_gen.gen_att + att_buff);
    console.log(att_power);
    if (att_gen.id === 3){
        let rand = getRandomInt(100)
        if (rand <= 50){
            att_power = att_power * 1.5;
        }
    }
    if (def_gen.id === 3){
        let rand = getRandomInt(100)
        if (rand <= 50){
            def_power = def_power * 1.5;
        }
    }
    return att_power, def_power;
}

function survivals(att_power, att_army, att_supp, att_gen, att_buff, def_power, def_supp, def_buff, def_build, def_wall, def_terran, def_gen) {

    let result = att_power - def_power;

    if (att_power > def_power) {
        document.getElementById('result').innerHTML = 'Победа атакующего';
        survives = result / (att_supp * (att_gen.gen_att + att_buff));
        if (att_gen.id === 5){
            survives = survives * 0.2;
        }
        document.getElementById('survives').innerHTML = 'Выжившие: ' + parseInt(survives);
        document.getElementById('def_army').value = parseInt(survives).toString();
        document.getElementById('att_army').value = 0;
        document.getElementById('att_buff').value = 0;
        document.getElementById('att_supp').value = 0;
    } else {
        document.getElementById('result').innerHTML = 'Победа защитника';
        result = result * -1;
        survives = result / ((def_supp * (def_buff + def_build + def_wall + def_terran + def_gen.gen_def)) / morale);
        if (def_gen.id === 5){
            survives = survives * 0.2;
        }
        document.getElementById('survives').innerHTML = 'Выжившие: ' + parseInt(survives);
        document.getElementById('att_army').value = parseInt(survives).toString();
        document.getElementById('def_army').value = att_army;
        document.getElementById('att_army').value = 0;
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
