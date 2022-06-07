const stundets = [
  {
    name: 'Vinícius',
    noteOne: 10,
    noteTwo: 7
  },
  {
    name: 'Thais',
    noteOne: 8,
    noteTwo: 5
  },
  {
    name: 'Simone',
    noteOne: 2,
    noteTwo: 1
  }
]

function average(noteOne, noteTwo) {
  return noteOne + noteTwo / 2
}

function resultPrint(student) {
  if (average(student.noteOne, student.noteTwo) >= 7) {
    return `A média do(a) aluno(a) ${student.name} é: ${average(
      student.noteOne,
      student.noteTwo
    )}
     \nParabens ${student.name}, você foi aprovado(a) no concurso!`
  } else {
    return `A média do(a) aluno(a) ${student.name} é: ${average(
      student.noteOne,
      student.noteTwo
    )}
     \nNão foi dessa vez ${student.name}, tente novamente!`
  }
}

for (const student of stundets) {
  let resultMessage = resultPrint(student)
  alert(resultMessage)
}
