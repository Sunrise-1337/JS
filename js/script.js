var m = '#',
    n = '\n#';

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