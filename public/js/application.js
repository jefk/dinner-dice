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
    var index = 0;
    for (var category in Foods) {
      // if (index % 2 == 0) {
        this.addRow();
      // }
      index += 1;
      this.addCard(category);
    }
  };

  this.addCard = function(category) {
    var foodCardData = {
      category: category,
      foodName: self.randomFoodFrom(category),
      cardCssClasses: 'col-1-1',
    };
    var card = Mustache.to_html(Templates.foodCard, foodCardData);
    this.lastRow().append(card);
  };

  this.randomFoodFrom = function(category) {
    var catFoods = Foods[category];
    return catFoods[Math.floor(Math.random() * catFoods.length)];
  }

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
