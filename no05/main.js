function toggleNav() {
  const body = document.body
  const hamburger = document.getElementById('hamburger_btn')
  const background = document.getElementById('side_menu_bg')

  hamburger.addEventListener('click', function () {
    body.classList.toggle('nav_open')
    // console.log('class="nav_open" 追加')
  })
  background.addEventListener('click', function () {
    body.classList.remove('nav_open')
    // console.log('class="nav_open" 削除')
  })
}
toggleNav()
