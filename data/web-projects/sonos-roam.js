export default {
    "sonos-roam" : {
        "meta" : {
            "title" : "Suny Gao - Sonos Roam",
            "description" : "Live event to announce the Sonos Roam Speaker"
        },
        "title" : "Sonos Roam",
        "client" : "Sonos",
        "slug" : "sonos-roam",
        "previewImages" : [
            "mediakit.jpg",
            "roam-purple.jpg"
        ],
        "backgroundColor" : "#1f355a",
        "heroImage" : "hero.jpg",
        "description" : [
            "<p>In March 2021, Sonos partnered with Jam3 to build a virtual live event to announce their new Roam bluebooth speaker. The 2 day event included a lobby page, featuring a Sonos radio player, where guests waited for the event to begin, and a broadcast page, where the event was streamed live to the press and the larger Sonos community. After the event, guests were redirected to a press kit page, where they could download media assets, view product specs and read reviews of the speaker.</p> <p>The site was built with React and Next.js. My main focus was on the site's animations, which were built using a combination of CSS and javascript techniques.</p>"        
        ],
        "credits" : {
            "agency" : [
                {
                    "text": "Jam3"
                }
            ],
            "role" : "Front End Developer",
            "date" : "March 2021"
        },	

        "links" : {
            
        },
        "mainContent": [
                { 
                    "type": "video",
                    "videos" : [ 
                        {
                            "src" : "welcome.mp4",
                            "width" : "1440",
                            "height" : "796"
                        }
                    ],
                    "description" : "Guest check-in"
                },

                { 
                    "type": "video",
                    "videos" : [ 
                        {
                            "src" : "enter-lobby-short.mp4",
                            "width" : "1440",
                            "height" : "796"
                        }
                    ],
                    "description" : "Entering the lobby"
                },

               

                { 
                    "type": "video",
                    "videos" : [ 
                        {
                            "src" : "radio.mp4",
                            "width" : "1440",
                            "height" : "796"
                        }
                    ],
                    "description" : "Sonos Radio player"
                },

                { 
                    "type": "video",
                    "videos" : [ 
                        {
                            "src" : "engagement.mp4",
                            "width" : "1440",
                            "height" : "796"
                        }
                    ],
                    "description" : "Engagement tracker"
                },

                { 
                    "type": "video",
                    "videos" : [ 
                        {
                            "src" : "sonos-full.mp4",
                            "width" : "1920",
                            "height" : "1080"
                        }
                    ]
                }
            
        ]
    }
}
