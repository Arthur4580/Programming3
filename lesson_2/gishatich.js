
class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 200;
        this.energy2 = 0;
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



    sharjvel(){
        var norVandak = random(this.yntrelVandak(0));
        if(norVandak){
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]]= 3;
            this.x = norVandak[0];
            this.y = norVandak[1];
            if(this.energy>0){
                this.energy--;
            }
        }
    }

    utel(){
        var norVandak = random(this.yntrelVandak(2));
        if(norVandak){
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];
            for (var i in grassArr){
                if(grassArr[i].x==this.x && grassArr[i].y==this.y){
                    grassArr.splice(i,1);
                    break;
                }
            }
            if (this.energy<100){
                this.energy++;
            }
            this.energy2++;
            return true;
        }
    }
        
    mahanal(){
        if (this.energy==0){
            for (var i in mecxotaker1){
                if(mecxotaker1[i].x==this.x && mecxotaker1[i].y==this.y){
                    mecxotaker1.splice(i,1);
                    matrix[this.y][this.x]=0;
                    break;
                }
            }
        }
    }
    
    bazmanal(){
        if(this.energy2==25){
              this.energy2=0;
              var norvandak=random(this.yntrelVandak(0));
              if(norvandak){
                var x=norvandak[0];
                var y=norvandak[1];
                var norXotaker = new Gishatich(x,y);
                mecxotaker1.push(norXotaker);
                matrix[y][x]=3;
              }
            }
        }
}




