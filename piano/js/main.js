$(document).ready(function () {
  $('span').click(function () {
    let key = $(this).attr('data-key');
    let audio = $(document).find('audio[data-key='+key+']')[0];
    if (!audio) return;
    audio.play();
    audio.currentTime = 0;
  });
});