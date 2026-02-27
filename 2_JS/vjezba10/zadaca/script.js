const matrixDiv = document.getElementById("matrix");
const generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", () => {
    let rows = parseInt(document.getElementById("rows").value);
    let cols = parseInt(document.getElementById("cols").value);
    let option = parseInt(document.getElementById("option").value);

    if (rows < 2 || rows > 50 || cols < 2 || cols > 50) {
        alert("Redovi i stupci moraju biti u rasponu 2 do 50.");
        return;
    }

    generateMatrix(rows, cols, option);

 //   let again = prompt("Želite li napraviti još jednu matricu? (DA/NE)");
 //      while (again && again.toUpperCase() !== "NE") {
 //       rows = parseInt(prompt("Unesite broj redaka (2-50):"));
 //       cols = parseInt(prompt("Unesite broj stupaca (2-50):"));
 //       option = parseInt(prompt("Unesite opciju (1-16):"));

  //      if (rows >= 2 && rows <= 50 && cols >= 2 && cols <= 50) {
//        generateMatrix(rows, cols, option);
 //       }

    //    again = prompt("Želite li napraviti još jednu matricu? (DA/NE)");
  //  }
});

function generateMatrix(rows, cols, option) {

    matrixDiv.innerHTML = "";
    matrixDiv.style.gridTemplateColumns = `repeat(${cols}, auto)`;

    let matrix = Array.from({ length: rows }, () => Array(cols).fill(0));

    let start = getStartPosition(rows, cols, option);

    let clockwise = isClockwise(option);

    fillSpiral(matrix, start.row, start.col, clockwise);

    renderMatrix(matrix);
}

function getStartPosition(rows, cols, option) {

 //   const middleRow = Math.floor(rows / 2);
 //   const middleCol = Math.floor(cols / 2);

    const positions = {
        1: { row: rows - 1, col: cols - 1 },
        2: { row: rows - 1, col: 0 },
        3: { row: 0, col: 0 },
        4: { row: 0, col: cols - 1 },
        5: { row: rows - 1, col: cols - 1 },
        6: { row: rows - 1, col: 0 },
        7: { row: 0, col: 0 },
        8: { row: 0, col: cols - 1 },

    };

    return positions[option];
}

function isClockwise(option) {
    return [1,2,3,4,9,10,11,12].includes(option);
}

function fillSpiral(matrix, startRow, startCol, clockwise) {

    const rows = matrix.length;
    const cols = matrix[0].length;

    let directions = clockwise
        ? [[0,1],[1,0],[0,-1],[-1,0]]
        : [[1,0],[0,1],[-1,0],[0,-1]];

    let dirIndex = 0;
    let r = startRow;
    let c = startCol;
    //console.log(dirIndex, r, c);

    for (let i = 1; i <= (rows * cols); i++) {
        console.log(i, r, c);
        matrix[r][c] = i;
        console.log('M=', matrix[r][c]);


    
        let nr = r //+ directions[dirIndex][0];
        let nc = c //+ directions[dirIndex][1];
    
        console.log('red se uveca za', directions[dirIndex][0],'stupac se uveca za', directions[dirIndex][1]);

        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || matrix[nr][nc] !== 0) {
            dirIndex = (dirIndex + 1) % 4;
            console.log('dirIndrx je', dirIndex)
            nr = r + directions[dirIndex][0];
            nc = c + directions[dirIndex][1];
        }
    

        r = nr;
        c = nc;
        console.log('NOVA pozicija', r, c);
    }
}

function renderMatrix(matrix) {

    const maxNumber = matrix.length * matrix[0].length;
    const width = maxNumber.toString().length;

    matrix.forEach(row => {
        row.forEach(num => {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.textContent = num.toString().padStart(width, " ");
            matrixDiv.appendChild(cell);
        });
    });
}