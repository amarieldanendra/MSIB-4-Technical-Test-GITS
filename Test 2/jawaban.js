const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let data = []
let gits = []
let n1 = 0
let n2 = 0

rl.question("", function(answer0){
    n1 = parseInt(answer0)
    rl.question("", function (answer1) {
        answer1.split(" ").forEach(v => {
            data.push([0,Number(v)])
        })
        data = data.slice(0,n1)
        rl.question("", function(answer2){
            n2 = parseInt(answer2)
            rl.question("", function(answer3){
                answer3.split(" ").forEach(v => {
                    data.push([0,parseInt(v)])
                    gits.push(parseInt(v))
                })
                gits = gits.slice(0,n2)
                data = data.sort((a,b) => b[1]-a[1]).slice(0,n1+n2)
                for (let i = 0; i < data.length; i++) {
                    if(i == 0){
                        data[i][0] = 1
                    }else{
                        if(data[i][1] == data[i-1][1]){
                            data[i][0] = data[i-1][0]
                        }else{
                            data[i][0] = data[i-1][0]+1
                        }
                    }
                }
                for(let j = 0; j < n2; j++) {
                    for(let i = 0; i < n1+n2; i++) {
                        if(data[i][1] == gits[j]){
                            rl.write(data[i][0] + " ")
                            break
                        }
                    }
                }
            })
        })
    })
})
