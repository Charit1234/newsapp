import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
          "source": { "id": "reuters", "name": "Reuters" },
          "author": null,
          "title": "Ukraine troops sweep ahead after Russian collapse in northeast - Reuters",
          "description": "Ukrainian forces swept further across territory seized from fleeing Russian troops on Monday, as Moscow grappled with the consequences of the collapse of its occupation force in northeastern Ukraine.",
          "url": "https://www.reuters.com/world/europe/ukraine-accuses-russia-attacking-power-grid-revenge-offensive-2022-09-11/",
          "urlToImage": "https://www.reuters.com/resizer/FfYFWkXwHtoeVYEYtnAba2W01uQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3JBEEPG6KNJADNS45QI5KDCKJM.jpg",
          "publishedAt": "2022-09-12T08:14:00Z",
          "content": "KYIV/KHARKIV, Ukraine, Sept 12 (Reuters) - Ukrainian forces swept further across territory seized from fleeing Russian troops on Monday, as Moscow grappled with the consequences of the collapse of it… [+4598 chars]"
        },
        {
          "source": { "id": null, "name": "YouTube" },
          "author": null,
          "title": "Live: Live from Edinburgh after death of Queen Elizabeth II - The Independent",
          "description": "View of Palace of Holyroodhouse in Edinburgh. Queen Elizabeth's coffin is carried in procession from Holyrood Palace her official residence in Edinburgh to S...",
          "url": "https://www.youtube.com/watch?v=m38rYZbBPHY",
          "urlToImage": "https://i.ytimg.com/vi/m38rYZbBPHY/hqdefault_live.jpg",
          "publishedAt": "2022-09-12T06:13:18Z",
          "content": null
        },
        {
          "source": { "id": "fox-news", "name": "Fox News" },
          "author": "Scott Thompson",
          "title": "Cowboys' Dak Prescott needs thumb surgery, will be out several weeks - Fox News",
          "description": "Dallas Cowboys quarterback Dak Prescott needs surgery on his throwing hand, team owner Jerry Jones said. Prescott suffered the injury during the loss to the Tampa Bay Buccaneers.",
          "url": "https://www.foxnews.com/sports/cowboys-dak-prescott-needs-hand-surgery-out-several-weeks",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/09/Dak-Prescott.jpg",
          "publishedAt": "2022-09-12T03:49:42Z",
          "content": "Dallas Cowboys quarterback Dak Prescott will be out for several weeks, as team owner Jerry Jones said he needs surgery on his right thumb.\r\nPrescott came out of the game against the Tampa Bay Buccane… [+2790 chars]"
        },
        {
          "source": { "id": "independent", "name": "Independent" },
          "author": "Kate Ng",
          "title": "Prince Andrew and Sarah Ferguson to take the Queen's corgis - The Independent",
          "description": "Prince Andrew gifted the late monarch her two remaining dogs",
          "url": "https://www.independent.co.uk/life-style/royal-family/queen-corgis-prince-andrew-sarah-ferguson-b2165067.html",
          "urlToImage": "https://static.independent.co.uk/2022/09/11/16/corgi-andrew.jpg?quality=75&width=1200&auto=webp",
          "publishedAt": "2022-09-12T02:31:56Z",
          "content": "The Duke of York and Sarah, Duchess of York, will become the new owners of Queen Elizabeth IIs beloved corgis following her death.\r\nThe Queen died on Thursday in Balmoral Castle at the age of 96, lea… [+2933 chars]"
        },
        {
          "source": { "id": null, "name": "KCRA Sacramento" },
          "author": "KCRA Staff",
          "title": "Mosquito Fire burns more than 46K acres, firefighters make progress on containment - KCRA Sacramento",
          "description": "The most active part of the fire is burning north and northeast in Placer County, triggering additional evacuations.",
          "url": "https://www.kcra.com/article/mosquito-fire-evacuations-placer-el-dorado-county-september-11/41155000",
          "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/ap22251662920634.jpg?crop=1.00xw:0.848xh;0,0.00735xh&resize=1200:*",
          "publishedAt": "2022-09-12T02:26:00Z",
          "content": "A fast-moving wildfire in Northern California is burning north and northeast in Placer County, triggering additional evacuations as firefighters battle the flames.\r\nThe Mosquito Fire started on the e… [+8831 chars]"
        },
        {
          "source": { "id": null, "name": "CNBC" },
          "author": "Abigail Ng",
          "title": "Asia-Pacific trade higher as risk sentiment improves, key U.S. inflation data ahead - CNBC",
          "description": "Markets in the Asia-Pacific open higher Monday as risk sentiment improves.",
          "url": "https://www.cnbc.com/2022/09/12/asia-markets-stocks-currencies-oil-economic-data.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107037376-1648448398261-gettyimages-1239000117-AFP_324M4XY.jpeg?v=1662940082&w=1920&h=1080",
          "publishedAt": "2022-09-12T02:04:00Z",
          "content": "The U.S. Department of Commerce plans to publish new regulations related to restricting exports of chipmaking equipment to Chinese factories that produce advanced semiconductors, Reuters reported, ci… [+466 chars]"
        },
        {
          "source": { "id": null, "name": "ScienceAlert" },
          "author": "The Conversation",
          "title": "Does a Big Breakfast Actually Help Weight Loss? Surprise New Finding - ScienceAlert",
          "description": "Some of the most popular diet advice in recent years has centered around the idea that the right timing for your meals can make a big difference in the amount of weight you lose.",
          "url": "https://www.sciencealert.com/does-a-big-breakfast-actually-help-weight-loss-surprise-new-finding",
          "urlToImage": "https://www.sciencealert.com/images/2022/09/ManEatsBigBreakfastWithManyPlates.jpg",
          "publishedAt": "2022-09-12T01:50:17Z",
          "content": "Some of the most popular diet advice in recent years has centered around the idea that the right timing for your meals can make a big difference in the amount of weight you lose.\r\nIt was long said th… [+4410 chars]"
        },
        {
          "source": { "id": null, "name": "9to5Mac" },
          "author": "Chance Miller",
          "title": "iPhone 14 battery capacity: Here’s how the numbers compare to iPhone 13 - 9to5Mac",
          "description": "When the iPhone 14 lineup was announced last week, Apple touted that you can expect improved battery life across the board compared to the iPhone 13. Now, we have more details on the battery inside each of iPhone 14 model, including the iPhone 14 Plus…which A…",
          "url": "https://9to5mac.com/2022/09/11/iphone-14-battery-sizes/",
          "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/iphone-14-battery-life.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
          "publishedAt": "2022-09-12T01:50:00Z",
          "content": "When the iPhone 14 lineup was announced last week, Apple touted that you can expect improved battery life across the board compared to the iPhone 13. Now, we have more details on the battery inside e… [+2329 chars]"
        },
        {
          "source": { "id": null, "name": "YouTube" },
          "author": null,
          "title": "Washington wildfires Sunday update: Evacuations still in place | FOX 13 Seattle - FOX 13 Seattle",
          "description": "Evacuations were still in effect Sunday night for the Bolt Creek Fire and the Goat Rocks Fire in Washington state.Subscribe to FOX 13 Seattle: https://www.yo...",
          "url": "https://www.youtube.com/watch?v=cMg58T7wmnI",
          "urlToImage": "https://i.ytimg.com/vi/cMg58T7wmnI/maxresdefault.jpg",
          "publishedAt": "2022-09-12T01:39:29Z",
          "content": null
        },
        {
          "source": { "id": null, "name": "Variety" },
          "author": "Zack Sharf",
          "title": "Harry Styles’ Body- and Soul-Baring Performance in ‘My Policeman’ Seduces Toronto, Draws Standing Ovation - Variety",
          "description": "Popular on Variety Harry Styles has finally debuted his dramatic chops, charming the Toronto International Film Festival at the world premiere of “My Policeman.” An emotional, decade-spanning drama about a 1950s cop juggling an idealistic wife and a secret ma…",
          "url": "https://variety.com/2022/film/news/harry-styles-my-policeman-tiff-reactions-standing-ovation-1235339025/",
          "urlToImage": "https://variety.com/wp-content/uploads/2022/09/GettyImages-1422893544-1.jpg?w=1024",
          "publishedAt": "2022-09-12T01:12:00Z",
          "content": "Harry Styles has finally debuted his dramatic chops, charming the Toronto International Film Festival at the world premiere of “My Policeman.”\r\nAn emotional, decade-spanning drama about a 1950s cop j… [+2467 chars]"
        },
        {
          "source": { "id": null, "name": "Daily Beast" },
          "author": "AJ McDougall",
          "title": "19-Year-Old Carlos Alcaraz Crowned U.S. Open Champ - The Daily Beast",
          "description": "With his victory over Norway’s Casper Ruud, Alcaraz has become the youngest man ever ranked the world No. 1.",
          "url": "https://www.thedailybeast.com/19-year-old-carlos-alcaraz-of-spain-crowned-us-open-champ-after-defeating-norways-casper-ruud",
          "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_2862,w_5088,x_0,y_21/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1662944193/2022-09-11T230724Z_1773242199_MT1USATODAY19031254_RTRMADP_3_TENNIS-US-OPEN_lko6np",
          "publishedAt": "2022-09-12T01:09:35Z",
          "content": "Armed with a powerful forehand and an uncanny ability to extend points and outlast opponents, Carlos Alcaraz arrived at the Arthur Ashe Stadium on a rainy Sunday night in Queens to face down Casper R… [+695 chars]"
        },
        {
          "source": { "id": null, "name": "CBS Sports" },
          "author": "",
          "title": "NFL scores, schedule, live updates in Week 1: Patrick Mahomes with 5 TDs in first game without Tyreek Hill - CBS Sports",
          "description": "All the best highlights from Week 1 are right here",
          "url": "https://www.cbssports.com/nfl/news/nfl-scores-schedule-live-updates-in-week-1-patrick-mahomes-with-5-tds-in-first-game-without-tyreek-hill/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/09/11/e70d5c67-443f-4311-870b-d3cdc8c061b4/thumbnail/1200x675/9bcad24fa408713861f5c67947edce53/patrick-mahomes.jpg",
          "publishedAt": "2022-09-12T00:36:00Z",
          "content": "It's Week 1 of the 2022 NFL season, and we're keeping you updated on all the action and biggest storylines throughout the day. The Week 1 slate has some fantastic matchups and storylines, and we're h… [+12227 chars]"
        },
        {
          "source": { "id": "fox-news", "name": "Fox News" },
          "author": "Paul Best",
          "title": "Israeli prime minster sees 'encouraging signs' that US and Europe will not agree to new Iran nuclear deal - Fox News",
          "description": "Israeli Prime Minister Yair Lapid said Sunday that there are \"encouraging signs\" that Western powers will not agree to a new nuclear deal with Iran.",
          "url": "https://www.foxnews.com/world/israeli-prime-minster-sees-encouraging-signs-that-us-europe-agree-new-iran-nuclear-deal",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/04/AP21096265896625-CROP.jpg",
          "publishedAt": "2022-09-12T00:35:49Z",
          "content": "After months of negotiations, Israeli Prime Minister Yair Lapid said Sunday there are \"encouraging signs\" that the United States and European allies will not agree to a new nuclear deal with Iran. \r\n… [+2353 chars]"
        },
        {
          "source": { "id": null, "name": "Daily Mail" },
          "author": "Shaun Wooller",
          "title": "Weekly obesity jab halves the risk of diabetes and can spark sufficient weight loss - Daily Mail",
          "description": "Patients can inject themselves with semaglutide, which works by hijacking the brain to suppress appetite and slash calorie intake.",
          "url": "https://www.dailymail.co.uk/news/article-11202577/Weekly-obesity-jab-halves-risk-diabetes-spark-sufficient-weight-loss.html",
          "urlToImage": "https://i.dailymail.co.uk/1s/2022/09/12/01/62306557-0-image-a-57_1662941363898.jpg",
          "publishedAt": "2022-09-12T00:26:17Z",
          "content": "An obesity drug given in weekly jabs more than halves the risk of developing type 2 diabetes, a landmark review suggests.\r\nPatients can inject themselves with semaglutide, which works by hijacking th… [+3001 chars]"
        },
        {
          "source": { "id": null, "name": "YouTube" },
          "author": null,
          "title": "US Inflation to Guide Fed's Next Hike - Bloomberg Markets and Finance",
          "description": null,
          "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DV9WUplZc_X4",
          "urlToImage": null,
          "publishedAt": "2022-09-12T00:17:44Z",
          "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
          "source": { "id": "the-verge", "name": "The Verge" },
          "author": "Emma Roth",
          "title": "Meta’s “Quest Pro” VR headset may have leaked out in new pictures - The Verge",
          "description": "Images showing what appears to be the packaging for the “Meta Quest Pro” virtual reality headset have surfaced, possibly showing the final name and design of Project Cambria before Mark Zuckerberg launches it next month.",
          "url": "https://www.theverge.com/2022/9/11/23347979/meta-quest-pro-leak-vr-project-cambria-headset",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/YhpXaijlX3MzUoUp2mMtSGztrt0=/0x101:640x436/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24013867/meta_quest_pro_leak.jpg",
          "publishedAt": "2022-09-12T00:09:45Z",
          "content": "Is this a production prototype of Mark Zuckerbergs Project Cambria?\r\nImage: Ramiro Cardenas via Facebook\r\nImages of what appears to be the packaging for a Meta Quest Pro virtual reality (VR) headset … [+1805 chars]"
        },
        {
          "source": { "id": "cnn", "name": "CNN" },
          "author": "Jake Tapper, Anchor and Chief Washington Correspondent",
          "title": "Biden will not travel with a delegation to Queen Elizabeth's funeral - CNN",
          "description": "Buckingham Palace did not invite President Joe Biden to assemble a delegation to attend the funeral of Queen Elizabeth II next week, and instead extended a specific invitation for only the President and first lady, a White House official told CNN.",
          "url": "https://www.cnn.com/2022/09/11/politics/joe-biden-queen-elizabeth-funeral/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220911182403-joe-biden-queen-elizabeth-funeral-super-tease.jpg",
          "publishedAt": "2022-09-11T23:52:00Z",
          "content": "(CNN)Buckingham Palace did not invite President Joe Biden to assemble a delegation to attend the funeral of Queen Elizabeth II next week, and instead extended a specific invitation for only the Presi… [+899 chars]"
        },
        {
          "source": { "id": "associated-press", "name": "Associated Press" },
          "author": "Vanessa Gera",
          "title": "Swedish conservatives close to election win amid crime fears - The Associated Press",
          "description": "STOCKHOLM (AP) — Near final results in Sweden's election Sunday show that a bloc of right-wing parties was expected to defeat a left-wing bloc headed by Prime Minister Magdalena Andersson. The conservative group includes a populist anti-immigration party that…",
          "url": "https://apnews.com/article/nato-elections-immigration-migration-f89a25900940a31fd6dda25802e980b9",
          "urlToImage": "https://storage.googleapis.com/afs-prod/media/54846ba3d91749aa9d2fcaea824df886/2560.jpeg",
          "publishedAt": "2022-09-11T23:22:04Z",
          "content": "STOCKHOLM (AP) Near final results in Swedens election Sunday show that a bloc of right-wing parties was expected to defeat a left-wing bloc headed by Prime Minister Magdalena Andersson. The conservat… [+2783 chars]"
        },
        {
          "source": { "id": null, "name": "HuffPost" },
          "author": "AP",
          "title": "Weather Helping, But Threat From Western Fires Persists - HuffPost",
          "description": "Firefighters made progress against a huge Northern California wildfire that was still growing and threatening thousands of mountain homes.",
          "url": "https://www.huffpost.com/entry/western-wildfires-northern-california_n_631e6562e4b046aa02362f83",
          "urlToImage": "https://img.huffingtonpost.com/asset/631e6566220000380075c9c9.jpeg?ops=1200_630",
          "publishedAt": "2022-09-11T22:52:32Z",
          "content": "FORESTHILL, CA - SEPTEMBER 10: A general view of flames from the wildfire in Foresthill of California, United States on September 10, 2022. Thousands of homes are threatened by the multi-county wildf… [+5015 chars]"
        },
        {
          "source": { "id": null, "name": "Macworld" },
          "author": "Jason Cross",
          "title": "iOS 16 launches Monday but these promised features won't be in it - Macworld",
          "description": "Some of iOS 16's best features are coming in software updates later this year.",
          "url": "https://www.macworld.com/article/1063790/ios-16-features-not-in-launch-icloud-photo-library-live-activities.html",
          "urlToImage": "https://www.macworld.com/wp-content/uploads/2022/09/ios-16-hero2-2.jpg?quality=50&strip=all&w=1024",
          "publishedAt": "2022-09-11T22:48:26Z",
          "content": "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nWhile iOS 16 is full… [+4868 chars]"
        }
      ]
      constructor(){
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>      
        <div className='row'>
        {this.state.articles.map((element)=>{
             return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title} description={element.description} imageUrl= {element.urlToImage} newsUrl={element.url}/>
                    </div>
        })}

            
        </div>      
      </div>
    )
  }
}

export default News