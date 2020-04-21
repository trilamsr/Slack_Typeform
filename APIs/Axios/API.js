const axios = require("axios");
const cheerio = require('cheerio')

const url = 'https://en.wikipedia.org/wiki/Main_Page'

const fetchData = async () => {
    const ret = await axios.get(url)
    return cheerio.load(ret.data)
}
const inTheNews = async() => {
    const $ = await fetchData();
    const selector = `#mp-itn > ul`
    const stories = []
    $(selector).contents().each((ind, ele) => {
        stories.push($(ele).text())
    })
    const clean = stories.filter(x=> x != '\n').map((ele, ind)=> {
        return `${ind+1}. ${ele}`
    }).join('\n')
    const ret = `In the news today: \n${clean}
    `
    return ret
}


module.exports = {inTheNews}