/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import image5 from "../images/image5.jpg";

// Sample tours data
const toursList = [
  {
    name: "Balkan Tour",
    location: "Albania, Kosova and North Macedonia in 11 days",
    rating: 5,
    imageUrl: image5,
    description:
      "Explore Albania, Kosova and North Macedonia stunning landscapes and historic landmarks with our guided tours.",
    details: [
      {
        day: 1,
        title:
          "Airport transfer. Durres city tour & Roman Amphitheatre. Overnight in Durres.",
        description: [
          "Welcome to Albania. Meet and greet @ Tirana airport and transfer to Durres",
          " (40 minutes). The absolute best place to start off your walk-through ancient history is the ",
          <strong key="2">Amphitheater of Durrës</strong>,
          ", as one of the largest Roman constructions in the region and one of the most famous architectural wonders of Emperor Trajan’s time. ",
          "Durres is home to the biggest seaport city in the country and to many ancient archaeological sites and finds.",
          " Enjoy some free time in the pedestrian street Vollga in front of the sea. ",
          <strong key="3">Overnight in Durres</strong>,
          ".",
        ],
        imageUrl: "/images/tours/",
      },
      {
        day: 2,
        title:
          "Prizren city tour- Prishtina city tour. Overnight in Prishtina. Full day.",
        description: [
          "After breakfast, drive to Prizren (2.30 hrs) in Kosova, one of the most charming cities. With the river flowing through the heart of it and under many bridges connecting the old town with the new part, it is considered the cultural capital of Kosova, with unique architecture, a mixing history, incredible nature, religious tolerance, and gastronomic delights. Not to miss the center of the old town across the bridges and the famous Shatervan \u201cFountain\u201d area & Sinan Pasha Mosque.",
          "Drive 1 hr to the capital city of Prishtina and visit ",
          <strong key="4">The Imperial Mosque of Pristina</strong>,
          ", otherwise known as Xhamia e Madhe, an impressive Ottoman-era mosque located in the heart of the city. The mosque was built in 1561 by the Ottoman Empire and is one of the oldest and most iconic buildings in Pristina. Pristina\u2019s most recognizable monument is its ",
          <strong key="5">National Library of Kosovo</strong>,
          ". Whether you love or hate its appearance, this amazing socialist-era brutalist expression with its 99 domes of different sizes and completely covered in a lattice of fence-like metal will surely leave no one indifferent. ",
          <strong key="6">Overnight in Prishtina</strong>,
          ".",
        ],
      },
      {
        day: 3,
        title: "Skopje city tour. Overnight in Ohrid. Full day. ",
        description: [
          "After breakfast, drive 1.45 hrs to Skopje, capital of North Macedonia. Visit at the ",
          <strong key="7">Memorial Birthplace of Mother Theresa</strong>,
          ". The memorial house consists of an amphitheater in the basement, a museum on the first floor, and a chapel on the top floor. Among other articles, the museum on the first-floor displays handwritten and printed documents signed by Mother Teresa, a number of objects that pinpoint different times of her eventful life, photographs of Mother Teresa with prominent figures, and life-size statues of her likeness. Continuing with ",
          <strong key="8">Old Bazaar</strong>,
          ". One of the most recognizable places in Skopje is the Old Bazaar. It was so in the past, and so it is now. An interesting place for both hosts and tourists. This is a part of the city with various and rich history, tradition, culture and architecture, nowadays there has been made a connection between the old and new, economy and trade, culture and tradition. ",
          <strong key="9">Overnight in Ohrid</strong>,
          ".",
        ],
      },
      {
        day: 4,
        title:
          "Ohrid city tour – Struga city tour. Overnight in Tirana. Full day.",
        description: [
          "After breakfast, we start the day with the ",
          <strong key="10">Ohrid</strong>,
          " city tour. Immerse yourself in the allure of Ohrid, a town that harmoniously weaves together a tapestry of rich history, breathtaking landscapes, and architectural marvels. Begin at the ",
          <strong key="12">central square “St. Clement of Ohrid”</strong>,
          ". Strolling through the narrow streets of the old town, the first stop we make is in front of the ",
          <strong key="13">Cathedral Church of St. Sophia</strong>,
          ". Then we walk to the next stop – the ",
          <strong key="14">Ancient Theatre</strong>,
          ", dating back to the 1st century BC. Exploring other local sites on the way, we will visit the church ",
          <strong key="15">St. Holy Mother of God, Peribleptos</strong>,
          ", with unique frescoes from the 13th century as well as the ",
          <strong key="16">Samoil Fortress</strong>,
          ". Drive to ",
          <strong key="17">Struga</strong>,
          " (20 mins) and visit: the picturesque town of Struga with its serene riverside promenade. Explore the origin of the ",
          <strong key="19">Drin River</strong>,
          ", a popular tourist destination known for its stunning natural scenery and rich cultural heritage. Visit the charming ",
          <strong key="20">Old Bazaar</strong>,
          " in Struga, where you can find local crafts, souvenirs, and delicious street food at affordable prices. Enjoy the majestic views of ",
          <strong key="22">Ohrid Lake</strong>,
          ". Drive to Albania (2.30 hrs). ",
          <strong key="23">Overnight in Tirana</strong>,
        ],
      },
      {
        day: 5,
        title:
          "Apollonia Archaeological Park. Vlora & Zvernec island & Flag Square. Overnight in Vlore (130 km – 2hrs) Full day",
        description: [
          "After breakfast, 2 hrs drive to ",
          <strong key="10">Apollonia Archaeological site</strong>,
          ". Experience the Greatness of Antiquity. If we could choose the one place where you will have your most memorable encounter with history in Albania, it would have to be the ancient city of, founded in the sixth century B.C. is a gorgeous archaeological site. In ancient times, it was one of the most important economic and trade centers of Albania. The future Roman emperor Octavian Augustus also studied in this city. The site also hosts an Orthodox monastery. A 30 min drive to reach ",
          <strong key="13">Vlora</strong>,
          " & visit the monastery of ",
          <strong key="14">Zvernec</strong>,
          " located on the island. Covered in pines, the small gorgeous island of Zvernec off the coast of Vlora can be reached by walking along a 270-meter-long wooden bridge, offering the visitor a one-of-a-kind experience with nature. Drive to city center (20 mins), a seaside city not important only because of the port but also because of its huge importance in the history of Albania. In this city, Ismail Qemali, the founder of modern Albania, proclaimed the independence of Albania in 1912. ",
          <strong key="16">Overnight in Vlora</strong>,
          ".",
        ],
        imageUrl: "/images/tours/apolonia1.jpg",
      },
      {
        day: 6,
        title:
          "Via Llogara National Park, Albanian Riviera, Porto Palermo Castle. Overnight in Sarande (146km). Full day.",
        description: [
          "After breakfast, first stop (50 mins drive) is ",
          <strong key="10">Llogara National Park</strong>,
          " : The Best of All Worlds, Where the Adriatic and the Ionian Seas meet, begins the journey towards the Llogara National Park. The lush forests of pines and oaks are only the beginning of this “mountain of panoramas,” which is beautifully surrounded by numerous mountain ranges and the majestic Ionian Sea. Drive on the Albanian Riviera looking at the Ionian Sea. Stunning sceneries await us at the Llogara pass, about 1096 meters above sea level. Continuing for about 1 hour drive to reach & visit the Most Picturesque Albanian Castles of the Riviera, ",
          <strong key="11">Porto Palermo</strong>,
          ". Built on the hill of an island, connected to the shore via a narrow man-made strip of land, this Castle attracts everyone’s immediate attention. The castle was built in the 19th century at the request of Ali Pashë Tepelena (an Albanian ruler who served as Pasha of the Pashalik of Ioannina) after the destruction of Justinian’s castle. Drive 1 hr. ",
          <strong key="12">Overnight in Saranda</strong>,
          ".",
        ],
      },
      {
        day: 7,
        title:
          "Sarande – Butrint – free time Ksamil Beach. Overnight in Sarande (42 km). Full day",
        description: [
          "After breakfast, (30 min) to the ancient city of ",
          <strong key="10">Butrint, a UNESCO World Heritage Site</strong>,
          ". Witness the Stages of Mediterranean Civilization: Butrint National Park: Built in the 8th century BC, and was used as a transit station between Epirus (which were within the borders of today's Albania) and the Italian territories to the south. Butrint was colonized by many, even by the Romans under Julius Caesar in 44 BC, and later occupied by the Byzantine, Venetian, and Ottoman empires. Free time in ",
          <strong key="11">Ksamil Beach</strong>,
          " considered as the “Maldives of Europe” and the crystal waters of the Ionian Sea. ",
          <strong key="12">Overnight in Saranda</strong>,
          ".",
        ],
      },
      {
        day: 8,
        title:
          "Sarande - Blue Eye – Gjirokaster city tour & Castle. Overnight in Gjirokastra. (57km - 1h 30min). Full day.",
        description: [
          "After breakfast, 30 min drive to ",
          <strong key="10">The Blue Eye</strong>,
          ", Europe’s Tropical Oasis. As unexpectedly spectacular as the coast of Southern Albania is. A water spring with extremely light blue water bubbles in a more than 50-metre-deep pool. You’ll be mesmerized by how clear the water is, to the point that you’ll be able to see straight to the bottom. ",
          <strong key="11">Gjirokastra City of Stone</strong>,
          ". Last stop for the day (1 hr drive) will be Gjirokaster, a ",
          <strong key="12">UNESCO</strong>,
          " site and museum town with very distinct architecture. One of UNESCO’s World Heritage Sites, this gorgeous, carefully preserved, peculiar-looking city is built on steep slopes where stone-roofed houses seem to be built on top of one another. ",
          <strong key="13">THE CASTLE OF GJIROKASTRA</strong>,
          ": WARS, LEGENDS, AND FEASTS. The Castle of Gjirokastra resides in a dramatic location, on the hilltop overlooking the city. It gave a nifty vantage point to witness the changing tides of Albanian history across the centuries. Free time. ",
          <strong key="14">Overnight in Gjirokastra</strong>,
          ".",
        ],
      },
      {
        day: 9,
        title:
          "Gjirokaster – Berat city tour, Castle & Onufri Ichnographic Museum. Overnight in Tirane (260 km - 5h). Full day.",
        description: [
          "After breakfast drive to ",
          <strong key="10">Berat</strong>,
          " (2.30 hrs) known as the city of “One above the other Windows” Bridges and Rugged Outdoors, that has placed Berat in UNESCO’s list of world Heritage Sites. ",
          <strong key="11">Berat Castle</strong>,
          " has particular interest as people still live within its walls in their traditional houses, as have their ancestors for centuries. The castle used to have over many churches of which 7 still remain, including one turned into ",
          <strong key="12">Onufri Ichnographic Museum</strong>,
          ". Onufri was an Albanian Icon master painter of the 16th century who painted many orthodox churches in Albania and he used a unique red color for his icons which still today no one else can copy it. Heading to Tirana 2 hrs drive. ",
          <strong key="13">Overnight in Tirana</strong>,
          ".",
        ],
      },
      {
        day: 10,
        title:
          "Tirane Skenderbej Square - Kruje Old Medieval Bazaar & Skenderbej Museum. Overnight in Tirana (65km). Full day.",
        description: [
          "After the breakfast start the tour of ",
          <strong key="10">Tirana</strong>,
          ": Tirana Europe's Last Exotic Capital. This metropolitan capital has undergone modernization at lightning speed while much of its Ottoman, Italian, and communist architecture recall its history and old-world spirit Visit Tirana - the heart and capital of Albania. Have a walk from the main square through the boulevard. Your own journey begins by visiting the key spots such as Skënderbej Square, where you will be able to see the 35m high Kulla e Sahatit (the Clock Tower), Skenderbej monument, the National Opera, National Bank, Et’hem Bej Mosque, Bunk Art 2. Drive to Kruje 1-hour. ",
          <strong key="11">Kruja Home of Tradition and Skanderbeg</strong>,
          ". Rich in history and tradition, Kruja is home of the patriots and the epicenter of Albania’s independence from the Ottoman Empire. It was here that Gjergj Kastriot Skanderbeg, Albania’s greatest national hero, defended the country from the invasion of the Ottomans. ",
          <strong key="12">Gjergj Kastrioti Skanderbeg Museum</strong>,
          " is situated inside the castle walls, which dates back to the fifth and sixth centuries A.D. Near the castle’s entrance is a traditional market, ",
          <strong key="13">The Unique Old Medieval Bazaar</strong>,
          ", which dates back to the period of Skanderbeg. Here, you can find Albanian craft products such as embroidered items, carpeting, silver objects, copper, alabaster, filigree, traditional clothing, antiques at the traditional Old Bazaar of Kruja. Drive back (1 hrs). ",
          <strong key="14">Overnight in Tirana</strong>,
          ".",
        ],
      },
      {
        day: 11,
        title: "Airport transfer",
        description: (
          <>
            Transfer to the airport.{" "}
            <span className="text-red-500 font-bold">End of services.</span>
          </>
        ),
      },
    ],
  },
  {
    name: "Best of Albania in four days",
    location: "Tirana, Kruja, Belsh, Berat, Zvernec, Vlora",
    rating: 5,
    imageUrl: "src/images/image5.jpg",
    details: [
      {
        day: 1,
        title: "Tirana walking tour - Bunk Art 2 - the House of Leaves.",
        description: `After breakfast, Tirana Walking Tour is for people who like to see the highlights of Tirana and get a better understanding of the history of one of the most interesting capitals of Europe. The tour will lead you to Skanderbeg square. Skanderbeg Square, Ethem Bey Mosque, National Bank, Skanderbeg Monument, Pedestrian area, Castle of Tirana, The BLLOKU area. 
Our next destination will be Bunk Art, one of Tirana's most intriguing museums. Step inside this immersive video exhibition, dedicated to unraveling the history of the Albanian communist army and offering poignant glimpses into the daily lives of citizens during that era.
House of Leaves, In January 2015, the idea to transform the house into a museum was introduced to the public. It is situated right in the heart of the city.
It is one of the most unusual museums in Albania. It is considered to be the equivalent of the Stasi headquarters of the former East Germany. 
The leaves have a double meaning: things hidden in woods, but also the leave of books and files, on people. Overnight in Tirana.`,
      },
      {
        day: 2,
        title:
          "Tirana Bunk Art 1 - Cable Car - Kruja Old Medieval Bazzar - Skenderbej & Ethnographic Museum. Overnight in Tirana. Full Day",
        description: `After breakfast, drive to Kruja 1 hour. Kruja, hometown of National Hero Gjerjg Kastrioti Skanderbeg the Symbol of Ottoman Resistance also known as Protector of Civilization. 
        Stroll down -The Unique Old Medieval Bazaar as one of the oldest in Albania. National Hero Skanderbeg Museum & the Ethnographic Museum (both located inside the walls of the fortress). Drive back to capital Tirana and reach the cable car of Tirana. Exploring Mount Dajti National Park after the adrenaline of the Cable Car the longest cableway in Balkan and enjoy the breathtaking views of the capital city and not only. Several activities on top available: Adventure Park, Hiking, Paragliding, Minigolf, Roller Blading available. Heading to Bunk Art 1, a huge nuclear bunker on the outskirts of Albania's capital Tirana that was intended as a shelter for dictator Enver Hoxha and the innermost circle of his government. In 2014-2016 the once secret facility was refurbished and opened as a museum and art centre. A 5-floor palace underground, with 106 rooms and an assembly hall, now turned into an historical and art center called "BUNK'ART". Overnight Tirana.`,
      },
      {
        day: 3,
        title:
          "Belshi Lakes - Berat UNESCO & Castle - Zvernec Island - Vlora city tour. Full Day",
        description: `After breakfast, drive via Belshi Lakes offering an impressive panorama, creating an awe-inspiring vista. Stop and visit: Berat UNESCO known as “The city of One above the other Widows that continues to be a significant city even today, boasting a remarkable history of over two millennia. Despite the passage of time, life has remained persistent here, and the Castle or “Kalaja” is the oldest district of the city. As a must following with Onufri Ichnographic Museum inside the walls of the castle. The Museum holds 200 artwork objects, icons and liturgical items dated from the 14th century to the 20th, brought together from several churches and monasteries of the region. Next stop is Zvërnec Island & Monastery. Visit Zvërnec Island, located within the Narta Lagoon and home to an ancient Byzantine Monastery, situated on an island, the monastery is a stunning example of Byzantine architecture and a peaceful place to escape from the crowded beaches of the town.
        Independence Monument as the centerpiece of Vlore’s Square of the Flag, the Independence Monument marks Albania’s declaration of independence from the Ottoman Empire in 1912 and exemplifies the socialist-realist style. Overnight in Vlora.`,
      },
      {
        day: 4,
        title: "Airport transfer.",
      },
    ],
  },
  {
    name: "Classical Highlights of Albania in seven days",
    location:
      "Bunk Art 1, Kruja, Shkodra, Durres, Berat, Apollonia, Zvernec, Vlora, Gjirokastra, Bunk Art 2 ",
    rating: 5,
    imageUrl: "src/images/image4.jpg",
    details: [
      {
        day: 1,
        title: "Tirana city tour. Overnight in Tirana. Half Day.",
        description: ` Meet and greet. Airport transfer. Tirana Walking Tour is for people who like to see the highlights of Tirana and get a better understanding of the history of one of the most interesting capitals of Europe. The tour will lead you to Skanderbeg square. Skanderbeg Square, Ethem Bey Mosque, National Bank, Skanderbeg Monument, Pedestrian area, Castle of Tirana, The “BLLOKU” area. Overnight in Tirana. `,
      },
      {
        day: 2,
        title:
          "Kruja - Museums & Castle - Old Medieval Bazaar. Shkodra & Castle – City tour & Venetian Mask Factory. Overnight Shkodra. Full Day.",
        description: `After breakfast drive to Kruja 1 hour.  Kruja, hometown of National Hero Gjergj Kastrioti Skanderbeg the Symbol of Ottoman Resistance also known as Protector of Civilization. 
Visit: Fortress, National Hero Skanderbeg Museum & the Ethnographic Museum (both located inside the walls of the fortress). Stroll down the Unique Old Medieval Bazaar as one of the oldest in Albania, offering a vibrant atmosphere with traditional Albanian crafts, souvenirs, and local cuisine. Having such a unique blend of historical charm and natural beauty, Krujë is simply a must-visit place. A 1.30 hrs drive to Shkodra, northwest of Albania. Go on an in-depth exploration of Shkoder on this full-day tour starting with its prehistoric Rozafa Castle as one of the oldest castles in Albania, built by the Illyrian civilization in the 4th century B. C. Continue downhill to Shkoder, to visit: The Catholic cathedral, the main Mosque, a major pedestrian boulevard, and more…. Continuing with the Venetian Mask Factory that contains the most diverse and exquisite collection of Venetian masks. The display of styles and colors is enough to immediately transport you to the atmosphere of the Venice Carnevale. The sheer originality and quality of these works, in addition to the fact that each mask is treated as a unique work of art, has contributed to this factory’s increase in worldwide popularity. Overnight in Shkodra.
  `,
      },
      {
        day: 3,
        title:
          "Durres – Roman Amphitheatre & Venetian Tower. Berat UNESCO & Castle – Onufri Museum. Overnight in Berat. Full day",
        description: `After breakfast, drive to Durres 2 hrs as one of the one of the biggest city ports in Albania visiting: Venetian Tower, The Regional largest Roman Amphitheater, The Promenade by the Adriatic Sea. Drive to Berat 1.15 hrs and visit: Berat UNESCO known as “The city of One above the other Widows” that continues to be a significant city even today, boasting a remarkable history of over two millennia. Despite the passage of time, life has remained persistent here, and the Castle or “Kalaja” is the oldest district of the city. As a must following with Onufri Iconographic Museum inside the walls of the castle. The Museum holds 200 artwork objects, icons and liturgical items dated from the 14th century to the 20th, brought together from several churches and monasteries of the region. Overnight in Berat.`,
      },
      {
        day: 4,
        title:
          "Apollonia Archaeological Park - Zvernec Island & Monastery – Vlora City tour. Overnight in Vlora. Full Day.",
        description: `After breakfast, 1 hrs drive to Apollonia, once a resort town where wealthy Romans vacationed, is now a symbol of Albania’s rich cultural heritage. The ancient ruins of Apollonia in southwest Albania provide a fascinating window into the past. This once-prominent ancient city-state allows you to discover Albania’s role in the classical world and immerse yourself in rich history. The fascinating landscape of the archeological park, which has been preserved in an exceptionally intact condition, comprises a successful combination between the beauty of monuments and nature, attractive through its long history, in an atmosphere of relaxation and meditation. Drive to Zvernec Island 30 mins, located within the Narta Lagoon and home to an ancient Byzantine Monastery, situated on an island, the monastery is a stunning example of Byzantine architecture and a peaceful place to escape from the crowded beaches of the town. Continuing with Vlora city tour with: Independence Monument as the centerpiece of Vlore’s Square of the Flag, the Independence Monument marks Albania’s declaration of independence from the Ottoman Empire in 1912 and exemplifies the socialist-realist style. Overnight in Vlora. `,
      },
      {
        day: 5,
        title: "Gjirokastra Old Bazaar – Castle. Overnight in Gjirokastra",
        description: ` Drive to Gjirokastra (UNESCO) called City of STONE, hometown of ex-dictator and the famous Internationally known writer Ismail KADARE. Visit: Castle of Gjirokastra as the Largest in ALBANIA one of the oldest in the Balkans! Bazaar Pass, filled with crafty artisans. In the city, you will also find the imposing Gjirokasër Castle, a construction of the first half of the 14th century. Indeed, due to the stone roofs on the hundreds of houses built on the slopes of multiple hills, the town magically retains the appearance of being coated in silver. Other must-see sites of the town include the old ottoman Bazaar, several beautiful Byzantine churches as well as Ottoman mosques. Overnight in Gjirokastra.  `,
      },
      {
        day: 6,
        title:
          "Tirana city tour & Bunk Art 2 – House of Leaves. Overnight in Tirana. Full Day.",
        description: `After breakfast, drive to capital city Tirana approx. 3.15 hrs. Tirana city Tour is for people who like to see the highlights of Tirana and get a better understanding of the history of one of the most interesting capitals of Europe. The tour will lead you to Skanderbeg square. Skanderbeg Square, Ethem Bey Mosque, National Bank, Skanderbeg Monument, Pedestrian area, Castle of Tirana, The “BLLOKU” area 
Our next destination will be Bunk Art, one of Tirana's most intriguing museums. Step inside this immersive video exhibition, dedicated to unraveling the history of the Albanian communist army and offering poignant glimpses into the daily lives of citizens during that era. House of Leaves, In January 2015, the idea to transform the house into a museum was introduced to the public. It is situated right in the heart of the city. Is one of the most unusual museums in Albania. It is considered to be the equivalent of the Stasi headquarters of the former East Germany. 
The leaves have a double meaning: things hidden in woods, but also the leave of books and files, on people. Overnight in Tirana.
`,
      },
      {
        day: 7,
        title: "Airport transfer. ",
      },
    ],
  },
];

const TourDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const disableRightClick = (event) => event.preventDefault();
    const disableCopy = (event) => event.preventDefault();

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("copy", disableCopy);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("copy", disableCopy);
    };
  }, []);

  // Debugging: Check if toursList is available
  console.log(toursList);

  const tour = toursList.find((tour) => tour.name === decodeURIComponent(name));

  if (!tour) {
    return <p>Tour not found!</p>;
  }

  console.log(tour); // Check the tour object

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">{tour.name}</h1>
      <p className="text-lg text-center text-gray-600 mb-6">
        {tour.description}
      </p>

      <div className="space-y-12">
        {tour.days.map((day, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Text Section */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                Day {index + 1}: {day.title}
              </h2>
              <p className="text-gray-700">{day.description}</p>
            </div>

            {/* Photo Section */}
            <div className="flex justify-center">
              <img
                src={day.imageUrl}
                alt={`Day ${index + 1} - ${day.title}`}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Back and Action Buttons */}
      <div className="mt-12 flex justify-center gap-6">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-500 hover:text-blue-600 flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Back to Tours</span>
        </button>
        <a
          href={`mailto:example@example.com?subject=Inquiry about ${tour.name}`}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Email
        </a>
        <a
          href={`https://wa.me/1234567890?text=I'm%20interested%20in%20${encodeURIComponent(
            tour.name
          )}`}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default TourDetails;
