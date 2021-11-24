window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#search-btn').addEventListener('click', function(){
    document.querySelector('#search-menu').classList.toggle('is-active')
    document.querySelector('#search-btn').classList.toggle('is-closed')
  })
  document.querySelector('#cancel-btn').addEventListener('click',function(){
    document.querySelector('#search-menu').classList.toggle('is-active')
    document.querySelector('#search-btn').classList.toggle('is-closed')
  })
})
