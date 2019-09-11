function socialNetworking() {
  let language = document.documentElement.lang
  if (language === 'en') {
    var options = {
      facebook: "271842162861500", // Facebook page ID
      whatsapp: "+51987546499", // WhatsApp number
      call_to_action: "Déjanos un mensaje!", // Call to action
      button_color: "#9fca32", // Color of button
      position: "right", // Position may be 'right' or 'left'
      order: "facebook,whatsapp", // Order of buttons
    };
  } else {
    var options = {
      facebook: "262726814656243", // Facebook page ID
      whatsapp: "+51987546499", // WhatsApp number
      call_to_action: "Dejanos un mensaje", // Call to action
      button_color: "#5584ff", // Color of button
      position: "right", // Position may be 'right' or 'left'
      order: "facebook,whatsapp", // Order of buttons
    };
  }
  var proto = document.location.protocol,
    host = "whatshelp.io",
    url = proto + "//static." + host;
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = url + '/widget-send-button/js/init.js';
  s.onload = function () {
    WhWidgetSendButton.init(host, proto, options);
  };
  var x = document.getElementsByTagName('script')[0];
  x.parentNode.insertBefore(s, x);
};

export default socialNetworking