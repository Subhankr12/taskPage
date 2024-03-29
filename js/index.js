function openChoice(evt, choice) {
  var i, tabcontent, tablinks
  tabcontent = document.getElementsByClassName("tabcontent")
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"
  }
  tablinks = document.getElementsByClassName("tablinks")
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "")
  }
  document.getElementById(choice).style.display = "block"
  evt.currentTarget.className += " active"
}

function book() {
  let bookings = document.getElementById("bookings").value
  alert(bookings !== "" || 0 ? "Table booked for " + bookings + " people." : "Please enter number of people")
}

$(document).ready(() => {
  $(".green-box").click(() => {
    alert("Table Booked")
  })
  $(".grey-box").click(() => {
    alert("Table already occupied. Please select another table.")
  })
})
