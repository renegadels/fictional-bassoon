const chatbox = jQuery.noConflict();

chatbox(() => {
  chatbox(".chatbox-open").click(() =>
    chatbox(".chatbox-popup, .chatbox-close").fadeIn()
  );

  chatbox(".chatbox-close").click(() =>
    chatbox(".chatbox-popup, .chatbox-close").fadeOut()
  );


  chatbox(".chatbox-minimize").click(() => {
    chatbox(".chatbox-panel").fadeOut();
    chatbox(".chatbox-popup, .chatbox-open, .chatbox-close").fadeIn();
  });

  chatbox(".chatbox-panel-close").click(() => {
    chatbox(".chatbox-panel").fadeOut();
    chatbox(".chatbox-open").fadeIn();
  });
});
