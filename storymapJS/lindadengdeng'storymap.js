// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "1963-2017",
      text: {
        headline: "DENGDENG'S STORYMAP",
        text: "<p> here is linda, testing testing</p>"
      },
      media: {
        url: "picture2.jpg",
        credit: "CHEN, DENGDENG<br>陈登登",
        caption: ""
      }
    }, 

    {
      date: "2013-2015",
      text: {
        headline: "SUN YAT-SEN UNIVERSITY <br> 中山大学",
        text: "<p> In the course of my bachelor training on German Language and Literature in Sun Yat-sen University, the core German curriculums enlightened me on definitions of culture, cross-culture and intercultural communication. Besides, I enriched my knowledge on different countries’ national situations and the problems confronted with in intercultural communication through other miscellaneous courses like Information on German, Cultural Anthropology, China Studies, etc.</p>"
      },
      location: {
        name: "SYSU",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 22.3495149,
        lon: 113.5847663,
        zoom: 16,
        line: true
      },
      media: {
        url: "picture1.jpg",
        credit: "SYSU",
        caption: "SYSU，school of foreign languages，German and German Literature"
      }
    },

    {
      date: "2015-1017",
      text: {
        headline: "SUN YAT-SEN UNIVERSITY <br> 中山大学",
        text: "<p>On such basis, the two introductory courses, German in Media and German News and Movies Listening and Translation, led me to a new avenue of media and communication. </p>"
      },
      location: {
        name: "SYSU",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 23.0963779,
        lon: 113.2944511,
        zoom: 16,
        line: true
      },
      media: {
        url: "picture3.jpg",
        type: 		"image",
        credit: "SYSU",
        caption: "SYSU，school of foreign languages，German and German Literature"
      }
    },

    {
      date: "2016.9",
      text: {
        headline: "INTERNSHIP IN QINGTING FM <br>蜻蜓FM",
        text: "<p> Motivated by the interest in new media, I started my internship in New Media Business Department of Qingting FM. My two major duties were customer development for a we-media named Military V Alliance and current political news editing and publishing. </p>"
      },
      location: {
        name: "Qingting",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 23.0963668,
        lon: 113.3142685,
        zoom: 16,
        line: true
      },
      media: {
        url: "picture4.jpg",
        type: 		"image",
        credit: "Qingting",
        caption: "Qingting FM, New Media Business Department"
      }
    },

    {
      date: "2017.4",
      text: {
        headline: "INTERNSHIP IN TRENDS GROUP<br>时尚传媒集团有限公司",
        text: "<p>In April 2017, after fierce competition I succeeded in winning the internship opportunity in the Trends Group Co., Ltd. As an intern assistant in the new media department, I was trusted to take the responsibility for content marketing by running seven mainstream social media platforms, which expected to boost the key dashboard metrics of page views, likes and posting engagements of the subscribers.</p>"
      },
      location: {
        name: "TRENDS GROUP",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 23.1023487,
        lon: 113.300954,
        zoom: 16,
        line: true
      },
      media: {
        url: "picture6.jpg",
        type: 		"image",
        credit: "TRENDS GROUP",
        caption: "Trends Group, New Media Department"
      }
    },
     {
      date: "2017-2018",
      text: {
        headline: "CHINESE UNIVERSITY OF HONGKONG<br>香港中文大学",
        text: "<p> WORKING HARD ON IT NOW</p> "
      },
      location: {
        name: "CUHK New Asia College",
        lat: 22.4174469,
        lon: 114.2017373,
        zoom: 16,
        line: true
      },
      media: {
        url: "picture7.jpg",
        credit: "CUHK",
        caption: "CUHK School of Journalism and Communication."
      }
    }]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'osm:standard',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}