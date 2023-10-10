const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

function updateRecords(records, id, prop, value) {
  let specific_album = records[id];

  if (value == '') {
    delete specific_album[prop];
  } else {
    if (prop !== 'tracks') {
      specific_album[prop] = value;
    } else if (!('tracks' in specific_album)) {
      specific_album.tracks = [value];
    } else {
      specific_album['tracks'].push(value);
    }
  }
  return records;
}


console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));