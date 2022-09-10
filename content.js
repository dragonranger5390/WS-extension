// console.log("ext running!")

// let paragraphs = document.getElementsByTagName("p")

// // for (para of paragraphs) {
// //     let newPara = document.createElement("p")
// //     let node = document.createTextNode("NewText!")
// //     newPara.appendChild(node)
// //     para.appendChild(newPara)
// // }

// // const newPara = document.createElement("abbr")
// // const node = document.createTextNode("NewText!")
// // newPara.appendChild(node)
// // newPara.title = "helloworld"
// // newPara.style.textDecoration = "none"
// // const elementa = paragraphs[0]

// // elementa.innerHTML = ""
// // elementa.appendChild(newPara)
// // let str = "I am a Guy"
// // console.log(str.includes("am"))
// // console.log(str.indexOf("am"))
// // console.log(str.indexOf(" "))
// // console.log(str.lastIndexOf("am"))
// console.log("start")
// // let words = []

// let dic = {
//     prepositions : {
//         class : "preposition",
//         В : "Preposition-Где?Куда?",
//         ПРИ : "Preposition-Где?Куда?",
//         НА : "Preposition-Где?Куда?",

//     },
//     pronouns : {
//         class : "pronoun",
//         Я : "1st Person Singular Subject Pronoun",
//         ТЫ : "2nd person Singular Subject pronoun",
//         ОН : "3rd Person Singular Masculine Subject Pronoun",
//         ОНА : "3rd Person Singular Feminine Subject Pronoun",
//         ОНО : "3rd Person Singular Neutral Subject Pronoun",
//         МЫ : "1st Person Plural Subject Pronoun",
//         ВЫ : "2nd Person Plural Subject Pronoun",
//         ОНИ : "3rd Person Plural Subject Pronoun"
//     },
//     adjectives : {
        
//     },
//     words : {
//         class : "word",
//         череп : {
//             definitionOfTheWord : "skull-M-",
//             череп : "1st case singular, 4th case singular",
//             черепа : "2nd case singular",
//             черепу : "3rd case singular",
//         },
//         анатомия : {
//             definitionOfTheWord : "anatomy-M-",
//             анатомия : "1st case singular",
//             анатомии : "2nd case singular, 1st case plural"
//         }
//     }, 
//     verbs : {
//         быть : {
//             definitionOfTheWord : "to be-",
//             быть : "inifinitive",
//             буду : "(I) will",
//             будешь : "(you) will"
//         }
//     }
// }

// const prepoKeys = Object.keys(dic.prepositions)
// const prepoValues = Object.values(dic.prepositions)

// const pronounKeys = Object.keys(dic.pronouns)
// const pronounValues = Object.values(dic.pronouns)

// console.log(Object.keys(dic)[0])

// let arrayOfAllKeys = []
// let arrayOfAllValues = []

// arrayOfAllKeys = arrayOfAllKeys.concat(prepoKeys, pronounKeys)
// console.log(arrayOfAllKeys)
// console.log(typeof arrayOfAllKeys, arrayOfAllKeys.length)

// function newCheckPreposition(word){
//     let indexOfKey = -1
//     for ( key of prepoKeys ) {
//         if(word.toUpperCase() == key) {
//             indexOfKey = prepoKeys.indexOf(key)
//             break
//         }
//     }
//     if (indexOfKey !== -1) {
//     return `<abbr class="${prepoValues[0]}" title="${prepoValues[indexOfKey]}">${word} </abbr>` 
//     }   
// }

// function newCheckPrononun(word){
//     let indexOfKey = -1
//     for ( key of pronounKeys ) {
//         if(word.toUpperCase() == key) {
//             indexOfKey = pronounKeys.indexOf(key)
//             break
//         }
//     }
//     if (indexOfKey !== -1) {
//     return `<abbr class="${pronounValues[0]}" title="${pronounValues[indexOfKey]}">${word} </abbr>` 
//     }   
// }
// console.log(newCheckPreposition("На"))
// console.log(newCheckPreposition("ыы"))


// // } else if (part.toUpperCase() === dic.preposition.НА.theWord){
// //     newPart = `<abbr title="${dic.preposition.НА.theTitle}">${part} </abbr>`
// // } 


// // function checkPreposition(word) {
// //     if (word.toUpperCase() == dic.prepositions.В.theWord){
// //         return `<abbr class="${dic.prepositions.class}" title="${dic.prepositions.В.theTitle}">${word} </abbr>`
// //     } else if (word.toUpperCase() == dic.prepositions.ПРИ.theWord){
// //         return `<abbr class="${dic.prepositions.class}" title="${dic.prepositions.ПРИ.theTitle}">${word} </abbr>`           
// //     } else {
// //         return `${word} `
// //     }    
// // }

// // if (part.toUpperCase() == dic.prepositions.В.theWord){
// //     newPart = `<abbr class="${dic.prepositions.class}" title="${dic.prepositions.В.theTitle}">${part} </abbr>`
// // } else if (part.toUpperCase() == dic.prepositions.ПРИ.theWord){
// //     newPart = `<abbr class="${dic.prepositions.class}" title="${dic.prepositions.ПРИ.theTitle}">${part} </abbr>`           
// // } else {
// //     newPart = `${part} `
// // }

// function checkWordAll (word) {
//     let endVAlue = ""
//     if(newCheckPreposition(word)) {
//         endVAlue = newCheckPreposition(word)
//     } else if (newCheckPrononun(word)) {
//         endVAlue = newCheckPrononun(word)
//     } else {
//         return undefined
//     }
//     return endVAlue
// }
// console.log(checkWordAll("он"))

// function addingTheElements(el, str) {
//     const splitedWords = str.split(" ")
//     // console.log(splitedWords)
//     let newHtml = ""
//     for ( part of splitedWords ) {
//         let newPart = ""
//         newPart = checkWordAll(part)
//         if (newPart == undefined) newPart = `${part} `
//         newHtml += newPart
//     }
//     el.innerHTML = newHtml 
// }

// for ( part of paragraphs ) {
//     addingTheElements(part, part.innerHTML)
// }



// const queryAbbr = document.querySelectorAll("abbr")
// // console.log(queryAbbr)
// queryAbbr.forEach(item => {
//     item.style.textDecoration = "none"
//     item.title += "extrr"
//     const noextraz = item.innerHTML
//     item.addEventListener("mouseover", function(){
//         item.style.color = "#0000F0"
//     })
//     item.addEventListener("mouseout", function(){
//         item.style.color = "inherit"
//     })
//     item.addEventListener("click", function(){
//         item.innerHTML = noextraz
//     })
//     item.addEventListener("dblclick", function(){
//         item.innerHTML = noextraz + "PREPO"
//     })
// })

// const queryPreposition = document.querySelectorAll('.preposition')
// queryPreposition.forEach(prepo => {
//     const noextraz = prepo.innerHTML
//     prepo.addEventListener("click", function(){
//         prepo.innerHTML = noextraz
//     })
//     prepo.addEventListener("dblclick" , function(){
//         prepo.innerHTML += "querydot"
//     })
// })


// for ( query of queryPreposition) {
//     query.addEventListener("click", function(){
//         query.innerHTML += "query"
//     })
// }









// // paragraphs[0].addEventListener("mouseover" , colorChange)
// // paragraphs[0].addEventListener("mouseout" , returnColor)
// // console.log(paragraphs[0].style["background"])
// // function colorChange() {
// //     paragraphs[0].style["background"] = "#FF000050"
// // }
// // function returnColor () {
// //     paragraphs[0].style["background"] = ""
// // }

// // console.log(paragraphs[0])
// // console.log(paragraphs[0].innerText.indexOf("В"))


// // let soso = ["1234", "5678"]
// // console.log(soso[0])
// // previous sibling : text - baseURI = "string"





console.log("start")

// DICTIONARY

let dic = {
    prepositions : {
        class : "preposition",
        в : "Preposition-Где?Куда?",
        при : "Preposition-Где?Куда?",
        на : "Preposition-Где?Куда?",

    },
    pronouns : {
        class : "pronoun",
        я : "1st Person Singular Subject Pronoun",
        ты : "2nd person Singular Subject pronoun",
        он : "3rd Person Singular Masculine Subject Pronoun",
        она : "3rd Person Singular Feminine Subject Pronoun",
        оно : "3rd Person Singular Neutral Subject Pronoun",
        мы : "1st Person Plural Subject Pronoun",
        вы : "2nd Person Plural Subject Pronoun",
        они : "3rd Person Plural Subject Pronoun"
    },
    adjectives : {
        class : "adjective",
        красивый : "Masc",
        красивая : "Fem",
        красивое : "Neutral",
    },
    abbr: {
        class : "abbrivation",
        те : "which means"
    },
    words : {
        class : "word",
        череп : {
            definitionOfTheWord : "skull-M-",
            череп : "1st case singular, 4th case singular",
            черепа : "2nd case singular",
            черепу : "3rd case singular",

        },
        анатомия : {
            definitionOfTheWord : "anatomy-M-",
            анатомия : "1st case singular",
            анатомии : "2nd case singular, 1st case plural"
        },
        теннис : {
            definitionOfTheWord : "tennis-M-",
            теннис : "1st case"
        }
    }, 
    verbs : {
        class : "verb",
        быть : {
            definitionOfTheWord : "to be-",
            быть : "inifinitive",
            буду : "(I) will",
            будешь : "(you) will"
        }
    }
}

const nonVerbPrimaryKeysNotPopped = Object.keys(dic)
nonVerbPrimaryKeysNotPopped.pop()
nonVerbPrimaryKeysNotPopped.pop()
const nonVerbPrimaryKeysPopped = nonVerbPrimaryKeysNotPopped
let nonVerbAllSecondaryKeys = []
let nonVerbAllSecondaryValues = []

for (let i=0; i<nonVerbPrimaryKeysPopped.length; i++){
    const nonVerbSecondaryKey = Object.keys(dic[nonVerbPrimaryKeysPopped[i]])
    const nonVerbSecondaryValue = Object.values(dic[nonVerbPrimaryKeysPopped[i]])

    nonVerbAllSecondaryKeys = nonVerbAllSecondaryKeys.concat(nonVerbSecondaryKey)
    nonVerbAllSecondaryValues = nonVerbAllSecondaryValues.concat(nonVerbSecondaryValue)
}

const nonVerbWordsPrimaryKeysNotShifted = Object.keys(dic.words)
nonVerbWordsPrimaryKeysNotShifted.shift()
const nonVerbWordsPrimaryKeysShifted = nonVerbWordsPrimaryKeysNotShifted
let nonVerbWordsAllSecondaryKeys = ["class"]
let nonVerbWordsAllSecondaryValues = ["word"]

for (let i=0; i<nonVerbWordsPrimaryKeysShifted.length; i++){
    const nonVerbWordsSecondaryKey = Object.keys(dic.words[nonVerbWordsPrimaryKeysShifted[i]])
    const nonVerbWordsSecondaryValue = Object.values(dic.words[nonVerbWordsPrimaryKeysShifted[i]])

    nonVerbWordsAllSecondaryKeys = nonVerbWordsAllSecondaryKeys.concat(nonVerbWordsSecondaryKey)
    nonVerbWordsAllSecondaryValues = nonVerbWordsAllSecondaryValues.concat(nonVerbWordsSecondaryValue)
}

const verbPrimaryKeysNotShifted = Object.keys(dic.verbs)
verbPrimaryKeysNotShifted.shift()
const verbPrimaryKeysShifted = verbPrimaryKeysNotShifted
let verbAllSecondaryKeys = ["class"]
let verbAllSecondaryValues = ["verb"]

for (let i=0; i<verbPrimaryKeysShifted.length; i++){
    const verbSecondaryKey = Object.keys(dic.verbs[verbPrimaryKeysShifted[i]])
    const verbSecondaryValue = Object.values(dic.verbs[verbPrimaryKeysShifted[i]])
    
    verbAllSecondaryKeys = verbAllSecondaryKeys.concat(verbSecondaryKey)
    verbAllSecondaryValues = verbAllSecondaryValues.concat(verbSecondaryValue)
}

const arrayOfAllKeys = []
arrayOfAllKeys.push(...nonVerbAllSecondaryKeys, ...nonVerbWordsAllSecondaryKeys, ...verbAllSecondaryKeys)
console.log(arrayOfAllKeys)
const arrayOfAllValues = []
arrayOfAllValues.push(...nonVerbAllSecondaryValues, ...nonVerbWordsAllSecondaryValues, ...verbAllSecondaryValues)
console.log(arrayOfAllValues)


const allParagraphsNotSliced = document.getElementsByTagName("p")
console.log(allParagraphsNotSliced)

for ( eachParagraph of allParagraphsNotSliced ) {
    splitAndCheckWords(eachParagraph, eachParagraph.innerHTML)
}

function splitAndCheckWords(element, innerHtmlOfElement) {
    // console.log(innerHtmlOfElement)
    innerHtmlOfElement = innerHtmlOfElement.replace("т. е.", "т.е.")
    const splitedWords = innerHtmlOfElement.split(" ")
    console.log(splitedWords)
    let newHtml = ""
    for ( word of splitedWords ) {
        if (!word.includes("<a") && !word.includes("href")){
            newHtml += checkAllWords(word)
            if (checkAllWords(word) == undefined) newHtml += `${word} `
        } else {
            newHtml += `${word} `
        }}
    element.innerHTML = newHtml
}

function checkAllWords(theWord) {
    let theWordCleaned = ""
    theWordCleaned = theWord.replaceAll(".", "")
    .replaceAll("/\n/g", " ").replaceAll("<br>а)", "").replaceAll("<br>б)", "").replaceAll("<br>в)", "")
    .replaceAll("<br>", "")
    .replaceAll("<b>", "")
    .replaceAll("</b>", "")
    .replaceAll("<a", "")
    .replaceAll("</a>", "")
    .replaceAll("<i>", "")
    .replaceAll("</i>", "")
    .replaceAll("href=", "")
    .replaceAll("html", "")
    .replaceAll("см", "")
    .replaceAll("«", "")
    .replaceAll("»", "")
    .replaceAll('"', "")
    .replaceAll(",", "")
    .replaceAll("/", "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll("?", "")
    .replaceAll("!", "")
    .replaceAll("-", "")
    .replaceAll(":", "")
    .replaceAll(";", "")
    .replaceAll("—", "")
    .replaceAll(";", "")
    .replaceAll("<", "")
    .replaceAll(">", "")
    .replaceAll("=", "")
    .replaceAll("1", "")
    .replaceAll("2", "")
    .replaceAll("3", "")
    .replaceAll("4", "")
    .replaceAll("5", "")
    .replaceAll("6", "")
    .replaceAll("7", "")
    .replaceAll("8", "")
    .replaceAll("9", "")
    .replaceAll("0", "")
    console.log(theWordCleaned)
    for ( key of arrayOfAllKeys ) {
        if ( theWordCleaned.toLowerCase() == key ) {
            // console.log(key)
            const indexOfKey = arrayOfAllKeys.indexOf(key)
            const indexOfClass = arrayOfAllKeys.slice(0,indexOfKey).lastIndexOf("class")
            const booleanWordOrNot = arrayOfAllValues.slice(0,indexOfKey).includes("word")
            // console.log(booleanWordOrNot)
            // console.log(indexOfClass)
            if (booleanWordOrNot) {
                const indexOfDefinitionOfTheWord = arrayOfAllKeys.slice(0,indexOfKey).lastIndexOf("definitionOfTheWord")
                return `<abbr 
                class="${arrayOfAllValues[indexOfClass]}" 
                title="${arrayOfAllValues[indexOfDefinitionOfTheWord]}${arrayOfAllValues[indexOfKey]}"
                style="text-decoration: none;"
                >${theWord} </abbr>`
            } else {
                return `<abbr 
                class="${arrayOfAllValues[indexOfClass]}" 
                title="${arrayOfAllValues[indexOfKey]}"
                style="text-decoration: none;"
                >${theWord} </abbr>`
            }
        }
    }
    return `${theWord} `
}

const addressesOfhtmls = document.querySelectorAll("a")
console.log(addressesOfhtmls)
for ( address of addressesOfhtmls ) {
    if (address.innerHTML.lastIndexOf('"') !== -1 ) {
        const htmlToIndexed = address.innerHTML.slice(0, address.innerHTML.lastIndexOf('"'))
        console.log(htmlToIndexed)
        const htmlsliced = htmlToIndexed.slice(htmlToIndexed.indexOf('"') + 1)
        console.log(htmlsliced)
        address.setAttribute("href" , htmlsliced)
    }
    const newHtml = address.innerHTML.slice(address.innerHTML.lastIndexOf('"')+1)
    console.log(newHtml)
    if (newHtml !== "" && address.innerHTML.lastIndexOf('"') == -1) address.innerText = newHtml
    // if (newHtml.includes(">"))address.innerText = newHtml.slice(1)
    // address.innerHTML = newHtml
}

// const addressesOfhtmls = document.querySelectorAll("a")
// console.log(addressesOfhtmls)
// for ( address of addressesOfhtmls ) {
//     const htmlToIndexed = address.innerText.slice(0, address.innerText.lastIndexOf('"'))
//     console.log(htmlToIndexed)
//     const htmlsliced = htmlToIndexed.slice(htmlToIndexed.indexOf('"') + 1)
//     console.log(htmlsliced)
//     address.setAttribute("href" , htmlsliced)
//     const newHtml = address.innerText.slice(address.innerText.lastIndexOf('"')+1)
//     console.log(newHtml)
// }

