// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function () {
    this.set('playCount', 0);
    this.set('playing', false);
  },

  play: function() {
    this.set('playing', true);
    this.set('playCount', this.get('playCount') + 1);
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.set('playing', false);
    this.trigger('ended', this);
  }


});
