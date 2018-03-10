class Xotaker extends KendaniEak {
    constructor(x, y, index){
        super(x, y, index);
        this.tariq = 0;
                this.energy = 5;
        this.energy2 = 0;
    }
   stanalNorKordinatner() {
       this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
   }
   yntrelVandak(ch) {
       this.stanalNorKordinatner();
       return super.yntrelVandak(ch);
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
                var norXotaker = new Xotaker(x,y,2);
                xotakerner.push(norXotaker);
                matrix[y][x]=2;
              }
            }
        }
}





    

