function showSidebar(){
    const side = document.querySelector('#sidebar')
    side.style.display = 'flex'
}
function hideSidebar(){
    const side = document.querySelector('#sidebar')
    side.style.display = 'none'
}

function showSearchbar(){
    const search = document.querySelector('#search')
    search.style.display = 'flex'
}

function hideSearchbar(){
    const search = document.querySelector('#search')
    search.style.display = 'none'

}

function showForm(){
    const form = document.querySelector('#frm-rate-review')
    const btn_rate_review = document.querySelector('.btn-add-ratereview')
    const ctn_design = document.querySelector('.ctn-rate-review-recipe')

    form.style.display = 'block'
    btn_rate_review.style.visibility = 'hidden'
    ctn_design.style.backgroundColor = 'White'
    ctn_design.style.padding = '0'
}

function showRateReview(){
    const form = document.querySelector('#frm-rate-review')
    const btn_rate_review = document.querySelector('.btn-add-ratereview')
    const ctn_design = document.querySelector('.ctn-rate-review-recipe')

    form.style.display = 'none'
    btn_rate_review.style.visibility = 'visible'
    ctn_design.style.backgroundColor = 'whitesmoke'
    ctn_design.style.padding = '20px'
}