var m = '#',
    n = '\n#';
<<<<<<< Updated upstream

for( var i = 0; i < 7; i++){
  n = n + '#',
  m = m + n;
}

console.log(m)

var line = "############################\n",
    rest = "#####                 ######\n##   ***                **##\n#   *##**         **  O  *##\n#    ***     O    ##**    *#\n#       O         ##***    #\n#                 ##**     #\n#   O       #*             #\n#*          #**       O    #\n#***        ##**    O    **#\n##****     ###***       *###\n";
var c = 0,
    mes = '',
    d = 0;

while ( c < 3) {
  c++;
  mes = mes + line;
  while (d  < 1) {
    mes = mes + rest;
    d++;
  }
  if (c == 2){
    console.log(mes);
  }
}
=======

for( var i = 0; i < 7; i++){
  n = n + '#',
  m = m + n;
}

console.log(m)

var ex = '';

  for (var i = 0; i < 29; i++){
    if (i >= 0 && i < 28){
      ex += '#';
    } else {
      ex += '\n';
    }
  }

  for (var i = 0; i < 29; i++){
    if (i < 5 || i > 21 && i < 28){
      ex += '#';
    } else {
      ex += ' ';
    }
    if (i == 28) ex += '\n';
  }

  for (var i = 0; i < 30; i++){
    if (i < 3 && i > 0 || i < 28 && i > 25) ex += '#';
    if (i > 2 && i < 6 || i > 8 && i < 25) ex += ' ';
    if (i > 5 && i < 9 || i < 26 && i > 23) ex += '*';
    if (i == 29) ex += '\n';
  }

  for (var i = 0; i < 30; i++){
    if (i == 1 || i > 5 && i < 8 || i > 26 && i < 29) ex += '#';
    if (i > 1 && i < 5 || i > 9 && i < 19 || i > 20 && i < 23 || i > 23 && i < 26) ex += ' ';
    if (i == 5 || i > 7 && i < 10 || i > 18 && i < 21 || i == 26) ex += '*';
    if (i == 23) ex += 'O';
    if (i == 29) ex += '\n';
  }

  for (var i = 0; i < 30; i++){
    if (i == 1 || i > 18 && i < 21 || i == 28) ex += '#';
    if (i > 1 && i < 6 || i > 8 && i < 14 || i > 14 && i < 19 || i > 22 && i < 27) ex += ' ';
    if (i > 5 && i < 9 || i > 20 && i < 23 || i == 27) ex += '*';
    if (i == 14) ex += 'O';
    if (i == 29) ex += '\n';
  }

  for (var i = 0; i < 30; i++){
    if (i == 1 || i > 18 && i < 21 || i == 28) ex += '#';
    if (i > 1 && i < 9 || i > 9 && i < 19 || i > 23 && i < 28) ex += ' ';
    if (i > 20 && i < 24 ) ex += '*';
    if (i == 9) ex += 'O';
    if (i == 29) ex += '\n';
  }

  for (var i = 0; i < 30; i++){
    if (i == 1 || i > 18 && i < 21 || i == 28) ex += '#';
    if (i > 1 && i < 19 || i > 22 && i < 28) ex += ' ';
    if (i > 20 && i < 23 ) ex += '*';
    if (i == 29) ex += '\n';
  }

  for (var i = 0; i < 30; i++){
    if (i == 1 || i == 13 || i == 28) ex += '#';
    if (i > 1 && i < 5 || i > 5 && i < 13 || i > 14 && i < 28) ex += ' ';
    if (i == 14 ) ex += '*';
    if (i == 9) ex += 'O';
    if (i == 29) ex += '\n';
  }

  for (var i = 0; i < 30; i++){
    if (i == 1 || i == 13 || i == 28) ex += '#';
    if (i > 2 && i < 13 || i > 15 && i < 23 || i > 23 && i < 28) ex += ' ';
    if (i == 2 || i > 13 && i < 16) ex += '*';
    if (i == 23) ex += 'O';
    if (i == 29) ex += '\n';
  }

  for (var i = 0; i < 30; i++){
    if (i == 1 || i > 12 && i < 15 || i == 28) ex += '#';
    if (i > 4 && i < 13 || i > 15 && i < 20 || i > 20 && i < 25) ex += ' ';
    if (i > 1 && i < 5 || i > 13 && i < 16 || i > 25 && i < 28) ex += '*';
    if (i == 20) ex += 'O';
    if (i == 29) ex += '\n';
  }

  for (var i = 0; i < 30; i++){
    if (i > 0 && i < 3 || i > 11 && i < 15 || i > 25 && i < 29) ex += '#';
    if (i > 6 && i < 12 || i > 17 && i < 25) ex += ' ';
    if (i > 2 && i < 7 || i > 14 && i < 18 || i == 25) ex += '*';
    if (i == 29) ex += '\n';
  }

  for (var i = 0; i < 29; i++){
    if (i >= 0 && i < 28){
      ex += '#';
    } else {
      ex += '\n';
    }
  }

console.log(ex)
>>>>>>> Stashed changes
