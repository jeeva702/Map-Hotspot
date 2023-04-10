let topic = document.getElementById("topic");
let image = document.getElementById("image");
let figcaption = document.getElementById("figcaption");
let highlights = document.getElementById("highlights");
let content = document.getElementById("content");
let hotelLink = document.getElementById("hotelLink");
let high = document.getElementById("high");
let id1 = document.getElementById("img1");
let id2 = document.getElementById("img2");
let id3 = document.getElementById("img3");
let id4 = document.getElementById("img4");
let id5 = document.getElementById("img5");
let id6 = document.getElementById("img6");
let id7 = document.getElementById("img7");
let id8 = document.getElementById("img8");
let id9 = document.getElementById("img9");
// let id10 = document.getElementById("img10");
let id11 = document.getElementById("img11");
let id12 = document.getElementById("img12");
let id13 = document.getElementById("img13");
let id14 = document.getElementById("img14");
let id15 = document.getElementById("img15");
let id16 = document.getElementById("img16");
let id17 = document.getElementById("img17");
let id18 = document.getElementById("img18");
let id19 = document.getElementById("img19");

id1.addEventListener("click", (e) => {
  e.preventDefault();
  topic.textContent = "BODHIWOODS RESPORT";
  image.src = "imgg1.jpg";
  figcaption.innerText = "BODHIWOODS RESPORT";
  content.innerHTML ="Experience luxury and comfort at this peaceful property offering well-appointed rooms, an incredible restaurant, an azure swimming pool and a wide range of amenities.<br><br>Swim a few laps in the outdoor swimming pool.<br><br>Enjoy the property's close proximity to Shore Temple which is 1.4 km away.<br><br>Enjoy a wide range of fun-filled activities such as birds aviary and cycling.<br><br>Savour the authentic taste of cuisines from around the globe at the on-site restaurant, The Banayan.";
  hotelLink.innerText = "Book your day in this Beautiful Resort";
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
});

id2.addEventListener("click", (e) => {
  e.preventDefault();
  topic.textContent = "IG GUEST HOUSE";
  image.src = "imgg2.jpeg";
  figcaption.innerText = "IG GUEST HOUSE";
  // hotelLink.innerText=
    content.innerHTML = `Rooms air contioned with 24hrs natural clean water facility. The best tasty sea food in Mamallapuram order before see sightseeing return,enjoy you food here. Excellent lake view sunset point along with a sip of coffee here. Parking facility with CCTV secured location. Well contented service.`;
  hotelLink.href =
    "https://www.makemytrip.com/hotels/beach_way_homestay-details-gokarna.html";
  hotelLink.innerText = "Book your day in this Beautiful guest house";
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
});

id3.addEventListener("click", (e) => {
  e.preventDefault();
  topic.textContent = "NIRVANA BOUTIQUE";
  image.src = "imgg3.jpg";
  figcaption.innerText = "NIRVANA BOUTIQUE";
  highlights.innerHTML =
    "A guest house (also guesthouse) is a kind of lodging. In some parts of the world (such as the Caribbean), guest houses are a type of inexpensive hotel-like lodging. In others, it is a private home that has been converted for the exclusive use of lodging";
  content.innerHTML = hotelLink.href = "https://www.makemytrip.com/hotels/beach_way_homestay-details-gokarna.html";
  hotelLink.innerText =  "Resort or Hotel nearby to the spot with rating more than '4.0'";
  // hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
});

id4.addEventListener("click", (e) => {
  e.preventDefault();
  topic.textContent = "KARUKATHAMAMAN TEMPLE";
  image.src = "imgg4.png";
  figcaption.innerText = "KARUKATHAMAMAN TEMPLE";
  highlights.innerHTML = "176, Tirukkalukkundram Rd, Mahabalipuram, Tamil Nadu 603104'";
  content.innerHTML = ` The temple is popular one.It is very neat and calm place to visit in the place.It is a hindu temple.<BR>This temple of Amman is so beautiful with lovable environment. The architecture and the sculptures in the gopuram are exquisite - very sharp. Peaceful with goddess blessings and worth visiting.`
  //  hotelLink.href =
  //   "https://www.booking.com/hotel/in/namaste-yoga-farm.html?aid=380343&group_adults=2&label=Hotel.Details.Right_side_cta.null&hotelname=Namaste%20Yoga%20Farm";
  hotelLink.innerText =
    
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
});

id5.addEventListener("click", (e) => {
  e.preventDefault();
  topic.textContent = "VALAYANKUTTAI RATHA";
  image.src = "imgg5.JPG";
  figcaption.innerText = "VALAYANKUTTAI RATHA";
  highlights.innerHTML = `It is one of the beaten track monuments in Mahabalipuram`;
  // content.innerHTML='' 
  // content.innerHTML = hotelLink.href =
  //   "https://www.booking.com/hotel/in/namaste-yoga-farm.html?aid=380343&group_adults=2&label=Hotel.Details.Right_side_cta.null&hotelname=Namaste%20Yoga%20Farm";
  // hotelLink.innerText =
  // "From the town square take the Thirukalukundram road towards west. It's a 10minutes walk. You can also reach Valayankuttai Ratha from the Mahishamardini Cave, again a 10-15 minutes walk. Other attractions near to this are are the twin rathas called Pidari Rathas<br><br>If you climb atop that large boulder , where the lighthouse is located, you can see the Mahabalipuram backwaters.This is locally called the Valayankuttai , literally the fisherman’s pond in the local parlance. Since this particular temple is located by the side of this lake, locals called it the Valayankuttai Ratha."
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
});

id6.addEventListener("click", (e) => {
  e.preventDefault();
  topic.textContent = "KRISHNA'S BUTTER BALL";
  image.src = "imgg6.jpg";
  figcaption.innerText = "KRISHNA'S BUTTER BALL";
  highlights.innerHTML = "Krishna's Butterball is located in the tourist town Mahabalipuram in Chengalpattu district in the state of Tamil Nadu in south India. It is easily accessible via the East Coast Road (ECR) at a distance of 55 km (34 mi) from Chennai Central railway station and 53 km (33 mi) from Chennai International Airport. To the south, Pondicherry is 95 km (59 mi) distant";
    content.innerHTML = `Krishna's Butterball (also known as Vaan Irai Kal and Krishna's Gigantic Butterball) is a gigantic balancing rock, granite-boulder resting on a short incline in the historical coastal resort town of Mamallapuram in Tamil Nadu state of India`;
  // hotelLink.href = "";
  // hotelLink.innerText = "Krishna's Butterball is located in the tourist town Mahabalipuram in Chengalpattu district in the state of Tamil Nadu in south India. It is easily accessible via the East Coast Road (ECR) at a distance of 55 km (34 mi) from Chennai Central railway station and 53 km (33 mi) from Chennai International Airport. To the south, Pondicherry is 95 km (59 mi) distant";
  image.style.display = "block";
  high.style.display = "block";
});
id7.addEventListener("click", (e) => {
  e.preventDefault();
  topic.textContent = "ARULMIGU SRI STHALA ";
  image.src = "imgg7.JPG";
  figcaption.innerText = "ARULMIGU SRI STHALA";
  highlights.innerHTML ="J58V+X5Q, S Mada St, Mahabalipuram, Tamil Nadu 603104";
    content.innerHTML = `Sthalasayana Perumal Temple is at Mahabalipuram. Constructed in the Dravidian style of architecture, the temple is glorified in the Naalayira Divya Prabandham, the early medieval Tamil canon of the Alvar saints from the 6th to 9th centuries CE.<br><br> As Lord gave darshan in His reclining position , He is praised as Sthala Sayana perumal`;
  // hotelLink.href =
  //   "https://www.makemytrip.com/hotels/beach_way_homestay-details-gokarna.html";
  // hotelLink.innerText = 
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
});
id8.addEventListener("click", (e) => {
  e.preventDefault();
  topic.textContent = "VARAHA CAVE";
  image.src = "imgg8.jfif";
  figcaption.innerText = "VARAHA CAVE";
  highlights.innerHTML =" Varaha Cave Temple is located on the hills of Mahabalipuram town, 4 kilometres (2.5 mi) to the north of the main Mahabalipurm sites of rathas and Shore Temple, on the Coromandel Coast of the Bay of Bengal of the Indian Ocean. Now in the Kanchipuram district, it is approximately 58 kilometres (36 mi) from Chennai city (previously Madras) and about 20 miles (32 km) from Chingelpet.";
    content.innerHTML = `Varaha Cave Temple (i.e., Varaha Mandapa or the Adivaraha Cave) is a rock-cut cave temple located at Mamallapuram, on the Coromandel Coast of the Bay of Bengal in Kancheepuram District in Tamil Nadu, India.It is an example of Indian rock-cut architecture dating from the late 7th century. The temple is one of the finest testimonial to the ancient Hindu rock-cut cave architecture, out of many such caves also called mandapas. Part of the Group of Monuments at Mahabalipuram, the temple is a UNESCO World Heritage Site as inscribed in 1984 under criteria i, ii, iii and iv. The most prominent sculpture in the cave is that of the Hindu god Vishnu in the incarnated form of a Varaha or boar lifting Bhudevi, the mother earth goddess from the sea.`;
  // hotelLink.href =
  //   "https://www.makemytrip.com/hotels/beach_way_homestay-details-gokarna.html";
  // hotelLink.innerText = 
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
});
id9.addEventListener("click", (e) => {
  e.preventDefault();
  topic.textContent = "MAYAN HANDICRAFTS";
  image.src = "imgg9.jpg";
  figcaption.innerText = "MAYAN HANDICRAFTS";
  highlights.innerHTML ="No 30, Five Rathas Road, Mamallapuram, Mahabalipuram - 603104";
    content.innerHTML = `The temple was done by Kalaichemmal M.DuraiRaj, D.T.A.S., Mayan Handicrafts, Mamallapuram.<br><br>

    Temple Architectural work with fully carved sculptures of master quality work is a difficult work. We “Mayan Handicrafts” took the challenging work at yerada village, visakapatinam, andhra pradesh. The Sri Sri Dakshinkedar Mahasamasthan Trust covers the area of 35 acres above the mountain on the sea shore near visakapatinam, yerada village, andhra pradesh.<br><br>
    
    Temple Architectural work in the area of 100feet x 50 feet with garbhagraham height of 61feet in the garbhagraham, anthralayam, muhamandabam and mahamandabam with fully carved 36 pillars.`;
  // hotelLink.href =
  //   "https://www.makemytrip.com/hotels/beach_way_homestay-details-gokarna.html";
  // hotelLink.innerText = 
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
});
id11.addEventListener("click", (e) => {
  e.preventDefault();
  topic.textContent = "MAHABALIPURM ORG";
  image.src = "imgg11.jpg";
  figcaption.innerText = "MAHABALIPURAM ORG";
  highlights.innerHTML ="60,Covelong, East Coast Rd, Mahabalipuram, Tamil Nadu 603104";
    content.innerHTML = `Mamallapuram, or Mahabalipuram, is a town on a strip of land between the Bay of Bengal and the Great Salt Lake, in the south Indian state of Tamil Nadu. It’s known for its temples and monuments built by the Pallava dynasty in the 7th and 8th centuries<br><br>Mamallapuram, is a town in the Chengalpattu district in the south-eastern Indian state of Tamil Nadu, best known for the UNESCO World Heritage Site of 13,500 BCE monument. It is one of the famous tourist sites in India.`;
  // hotelLink.href =
  //   "https://www.makemytrip.com/hotels/beach_way_homestay-details-gokarna.html";
  // hotelLink.innerText = 
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
});
id12.addEventListener("click", (e) => {
  e.preventDefault();
  topic.textContent = "MOONRAKERS";
  image.src = "imgg12.jpg";
  figcaption.innerText = "MOONRAKERS";
  // highlights.innerHTML =
    content.innerHTML = `Here the foods are just wow. Sea foods are very good in taste. Fresh sea foods are prepared here. Superb taste and good environment`;
  hotelLink.href =
    "https://www.makemytrip.com/hotels/beach_way_homestay-details-gokarna.html";
  hotelLink.innerText = "Book your day in this Beautiful Restaurant";
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
});
id13.addEventListener("click", (e) => {
  e.preventDefault();
  topic.textContent = "MARMORIS BEACH LOUNGE";
  image.src = "imgg13.jpg";
  figcaption.innerText = "MARMORIS BEACH LOUNGE";
  highlights.innerHTML ="Marmoris is located at 18, Othavadai Cross Street, Fisherman's Colony, Mamallapuram. Open from 3.30 PM to 7.30 PM on all days.";
    content.innerHTML = `A place with panoramic views of the sea, sunset violets, lush lilac creepers, and the distant sound of the sea casually chatting up: Marmoris is the new beach lounge in town. Located on the edge of Mamallapuram, the three-storey building is conveniently located amidst curio shops, beach wear stalls and leather sandal shops.<br><br> we order their Crunchy Lotus Stems, Pan Seared Sticky Honey Whiskey Chicken, Masala Fried Calamari and Tawa Prawns.`;
  // hotelLink.href =
  //   "https://www.makemytrip.com/hotels/beach_way_homestay-details-gokarna.html";
  // hotelLink.innerText = 
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
});
id14.addEventListener("click", (e) => {
  e.preventDefault();
  topic.textContent = "KALOS BEACH CAFE AND ROOMS";
  image.src = "imgg14.png";
  figcaption.innerText = "KALOS BEACH CAFE AND ROOMS";
  // highlights.innerHTML =
    content.innerHTML = `If you are looking for a beautiful gateway 10 minutes ( by walk) from the main beach of Kalos this is the perfect place for you to enjoy the bliss of our Homestay...`;
  hotelLink.href =
    "https://www.makemytrip.com/hotels/beach_way_homestay-details-gokarna.html";
  hotelLink.innerText = "Book your day in this Beautiful Hotel";
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
});
id15.addEventListener("click", (e) => {
  e.preventDefault();
  topic.textContent = "MAHABALIPURAM RESORT BEACH";
  image.src = "imgg15.jpg";
  figcaption.innerText = "MAHABALIPURAM RESORT BEACH";
  // highlights.innerHTML =
    content.innerHTML = `If you are looking for a beautiful gateway 10 minutes ( by walk) from the main beach of mahabalipuram resort this is the perfect place for you to enjoy the bliss of our Homestay...`;
  hotelLink.href =
    "https://www.makemytrip.com/hotels/beach_way_homestay-details-gokarna.html";
  hotelLink.innerText = "Book your day in this Beautiful Resort";
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
});
id16.addEventListener("click", (e) => {
  e.preventDefault();
  topic.textContent = "GROUP OF MONUMENTS";
  image.src = "imgg16.jpg";
  figcaption.innerText = "GROUP OF MONUMENTS";
  highlights.innerHTML ="Fisherman Colony, Mahabalipuram, Tamil Nadu 603104";
    content.innerHTML = `The group of monuments there consists of rock-cut cave temples, monolithic temples, bas-relief sculptures, and structural temples as well as the excavated remains of temples. The Pallava dynasty, which ruled this area between 6th and 9th centuries CE, created these majestic edifices.`;
  // hotelLink.href =
  //   "https://www.makemytrip.com/hotels/beach_way_homestay-details-gokarna.html";
  // hotelLink.innerText = 
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
});
id17.addEventListener("click", (e) => {
  e.preventDefault();
  topic.textContent = "SHORE TEMPLE";
  image.src = "imgg17.jfif";
  figcaption.innerText = "SHORE TEMPLE";
  // highlights.innerHTML =
    content.innerHTML = `Built during the 7th century, Shore Temple is one of the oldest South Indian temples constructed in the Dravidian style and depicts the royal taste of the Pallava dynasty. The work of the temple has been listed amongst the World Heritage Sites by UNESCO. It is located in Mahabalipuram and is one of the most photographed monuments in India situated on the shores of Bay of Bengal.`;
  // hotelLink.href =
  //   "https://www.makemytrip.com/hotels/beach_way_homestay-details-gokarna.html";
  // hotelLink.innerText = "Book your day in this Beautiful Resort";
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
});
id18.addEventListener("click", (e) => {
  e.preventDefault();
  topic.textContent = "COVELONG BEACH";
  image.src = "imgg18.jpg";
  figcaption.innerText = "COVELONG BEACH";
  // highlights.innerHTML =
    content.innerHTML = `If you are looking for a beautiful gateway 10 minutes ( by walk) from the main beach of Covelong this is the perfect place for you to enjoy the bliss of our Homestay...`;
  hotelLink.href =
    "https://www.makemytrip.com/hotels/beach_way_homestay-details-gokarna.html";
  hotelLink.innerText = "Book your day in this Beautiful Resort";
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
});
id19.addEventListener("click", (e) => {
  e.preventDefault();
  topic.textContent = " SADRAS BEACH";
  image.src = "imgg19.jpg";
  figcaption.innerText = "SADRAS BEACH";
  // highlights.innerHTML =
    content.innerHTML = `If you are looking for a beautiful gateway 10 minutes ( by walk) from the main beach of Sadras this is the perfect place for you to enjoy the bliss of our Homestay...`;
  hotelLink.href =
    "https://www.makemytrip.com/hotels/beach_way_homestay-details-gokarna.html";
  hotelLink.innerText = "Book your day in this Beautiful Resort";
  hotelLink.style.display = "block";
  image.style.display = "block";
  high.style.display = "block";
});
