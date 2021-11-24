document.addEventListener('DOMContentLoaded', function(){

  const btns =  document.querySelectorAll('.section-how__link');

  btns.forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
      btns.forEach(function(btn){
        btn.classList.remove("section-how__link_active");
      });
      this.classList.add("section-how__link_active")
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.section-how__consult-left').forEach(function(tabContent){
        tabContent.classList.remove('section-how__consult-left_active');
      })
      document.querySelector(`[data-target = "${path}"]`).classList.add('section-how__consult-left_active');
    })
  })
})
