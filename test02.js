//배열의 길이 구하기

const ship = {
    max : 3,
    passengers : [],
    onBoard : function(name) {
        if(this.passengers.length===this.max){
            console.log(`this ship full. ${name} can not board this ship.`);
        }else{
            this.passengers.push(name);
            console.log(`${name} board`);
        }
    }
}

ship.onBoard('chole');
ship.onBoard('jay');
ship.onBoard('david');
ship.onBoard('asher');
ship.onBoard('daniel');
console.log(ship.passengers);
