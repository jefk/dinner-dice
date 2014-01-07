var dinnerDice = function() {
  var _this = this;
  this.$foodList = $('.js-food-list');

  this.$rollButton = $('.js-roll-btn');
  this.$rollButton.focus();
  this.$rollButton.on({click: function(e) {
    _this.roll();
  }});

  this.roll = function() {
    this.$foodList.empty();
    var index = 0
    for (var category in foods) {
      if (index % 2 == 0) {
        this.addRow();
      }
      index += 1;
      this.addCategory(category);
    }
  };

  this.addCategory = function(category) {
    var $card = $('<div class=card></div>')
    $card.append('<div class=card-header>' + category + '</div>');
    $card.append(this.foodElement(category));
    this.lastRow().append('<div class="col-1-2">' + $card[0].outerHTML + '</div>');
  };

  this.foodElement = function(category) {
    var catFoods = foods[category];
    var food = catFoods[Math.floor(Math.random() * catFoods.length)];
    return '<div class="card-body text-shadow">' + food + '</div>';
  };

  this.addRow = function() {
    this.$foodList.append('<div class=row></div>');
  };

  this.lastRow = function (argument) {
    return this.$foodList.find('.row:last');
  };
};

$(document).ready(function() {
  dinnerDice();
});
