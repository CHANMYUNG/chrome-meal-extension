$(document).ready(function () {
  const calendar = new Date()
  const year = calendar.getFullYear()
  const month = calendar.getMonth() + 1
  const date = calendar.getDate()
  const dateStr = `${year}년 ${month}월 ${date}일 급식`
  $('#date-label').text(dateStr)

  $.ajax({
    'url': 'http://localhost:8080/',
    'method': 'GET',
    'headers': {
      'Access-Control-Allow-Origin': 'http://localhost:8080/'
    },
    success: function (res) {
      console.log(res)
      let breakfast = $('#breakfast')
      breakfast.append('<ul>')
      res.breakfast.forEach(element => {
        breakfast.append(`<li>${element}</li>`)
      })
      breakfast.append(`</ul>`)

      let lunch = $('#lunch')
      lunch.append('<ul>')
      res.lunch.forEach(element => {
        lunch.append(`<li>${element}</li>`)
      })
      lunch.append(`</ul>`)

      let diner = $('#diner')
      diner.append('<ul>')
      res.diner.forEach(element => {
        diner.append(`<li>${element}</li>`)
      })
      diner.append(`</ul>`)

    },
    error: function (e) {
      console.log(e)
      document.body.innerText = e.message;
    }
  })
})

$('img').on('click', function () {
  location.href = "./settings.html"
})