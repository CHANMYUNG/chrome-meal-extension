function initMeal() {
  const calendar = new Date()
  const year = calendar.getFullYear()
  const month = calendar.getMonth() + 1
  const date = calendar.getDate()
  const dateStr = `${year}년 ${month}월 ${date}일 급식`
  $('#date-label').text(dateStr)

}

$('img').on('click', function () {
  $.ajax({
    'url': 'http://localhost:8080/apply/status?email=test3@test.com&password=1234',
    'method': 'GET',
    'headers': {
      'Access-Control-Allow-Origin': 'http://localhost:8080/'
    },
    success: function (res) {
      console.log(res)
      document.body.innerText = JSON.stringify(res);
    },
    error: function (e) {
      console.log(e)
      document.body.innerText = e.message;
    }
  })
})

window.onload = initMeal();