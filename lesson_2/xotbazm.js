



class XotBazmacnox {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [
        [this.x - 1, this.y - 1],
        [this.x    , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y    ],
        [this.x + 1, this.y    ],
        [this.x - 1, this.y + 1],
        [this.x    , this.y + 1],
        [this.x + 1, this.y + 1]];
        this.index=2;
    }


    yntrelVandak(ch) {
       this.stanalNorKordinatner();
       var found = [];
       for (var i in this.directions) {
           var x = this.directions[i][0];
           var y = this.directions[i][1];
           if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                    if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
           }
    }
   return found;
    }



    stanalNorKordinatner(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


        utel(){
        var norVandak = random(this.yntrelVandak(2));
        if(norVandak){
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.x = norVandak[0];
            this.y = norVandak[1];
            for (var i in grassArr){
                if(grassArr[i].x==this.x && grassArr[i].y==this.y){
                    grassArr.splice(i,1);
                    break;
                }
            }
            return true;
        }
    }


    sharjvel(){
        var norVandak = random(this.yntrelVandak(0));
        if(norVandak){
            matrix[this.y][this.x] = 1;
            var gr = new Grass(this.x, this.y,1);
                grassArr.push(gr);
            matrix[norVandak[1]][norVandak[0]]= 4;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
}



