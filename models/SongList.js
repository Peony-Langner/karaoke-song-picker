const { Schema, model } = require('mongoose');

const songListSchema = new Schema({
  createdOn: { type: Date, default: Date.now },
  artist: { type: String, required: true },
  title: { type: String, required: true },
  genre: { type: String, required: true },
});

const SongList = model('SongList', songListSchema);

module.exports = SongList;
