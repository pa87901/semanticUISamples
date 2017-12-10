$(document).ready(() => {
  console.log('rendering...')
  const $body = $('body');
  $('#modalbutton').on('click', () => {
    $('.ui.modal')
      .modal('show')
    ;
  })
})