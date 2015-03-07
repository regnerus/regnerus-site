// using terra.js
// rileyjshaw.com/terra
var height = document.getElementById('header').clientHeight / 8;
var width = document.getElementById('header').clientWidth / 8;

var gameOfLife = new terra.Terrarium(width, height, {
  background: [255,245,238],
  id: 'background',
  insertAfter: document.getElementById('lede'),
  cellSize: 8,
  periodic: true,
  trails: .9
});

terra.registerCA({
  type: 'GoL',
  colorFn: function () { return this.alive ? '115,115,124,.04' : '0,0,0,0'; },
  process: function (neighbors, x, y) {
    var surrounding = neighbors.filter(function (spot) {
      return spot.creature.alive;
    }).length;
    this.alive = surrounding === 3 || surrounding === 2 && this.alive;
    return true;
  }
}, function () {
  this.alive = Math.random() < 0.5;
});

gameOfLife.grid = gameOfLife.makeGrid('GoL');
gameOfLife.animate();

// M = Math;
// r = M.random;

// s = [];
// n = function(){
//   for (i = 8; i--;) {
//     s[i] = [~~(r()*3)-1, ~~(r()*3)-1]
//   }
// }
// n();

// u = [];
// for (i = 512; i--;) {
//   u[i] = ~~(r() * 256);
// }

// function z(k, t, l) {
//   F = .5 - t * t - l * l;
//   return (F < 0) ? 0 : M.pow(F, 4) * (s[k%8][0] * t + s[k%8][1] * l)
// }

// function q(k, t) {
//   e = (3-M.sqrt(3))/6;
//   a = (k + t) * .5*(M.sqrt(3)-1); // .36
//   m = ~~(k + a);
//   b = ~~(t + a);
//   a = (m + b) * e; // .2
  
//   c = k - (m - a);
//   j = t - (b - a);
  
//   C = c > j;

//   return 500 * (z(u[m + u[b]], c, j) + 
//                z(u[m + C + u[b + !C]], c - C + e, j - !C + e) + 
//                z(u[m + 1 + u[b + 1]], c - 1 + 2 * e, j - 1 + 2 * e))
// };

// c = document.getElementById('background');
// c.width = w = document.body.clientWidth;
// c.height = h = document.body.clientHeight;
// d = c.getContext('2d');

// x = [];
// for(i = w; i--;) {
//   x[i] = {x:r()*w,y:r()*h};
// }

// setInterval(function() {
//   d.fillStyle = 'rgba(255,245,238,.01)';
//   d.fillRect(0,0,w,h);

//   d.fillStyle = 'rgba(0,0,0,.2)';
//   for (i = w; i--;){
//     X = x[i];
//     a = q(X.x/300, X.y/300) * 9;
  
//     X.x += M.cos(a);
//     X.y += M.sin(a);

//     if (X.x < 0 || X.x > w || X.y < 0 || X.y > h) { 
//       X.x = r()*w;
//       X.y = r()*h;
//     }
//     d.fillRect(X.x, X.y, 1, 1);
//   }
// }, 50);

// c.onclick=function(){n()};
