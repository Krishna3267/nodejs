const express = require("express")
const app = express()
const axios = require("axios")
app.listen(3000)

const url = "https://jsonmock.hackerrank.com/api/football_matches" 

app.set('view engine' , 'ejs')
getData = async (page, year)=>{
    let ans = [];

    let response = await axios.get(url+`?page=${page}&year=${year}`)
    let res = response.data.data

    for(let i=0;i<res.length;i++){
        ans.push(res[i])
    }
    return ans
}

app.get('/' , (req , res) => {
    try {
        res.render('home')
    } catch (err) {
        console.log(err)
    }
})

// console.log("proxy " + process.env.http_proxy)
app.get('/:krishna' , async (req , res) => {
    let my_var = [99, 100,101,102,103];

    let year = req.params.krishna
    try {
        let request = await axios.get(url + "?page=1&year=2011")
        let response = request.data.data
        let total_pages = request.data.total_pages
        // console.log(total_pages + " " + response)
        let data = []
        for(let i = 1 ; i<=total_pages; i++){
            data.push(getData(i, year))
        }
        let ans = await Promise.all(data)
        let fin = []
        for(let i = 0 ; i<ans.length ; i++){
            for(let j = 0 ; j<ans[i].length ; j++){
                fin.push(ans[i][j])
            }
        }
        console.log(fin)
        res.render('show' , {year,fin })     
    } catch (err) {
        console.log(err)
        res.write(`<p>${err}</p>`)
        res.end()
    }

}
)

