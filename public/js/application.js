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
    for (var category in foods) {
      this.addCategory(category);
    }
  };

  this.addCategory = function(category) {
    this.$foodList.append('<li>' + category + '</li>');
    this.addFoodFrom(category);
  };

  this.addFoodFrom = function(category) {
    var catFoods = foods[category];
    var food = catFoods[Math.floor(Math.random() * catFoods.length)];
    this.$foodList.append('<p>' + food + '</p>');
  }
};

$(document).ready(function() {
  dinnerDice();
});
