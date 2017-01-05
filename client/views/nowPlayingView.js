var nowPlayingView = Backbone.View.extend({

  tagName: 'div',
  className: 'nowPlaying',

  initalize: function() {

  },

  render: function() {
    this.$el.text(this.model.get('artist') + ' - ' + this.model.get('title'));
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  }

});