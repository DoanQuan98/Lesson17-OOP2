function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += 50;
        console.log('ok: ' + this.left);
    }
    this.moveUp = function () {
        this.top -= 50;
        console.log('ok: ' + this.top);
    }
    this.moveLeft = function () {
        this.left -= 50;
        console.log('ok: ' + this.left);
    }
    this.moveDown = function () {
        this.top += 50;
        console.log('ok: ' + this.top);
    }

}

let hero = new Hero('ezreal.png', 20, 30, 200);
let fix = true;

function start() {
    if (fix === true) {
        if(hero.left < window.innerWidth - hero.size) {
            hero.moveRight();
        }
        else {
            if (hero.top < window.innerHeight - hero.size) {
                hero.moveDown();
            }
            else fix = false;
        }
    }
    else {
        if(hero.left > 0) {
            hero.moveLeft();
        }
        else {
            if (hero.top > 0) {
                hero.moveUp();
            }
            else fix = true;
        }
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 50)
}
start();

