let yelpResults =[]
let currentIndex = 0

function fetchData(){
    fetch("http://localhost:8080/api").then(resp =>{
      //   restaurantList = resp;
        return resp.json();
      })
      .then(data => {
          console.log(data);
        yelpResults = data

          showResult(0)
      })
  }
  // purpose of this function is to show a single result.
  //first param is taking which index to render
function showResult(){
    // make sure what we want to do exist in our array
    // console.log(resultIndex)
    console.log(currentIndex)
    // resultsIndex is less than yelpResults.length
    if(currentIndex < yelpResults.length){
    
        //find result object that we want to render
        const biz = yelpResults[currentIndex]
        // copy templet and fill it out with result
        const resultTpl = document.getElementById("result_template")
        let bizResult = resultTpl.content.cloneNode(true)
        
        let resultImg = bizResult.querySelector(".image__container img")
        resultImg.src = biz.image_url
        let resultName = bizResult.querySelector(".yelp_name")
        resultName.innerText = biz.name
        let resultRating = bizResult.querySelector(".yelp_rating")
        resultRating.innerText = biz.rating
        // let resultUrl = bizResult.querySelector(".yelp_url")
        // resultUrl.innerText = biz.url


        // put what we just put onto the page
        const bizResultCont = document.getElementById("biz_result")
        bizResultCont.replaceChildren(bizResult)
        
            localStorage.setItem('favorites',JSON.stringify([biz]))        
        currentIndex++
    }

}

// function setFavroite(result){
//     console.log(result)
// }


fetchData()
  