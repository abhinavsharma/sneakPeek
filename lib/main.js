const widgets = require("widget");
const tabs = require("tabs");
const self = require("self");
const pageMod = require("page-mod");

pageMod.PageMod({
  include: ["http://*"],
  contentScriptFile: [self.data.url("sneak_peek.js")],
  onAttach: function onAttach(worker) {
    worker.postMessage({
      "style": self.data.url("lightbox.css"),
    })
  }
});

console.log("The add-on is running.");
