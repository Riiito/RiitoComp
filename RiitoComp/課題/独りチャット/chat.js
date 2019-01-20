const $display= document.querySelector('#display')
const $form = document.querySelector('#form')
const $message = document.querySelector('#message')
const $button = document.querySelector('#button')
const date = new Date()

$button.addEventListener('click', e => {
    e.preventDefault()

    $display.insertAdjacentHTML(
        "beforeend",
        `<a>${$message.value}</a>` 
        +
        `<a>&emsp;${date.getHours() + ":" + date.getMinutes()}</a>`.fontsize(2)
        +
        `<br>`

    )

   $form.message.value="";
})
