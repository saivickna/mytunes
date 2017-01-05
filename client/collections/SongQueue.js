// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function () {
      if (this.length === 1) {
        this.playFirst();
      }

    }, this);
    this.on('ended', function () {
      this.removeSong(0);
      if (this.length !== 0) {
        this.playFirst();
      }
    }, this);
    this.on('dequeue', function (model) {
      this.remove(model);
    }, this);
  },

  playFirst: function () {
    // this.at(0).trigger('play');
    this.at(0).play();
  },

  removeSong: function (index) {
    if (this.at(index)) {
      this.remove(this.at(index));
    }
    
  }

});