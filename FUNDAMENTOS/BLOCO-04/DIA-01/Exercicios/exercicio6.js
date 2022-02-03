let chessPiece = 'REI'

switch (chessPiece.toLowerCase()) {
    case 'cavalo':
        console.log('O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto.');
        break;

    case 'peão':
        console.log('O peão move-se uma casa apenas e somente para frente.');
        break;

    case 'bispo':
        console.log('O bispo se move em uma linha reta diagonalmente no tabuleiro');
        break;

    case 'rainha':
        console.log('A rainha pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.');
        break;
    
    case 'torre':
        console.log('A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.');
        break;

    case 'rei':
        console.log('O rei pode se mover para qualquer casa adjacente.')
        break;
    default:
        console.log('Peça não identificada');
        break;
}