export default {
    "spotify-country" : {
        "meta" : {
            "title" : "Suny Gao - 90s Country on Spotify",
            "description" : "Website to promote 90s country music on Spotify"
        },
        "title" : "90s Country",
        "client" : "Spotify",
        "slug" : "spotify-country",
        "previewImages" : [
            "shirt.png",
            "cd.png"
        ],
        "backgroundColor" : "#33665a",
        "heroImage" : "home.jpg",
        "description" : [
            "<p>A digital experience to promote 90s country music on Spotify. Users progress through the site by taking a short, animated quiz and are presented with their top 6 throwback country artists, as well as a Spotify playlist, generated just for them. Built with React, Next.js, and GSAP.</p>"        
        ],
        "credits" : {
            "agency" : [
                {
                    "text": "Stink Studios"
                }
            ],
            "role" : "Developer",
            "date" : "September 2021"
        },	

        "links" : {
            "site" : "https://90scountry.byspotify.com/"
        },
        "mainContent": [
                { 
                    "type": "video",
                    "videos" : [ 
                        {
                            "src" : "loader-to-intro.mp4",
                            "width" : "1440",
                            "height" : "796"
                        }
                    ],
                    "description" : "Loader screen and intro"
                },

               

                { 
                    "type": "video",
                    "videos" : [ 
                        {
                            "src" : "q1-to-q2.mp4",
                            "width" : "1440",
                            "height" : "796"
                        }
                    ]
                },

                { 
                    "type": "video",
                    "videos" : [ 
                        {
                            "src" : "q-hair.mp4",
                            "width" : "1440",
                            "height" : "796"
                        }
                    ]
                },

                { 
                    "type": "video",
                    "videos" : [ 
                        {
                            "src" : "q-video.mp4",
                            "width" : "1440",
                            "height" : "796"
                        }
                    ]
                },

                { 
                    "type": "video",
                    "videos" : [ 
                        {
                            "src" : "end.mp4",
                            "width" : "1440",
                            "height" : "796"
                        }
                    ],
                    "description": "The user's top 6 albums, based on their quiz answers"
                },
            
                { 
                    "type": "image",
                    "images" : [ 
                        
                        {
                            "src" : "end.jpg",
                            "width" : "1920",
                            "height" : "1061"
                        }
                       
                    ],
                    "description": "Custom share asset, generated using the user's results"
                }
            
        ]
    }
}
