var app = new Vue({
  el: "#app",
  data: {
    emailsIn: "",
    emailsOut: ""
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    },
    clearNames: function() {
      this.emailsOut = "";
      var emailsOut = [];
      var emailsIn = this.emailsIn.split(";");
      emailsIn.forEach(s => {
        var email = s.substring(s.indexOf("<") + 1, s.length - 1);
        emailsOut.push(email);
      });
      this.emailsOut = emailsOut.join(";");
      setTimeout(() => {
        var field = document.querySelector("#emailsOutput");
        M.updateTextFields(field);
        M.textareaAutoResize(field);
      }, 5);
    },
    copyOutput: function() {
      var outputField = document.querySelector("#emailsOutput");
      outputField.select();
      try {
        M.toast({ html: "Emails was successfully copied.", classes: "green" });
      } catch (err) {
        M.toast({ html: "Oops, unable to copy", classes: "red" });
      }
      window.getSelection().removeAllRanges();
    }
  }
});
