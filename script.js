
"use strict";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const photo = {
  switzerland: "photo-1531366936337-7c912a4589a7",
  pakistan: "photo-1569025690938-a00729c9e1f9",
  turkey: "photo-1524231757912-21f4fe3a7200",
  usa: "photo-1501594907352-04cda38ebc29",
  france: "photo-1499856871958-5b9627545d1a",
  japan: "photo-1493976040374-85c8e12f0c0e",
  italy: "photo-1516483638261-f4dbaf036963",
  uae: "photo-1512453979798-5ea266f8880c",
  uk: "photo-1513635269975-59663e0ac1ad",
  maldives: "photo-1514282401047-d79a71a590e8",
  singapore: "photo-1525625293386-3f8f99389edd",
  greece: "photo-1533105079780-92b9be482077",
  canada: "photo-1503614472-8c93d56cd7b0",
  egypt: "photo-1539650116574-75c0c6d73f6e",
  thailand: "photo-1528181304800-259b08848526",
  australia: "photo-1506973035872-a4ec16b8e8d9",
  china: "photo-1508804185872-d7badad00f7d",
  norway: "photo-1464822759023-fed622ff2c3b",
  morocco: "photo-1489749798305-4fea3ae63d43",
  indonesia: "photo-1537996194471-e657df975ab4",
  korea: "photo-1538485399081-7191377e8241",
  austria: "photo-1516550893923-42d28e5677af",
  portugal: "photo-1555881400-74d7acaacd8b",
  brazil: "photo-1483729558449-99ef09a8c325",
  default: "photo-1469474968028-56623f02e42e"
};

const imageURL = (id, width = 700) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const destinationData = [
["Afghanistan","Asia","Kabul","Historic heritage and mountain landscapes.","photo-1464822759023-fed622ff2c3b"],
["Albania","Europe","Tirana","Adriatic beaches and Balkan culture.","photo-1516483638261-f4dbaf036963"],
["Algeria","Africa","Algiers","Mediterranean coast and Saharan scenery.","photo-1539650116574-75c0c6d73f6e"],
["Andorra","Europe","Andorra la Vella","Pyrenean mountain escapes and ski resorts.","photo-1464822759023-fed622ff2c3b"],
["Angola","Africa","Luanda","Atlantic coastline and natural wonders.","photo-1500530855697-b586d89ba3ee"],
["Antigua and Barbuda","North America","St. John's","Caribbean beaches and turquoise waters.","photo-1514282401047-d79a71a590e8"],
["Argentina","South America","Buenos Aires","Patagonia, glaciers and vibrant city life.","photo-1483729558449-99ef09a8c325"],
["Armenia","Asia","Yerevan","Ancient monasteries and dramatic highlands.","photo-1464822759023-fed622ff2c3b"],
["Australia","Oceania","Canberra","Coastal cities, wildlife and vast landscapes.","photo-1506973035872-a4ec16b8e8d9"],
["Austria","Europe","Vienna","Imperial architecture and Alpine scenery.","photo-1516550893923-42d28e5677af"],
["Azerbaijan","Asia","Baku","Caspian Sea views and modern architecture.","photo-1512453979798-5ea266f8880c"],
["Bahamas","North America","Nassau","Island retreats and clear blue lagoons.","photo-1514282401047-d79a71a590e8"],
["Bahrain","Middle East","Manama","Arabian Gulf hospitality and contemporary culture.","photo-1512453979798-5ea266f8880c"],
["Bangladesh","Asia","Dhaka","River landscapes and rich cultural traditions.","photo-1500530855697-b586d89ba3ee"],
["Barbados","North America","Bridgetown","Caribbean beaches and lively local culture.","photo-1514282401047-d79a71a590e8"],
["Belarus","Europe","Minsk","Historic towns and expansive green spaces.","photo-1513635269975-59663e0ac1ad"],
["Belgium","Europe","Brussels","Historic squares, art and renowned cuisine.","photo-1499856871958-5b9627545d1a"],
["Belize","North America","Belmopan","Reefs, rainforests and Mayan heritage.","photo-1514282401047-d79a71a590e8"],
["Benin","Africa","Porto-Novo","Coastal traditions and remarkable heritage.","photo-1539650116574-75c0c6d73f6e"],
["Bhutan","Asia","Thimphu","Himalayan monasteries and peaceful valleys.","photo-1464822759023-fed622ff2c3b"],
["Bolivia","South America","Sucre","High-altitude adventures and salt flats.","photo-1483729558449-99ef09a8c325"],
["Bosnia and Herzegovina","Europe","Sarajevo","Ottoman heritage and mountain scenery.","photo-1516483638261-f4dbaf036963"],
["Botswana","Africa","Gaborone","Wildlife safaris and the Okavango Delta.","photo-1539650116574-75c0c6d73f6e"],
["Brazil","South America","Brasilia","Tropical rainforests and iconic coastlines.","photo-1483729558449-99ef09a8c325"],
["Brunei","Asia","Bandar Seri Begawan","Rainforest experiences and waterfront heritage.","photo-1528181304800-259b08848526"],
["Bulgaria","Europe","Sofia","Mountain villages and Black Sea resorts.","photo-1516483638261-f4dbaf036963"],
["Burkina Faso","Africa","Ouagadougou","Local arts and distinctive cultural traditions.","photo-1539650116574-75c0c6d73f6e"],
["Burundi","Africa","Gitega","Lake landscapes and East African culture.","photo-1500530855697-b586d89ba3ee"],
["Cabo Verde","Africa","Praia","Volcanic islands and Atlantic beaches.","photo-1514282401047-d79a71a590e8"],
["Cambodia","Asia","Phnom Penh","Ancient temples and Mekong river life.","photo-1528181304800-259b08848526"],
["Cameroon","Africa","Yaounde","Diverse landscapes and wildlife reserves.","photo-1539650116574-75c0c6d73f6e"],
["Canada","North America","Ottawa","Mountain lakes, forests and vibrant cities.","photo-1503614472-8c93d56cd7b0"],
["Central African Republic","Africa","Bangui","Natural landscapes and river scenery.","photo-1539650116574-75c0c6d73f6e"],
["Chad","Africa","N'Djamena","Saharan scenery and remarkable geology.","photo-1464822759023-fed622ff2c3b"],
["Chile","South America","Santiago","Atacama Desert, Patagonia and Pacific views.","photo-1483729558449-99ef09a8c325"],
["China","Asia","Beijing","Historic landmarks and extraordinary regional diversity.","photo-1508804185872-d7badad00f7d"],
["Colombia","South America","Bogota","Coffee landscapes and Caribbean coastlines.","photo-1483729558449-99ef09a8c325"],
["Comoros","Africa","Moroni","Indian Ocean islands and volcanic scenery.","photo-1514282401047-d79a71a590e8"],
["Republic of the Congo","Africa","Brazzaville","Rainforest journeys and river landscapes.","photo-1539650116574-75c0c6d73f6e"],
["Costa Rica","North America","San Jose","Rainforests, volcanoes and eco-adventures.","photo-1500530855697-b586d89ba3ee"],
["Côte d'Ivoire","Africa","Yamoussoukro","Atlantic beaches and cultural experiences.","photo-1539650116574-75c0c6d73f6e"],
["Croatia","Europe","Zagreb","Adriatic islands and medieval coastal towns.","photo-1516483638261-f4dbaf036963"],
["Cuba","North America","Havana","Colourful streets, music and Caribbean culture.","photo-1500530855697-b586d89ba3ee"],
["Cyprus","Europe","Nicosia","Mediterranean beaches and ancient history.","photo-1533105079780-92b9be482077"],
["Czechia","Europe","Prague","Gothic architecture and historic city squares.","photo-1513635269975-59663e0ac1ad"],
["Democratic Republic of the Congo","Africa","Kinshasa","Rainforest biodiversity and river landscapes.","photo-1539650116574-75c0c6d73f6e"],
["Denmark","Europe","Copenhagen","Design, waterfronts and Nordic culture.","photo-1513635269975-59663e0ac1ad"],
["Djibouti","Africa","Djibouti City","Volcanic terrain and the Red Sea.","photo-1464822759023-fed622ff2c3b"],
["Dominica","North America","Roseau","Rainforests, waterfalls and volcanic trails.","photo-1500530855697-b586d89ba3ee"],
["Dominican Republic","North America","Santo Domingo","Caribbean beaches and historic colonial streets.","photo-1514282401047-d79a71a590e8"],
["Ecuador","South America","Quito","Andean scenery and the Galapagos Islands.","photo-1483729558449-99ef09a8c325"],
["Egypt","Africa","Cairo","Ancient monuments and Red Sea escapes.","photo-1539650116574-75c0c6d73f6e"],
["El Salvador","North America","San Salvador","Surf beaches and volcanic landscapes.","photo-1500530855697-b586d89ba3ee"],
["Equatorial Guinea","Africa","Malabo","Island scenery and tropical forests.","photo-1539650116574-75c0c6d73f6e"],
["Eritrea","Africa","Asmara","Highland architecture and Red Sea coastlines.","photo-1500530855697-b586d89ba3ee"],
["Estonia","Europe","Tallinn","Medieval old towns and Baltic coastlines.","photo-1513635269975-59663e0ac1ad"],
["Eswatini","Africa","Mbabane","Mountain trails and wildlife reserves.","photo-1539650116574-75c0c6d73f6e"],
["Ethiopia","Africa","Addis Ababa","Highland landscapes and ancient heritage.","photo-1464822759023-fed622ff2c3b"],
["Fiji","Oceania","Suva","Coral reefs and Pacific island hospitality.","photo-1514282401047-d79a71a590e8"],
["Finland","Europe","Helsinki","Lakes, forests and northern lights experiences.","photo-1464822759023-fed622ff2c3b"],
["France","Europe","Paris","Art, gastronomy and world-famous landmarks.","photo-1499856871958-5b9627545d1a"],
["Gabon","Africa","Libreville","Rainforest reserves and Atlantic beaches.","photo-1539650116574-75c0c6d73f6e"],
["Gambia","Africa","Banjul","River journeys and Atlantic coast escapes.","photo-1500530855697-b586d89ba3ee"],
["Georgia","Asia","Tbilisi","Mountain villages and distinctive food culture.","photo-1464822759023-fed622ff2c3b"],
["Germany","Europe","Berlin","Cultural capitals, castles and scenic countryside.","photo-1513635269975-59663e0ac1ad"],
["Ghana","Africa","Accra","Coastal heritage and vibrant cultural traditions.","photo-1539650116574-75c0c6d73f6e"],
["Greece","Europe","Athens","Island villages and Mediterranean history.","photo-1533105079780-92b9be482077"],
["Grenada","North America","St. George's","Spice islands and secluded beaches.","photo-1514282401047-d79a71a590e8"],
["Guatemala","North America","Guatemala City","Mayan heritage and volcanic highlands.","photo-1500530855697-b586d89ba3ee"],
["Guinea","Africa","Conakry","Highlands, waterfalls and Atlantic scenery.","photo-1539650116574-75c0c6d73f6e"],
["Guinea-Bissau","Africa","Bissau","Island archipelagos and coastal culture.","photo-1514282401047-d79a71a590e8"],
["Guyana","South America","Georgetown","Rainforests and spectacular waterfalls.","photo-1483729558449-99ef09a8c325"],
["Haiti","North America","Port-au-Prince","Caribbean heritage and mountain landscapes.","photo-1500530855697-b586d89ba3ee"],
["Honduras","North America","Tegucigalpa","Coral reefs and archaeological heritage.","photo-1514282401047-d79a71a590e8"],
["Hungary","Europe","Budapest","Thermal baths and elegant Danube views.","photo-1513635269975-59663e0ac1ad"],
["Iceland","Europe","Reykjavik","Glaciers, waterfalls and volcanic landscapes.","photo-1464822759023-fed622ff2c3b"],
["India","Asia","New Delhi","Historic monuments, regional cuisine and diverse landscapes.","photo-1500530855697-b586d89ba3ee"],
["Indonesia","Asia","Jakarta","Tropical islands and remarkable cultural heritage.","photo-1537996194471-e657df975ab4"],
["Iran","Asia","Tehran","Historic architecture and dramatic landscapes.","photo-1464822759023-fed622ff2c3b"],
["Iraq","Asia","Baghdad","Ancient Mesopotamian heritage.","photo-1464822759023-fed622ff2c3b"],
["Ireland","Europe","Dublin","Green countryside and coastal villages.","photo-1513635269975-59663e0ac1ad"],
["Israel","Middle East","Jerusalem","Historic religious and cultural sites.","photo-1499856871958-5b9627545d1a"],
["Italy","Europe","Rome","Art, architecture and extraordinary regional cuisine.","photo-1516483638261-f4dbaf036963"],
["Jamaica","North America","Kingston","Reggae culture, waterfalls and Caribbean beaches.","photo-1514282401047-d79a71a590e8"],
["Japan","Asia","Tokyo","Tradition, design and remarkable city experiences.","photo-1493976040374-85c8e12f0c0e"],
["Jordan","Middle East","Amman","Petra, desert scenery and Dead Sea escapes.","photo-1464822759023-fed622ff2c3b"],
["Kazakhstan","Asia","Astana","Wide-open steppes and modern architecture.","photo-1464822759023-fed622ff2c3b"],
["Kenya","Africa","Nairobi","Wildlife safaris and Indian Ocean beaches.","photo-1539650116574-75c0c6d73f6e"],
["Kiribati","Oceania","South Tarawa","Remote Pacific atolls and marine scenery.","photo-1514282401047-d79a71a590e8"],
["Kuwait","Middle East","Kuwait City","Arabian Gulf waterfronts and modern culture.","photo-1512453979798-5ea266f8880c"],
["Kyrgyzstan","Asia","Bishkek","Mountain lakes and nomadic heritage.","photo-1464822759023-fed622ff2c3b"],
["Laos","Asia","Vientiane","Mekong riverside towns and peaceful landscapes.","photo-1528181304800-259b08848526"],
["Latvia","Europe","Riga","Baltic architecture and forest escapes.","photo-1513635269975-59663e0ac1ad"],
["Lebanon","Middle East","Beirut","Mediterranean culture and mountain scenery.","photo-1533105079780-92b9be482077"],
["Lesotho","Africa","Maseru","Mountain kingdoms and highland adventures.","photo-1464822759023-fed622ff2c3b"],
["Liberia","Africa","Monrovia","Atlantic beaches and tropical landscapes.","photo-1500530855697-b586d89ba3ee"],
["Libya","Africa","Tripoli","Mediterranean coast and ancient ruins.","photo-1539650116574-75c0c6d73f6e"],
["Liechtenstein","Europe","Vaduz","Alpine villages and scenic hiking trails.","photo-1464822759023-fed622ff2c3b"],
["Lithuania","Europe","Vilnius","Historic streets and Baltic countryside.","photo-1513635269975-59663e0ac1ad"],
["Luxembourg","Europe","Luxembourg City","Castles, valleys and European city breaks.","photo-1513635269975-59663e0ac1ad"],
["Madagascar","Africa","Antananarivo","Unique wildlife and extraordinary biodiversity.","photo-1539650116574-75c0c6d73f6e"],
["Malawi","Africa","Lilongwe","Lake Malawi and nature-focused escapes.","photo-1500530855697-b586d89ba3ee"],
["Malaysia","Asia","Kuala Lumpur","Modern skylines, islands and culinary diversity.","photo-1525625293386-3f8f99389edd"],
["Maldives","Asia","Male","Overwater villas and turquoise lagoons.","photo-1514282401047-d79a71a590e8"],
["Mali","Africa","Bamako","Sahel landscapes and cultural heritage.","photo-1539650116574-75c0c6d73f6e"],
["Malta","Europe","Valletta","Historic harbours and Mediterranean sunshine.","photo-1533105079780-92b9be482077"],
["Marshall Islands","Oceania","Majuro","Pacific atolls and coral reefs.","photo-1514282401047-d79a71a590e8"],
["Mauritania","Africa","Nouakchott","Saharan scenery and Atlantic coastlines.","photo-1464822759023-fed622ff2c3b"],
["Mauritius","Africa","Port Louis","Beach escapes and tropical lagoons.","photo-1514282401047-d79a71a590e8"],
["Mexico","North America","Mexico City","Ancient sites, vibrant cities and coastal retreats.","photo-1500530855697-b586d89ba3fe"],
["Micronesia","Oceania","Palikir","Reefs, islands and Pacific traditions.","photo-1514282401047-d79a71a590e8"],
["Moldova","Europe","Chisinau","Vineyards and quiet countryside.","photo-1513635269975-59663e0ac1ad"],
["Monaco","Europe","Monaco","Mediterranean luxury and glamorous harbours.","photo-1533105079780-92b9be482077"],
["Mongolia","Asia","Ulaanbaatar","Open steppes and nomadic traditions.","photo-1464822759023-fed622ff2c3b"],
["Montenegro","Europe","Podgorica","Adriatic bays and dramatic mountain scenery.","photo-1516483638261-f4dbaf036963"],
["Morocco","Africa","Rabat","Colourful souks, desert landscapes and coastal towns.","photo-1489749798305-4fea3ae63d43"],
["Mozambique","Africa","Maputo","Indian Ocean beaches and marine life.","photo-1514282401047-d79a71a590e8"],
["Myanmar","Asia","Naypyidaw","Pagodas and distinctive cultural heritage.","photo-1528181304800-259b08848526"],
["Namibia","Africa","Windhoek","Desert dunes and remarkable wildlife.","photo-1464822759023-fed622ff2c3b"],
["Nauru","Oceania","Yaren","Remote Pacific island landscapes.","photo-1514282401047-d79a71a590e8"],
["Nepal","Asia","Kathmandu","Himalayan trekking and mountain culture.","photo-1464822759023-fed622ff2c3b"],
["Netherlands","Europe","Amsterdam","Canals, cycling culture and artistic heritage.","photo-1513635269975-59663e0ac1ad"],
["New Zealand","Oceania","Wellington","Alpine scenery, lakes and outdoor adventures.","photo-1506973035872-a4ec16b8e8d9"],
["Nicaragua","North America","Managua","Volcanoes, lakes and Pacific coastlines.","photo-1500530855697-b586d89ba3fe"],
["Niger","Africa","Niamey","Saharan landscapes and regional traditions.","photo-1464822759023-fed622ff2c3b"],
["Nigeria","Africa","Abuja","Creative cities and diverse cultural experiences.","photo-1539650116574-75c0c6d73f6e"],
["North Korea","Asia","Pyongyang","Travel is subject to strict entry and tour restrictions.","photo-1508804185872-d7badad00f7d"],
["North Macedonia","Europe","Skopje","Lake towns and Balkan cultural heritage.","photo-1516483638261-f4dbaf036963"],
["Norway","Europe","Oslo","Fjords, northern lights and dramatic coastlines.","photo-1464822759023-fed622ff2c3b"],
["Oman","Middle East","Muscat","Desert adventures and Arabian coastal scenery.","photo-1512453979798-5ea266f8880c"],
["Pakistan","Asia","Islamabad","Himalayan valleys, historic cities and rich hospitality.","photo-1569025690938-a00729c9e1f9"],
["Palau","Oceania","Ngerulmud","Pristine reefs and island adventures.","photo-1514282401047-d79a71a590e8"],
["Palestine","Middle East","Ramallah","Cultural heritage; access and travel conditions require checking.","photo-1499856871958-5b9627545d1a"],
["Panama","North America","Panama City","Canal landmarks and tropical coastlines.","photo-1483729558449-99ef09a8c325"],
["Papua New Guinea","Oceania","Port Moresby","Mountain cultures and extraordinary biodiversity.","photo-1506973035872-a4ec16b8e8d9"],
["Paraguay","South America","Asuncion","River landscapes and historic city life.","photo-1483729558449-99ef09a8c325"],
["Peru","South America","Lima","Andean scenery and archaeological wonders.","photo-1483729558449-99ef09a8c325"],
["Philippines","Asia","Manila","Island hopping, beaches and vibrant local culture.","photo-1514282401047-d79a71a590e8"],
["Poland","Europe","Warsaw","Historic cities and beautiful countryside.","photo-1513635269975-59663e0ac1ad"],
["Portugal","Europe","Lisbon","Atlantic coastlines and charming historic towns.","photo-1555881400-74d7acaacd8b"],
["Qatar","Middle East","Doha","Contemporary architecture and desert experiences.","photo-1512453979798-5ea266f8880c"],
["Romania","Europe","Bucharest","Carpathian scenery and medieval towns.","photo-1513635269975-59663e0ac1ad"],
["Russia","Europe","Moscow","Vast landscapes and historic cultural centres.","photo-1513635269975-59663e0ac1ad"],
["Rwanda","Africa","Kigali","Mountain scenery and responsible wildlife tourism.","photo-1539650116574-75c0c6d73f6e"],
["Saint Kitts and Nevis","North America","Basseterre","Caribbean beaches and volcanic peaks.","photo-1514282401047-d79a71a590e8"],
["Saint Lucia","North America","Castries","Tropical beaches and the iconic Pitons.","photo-1514282401047-d79a71a590e8"],
["Saint Vincent and the Grenadines","North America","Kingstown","Sailing, island scenery and quiet beaches.","photo-1514282401047-d79a71a590e8"],
["Samoa","Oceania","Apia","Waterfalls and Polynesian culture.","photo-1514282401047-d79a71a590e8"],
["San Marino","Europe","San Marino","Hilltop heritage and scenic Italian surroundings.","photo-1516483638261-f4dbaf036963"],
["Sao Tome and Principe","Africa","Sao Tome","Volcanic islands and tropical rainforests.","photo-1514282401047-d79a71a590e8"],
["Saudi Arabia","Middle East","Riyadh","Heritage sites and modern urban destinations.","photo-1512453979798-5ea266f8880c"],
["Senegal","Africa","Dakar","Atlantic coastlines and lively cultural traditions.","photo-1539650116574-75c0c6d73f6e"],
["Serbia","Europe","Belgrade","Historic architecture and energetic city life.","photo-1513635269975-59663e0ac1ad"],
["Seychelles","Africa","Victoria","Granite islands and crystal-clear waters.","photo-1514282401047-d79a71a590e8"],
["Sierra Leone","Africa","Freetown","Atlantic beaches and forest landscapes.","photo-1500530855697-b586d89ba3fe"],
["Singapore","Asia","Singapore","Gardens, modern skylines and international cuisine.","photo-1525625293386-3f8f99389edd"],
["Slovakia","Europe","Bratislava","Castle towns and mountain trails.","photo-1513635269975-59663e0ac1ad"],
["Slovenia","Europe","Ljubljana","Alpine lakes and charming green cities.","photo-1503614472-8c93d56cd7b0"],
["Solomon Islands","Oceania","Honiara","Remote islands and vibrant marine life.","photo-1514282401047-d79a71a590e8"],
["Somalia","Africa","Mogadishu","Coastal heritage; current security conditions require careful review.","photo-1500530855697-b586d89ba3fe"],
["South Africa","Africa","Pretoria","Wildlife safaris, coastlines and diverse cities.","photo-1539650116574-75c0c6d73f6e"],
["South Korea","Asia","Seoul","Contemporary culture, cuisine and historic palaces.","photo-1538485399081-7191377e8241"],
["South Sudan","Africa","Juba","Travel requires careful review of current security conditions.","photo-1539650116574-75c0c6d73f6e"],
["Spain","Europe","Madrid","Art, architecture and sunlit Mediterranean beaches.","photo-1516483638261-f4dbaf036963"],
["Sri Lanka","Asia","Sri Jayawardenepura Kotte","Tea hills, temples and tropical coastlines.","photo-1528181304800-259b08848526"],
["Sudan","Africa","Khartoum","Travel requires careful review of current security conditions.","photo-1539650116574-75c0c6d73f6e"],
["Suriname","South America","Paramaribo","Rainforests and distinctive cultural heritage.","photo-1483729558449-99ef09a8c325"],
["Sweden","Europe","Stockholm","Nordic design, archipelagos and forests.","photo-1513635269975-59663e0ac1ad"],
["Switzerland","Europe","Bern","Alpine villages, scenic railways and pristine lakes.","photo-1531366936337-7c912a4589a7"],
["Syria","Middle East","Damascus","Travel requires careful review of current conditions.","photo-1464822759023-fed622ff2c3b"],
["Tajikistan","Asia","Dushanbe","High mountain routes and dramatic landscapes.","photo-1464822759023-fed622ff2c3b"],
["Tanzania","Africa","Dodoma","Safari landscapes and Indian Ocean islands.","photo-1539650116574-75c0c6d73f6e"],
["Thailand","Asia","Bangkok","Street food, temples and tropical islands.","photo-1528181304800-259b08848526"],
["Timor-Leste","Asia","Dili","Quiet coastlines and island scenery.","photo-1514282401047-d79a71a590e8"],
["Togo","Africa","Lome","Coastal towns and regional cultural traditions.","photo-1539650116574-75c0c6d73f6e"],
["Tonga","Oceania","Nuku'alofa","Pacific island culture and marine encounters.","photo-1514282401047-d79a71a590e8"],
["Trinidad and Tobago","North America","Port of Spain","Carnival culture and tropical coastlines.","photo-1514282401047-d79a71a590e8"],
["Tunisia","Africa","Tunis","Mediterranean beaches and historic architecture.","photo-1539650116574-75c0c6d73f6e"],
["Türkiye","Europe","Ankara","Cultural crossroads, coastlines and remarkable landmarks.","photo-1524231757912-21f4fe3a7200"],
["Turkmenistan","Asia","Ashgabat","Distinctive architecture and desert landscapes.","photo-1464822759023-fed622ff2c3b"],
["Tuvalu","Oceania","Funafuti","Remote Pacific atolls and turquoise lagoons.","photo-1514282401047-d79a71a590e8"],
["Uganda","Africa","Kampala","Lakes, rainforest and wildlife experiences.","photo-1539650116574-75c0c6d73f6e"],
["Ukraine","Europe","Kyiv","Historic heritage; check current travel advisories.","photo-1513635269975-59663e0ac1ad"],
["United Arab Emirates","Middle East","Abu Dhabi","Contemporary landmarks and desert escapes.","photo-1512453979798-5ea266f8880c"],
["United Kingdom","Europe","London","Royal heritage, cultural cities and countryside.","photo-1513635269975-59663e0ac1ad"],
["United States","North America","Washington, D.C.","Iconic cities, national parks and diverse landscapes.","photo-1501594907352-04cda38ebc29"],
["Uruguay","South America","Montevideo","Coastal resorts and relaxed city experiences.","photo-1483729558449-99ef09a8c325"],
["Uzbekistan","Asia","Tashkent","Silk Road cities and extraordinary architecture.","photo-1464822759023-fed622ff2c3b"],
["Vanuatu","Oceania","Port Vila","Volcanic islands and coral reefs.","photo-1514282401047-d79a71a590e8"],
["Vatican City","Europe","Vatican City","World-renowned art, architecture and religious heritage.","photo-1499856871958-5b9627545d1a"],
["Venezuela","South America","Caracas","Spectacular waterfalls and diverse landscapes.","photo-1483729558449-99ef09a8c325"],
["Vietnam","Asia","Hanoi","Scenic bays, historic streets and regional cuisine.","photo-1528181304800-259b08848526"],
["Yemen","Middle East","Sanaa","Travel requires careful review of current security conditions.","photo-1464822759023-fed622ff2c3b"],
["Zambia","Africa","Lusaka","Waterfalls, wildlife and nature adventures.","photo-1539650116574-75c0c6d73f6e"],
["Zimbabwe","Africa","Harare","Waterfalls, wildlife and remarkable natural landscapes.","photo-1539650116574-75c0c6d73f6e"]
];

const destinations = destinationData.map(([name, region, capital, description, image]) => ({
  name, region, capital, description, image
}));

const featuredCities = {
  "Pakistan": [
    ["Islamabad","A planned capital framed by the Margalla Hills.",photo.pakistan],
    ["Lahore","Historic architecture, gardens and celebrated cuisine.",photo.india],
    ["Karachi","A lively coastal metropolis and food destination.",photo.pakistan],
    ["Hunza","Mountain panoramas, valleys and cultural heritage.",photo.norway],
    ["Skardu","Glacial scenery and gateways to the Karakoram.",photo.norway],
    ["Peshawar","Historic bazaars and regional culinary traditions.",photo.pakistan]
  ],
  "Switzerland": [
    ["Zurich","Lakeside city life, museums and shopping.",photo.switzerland],
    ["Geneva","International culture and beautiful lake views.",photo.switzerland],
    ["Lucerne","Charming old town and mountain excursions.",photo.switzerland],
    ["Interlaken","An alpine base for outdoor adventures.",photo.norway],
    ["Zermatt","Spectacular views of the Matterhorn.",photo.switzerland],
    ["Bern","A UNESCO-listed old town and river scenery.",photo.switzerland]
  ],
  "United States": [
    ["New York City","Iconic landmarks, museums and neighbourhoods.",photo.usa],
    ["Los Angeles","Film culture, beaches and city attractions.",photo.usa],
    ["San Francisco","Bay views, waterfront districts and landmarks.",photo.usa],
    ["Las Vegas","Entertainment, dining and desert excursions.",photo.usa],
    ["Miami","Coastal relaxation and vibrant cultural districts.",photo.usa],
    ["Washington, D.C.","Monuments, museums and national institutions.",photo.usa]
  ],
  "Türkiye": [
    ["Istanbul","Historic landmarks connecting Europe and Asia.",photo.turkey],
    ["Antalya","Mediterranean beaches and resort experiences.",photo.turkey],
    ["Cappadocia","Distinctive rock formations and valley scenery.",photo.turkey],
    ["Izmir","Aegean coastlines and relaxed urban culture.",photo.turkey],
    ["Ankara","Museums and the country's modern capital.",photo.turkey],
    ["Bursa","Ottoman heritage and nearby mountain escapes.",photo.turkey]
  ],
  "France": [
    ["Paris","Art, fashion and internationally recognised landmarks.",photo.france],
    ["Nice","Mediterranean promenades and coastal scenery.",photo.france],
    ["Lyon","Historic quarters and celebrated gastronomy.",photo.france],
    ["Marseille","A Mediterranean port with diverse neighbourhoods.",photo.france],
    ["Bordeaux","Architecture and renowned wine-country surroundings.",photo.france],
    ["Strasbourg","Canals and distinctive Franco-German heritage.",photo.france]
  ],
  "Italy": [
    ["Rome","Ancient monuments and extraordinary architecture.",photo.italy],
    ["Venice","Canals, historic palaces and island neighbourhoods.",photo.italy],
    ["Florence","Renaissance art and Tuscan culture.",photo.italy],
    ["Milan","Fashion, design and urban attractions.",photo.italy],
    ["Naples","Historic streets and celebrated regional food.",photo.italy],
    ["Verona","Historic piazzas and cultural landmarks.",photo.italy]
  ],
  "Japan": [
    ["Tokyo","Contemporary culture, dining and neighbourhoods.",photo.japan],
    ["Kyoto","Historic temples, gardens and traditional streets.",photo.japan],
    ["Osaka","Food culture and lively urban districts.",photo.japan],
    ["Nara","Historic temples and landscaped parks.",photo.japan],
    ["Sapporo","Seasonal scenery and northern Japanese culture.",photo.japan],
    ["Hiroshima","Memorial sites and coastal island excursions.",photo.japan]
  ],
  "United Arab Emirates": [
    ["Dubai","Contemporary architecture and major attractions.",photo.uae],
    ["Abu Dhabi","Cultural landmarks and waterfront experiences.",photo.uae],
    ["Sharjah","Museums and regional cultural heritage.",photo.uae],
    ["Ras Al Khaimah","Mountain landscapes and coastal resorts.",photo.uae],
    ["Fujairah","Beaches and rugged eastern mountain scenery.",photo.uae],
    ["Ajman","Coastal relaxation and local markets.",photo.uae]
  ],
  "Thailand": [
    ["Bangkok","Temples, markets and exceptional street food.",photo.thailand],
    ["Chiang Mai","Mountain scenery and northern Thai culture.",photo.thailand],
    ["Phuket","Island excursions and coastal resorts.",photo.thailand],
    ["Krabi","Limestone cliffs and scenic beaches.",photo.thailand],
    ["Pattaya","Seaside attractions and entertainment.",photo.thailand],
    ["Ayutthaya","Historic temples and archaeological heritage.",photo.thailand]
  ],
  "Australia": [
    ["Sydney","Harbour landmarks and famous beaches.",photo.australia],
    ["Melbourne","Arts, café culture and urban neighbourhoods.",photo.australia],
    ["Brisbane","Riverfront attractions and subtropical escapes.",photo.australia],
    ["Perth","Coastal scenery and relaxed city experiences.",photo.australia],
    ["Adelaide","Arts, markets and regional food culture.",photo.australia],
    ["Gold Coast","Beaches and outdoor attractions.",photo.australia]
  ],
  "Canada": [
    ["Toronto","Diverse neighbourhoods and iconic skyline views.",photo.canada],
    ["Vancouver","Mountains, waterfronts and outdoor activities.",photo.canada],
    ["Montreal","Arts, architecture and French-Canadian culture.",photo.canada],
    ["Quebec City","Historic streets and distinctive architecture.",photo.canada],
    ["Calgary","Urban attractions near the Rocky Mountains.",photo.canada],
    ["Ottawa","National museums and cultural landmarks.",photo.canada]
  ],
  "Maldives": [
    ["Male","Local markets and island city life.",photo.maldives],
    ["Maafushi","Guesthouses and island excursions.",photo.maldives],
    ["Hulhumale","Beaches and contemporary island development.",photo.maldives],
    ["Addu City","Southern atolls and island landscapes.",photo.maldives],
    ["Thulusdhoo","Island culture and surf experiences.",photo.maldives],
    ["Dhigurah","Long sandy shores and marine excursions.",photo.maldives]
  ],
  "Singapore": [
    ["Marina Bay","Waterfront attractions and skyline views.",photo.singapore],
    ["Sentosa","Resorts, attractions and beaches.",photo.singapore],
    ["Chinatown","Heritage streets and diverse food culture.",photo.singapore],
    ["Little India","Colourful shops and cultural landmarks.",photo.singapore],
    ["Orchard Road","Shopping districts and contemporary city life.",photo.singapore],
    ["Gardens by the Bay","Landscaped gardens and distinctive architecture.",photo.singapore]
  ]
};

const knownCities = {
  "Afghanistan": ["Kabul","Herat","Mazar-i-Sharif"],
  "Albania": ["Tirana","Durres","Vlore"],
  "Australia": ["Sydney","Melbourne","Brisbane","Perth","Adelaide","Gold Coast"],
  "Austria": ["Vienna","Salzburg","Innsbruck","Graz"],
  "Bangladesh": ["Dhaka","Chattogram","Sylhet","Cox's Bazar"],
  "Belgium": ["Brussels","Bruges","Antwerp","Ghent"],
  "Brazil": ["Brasilia","Rio de Janeiro","Sao Paulo","Salvador"],
  "Canada": ["Toronto","Vancouver","Montreal","Quebec City","Calgary","Ottawa"],
  "China": ["Beijing","Shanghai","Guangzhou","Chengdu","Shenzhen"],
  "Denmark": ["Copenhagen","Aarhus","Odense"],
  "Egypt": ["Cairo","Alexandria","Luxor","Aswan","Giza"],
  "Finland": ["Helsinki","Turku","Tampere","Rovaniemi"],
  "Germany": ["Berlin","Munich","Hamburg","Frankfurt","Cologne"],
  "Greece": ["Athens","Thessaloniki","Santorini","Heraklion"],
  "India": ["New Delhi","Mumbai","Jaipur","Agra","Bengaluru","Kolkata"],
  "Indonesia": ["Jakarta","Bali","Yogyakarta","Bandung","Surabaya"],
  "Ireland": ["Dublin","Cork","Galway","Limerick"],
  "Japan": ["Tokyo","Kyoto","Osaka","Nara","Sapporo","Hiroshima"],
  "Kenya": ["Nairobi","Mombasa","Nakuru","Kisumu"],
  "Malaysia": ["Kuala Lumpur","Penang","Johor Bahru","Malacca","Kota Kinabalu"],
  "Mexico": ["Mexico City","Cancun","Guadalajara","Oaxaca","Merida"],
  "Morocco": ["Rabat","Marrakesh","Casablanca","Fez","Tangier"],
  "Nepal": ["Kathmandu","Pokhara","Lalitpur","Bhaktapur"],
  "Netherlands": ["Amsterdam","Rotterdam","The Hague","Utrecht"],
  "New Zealand": ["Auckland","Wellington","Queenstown","Christchurch"],
  "Norway": ["Oslo","Bergen","Tromso","Trondheim"],
  "Pakistan": ["Islamabad","Lahore","Karachi","Hunza","Skardu","Peshawar"],
  "Philippines": ["Manila","Cebu City","Davao City","Boracay","Baguio"],
  "Portugal": ["Lisbon","Porto","Faro","Sintra"],
  "Saudi Arabia": ["Riyadh","Jeddah","Makkah","Madinah","AlUla"],
  "Singapore": ["Singapore"],
  "South Africa": ["Cape Town","Johannesburg","Durban","Pretoria"],
  "South Korea": ["Seoul","Busan","Incheon","Jeju City"],
  "Spain": ["Madrid","Barcelona","Seville","Valencia","Malaga"],
  "Sri Lanka": ["Colombo","Kandy","Galle","Ella","Negombo"],
  "Sweden": ["Stockholm","Gothenburg","Malmo","Uppsala"],
  "Switzerland": ["Zurich","Geneva","Lucerne","Interlaken","Zermatt","Bern"],
  "Thailand": ["Bangkok","Chiang Mai","Phuket","Krabi","Pattaya","Ayutthaya"],
  "Türkiye": ["Istanbul","Antalya","Cappadocia","Izmir","Ankara","Bursa"],
  "United Arab Emirates": ["Dubai","Abu Dhabi","Sharjah","Ras Al Khaimah","Fujairah","Ajman"],
  "United Kingdom": ["London","Edinburgh","Manchester","Liverpool","Oxford"],
  "United States": ["New York City","Los Angeles","San Francisco","Las Vegas","Miami","Washington, D.C."],
  "Vietnam": ["Hanoi","Ho Chi Minh City","Da Nang","Hoi An","Hue"]
};

const hotels = [
  {name:"Serena Hotel Islamabad",location:"Islamabad, Pakistan",country:"Pakistan",region:"Pakistan",type:"Luxury",price:45000,description:"An established luxury hotel with landscaped grounds, dining and business facilities.",image:"photo-1566073771259-6a8506099945"},
  {name:"Pearl-Continental Hotel Lahore",location:"Lahore, Pakistan",country:"Pakistan",region:"Pakistan",type:"Luxury",price:38000,description:"A well-known full-service hotel in Lahore with multiple dining and guest amenities.",image:"photo-1571896349842-33c89424de2d"},
  {name:"Movenpick Hotel Karachi",location:"Karachi, Pakistan",country:"Pakistan",region:"Pakistan",type:"Luxury",price:42000,description:"An established city hotel offering dining and hospitality services.",image:"photo-1564501049412-61c2a3083791"},
  {name:"Hotel One Islamabad",location:"Islamabad, Pakistan",country:"Pakistan",region:"Pakistan",type:"Comfort",price:14000,description:"A hotel option to consider for a practical city stay; confirm the specific property and facilities.",image:"photo-1551882547-ff40c63fe5fa"},
  {name:"Avari Xpress Gulberg",location:"Lahore, Pakistan",country:"Pakistan",region:"Pakistan",type:"Comfort",price:18000,description:"A city accommodation option with contemporary rooms and guest services.",image:"photo-1566665797739-1674de7a421a"},
  {name:"Ramada by Wyndham Islamabad",location:"Islamabad, Pakistan",country:"Pakistan",region:"Pakistan",type:"Comfort",price:22000,description:"An established hotel brand; confirm current rates and property-specific facilities.",image:"photo-1568084680786-a84f91d1153c"},
  {name:"Burj Al Arab Jumeirah",location:"Dubai, UAE",country:"United Arab Emirates",region:"UAE",type:"Luxury",price:450000,description:"An iconic all-suite luxury hotel known for its distinctive sail-shaped architecture.",image:"photo-1512453979798-5ea266f8880c"},
  {name:"Atlantis The Palm",location:"Dubai, UAE",country:"United Arab Emirates",region:"UAE",type:"Luxury",price:180000,description:"A large resort with dining, leisure attractions and marine-themed experiences.",image:"photo-1514282401047-d79a71a590e8"},
  {name:"Jumeirah Beach Hotel",location:"Dubai, UAE",country:"United Arab Emirates",region:"UAE",type:"Luxury",price:150000,description:"A beachfront resort with sea views and family leisure facilities.",image:"photo-1519046904884-53103b34b206"},
  {name:"Premier Inn Dubai International Airport",location:"Dubai, UAE",country:"United Arab Emirates",region:"UAE",type:"Comfort",price:24000,description:"An established airport-area hotel option for practical city access.",image:"photo-1566665797739-1674de7a421a"},
  {name:"Swissôtel Al Murooj Dubai",location:"Dubai, UAE",country:"United Arab Emirates",region:"UAE",type:"Comfort",price:40000,description:"A centrally located hotel option near major Dubai attractions.",image:"photo-1566073771259-6a8506099945"},
  {name:"Novotel Dubai Al Barsha",location:"Dubai, UAE",country:"United Arab Emirates",region:"UAE",type:"Comfort",price:28000,description:"A contemporary hotel option with access to the city's transport network.",image:"photo-1551882547-ff40c63fe5fa"},
  {name:"Ciragan Palace Kempinski",location:"Istanbul, Türkiye",country:"Türkiye",region:"Turkey",type:"Luxury",price:220000,description:"A historic waterfront palace hotel overlooking the Bosphorus.",image:"photo-1524231757912-21f4fe3a7200"},
  {name:"Four Seasons Hotel Istanbul at Sultanahmet",location:"Istanbul, Türkiye",country:"Türkiye",region:"Turkey",type:"Luxury",price:190000,description:"A boutique luxury property in Istanbul's historic Sultanahmet district.",image:"photo-1564501049412-61c2a3083791"},
  {name:"Swissôtel The Bosphorus Istanbul",location:"Istanbul, Türkiye",country:"Türkiye",region:"Turkey",type:"Luxury",price:120000,description:"An established upscale hotel with Bosphorus views and extensive amenities.",image:"photo-1571896349842-33c89424de2d"},
  {name:"Hampton by Hilton Istanbul Sirkeci",location:"Istanbul, Türkiye",country:"Türkiye",region:"Turkey",type:"Comfort",price:28000,description:"A branded hotel option in a historic part of Istanbul.",image:"photo-1566665797739-1674de7a421a"},
  {name:"Novotel Istanbul Bosphorus",location:"Istanbul, Türkiye",country:"Türkiye",region:"Turkey",type:"Comfort",price:35000,description:"A contemporary hotel in Istanbul's Karakoy area.",image:"photo-1566073771259-6a8506099945"},
  {name:"ibis Styles Istanbul Merter",location:"Istanbul, Türkiye",country:"Türkiye",region:"Turkey",type:"Comfort",price:18000,description:"A contemporary branded stay to consider for a more economical visit.",image:"photo-1551882547-ff40c63fe5fa"},
  {name:"Badrutt's Palace Hotel",location:"St. Moritz, Switzerland",country:"Switzerland",region:"Switzerland",type:"Luxury",price:700000,description:"A renowned alpine luxury hotel with a long hospitality history.",image:"photo-1531366936337-7c912a4589a7"},
  {name:"The Dolder Grand",location:"Zurich, Switzerland",country:"Switzerland",region:"Switzerland",type:"Luxury",price:280000,description:"An established luxury property overlooking Zurich and its surrounding landscapes.",image:"photo-1566073771259-6a8506099945"},
  {name:"Bürgenstock Resort",location:"Obbürgen, Switzerland",country:"Switzerland",region:"Switzerland",type:"Luxury",price:350000,description:"A renowned resort with panoramic Lake Lucerne surroundings.",image:"photo-1500530855697-b586d89ba3fe"},
  {name:"ibis Zurich City West",location:"Zurich, Switzerland",country:"Switzerland",region:"Switzerland",type:"Comfort",price:38000,description:"A practical branded city stay; check seasonal rates and room types.",image:"photo-1551882547-ff40c63fe5fa"},
  {name:"Hotel St. Georges",location:"Zurich, Switzerland",country:"Switzerland",region:"Switzerland",type:"Comfort",price:32000,description:"A city accommodation option to compare for a Zurich itinerary.",image:"photo-1566665797739-1674de7a421a"},
  {name:"Hotel Bristol Geneva",location:"Geneva, Switzerland",country:"Switzerland",region:"Switzerland",type:"Comfort",price:65000,description:"An established Geneva hotel with central-city access.",image:"photo-1564501049412-61c2a3083791"},
  {name:"The Ritz Paris",location:"Paris, France",country:"France",region:"France",type:"Luxury",price:650000,description:"An internationally renowned luxury hotel in central Paris.",image:"photo-1499856871958-5b9627545d1a"},
  {name:"Le Meurice",location:"Paris, France",country:"France",region:"France",type:"Luxury",price:500000,description:"A historic luxury hotel known for its classic Parisian character.",image:"photo-1566073771259-6a8506099945"},
  {name:"Pullman Paris Tour Eiffel",location:"Paris, France",country:"France",region:"France",type:"Comfort",price:125000,description:"A branded hotel close to one of Paris's most recognised landmarks.",image:"photo-1564501049412-61c2a3083791"},
  {name:"ibis Paris Tour Eiffel Cambronne",location:"Paris, France",country:"France",region:"France",type:"Comfort",price:50000,description:"A practical branded accommodation option for a Paris visit.",image:"photo-1551882547-ff40c63fe5fa"},
  {name:"Marina Bay Sands",location:"Singapore",country:"Singapore",region:"Singapore",type:"Luxury",price:180000,description:"An iconic integrated resort with skyline views and major attractions.",image:"photo-1525625293386-3f8f99389edd"},
  {name:"Raffles Singapore",location:"Singapore",country:"Singapore",region:"Singapore",type:"Luxury",price:250000,description:"A celebrated heritage hotel with distinctive colonial-era architecture.",image:"photo-1564501049412-61c2a3083791"},
  {name:"Carlton Hotel Singapore",location:"Singapore",country:"Singapore",region:"Singapore",type:"Comfort",price:55000,description:"A full-service city hotel in a central location.",image:"photo-1566073771259-6a8506099945"},
  {name:"Hotel Boss Singapore",location:"Singapore",country:"Singapore",region:"Singapore",type:"Comfort",price:35000,description:"A city hotel option to compare for practical accommodation.",image:"photo-1566665797739-1674de7a421a"}
];

const cityImageIds = [
  photo.default, photo.italy, photo.france,
  photo.thailand, photo.switzerland, photo.japan
];

let activeImages = [];
let activeImageIndex = 0;

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  })[character]);
}

function getImage(image, width = 700) {
  return imageURL(image || photo.default, width);
}

function renderCountries() {
  const query = $("#countrySearch").value.trim().toLowerCase();
  const region = $("#regionFilter").value;

  const filtered = destinations.filter(country =>
    country.name.toLowerCase().includes(query) &&
    (region === "all" || country.region === region)
  );

  $("#countryCount").textContent = `${filtered.length} destinations`;

  $("#countryGrid").innerHTML = filtered.map(country => {
    const originalIndex = destinations.indexOf(country) + 1;
    return `
      <article class="country-card" tabindex="0" role="button"
        data-country="${escapeHTML(country.name)}"
        aria-label="Explore ${escapeHTML(country.name)}">
        <div class="country-image">
          <img src="${getImage(country.image, 600)}"
            alt="${escapeHTML(country.name)} destination"
            loading="lazy">
          <span class="country-index">${String(originalIndex).padStart(3,"0")}</span>
        </div>
        <div class="country-info">
          <h3>${escapeHTML(country.name)}</h3>
          <p>${escapeHTML(country.description)}</p>
          <div class="country-meta">
            <span>${escapeHTML(country.region)}</span>
            <span class="explore-link">Explore ↗</span>
          </div>
        </div>
      </article>`;
  }).join("");

  $$(".country-card").forEach(card => {
    const open = () => showCities(card.dataset.country);
    card.addEventListener("click", open);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function makeCityData(country) {
  const destination = destinations.find(item => item.name === country);
  const cityNames = knownCities[country] || [destination.capital];

  if (featuredCities[country]) {
    return featuredCities[country].map(([name, description, image]) => ({
      name, description, image
    }));
  }

  return cityNames.map((name, index) => ({
    name,
    description: name === destination.capital
      ? `Explore ${name}, the capital of ${country}, and discover local attractions and culture.`
      : `Discover ${name}, a featured destination in ${country}.`,
    image: destination.image || cityImageIds[index % cityImageIds.length]
  }));
}

function showCities(country) {
  const destination = destinations.find(item => item.name === country);
  if (!destination) return;

  const cities = makeCityData(country);
  $("#cityTitle").textContent = `${country}: Featured Cities`;
  $("#cityDescription").textContent =
    `${destination.description} Capital: ${destination.capital}. Browse these featured destinations to begin planning your trip.`;

  $("#cityGrid").innerHTML = cities.map(city => `
    <article class="city-card" data-city="${escapeHTML(city.name)}"
      tabindex="0" role="button" aria-label="Choose ${escapeHTML(city.name)}">
      <img src="${getImage(city.image, 700)}"
        alt="${escapeHTML(city.name)}, ${escapeHTML(country)}"
        loading="lazy">
      <h3>${escapeHTML(city.name)}</h3>
      <p>${escapeHTML(city.description)}</p>
    </article>
  `).join("");

  $("#cityPanel").hidden = false;
  $("#countryBookButton").dataset.country = country;

  $$(".city-card").forEach(card => {
    const selectCity = () => {
      $("#countrySelect").value = country;
      $("#citySelect").value = card.dataset.city;
      $("#booking").scrollIntoView({ behavior: "smooth" });
    };
    card.addEventListener("click", selectCity);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectCity();
      }
    });
  });

  $("#cityPanel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderHotels() {
  const region = $("#hotelRegion").value;
  const type = $("#hotelType").value;

  const filtered = hotels.filter(hotel =>
    (region === "all" || hotel.region === region) &&
    (type === "all" || hotel.type === type)
  );

  $("#hotelGrid").innerHTML = filtered.map((hotel, index) => `
    <article class="hotel-card">
      <div class="hotel-photo" tabindex="0" role="button"
        data-image="${getImage(hotel.image, 1400)}"
        data-caption="${escapeHTML(hotel.name)}"
        aria-label="View ${escapeHTML(hotel.name)} image">
        <img src="${getImage(hotel.image, 800)}"
          alt="${escapeHTML(hotel.name)}"
          loading="lazy">
        <span class="hotel-badge">${escapeHTML(hotel.type)}</span>
      </div>
      <div class="hotel-details">
        <span class="hotel-location">${escapeHTML(hotel.location)}</span>
        <h3>${escapeHTML(hotel.name)}</h3>
        <p>${escapeHTML(hotel.description)}</p>
        <div class="hotel-bottom">
          <span class="hotel-price">PKR ${hotel.price.toLocaleString("en-PK")}<small>Illustrative rate / night</small></span>
          <button type="button" data-hotel-index="${hotels.indexOf(hotel)}">Select Hotel ↗</button>
        </div>
      </div>
    </article>
  `).join("");

  $$("#hotelGrid [data-hotel-index]").forEach(button => {
    button.addEventListener("click", () => {
      const hotel = hotels[Number(button.dataset.hotelIndex)];
      $("#hotelChoice").value = hotel.name;
      const countryMatch = destinations.find(d =>
        d.name === hotel.country || d.name === hotel.region
      );
      if (countryMatch) $("#countrySelect").value = countryMatch.name;
      $("#booking").scrollIntoView({ behavior: "smooth" });
    });
  });

  $$(".hotel-photo").forEach(element => {
    const open = () => openImage(element.dataset.image, element.dataset.caption);
    element.addEventListener("click", open);
    element.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function populateFormOptions() {
  const countrySelect = $("#countrySelect");
  const hotelSelect = $("#hotelChoice");

  countrySelect.innerHTML += destinations.map(destination =>
    `<option value="${escapeHTML(destination.name)}">${escapeHTML(destination.name)}</option>`
  ).join("");

  hotelSelect.innerHTML += hotels.map(hotel =>
    `<option value="${escapeHTML(hotel.name)}">${escapeHTML(hotel.name)} — ${escapeHTML(hotel.location)}</option>`
  ).join("");
}

function openImage(src, caption) {
  activeImages = [{ src, caption }];
  activeImageIndex = 0;
  updateModal();
  $("#imageModal").hidden = false;
  document.body.classList.add("modal-open");
  $("#closeModal").focus();
}

function updateModal() {
  const image = activeImages[activeImageIndex];
  if (!image) return;
  $("#modalImage").src = image.src;
  $("#modalImage").alt = image.caption;
  $("#modalCaption").textContent = image.caption;
}

function closeImage() {
  $("#imageModal").hidden = true;
  document.body.classList.remove("modal-open");
  $("#modalImage").src = "";
}

function downloadEnquiry(data) {
  const text = [
    "MK TRAVEL — TRAVEL ENQUIRY",
    "--------------------------",
    ...Object.entries(data).map(([key, value]) => `${key}: ${value}`),
    "",
    "This is an enquiry summary, not a confirmed reservation."
  ].join("\n");

  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "MK-Travel-Enquiry.txt";
  anchor.click();
  URL.revokeObjectURL(url);
}

function initialiseBookingForm() {
  const form = $("#bookingForm");
  const departure = $("#departureDate");
  const returning = $("#returnDate");

  const today = new Date();
  const localDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
  ].join("-");

  departure.min = localDate;
  returning.min = localDate;

  departure.addEventListener("change", () => {
    returning.min = departure.value || localDate;
    if (returning.value && returning.value < returning.min) {
      returning.value = "";
    }
  });

  form.addEventListener("submit", event => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    if (returning.value < departure.value) {
      returning.setCustomValidity("Return date must be on or after the departure date.");
      returning.reportValidity();
      returning.setCustomValidity("");
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    const result = $("#bookingResult");

    result.innerHTML = `
      <h4>Your enquiry is ready.</h4>
      <p><strong>Traveller:</strong> ${escapeHTML(data.fullName)}</p>
      <p><strong>Destination:</strong> ${escapeHTML(data.country)}${data.city ? ` — ${escapeHTML(data.city)}` : ""}</p>
      <p><strong>Travel dates:</strong> ${escapeHTML(data.departureDate)} to ${escapeHTML(data.returnDate)}</p>
      <p><strong>Travellers:</strong> ${escapeHTML(data.travellers)}</p>
      <p><strong>Package:</strong> ${escapeHTML(data.travelPackage)}</p>
      <p><strong>Accommodation:</strong> ${escapeHTML(data.hotel || data.roomType || "To be recommended")}</p>
      <p><strong>Food preference:</strong> ${escapeHTML(data.food || "Flexible")}</p>
      <p>Your request has been validated in this browser. No booking has been sent or confirmed.</p>
      <button type="button" id="downloadEnquiry">Save Enquiry as Text File</button>
    `;

    result.hidden = false;
    $("#downloadEnquiry").addEventListener("click", () => downloadEnquiry(data));
    result.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function initialiseNavigation() {
  const toggle = $("#menuToggle");
  const links = $("#navLinks");

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "✕" : "☰";
  });

  $$("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    });
  });

  const sections = $$("main section[id]");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        $$("#navLinks a").forEach(link => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    }, { rootMargin: "-20% 0px -65% 0px" });

    sections.forEach(section => observer.observe(section));
  }

  $("#themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    $("#themeToggle").textContent = isDark ? "☾" : "☼";
    $("#themeToggle").setAttribute("aria-pressed", String(isDark));
  });

  window.addEventListener("scroll", () => {
    $("#backToTop").classList.toggle("visible", window.scrollY > 500);
  }, { passive: true });

  $("#backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initialiseInteractions() {
  $("#countrySearch").addEventListener("input", renderCountries);
  $("#regionFilter").addEventListener("change", renderCountries);
  $("#hotelRegion").addEventListener("change", renderHotels);
  $("#hotelType").addEventListener("change", renderHotels);

  $("#quickSearch").addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    $("#countrySearch").value = event.currentTarget.value;
    $("#regionFilter").value = "all";
    renderCountries();
    $("#destinations").scrollIntoView({ behavior: "smooth" });
  });

  $("#closeCities").addEventListener("click", () => {
    $("#cityPanel").hidden = true;
  });

  $("#countryBookButton").addEventListener("click", () => {
    $("#countrySelect").value = $("#countryBookButton").dataset.country;
    $("#booking").scrollIntoView({ behavior: "smooth" });
  });

  $$("[data-package]").forEach(element => {
    element.addEventListener("click", () => {
      const packageSelect = $("#travelPackage");
      const requested = element.dataset.package;
      const option = [...packageSelect.options].find(item => item.value === requested || item.text === requested);
      if (option) packageSelect.value = option.value;
    });
  });

  $$(".food-card").forEach(card => {
    card.addEventListener("click", () => {
      $$(".food-card").forEach(item => item.classList.remove("selected"));
      card.classList.add("selected");
      $("#foodChoice").value = card.dataset.food;
      $("#foodNote").textContent = `${card.dataset.food} cuisine added to your journey preferences.`;
    });
  });

  $("#closeModal").addEventListener("click", closeImage);
  $("#modalPrev").addEventListener("click", () => {
    activeImageIndex = (activeImageIndex - 1 + activeImages.length) % activeImages.length;
    updateModal();
  });
  $("#modalNext").addEventListener("click", () => {
    activeImageIndex = (activeImageIndex + 1) % activeImages.length;
    updateModal();
  });

  $("#imageModal").addEventListener("click", event => {
    if (event.target === $("#imageModal")) closeImage();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !$("#imageModal").hidden) closeImage();
  });

  $("#currentYear").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderCountries();
  renderHotels();
  populateFormOptions();
  initialiseNavigation();
  initialiseInteractions();
  initialiseBookingForm();
});
