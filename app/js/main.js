// Init Modals
$(document).ready(function() {
  $('#facebook_modal').animatedModal({
    modalTarget: 'facebookModal',
  });

  $('#twitter_modal').animatedModal({
    modalTarget: 'twitterModal',
  });

  $('#instragram_modal').animatedModal({
    modalTarget: 'instagramModal',
  });

  $('#linked_in_modal').animatedModal({
    modalTarget: 'linkedInModal',
  });

  $('#chat_modal').animatedModal({
    modalTarget: 'chatModal',
  });

  $('#email_modal').animatedModal({
    modalTarget: 'emailModal',
  });

  $('#phone_modal').animatedModal({
    modalTarget: 'phoneModal',
  });

//Init Icon Animation
  $('#facebook_modal').hover(function() {
    $('i.fa.fa-facebook').toggleClass('animated rubberBand');
  });

  $('#twitter_modal').hover(function() {
    $('i.fa.fa-twitter').toggleClass('animated rubberBand');
  });

  $('#instragram_modal').hover(function() {
    $('i.fa.fa-instagram').toggleClass('animated rubberBand');
  });

  $('#linked_in_modal').hover(function() {
    $('i.fa.fa-linkedin').toggleClass('animated rubberBand');
  });

  $('#chat_modal').hover(function() {
    $('i.fa.fa-wechat').toggleClass('animated rubberBand');
  });

  $('#email_modal').hover(function() {
    $('i.fa.fa-envelope').toggleClass('animated rubberBand');
  });

  $('#phone_modal').hover(function() {
    $('i.fa.fa-mobile').toggleClass('animated rubberBand');
  });

});
