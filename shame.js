$(function($) {
  var active;
  if ($('html').hasClass('shame-on')) {
    $('html').removeClass('shame-on');
    active = false;
  } else {
    $('html').addClass('shame-on');
    active = true;
  }

  var shadow = active ? 'inset 0px 0px 0px 2px rgba(255, 0, 0, 1)' : 'none';
  var $elements = $('*')
    .not('[href]')
    .not('meta')
    .not('link')
    .not('script')
    .not('[tabindex]')
    .not('[role]')
    .not('html')
    .not('style')
    .not('noscript')
    .not('head')
    .not('title')
    .not('input')
    .not('select')
    .not('iframe')
    .not('video')
    .not('button')
    .not('text-area');

  $elements.each(function(i) {
    var evts = $._data($(this)[0], 'events');
    if (evts) {
      $(this).css('box-shadow', shadow);
      if (active) {
        $(this).attr('data-shame-event-list', JSON.stringify(Object.keys(evts)));
      } else {
        $(this).removeAttr('data-shame-event-list');
      }
    }
  });
});
