function initMeal() {
  const calendar = new Date()
  const year = calendar.getFullYear()
  const month = calendar.getMonth() + 1
  const date = calendar.getDate()
  const dateStr = `${year}년 ${month}월 ${date}일 급식`
  $('#date-label').text(dateStr)

}

$('img').on('click', function () {
  location.href = "./settings.html"
})

window.onload = initMeal();