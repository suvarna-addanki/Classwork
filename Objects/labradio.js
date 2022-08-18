//lab radio 

const radio = 
{
    stations : 
    [
        {
            name: 'NPR',
            songs: 
            [
                {
                title: "shake it off",
                artist: "Taylor",
                },
                {
                title: "Roar",
                artist: "Katy Perry",
                },
                {
                title: "7 Rings",
                artist:"Ariana Grande",
                }
            ]
        },

        {
            name:'WJM',
            songs: 
            [
                {
                title: "Old Town Road",
                artist: "Lil Nas x",
                },
                {
                 title: "Bang Bang",
                 artist: "Nicki Minaj",
                },
                {
                title:"Lavitating",
                 artist:"Dua Lipa"
                },
            ]
        }
    ],

//function to access data
//math.floor rounds numeric values down to the nearest integer
//math.random get a value between 1 and 0(but not including 1l)    

changeStation() 
    {
    currentStation = radio.stations[Math.floor(Math.random(0) * 2 )]
    currentSong = currentStation.songs[Math.floor(Math.random(0) * 3)]
    return currentStation.name + ': Now Playing: ' + currentSong.title + ' by ' +
    currentSong.artist
    }
}
console.log(radio.changeStation())

//
