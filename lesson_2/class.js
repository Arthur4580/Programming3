class Grass{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.multiply=0;
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
        this.index = 1;
    }
    
    yntrelVandak(ch) {
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

    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        
        if (this.multiply >= 6 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }

}





class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
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
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
            if(this.energy>0){
                this.energy--;
                this.energy2=0;
            }
        }
    }

    utel(){
        var norVandak = random(this.yntrelVandak(1));
        if(norVandak){
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
            for (var i in grassArr){
                if(grassArr[i].x==this.x && grassArr[i].y==this.y){
                    grassArr.splice(i,1);
                    break;
                }
            }
            if (this.energy<5){
                this.energy++;
            }
            this.energy2++;
            return true;
        }
    }
        
    mahanal(){
        if (this.energy==0){
            for (var i in xotakerner){
                if(xotakerner[i].x==this.x && xotakerner[i].y==this.y){
                    xotakerner.splice(i,1);
                    matrix[this.y][this.x]=0;
                    break;
                }
            }
        }
    }
    
    bazmanal(){
        if(this.energy2==5){
              this.energy2=0;
              var norvandak=random(this.yntrelVandak(0));
              if(norvandak){
                var x=norvandak[0];
                var y=norvandak[1];
                var norXotaker = new Xotaker(x,y);
                xotakerner.push(norXotaker);
                matrix[y][x]=2;
              }
            }
        }
}





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
            var gr = new Grass(this.x, this.y);
                grassArr.push(gr);
            matrix[norVandak[1]][norVandak[0]]= 4;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
}




class XotakerBazmacnox {
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
            matrix[norVandak[1]][norVandak[0]] = 5;
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
            matrix[this.y][this.x] = 2;
            var xk = new Xotaker(this.x, this.y);
            xotakerner.push(xk);
            matrix[norVandak[1]][norVandak[0]]= 5;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
}

