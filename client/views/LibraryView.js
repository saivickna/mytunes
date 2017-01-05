// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'table',
  className: 'table table-hover library',

  initialize: function() {
    this.render();
    this.collection.on('complete', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function(filter) {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    var songList = this.collection;
    if (filter) {
      filter = filter.toLowerCase();
      songList = this.collection.filter(function(song) {
        return song.get('title').toLowerCase().includes(filter);
      });
    }
    this.$el.children().detach();
    this.$el.html('<thead><tr><th>Artist</th><th>Title</th><th>Play Count</th></tr></thead>').append(
      songList.map(function(song) {

        return new LibraryEntryView({model: song}).render();
      })
    );
  }
});
