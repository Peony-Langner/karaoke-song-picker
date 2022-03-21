const SongList = require('./../models/SongList');

exports.addSong = async (req, res) => {
  const { body } = req;

  try {
    const newSong = await SongList.create({
      artist: body.artist,
      title: body.title,
      genre: body.genre,
    });

    return res.status(200).json({ message: 'Song Created', newSong });
  } catch (error) {
    return res.status(400).json({ message: 'Error happened', error });
  }
};

exports.listSongs = async (req, res) => {
  try {
    const listSongs = await SongList.find();

    return res.status(200).json({ message: 'list of Songs', listSongs });
  } catch (error) {
    return res.status(400).json({ message: 'Error happened' });
  }
};
