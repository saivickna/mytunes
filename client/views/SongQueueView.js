// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',
  className: 'table table-hover library songqueue',

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {
    var flag = false;
    if (this.collection.length > 1) {
      return this.$el.html('<thead><tr><th>Artist</th><th>Title</th></tr></thead>').append(
        this.collection.map(function(song) {
          if (flag) {
            return new SongQueueEntryView({model: song}).render();
          } 
          flag = true;
        })
      );
    }

  }

});
