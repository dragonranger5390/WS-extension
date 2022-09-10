// const paragraphs = document.getElementsByTagName("p")

// let dic = {
//     preposition : {
//         class : "preposition",
//         В : {
//             theWord : "В",
//             theTitle : "Preposition-Где?Куда?"
//         },
//         ПРИ : {
//             theWord : "ПРИ",
//             theTitle : "Preposition-Где?Куда?"
//         }

//     },
//     pronouns : {
//         Я : {
//             theWord : "Я",
//             theTitle : "First Person Personal Pronoun"
//         }
//     }
// }


// function cuttingSentenceIntoWords(el, str) {
//     let splitedWords = str.split(" ")
//     console.log(splitedWords)
//     let newHtml = ""
//     for ( part of splitedWords ) {
//         let newPart = ""
//         if (part.toUpperCase() == dic.preposition.В.theWord){
//             newPart = `<abbr title="${dic.preposition.В.theTitle}">${part} </abbr>`
//         } else if (part.toUpperCase() == dic.preposition.ПРИ.theWord){
//             newPart = `<abbr class="${dic.preposition.class}" title="${dic.preposition.ПРИ.theTitle}">${part} </abbr>`           
//         } else {
//             newPart = `${part} `
//         }
//         newHtml += newPart
//     }
//     el.innerHTML = newHtml 
// }





// const queryAbbr = document.querySelectorAll("abbr")
// console.log(queryAbbr)
// queryAbbr.forEach(item => {
//     item.style.textDecoration = "none"
//     item.title += "extrr"
//     item.addEventListener("mouseover", function(){
//         item.style.color = "#FF0000"
//     })
//     item.addEventListener("mouseout", function(){
//         item.style.color = "inherit"
//     })
// })



// This is for trial - console.log(EVERYTHING)

const example = {
    degree10 : {
        degree20 : "2.0", 
        degree21 : "2.1"
    },
    degree11 : {
        degree20 : "2.0",
        degree21 : "2.1",
    },
    degree12 : {
        degree20 : {
            degree30 : "3.0",
            degree31 : "3.1"
        },
        degree21 : {
            degree30 : "3.0",
            degree31 : "3.1"
        }
    }
}


// let allExampleKeys = []
// let allExampleValues = []

// const allDegreeOneKeys = Object.keys(example)
// allExampleValues = allExampleValues.concat(Object.values(example))

// console.log(allExampleValues)

// for (let value = 0 ; value < allExampleValues.length; value++ ){
//     console.log(value)
//     const newValues = Object.values(example)[value]
//     console.log(newValues)
//     allExampleValues = allExampleValues.concat(newValues)
// }
// console.log(allExampleValues)

// console.log(allDegreeOneKeys)
// allExampleKeys = allExampleKeys.concat(allDegreeOneKeys) 
// console.log(allExampleKeys)
// console.log(Object.keys(example["degree10"]))
// allDegreeOneKeys.forEach(degree => {
//     allExampleKeys = allExampleKeys.concat(Object.keys(example[degree]))
// })
// console.log(allExampleKeys)



