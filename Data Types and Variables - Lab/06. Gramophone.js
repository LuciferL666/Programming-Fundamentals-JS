function gramophone(group, album, song) {
    let time = (album.length * group.length) * song.length / 2
    let rotations = Math.ceil(time / 2.5)
    console.log(`The plate was rotated ${rotations} times.`);

}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
gramophone("Rammstein", "Sehnsucht", "Engel");