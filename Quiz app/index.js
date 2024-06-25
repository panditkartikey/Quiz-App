const qustions = [{
    'que' : 'which of the following is a markup language?',
    'a': 'HTML',
    'b': 'css',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct':"a"
},
{
    'que':'what year was js launched',
    'a': '1996',
    'b': '1995',
    'c':'1994',
    'd':'none of the above',
    'correct': "b"
},
{
    'que':'What does css stand for ?',
    'a':'Hypertext Markup Language  ',
    'b':'Cashcading Style Sheet ',
    'c':'Jason Object Notation',
    'd':'Helicopters Terminals Motorboats Lamborginis',
    'correct':"b",
}
]

let index=0;
 const queBox = document.getElementById("queBox")
 const optionInputs = document.querySelector('.options')
 
const loadQustion=()=>{
    constdata= qustions[index]
    console.log(data)
    queBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}

const subbmitQuiz = () =>{
    const ans= getAnswer()
}

const getAnswer=()=>{
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                console.log("Yes")
            }
            else{
                console.log("No")
            }
        
    }
    )
}
//initial call
loadQustion();
