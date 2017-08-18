var selectInputBinding = new Shiny.InputBinding();

$.extend(selectInputBinding, {
  find: function(scope) {
    return $(scope).find(".dull-select-input[id]");
  },
  getValue: function(el) {
    return $(el)
      .find("option:checked")
      .map(function(i, e) {
        var $val = $(e).data("value");
        return $val === undefined ? null : $val;
      })
      .get();
  },
  getState: function(el, data) {
    return { value: this.getValue(el) };
  },
  subscribe: function(el, callback) {
    $(el).on("change.selectInputBinding", function(e) {
      callback();
    });
  },
  unsubscribe: function(el) {
    $(el).off(".selectInputBinding");
  }
});

Shiny.inputBindings.register(selectInputBinding, "dull.selectInput");