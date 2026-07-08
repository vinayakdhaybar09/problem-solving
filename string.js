//************************** 3541. find most frequent vowel and consoneant **************************************

const vowels = ["a","e", "i", "o", "u"]


const value = "aeiaeia"

const maxFreqSum = () =>{

    const freq = {}

    for(let i = 0; i < value.length; i++){
        if(freq[value[i]]){
            freq[value[i]]++
        }else{
            freq[value[i]] = 1
        }
    }

    console.log("freq :",freq)

    let vowelMax = 0
    let cononentsMax = 0


    for (const key in freq) {
        let isVowel = false;

        for (let i = 0; i < vowels.length; i++) {
            if (vowels[i] === key) {
                isVowel = true;
                break;
            }
        }

        if (isVowel) {
            if (freq[key] > vowelMax) {
                vowelMax = freq[key];
            }
        } else {
            if (freq[key] > cononentsMax) {
                cononentsMax = freq[key];
            }
        }
    }

    // Object.keys(freq).forEach((key)=>{

    //     if (vowels.includes(key)) {
    //         if (freq[key] > vowelMax) {
    //             vowelMax = freq[key]
    //         }
    //     } else {
    //         if (freq[key] > cononentsMax) {
    //             cononentsMax = freq[key]
    //         }
    //     }
    // })

    console.log("vowelMax :", vowelMax)
    console.log("cononentsMax :", cononentsMax)
    return vowelMax + cononentsMax



}
// maxFreqSum()


// const obj = {j : 2, b: 2, h: 5}

// console.log(obj["j"])




//************************** 771. jewels and stones **************************************

const jewls = "aA"
const stones = "aAAbbbb"

const jewlsInAStone = ()=>{

    let count = 0

    for(let i = 0; i < stones.length; i++){
        for(let j = 0; j < jewls.length; j++){
            if(stones[i] === jewls[j]){

                console.log(" i : " + stones[i] + " J : ", + jewls[j])
                count++
            }
        }
    }

    console.log("count : ", count)

}

// jewlsInAStone()




//************************** find word containing charechters **************************************

const words = ["abc", "bcd", "aaa", "cbc"]      // o/p = [0, 1]
const x = "a"

const findWord = () => {

    let indices = []

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            const word = words[i]
            if (word[j] == x) {
                indices[indices.length] = i
                
                break
            }
        }
    }

    console.log("indices", indices)

}

// findWord()


//**************************/ length of last word **************************************

// "  hello there  how are you   "


const text = "  hello o woghghjjrld   "

const singleloop = () => {

    let n = text.length - 1
    let count = 0

    while (n >= 0) {

        if (count > 0 && text[n] == " ") {
            break
        }
        if (text[n] == " ") {
            n--
        }
        if (text[n] != " ") {
            count++
            n--
        }
    }

    console.log("answer count ", count)

}


// singleloop()





// ------------------------------------------------------------

const loopWay = () => {

    // find last word

    let n = text.length - 1

    while (n >= 0) {
        if (text[n] == " ") {
            n--
        } else {
            break
        }
    }

    console.log(n, text[n])

    // find length of last word length

    let count = 0

    while (n >= 0) {
        if (text[n] != " ") {
            count++
            n--
        } else {
            break
        }
    }

    console.log("length", count)


}

// loopWay()



// ------------------------------------------------------------
const easyway = () => {
    const trimtext = text.trim()
    const textarraylength = trimtext.split(" ")
    const lastword = textarraylength[textarraylength.length - 1]
    const lastwordlength = lastword.length
    console.log("length", lastwordlength)

}
// easyway()


