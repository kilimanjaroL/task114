// Write your cade below:
function main(input,giveAnswer) {
    let A = 0;
    let B = 0;
    input.forEach((item)=>{
        if(giveAnswer.indexOf(item)!==-1){
            if(giveAnswer.indexOf(item)===input.indexOf(item)){
                A++;
            }else {
                B++;
            }
        }
    });
    return A + "A" + B + "B";
};

module.exports = main;

