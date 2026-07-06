
//------------------- length of last word ---------------------------------

// "  hello there  how are you   "


const text = "  hello o woghghjjrld   "

const singleloop = ()=>{

    let n = text.length - 1
    let count = 0

    while(n>=0){
        
        if(count > 0 && text[n] == " ") {
            break
        }
        if(text[n] == " "){
            n--
        }
        if(text[n] != " "){
            count++
            n--
        }
    }

    console.log("answer count ", count)

}


singleloop()





// ------------------------------------------------------------

const loopWay = ()=>{

    // find last word

    let n = text.length - 1

    while(n>=0){
        if (text[n] == " ") {
            n--
        }else{
            break
        }
    }

    console.log(n, text[n])

    // find length of last word length

    let count = 0

    while(n>=0){
        if(text[n] != " "){
            count++
            n--
        }else{
            break
        }
    }

    console.log("length", count)


}

// loopWay()



// ------------------------------------------------------------
const easyway = ()=> {
    const trimtext = text.trim()
    const textarraylength = trimtext.split(" ")
    const lastword = textarraylength[textarraylength.length-1]
    const lastwordlength = lastword.length
    console.log("length", lastwordlength)

}
// easyway()


