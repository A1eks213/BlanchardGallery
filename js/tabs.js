document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
      document.querySelectorAll('.tabs__btn').forEach(function(tabContent) {
        tabContent.classList.remove('tabs__active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('tabs__active')
    })
  })
  //
  document.querySelectorAll('.tabs__btn-gallery').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.tab-content-gallery').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-gallery-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-gallery-active')
      document.querySelectorAll('.tabs__btn-gallery').forEach(function(tabContent) {
        tabContent.classList.remove('tabs__gallery-active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('tabs__tabs__gallery-active')
    })
  })
  //
  document.querySelectorAll('.tabs__btn-creator').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.tab-content-creator').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active-creator')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active-creator')
      document.querySelectorAll('.tabs__btn-creator').forEach(function(tabContent) {
        tabContent.classList.remove('tabs__active-creator')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('tabs__active-creator')
    })
  })
  $(".add").click(function() {
    $(".section-event__list").find('.swiper-slide-event').show();
  });
  //
  $('#tabs__btn-event').click(function(e) {
    e.preventDefault();
    $(this).hide();
  });
  // ..................................................................................................................................
  function checkboxToggle() {
    let btn = document.querySelector(".h2-click");
    let labels = document.querySelectorAll(".checkbox--label");
    let listLabels = document.querySelector(".checkbox-list");
  btn.addEventListener("click", function() {
    if (!listLabels.classList.contains("checklist-active")) {
      listLabels.classList.add("checklist-active");
      labels.forEach(item => {
       // item.classList.add("checkbox--label-active");
        animationItem(item, "checkbox--label-active", "animation-test", "add");
      })
    } else {
      listLabels.classList.remove("checklist-active");
      labels.forEach(item => {
        if (item.querySelector(".checkbox").checked) {
        animationItem(item, "checkbox--label-active", "animation-test", "add");
        } else {
          animationItem(item, "checkbox--label-active", "animation-test", "remove");
        }
        });
    }
    labels.forEach(item => {
      item.addEventListener("click", function() {
        if (!listLabels.classList.contains("checklist-active")) {
          animationItem(this, "checkbox--label-active", "animation-test", "remove");
        }
      });
    })

  })
  function animationItem(item, class1, class2, f) {
   if (f === "add") {
      item.classList.add(class1);
    setTimeout(function() {
      item.classList.add(class2)
    }, 100);

   } else {
       item.classList.remove(class2);
    setTimeout(function() {
      item.classList.remove(class1)
    }, 300);
    }
  }
  }
  checkboxToggle()
  ////////
  $('#tabs__btn-event').click(function() {
    $('.swiper-slide-event').css({
        'display': 'flex'
    });
});
})
