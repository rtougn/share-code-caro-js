// function isWin(row, col){ // Used to check Winning State. Using Global Var Turn
// 	var i, j;  //i for Col and j for Row
// 	var sqSameColor; //store number of Same-Color pieces
// 	var blocked; //store number of ends blocked
// 	var curTurn = sq[row][col];

// 	if (noOfPiece == noOfCol*noOfRow){
// 		return 3; //Draw
// 	}
// 	// horizontally check (col +-)
// 	sqSameColor = 1; blocked=0;
// 	j = col - 1;
// 	while (j >= 0){
// 		if (sq[row][j] == Empty) {
// 			break;
// 		} else if(sq[row][j] == curTurn) {
// 			sqSameColor++;
// 		} else {
// 			blocked++;
// 			break;
// 		}
// 		j--;
// 	}
// 	j = col + 1;
// 	while (j < noOfCol){
// 		if (sq[row][j] == Empty) {
// 			break;
// 		} else if(sq[row][j] == curTurn) {
// 			sqSameColor++;
// 		} else {
// 			blocked++;
// 			break;
// 		}
// 		j++;
// 	}
// 	if (sqSameColor == 5 && blocked < 2) {
// 		return curTurn;
// 	}
// 	// vertically check (row +-)
// 	sqSameColor = 1; blocked=0;
// 	i = row - 1;
// 	while (i >= 0){
// 		if (sq[i][col] == Empty) {
// 			break;
// 		} else if(sq[i][col] == curTurn) {
// 			sqSameColor++;
// 		} else {
// 			blocked++;
// 			break;
// 		}
// 		i--;
// 	}
// 	i = row + 1;
// 	while (i < noOfRow){
// 		if (sq[i][col] == Empty) {
// 			break;
// 		} else if(sq[i][col] == curTurn) {
// 			sqSameColor++;
// 		} else {
// 			blocked++;
// 			break;
// 		}
// 		i++;
// 	}
// 	if (sqSameColor == 5 && blocked < 2) {
// 		return curTurn;
// 	}
// 	// top-left to bottom-right check (row +- col+-)
// 	sqSameColor = 1; blocked=0;
// 	i = row - 1; j = col - 1;
// 	while (i >= 0 && j >= 0){
// 		if (sq[i][j] == Empty) {
// 			break;
// 		} else if(sq[i][j] == curTurn) {
// 			sqSameColor++;
// 		} else {
// 			blocked++;
// 			break;
// 		}
// 		i--; j--;
// 	}
// 	i = row + 1; j = col + 1;
// 	while (i < noOfRow && j < noOfCol){
// 		if (sq[i][j] == Empty) {
// 			break;
// 		} else if(sq[i][j] == curTurn) {
// 			sqSameColor++;
// 		} else {
// 			blocked++;
// 			break;
// 		}
// 		i++; j++;
// 	}
// 	if (sqSameColor == 5 && blocked < 2) {
// 		return curTurn;
// 	}
// 	// top-right to bottom-left check (row +- col+-)
// 	sqSameColor = 1; blocked=0;
// 	i = row - 1; j = col + 1;
// 	while (i >= 0 && j < noOfCol){
// 		if (sq[i][j] == Empty) {
// 			break;
// 		} else if(sq[i][j] == curTurn) {
// 			sqSameColor++;
// 		} else {
// 			blocked++;
// 			break;
// 		}
// 		i--; j++;
// 	}
// 	i = row + 1; j = col - 1;
// 	while (i < noOfRow && j >= 0){
// 		if (sq[i][j] == Empty) {
// 			break;
// 		} else if(sq[i][j] == curTurn) {
// 			sqSameColor++;
// 		} else {
// 			blocked++;
// 			break;
// 		}
// 		i++; j--;
// 	}
// 	if (sqSameColor == 5 && blocked < 2) {
// 		return 1;
// 	}
// 	return 0;
// }