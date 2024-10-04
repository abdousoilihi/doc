const scriptURL = 'https://script.google.com/macros/s/AKfycby7Vsr7x2cpDztMhsdBzpz3_0CpC5MkHszThWxsrHp7-C86pJjQSW0fylgW0NHQisU5/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
