const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
        name: "canon in d",
        artist: 'Brian Crain',
        url: './mp3/陈一发儿 - 童话镇.mp3',
        cover: 'http://p1.music.126.net/QGb9Vtyw7qHS00uEvPfM6g==/843325418547559.jpg?param=130y130',
      }
    ]
});