let teste = document.getElementById("teste")

const testFunc = () => {

    let i1 = document.getElementById("input1").value
    let i2 = document.getElementById("input2").value
    let i3 = document.getElementById("input3").value
    
    let r1 = document.getElementById("r1")
    let r2 = document.getElementById("r2")
    let r3 = document.getElementById("r3")

    let n1 = parseFloat(i1) 
    let n2 = parseFloat(i2) 
    let n3 = parseFloat(i3) 

    let average = (n1 + n2 + n3) / 3
    
    let minNum = n1 
    let maxNum = n3 
    
    // Max
    if (n2 > maxNum)
        maxNum = n2
    if ( n1 > maxNum)
        maxNum = n1

    // Min
    if (minNum > n2)
        minNum = n2
    if ( minNum > n3 )
        minNum = n3

    r1.textContent = "O maior número é " + maxNum + "!"
    r2.textContent = "O menor número é " + minNum + "!" 
    r3.textContent = "A média é " + average

}
