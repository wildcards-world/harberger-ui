// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Moment from "moment";
import * as TokenId$WildCards from "./TokenId.bs.js";

var orderedArray = [
  /* Apthapi */11,
  /* Vitalik */2,
  /* Nonhlanhla */14,
  /* Cubai */8,
  /* Glen */1,
  /* Simon */3,
  /* Dlala */13,
  /* Aruma */10,
  /* Verano */4,
  /* Pancho */5,
  /* Andy */0,
  /* Llajuita */6,
  /* Espumita */7,
  /* CatStevens */9,
  /* Isisa */12,
  /* Tarkus */15,
  /* Ucok */16
];

function getId(anAnimal) {
  switch (anAnimal) {
    case /* Andy */0 :
        return "1";
    case /* Glen */1 :
        return "13";
    case /* Vitalik */2 :
        return "42";
    case /* Simon */3 :
        return "0";
    case /* Verano */4 :
        return "9";
    case /* Pancho */5 :
        return "7";
    case /* Llajuita */6 :
        return "6";
    case /* Espumita */7 :
        return "8";
    case /* Cubai */8 :
        return "5";
    case /* CatStevens */9 :
        return "4";
    case /* Aruma */10 :
        return "3";
    case /* Apthapi */11 :
        return "2";
    case /* Isisa */12 :
        return "12";
    case /* Dlala */13 :
        return "11";
    case /* Nonhlanhla */14 :
        return "10";
    case /* Tarkus */15 :
        return "15";
    case /* Ucok */16 :
        return "14";
    
  }
}

function getTokenId(anAnimal) {
  switch (anAnimal) {
    case /* Andy */0 :
        return TokenId$WildCards.makeFromInt(1);
    case /* Glen */1 :
        return TokenId$WildCards.makeFromInt(13);
    case /* Vitalik */2 :
        return TokenId$WildCards.makeFromInt(42);
    case /* Simon */3 :
        return TokenId$WildCards.makeFromInt(0);
    case /* Verano */4 :
        return TokenId$WildCards.makeFromInt(9);
    case /* Pancho */5 :
        return TokenId$WildCards.makeFromInt(7);
    case /* Llajuita */6 :
        return TokenId$WildCards.makeFromInt(6);
    case /* Espumita */7 :
        return TokenId$WildCards.makeFromInt(8);
    case /* Cubai */8 :
        return TokenId$WildCards.makeFromInt(5);
    case /* CatStevens */9 :
        return TokenId$WildCards.makeFromInt(4);
    case /* Aruma */10 :
        return TokenId$WildCards.makeFromInt(3);
    case /* Apthapi */11 :
        return TokenId$WildCards.makeFromInt(2);
    case /* Isisa */12 :
        return TokenId$WildCards.makeFromInt(12);
    case /* Dlala */13 :
        return TokenId$WildCards.makeFromInt(11);
    case /* Nonhlanhla */14 :
        return TokenId$WildCards.makeFromInt(10);
    case /* Tarkus */15 :
        return TokenId$WildCards.makeFromInt(15);
    case /* Ucok */16 :
        return TokenId$WildCards.makeFromInt(14);
    
  }
}

function getNameFromId(animalId) {
  switch (animalId) {
    case "0" :
        return "Simon";
    case "1" :
        return "Andy";
    case "10" :
        return "Nonhlanhla";
    case "11" :
        return "Dlala";
    case "12" :
        return "Isisa";
    case "13" :
        return "Glen";
    case "14" :
        return "Ucok";
    case "15" :
        return "Tarkus";
    case "2" :
        return "Apthapi";
    case "3" :
        return "Aruma";
    case "4" :
        return "CatStevens";
    case "42" :
        return "Vitalik";
    case "5" :
        return "Cubai";
    case "6" :
        return "Llajuita";
    case "7" :
        return "Pancho";
    case "8" :
        return "Espumita";
    case "9" :
        return "Verano";
    default:
      return "Unknown";
  }
}

function getName(animalId) {
  switch (animalId) {
    case /* Andy */0 :
        return "Andy";
    case /* Glen */1 :
        return "Glen";
    case /* Vitalik */2 :
        return "Vitalik";
    case /* Simon */3 :
        return "Simon";
    case /* Verano */4 :
        return "Verano";
    case /* Pancho */5 :
        return "Pancho";
    case /* Llajuita */6 :
        return "Llajuita";
    case /* Espumita */7 :
        return "Espumita";
    case /* Cubai */8 :
        return "Cubai";
    case /* CatStevens */9 :
        return "CatStevens";
    case /* Aruma */10 :
        return "Aruma";
    case /* Apthapi */11 :
        return "Apthapi";
    case /* Isisa */12 :
        return "Isisa";
    case /* Dlala */13 :
        return "Dlala";
    case /* Nonhlanhla */14 :
        return "Nonhlanhla";
    case /* Tarkus */15 :
        return "Tarkus";
    case /* Ucok */16 :
        return "Ucok";
    
  }
}

function getAnimal(animalName) {
  var animalNameLower = animalName.toLowerCase();
  switch (animalNameLower) {
    case "andy" :
        return /* Andy */0;
    case "apthapi" :
        return /* Apthapi */11;
    case "aruma" :
        return /* Aruma */10;
    case "catstevens" :
        return /* CatStevens */9;
    case "cubai" :
        return /* Cubai */8;
    case "dlala" :
        return /* Dlala */13;
    case "espumita" :
        return /* Espumita */7;
    case "glen" :
        return /* Glen */1;
    case "isisa" :
        return /* Isisa */12;
    case "llajuita" :
        return /* Llajuita */6;
    case "nonhlanhla" :
        return /* Nonhlanhla */14;
    case "pancho" :
        return /* Pancho */5;
    case "simon" :
        return /* Simon */3;
    case "tarkus" :
        return /* Tarkus */15;
    case "ucok" :
        return /* Ucok */16;
    case "verano" :
        return /* Verano */4;
    case "vitalik" :
        return /* Vitalik */2;
    default:
      return ;
  }
}

function getAnimalFromId(animalId) {
  switch (animalId) {
    case "0" :
        return /* Simon */3;
    case "1" :
        return /* Andy */0;
    case "10" :
        return /* Nonhlanhla */14;
    case "11" :
        return /* Dlala */13;
    case "12" :
        return /* Isisa */12;
    case "13" :
        return /* Glen */1;
    case "14" :
        return /* Ucok */16;
    case "15" :
        return /* Tarkus */15;
    case "2" :
        return /* Apthapi */11;
    case "3" :
        return /* Aruma */10;
    case "4" :
        return /* CatStevens */9;
    case "42" :
        return /* Vitalik */2;
    case "5" :
        return /* Cubai */8;
    case "6" :
        return /* Llajuita */6;
    case "7" :
        return /* Pancho */5;
    case "8" :
        return /* Espumita */7;
    case "9" :
        return /* Verano */4;
    default:
      return ;
  }
}

function getNextPrev(animal) {
  switch (animal) {
    case /* Andy */0 :
        return /* tuple */[
                /* Verano */4,
                /* Vitalik */2
              ];
    case /* Glen */1 :
        return /* tuple */[
                /* Ucok */16,
                /* Isisa */12
              ];
    case /* Vitalik */2 :
        return /* tuple */[
                /* Andy */0,
                /* Simon */3
              ];
    case /* Simon */3 :
        return /* tuple */[
                /* Vitalik */2,
                /* Dlala */13
              ];
    case /* Verano */4 :
        return /* tuple */[
                /* Pancho */5,
                /* Andy */0
              ];
    case /* Pancho */5 :
        return /* tuple */[
                /* Llajuita */6,
                /* Verano */4
              ];
    case /* Llajuita */6 :
        return /* tuple */[
                /* Espumita */7,
                /* Pancho */5
              ];
    case /* Espumita */7 :
        return /* tuple */[
                /* Cubai */8,
                /* Llajuita */6
              ];
    case /* Cubai */8 :
        return /* tuple */[
                /* CatStevens */9,
                /* Espumita */7
              ];
    case /* CatStevens */9 :
        return /* tuple */[
                /* Aruma */10,
                /* Cubai */8
              ];
    case /* Aruma */10 :
        return /* tuple */[
                /* Apthapi */11,
                /* CatStevens */9
              ];
    case /* Apthapi */11 :
        return /* tuple */[
                /* Nonhlanhla */14,
                /* Aruma */10
              ];
    case /* Isisa */12 :
        return /* tuple */[
                /* Glen */1,
                /* Nonhlanhla */14
              ];
    case /* Dlala */13 :
        return /* tuple */[
                /* Simon */3,
                /* Tarkus */15
              ];
    case /* Nonhlanhla */14 :
        return /* tuple */[
                /* Isisa */12,
                /* Apthapi */11
              ];
    case /* Tarkus */15 :
        return /* tuple */[
                /* Dlala */13,
                /* Ucok */16
              ];
    case /* Ucok */16 :
        return /* tuple */[
                /* Tarkus */15,
                /* Glen */1
              ];
    
  }
}

function getImage(animal) {
  switch (animal) {
    case /* Andy */0 :
        return "/img/animals/gorilla3.png";
    case /* Glen */1 :
        return "/img/animals/Glen.png";
    case /* Vitalik */2 :
        return "/img/animals/gorilla1.png";
    case /* Simon */3 :
        return "/img/animals/gorilla2.png";
    case /* Verano */4 :
        return "/img/animals/VeranoTheMackawCropped.png";
    case /* Pancho */5 :
        return "/img/animals/PanchoTheTortoiseCropped.png";
    case /* Llajuita */6 :
        return "/img/animals/LlajuitaTheDeerCropped.png";
    case /* Espumita */7 :
        return "/img/animals/EspumitaThePuma2Cropped.png";
    case /* Cubai */8 :
        return "/img/animals/CubaiTheJaguarCropped.png";
    case /* CatStevens */9 :
        return "/img/animals/catstevenstheocelotCropped.png";
    case /* Aruma */10 :
        return "/img/animals/ArumaTheAndeanBearCropped.png";
    case /* Apthapi */11 :
        return "/img/animals/ApthapiTheTapirCropped.png";
    case /* Isisa */12 :
        return "/img/animals/editedHyena3.png";
    case /* Dlala */13 :
        return "/img/animals/EditedHyena2.png";
    case /* Nonhlanhla */14 :
        return "/img/animals/EditedHyena.png";
    case /* Tarkus */15 :
        return "/img/animals/Tarkus.png";
    case /* Ucok */16 :
        return "/img/animals/Ucok.png";
    
  }
}

function getAlternateImage(animal) {
  switch (animal) {
    case /* Andy */0 :
    case /* Glen */1 :
    case /* Vitalik */2 :
    case /* Simon */3 :
        return ;
    case /* Verano */4 :
        return "/img/animals/Verano.jpg";
    case /* Pancho */5 :
        return "/img/animals/Pancho.jpg";
    case /* Llajuita */6 :
        return "/img/animals/Llajuita.jpg";
    case /* Espumita */7 :
        return "/img/animals/Espumita.jpg";
    case /* Cubai */8 :
        return "/img/animals/Cubai.jpg";
    case /* CatStevens */9 :
        return "/img/animals/CatStevens.jpg";
    case /* Aruma */10 :
        return "/img/animals/Aruma.jpg";
    case /* Apthapi */11 :
        return "/img/animals/Apthapi.jpg";
    case /* Isisa */12 :
        return "/img/animals/Isisa.jpg";
    case /* Dlala */13 :
        return "/img/animals/Dlala.jpg";
    case /* Nonhlanhla */14 :
        return "/img/animals/Nonhlanhla.jpg";
    case /* Tarkus */15 :
        return "/img/animals/TarkusReal.jpg";
    case /* Ucok */16 :
        return "/img/animals/Ucokreal.jpg";
    
  }
}

function getOrgBadgeImage(animal) {
  switch (animal) {
    case /* Glen */1 :
        return "/img/badges/EthTurin.svg";
    case /* Andy */0 :
    case /* Vitalik */2 :
    case /* Simon */3 :
        return "/img/badges/OGBadge.png";
    case /* Isisa */12 :
    case /* Dlala */13 :
    case /* Nonhlanhla */14 :
        return "/img/badges/WildTomorrowBadge.png";
    case /* Verano */4 :
    case /* Pancho */5 :
    case /* Llajuita */6 :
    case /* Espumita */7 :
    case /* Cubai */8 :
    case /* CatStevens */9 :
    case /* Aruma */10 :
    case /* Apthapi */11 :
    case /* Tarkus */15 :
        return "/img/badges/SendaVerdeBadge.png";
    case /* Ucok */16 :
        return "/img/badges/DarwinAnimalDoctors.svg";
    
  }
}

function getStoryParagraphs(animal) {
  switch (animal) {
    case /* Andy */0 :
        return [
                "Original Gorilla",
                "Andy was named after the Crypto Wanderer Andy Tudhope. An interplanetary Cat-herder and early crypto adopter. ",
                "Funds raised by Andy, one of the first wildcards, flow toward the Wild Tomorrow Fund, our first conservation partner."
              ];
    case /* Glen */1 :
        return [
                "It was a tough and trying time in Turin, Italy. A pandemic had taken over the land and the villagers were facing hardships. Unexpectedly nature was prospering, the villagers were in hiding and the flora and fauna of the region was reclaiming its land. Most unexpectedly the dragon returned, which for a long time was believed to be extinct. Glen the Dragon of Turin emerged from the Alps just North of the city. One of the last of his kind.",
                "Glen is a unique Wildcard that is named after Glen Weyl the author of Radical Markets. He was developed during the ETHTurin hackathon. The funds raised by Glen go to the conservation voted by the community. Owners of wildcards can vote using their loyalty tokens using quadratic voting to vote which conservation should receive the funds raised for that month."
              ];
    case /* Vitalik */2 :
        return [
                "Original Gorilla",
                "Vitalik is the first ever animal launched on wildcards and therefore often termed an OG (Original Gorilla). The wildcards project was born at the #ETHCapeTown hackathon in May 2019 where Vitalik Buterin was one of the judges. We named Vitalik the Gorilla after Vitalik as a testament to the impact and innovation Vitalik Buterin has had on the blockchain ecosystem. Vitalik, if you are reading this, start saving some animals and buy me!",
                "Funds raised by Vitalik, initially, will go to Wild Tomorrow Fund; however Vitalik doesn't represent a real gorilla, and funds for Vitalik may be distributed via another allocation mechanism in the future (DAO or otherwise)."
              ];
    case /* Simon */3 :
        return [
                "Original Gorilla",
                "Simon, named after Simon de la Rouviere originated from the deep dark github jungle, and his code 'this artwork is always on sale' inspired this project. He is a wizard who put us on the right track. He has helped inform some of our design decisions regarding our subsequent smart contracts, and always been willing to lend some great advice or checkout a GitHub issue for us.",
                "Funds raised by Simon, one of the first wildcards, flow toward the Wild Tomorrow Fund, our first conservation partner."
              ];
    case /* Verano */4 :
        return [
                "Verano is a victim of illegal wildlife trafficking. He was confiscated when he was being transported to the black market in the city of La Paz. Macaws and especially Blue-and-Yellow macaws have been an all time favourite for the pet trade market. They are very smart birds and in comparison to other wildlife, are easily domesticated. They are beloved because of their intelligence, their ability to imitate sounds, their beauty and their companionship.",
                "In countries like the United States, Blue-and-Yellow Macaws are raised as pets and a legal pet market exists for them. This is not the case in Bolivia however. There are absolutely no regulations on the matter and all pet parrots and macaws come from the illegal market. This means that they were stolen when chicks from their nests and went through a lot of suffering being transported illegally in hide-outs where they can barely breathe. Once with their final owners, their life is not always the best. Most parrot and macaw owners in Bolivia have no knowledge on the dietary and life requirements for these animals and they normally survive in very precarious conditions. Many of them are kept in La Paz, where low temperatures and high altitude are far from the suitable environment they need.",
                "When macaws like Verano arrive to La Senda Verde, they normally do so with their plumage deteriorated and with signs of psychological trauma. They go through a long recovery phase until they can be finally released into our new large aviaries, where they receive all the attention they need."
              ];
    case /* Pancho */5 :
        return [
                "Pancho is a large tortoise that was rescued before he was going to be cooked. He had spent by then a long time as a pet and that can be seen by the deformations on his shell, which show mistreatment and poor feeding habits.",
                "Pancho is one of the many tortoises that have similar stories and that arrive in large numbers to La Senda Verde. Tortoises are easy to catch in the rainforest and for that reason many of them are often taken to be sold as pets."
              ];
    case /* Llajuita */6 :
        return [
                "Llajuita arrived at La Senda Verde with 8-10 months of age along with Apthapi the Tapir, which has the same age. They come from a confiscation performed by the Forestry and Environment Police (POFOMA) in Palos Blancos, North of La Paz. Both mammals are large and require a lot of space. They are also both foragers and get along well.",
                "They lived in a small enclosure until Senda Verde was able to build a larger one for them. The new enclosure has a pool since Tapirs need to swim. For both foraging mammals Senda Verde has alfalfa growing in the enclosure. Sadly in the dry season this alfalfa dries out and runs scarce and Senda Verde has trouble staying to date with these forager's diets."
              ];
    case /* Espumita */7 :
        return [
                "Espumita has been with La Senda Verde for just over two years. She came as a small kitten from the authorities in La Paz who had confiscated her from a poacher. At the time La Senda Verde didn't have anywhere suitable to accommodate her and as a small kitten she spent her first few months in the clinic. La Senda Verde raised funds and built her a management cage whilst she was still growing. Then, at the beginning of 2017 they completed her full sized enclosure with high platforms, on a hill so she can get to higher ground and with a den at the top that she loves to sit in and watch out from.",
                "Espumita has always been quite a shy and easily stressed cat but loves her new home. In December Espumita had unfortunately been under stress and was pacing a lot due to recent construction works going on close to her enclosure. Unfortunately, Espumita also wasn't eating very well and had lost condition. Eight weeks ago, la Senda Verde sedated her and a visiting group of vets studying ultrasonography came and performed an ultrasound on her and we were able to give her a thorough check. It was found that she likely had some mild hepatic lipidosis (a form of liver disease) which was also contributing to her loss of appetite.",
                "Along with one of the sanctuary staff members, Vicky from Senda Verde started to add in extra enrichment every day for Espumita and slightly change the time and way in which she was fed. Luckily, at this time the construction was also finished. Over the next eight weeks there was an amazing transformation! Espumita started to eat normally, gain weight and is noticeably more relaxed and confident. She comes down to greet the staff from la Senda Verde every time they go for enrichment or cleaning and feeding (which she never did before) and Senda Verde hasn't seen her do any pacing that she was doing before.",
                "She absolutely loves cardboard boxes of any shape or size! La Senda Verde started off with relaxing smells such as chamomile flowers and lavender in cardboard boxes. They have also been using feathers which she loves. She is still a huge fan of lavender and will roll in it and will then often have a mad ten minutes running all over her enclosure with the box and up on her platforms having so much fun."
              ];
    case /* Cubai */8 :
        return [
                "Cubai is a 15 year old Jaguar that in 2017 was relocated from a private property in the Yungas region to the La Paz Zoo. The animal was in good hands, but his advanced age mixed with the cold weather and the high altitude of La Paz, were beginning to affect his health, he needed a lower place to live in.",
                "It was then that the authorities asked Senda Verde if they could receive him. In face of the urgency they decided to do so and make him part of their family. Cubai arrived on the 20th of November and at the beginning was being kept in a small, temporary enclosure, while la senda verde gathered funds to build him a proper enclosure.",
                "Luckily he didn't stay there for long. A few months were enough to build a brand new enclosure, with management cage, platform, pool, the whole works! The place where it's located has a lot of trees, vegetation and is near the river. He now spends his days playing around and enjoying a space he never had before in his lifetime."
              ];
    case /* CatStevens */9 :
        return [
                "Cat Stevens is a male Ocelot that was rescued by an engineer working at the San Buenaventura sugar factory. This Factory was finished in 2016 and was built in the middle of the northern Madidi forests, just outside the national park. There is no suitable land to grow sugar cane to feed this factory, so they have simply chosen to destroy the nearby primary rainforest for that. So far 1,200 hectares have been destroyed to lay way for the cane plantations, and many more are coming. Thousands of animals have seen their homes destroyed before their eyes. Cat Stevens is one of them. Clear-cutting of the forest happened so fast (two years) that these animals didn't have time to run somewhere else or fall prey to local bush-meat hunters. They simply where left there to wonder in what once was a forest.",
                "Cat Stevens was a baby then seen wondering around in a empty field by one of the engineers. He had probably lost his mother and was probably going to die if he wasn't rescued by the engineer. Cat Stevens was a small cat when he arrived. He was underweight and la Senda Verde noticed he could not walk too well, but assumed it was because of age and undernourishment. After a month, he gained weight and suddenly stopped walking. He was taken to La Paz for X-ray and noticed he had an old fracture that would not heal due to decalcification. After a couple of weeks of feeding him with cat formula, he recovered and started to walk again. Cat Stevens was alone for a few months until Cat Iris arrival, a female ocelot. They where put together and get along well."
              ];
    case /* Aruma */10 :
        return [
                "Aruma was the first bear to arrive at la Senda Verde and was the game-changer for them. After he arrived they knew that our mission was to shelter and rescue animals. Aruma means 'night' in Aymara language.",
                "A little boy and his dad had stumbled in the forest upon a mother bear with two cubs. The mother and one of the cubs ran away but the other cub stood there frozen. The cub was taken by the little boy and he tried to sell it in the town of Quime. The doctor in town noticed that the cub had terrible diarrhea, called the police and the bear cub was confiscated from the little boy. The doctor arrived in La Paz at 4 am, and called Animals SOS. Aruma stayed with a volunteer for 2 months while he was getting medical treatment, until he was sent to La Senda Verde in December 2007."
              ];
    case /* Apthapi */11 :
        return ["Apthapi arrived at La Senda Verde with 8-10 months of age along with a female deer of the same age. They came from a confiscation performed by the Forestry and Environment Police (POFOMA) in Palos Blancos, North of La Paz. The tapir is the largest mammal in South America. They are known to be the 'gardeners of the forest' because they are nutrient recyclers. They are also excellent swimmers."];
    case /* Isisa */12 :
        return ["Isisa is a 10 year old female spotted hyena in a small clan who inhabit the rocky outcrops and low-lying mountains of Zululand. Isisa is the mother of the young male hyena Dlala and is often seen in the Tamboti tree lined drainage canyons in the area. She is an incredibly successful hunter and is often found to have brought down large nyala antelope by herself. "];
    case /* Dlala */13 :
        return ["Dlala is a young male spotted hyena, currently about 13 months old. At this age he has recently grown large enough to leave the safety of his clan's den and is out exploring the world within their territory. Too young to breed, his current existence is more about learning and interacting with his new environment; in Zulu his name means \"play\"."];
    case /* Nonhlanhla */14 :
        return ["Nonhlanhla is an 11 year old female spotted hyena who lives in the forests and grasslands of central Zululand, South Africa. Though spotted hyenas can be difficult to see in this area, Nonhlanhla is a particularly great breeder in her clan having cubs regularly, meaning she is seen often at the den site nursing her young. In an area where spotted hyenas are persecuted and there is evidence for their decline, her name in Zulu, appropriately means \"luck\"."];
    case /* Tarkus */15 :
        return [
                "Tarkus was found on the roadside by a trucker in a section between Sucre and Tarija where Andean bears are known to exist. A female bear got scared by the truck and ran with the two cubs. The smallest one fell a bit behind. The trucker decided to stop, capture the cub and take him to his house, where he kept him for more than two weeks. Later he called the environmental authorities in the City of Tarija to turn him in. Capturing the cub is never a good idea, it is virtually condemning him to a life in captivity for he will never be able to learn the abilities to survive in the wild his mother would have taught him. If he would have been left alone, the mother would have come back for him later.",
                "Tarkus stayed in Tarija for three weeks while the formal requirements were fulfilled. National authorities advised he should be sent to La Senda Verde, where there is a place for the cub, but also the experience of raising bear cubs with appropriate diet and management. He has been placed in a 6x5x6 enclosure, just for him, and he has been getting used to the refuge and the caretakers.",
                "Tarkus has adapted well to the refuge and loves to play with the ball and in the water."
              ];
    case /* Ucok */16 :
        return ["Ucok is a baby sun bear who was taken way too young from his mom, and sold into wildlife trafficking. However, Darwin Animal Doctors local partner team, the Indonesian Species Conservation Program (ISCP) rescued him from the black market. Ucok is now being rehabilitated at the BKSDA - the Indonesian wildlife authority. Ucok is understandably often quite sad, because he misses his mom. But, he regularly overcomes his sadness to be an extremely curious and inquisitive boy and he loves to test his rehab team's boundaries! He is quite mischievous, which tells us he's a smart boy!"];
    
  }
}

function pledgeRate(animal) {
  switch (animal) {
    case /* Glen */1 :
        return /* tuple */[
                "6",
                "10",
                0.05,
                20
              ];
    case /* Vitalik */2 :
        return /* tuple */[
                "3",
                "10",
                0.025,
                40
              ];
    case /* Verano */4 :
        return /* tuple */[
                "120",
                "10",
                1,
                1
              ];
    case /* Pancho */5 :
    case /* Apthapi */11 :
        return /* tuple */[
                "12",
                "10",
                0.1,
                10
              ];
    case /* Andy */0 :
    case /* Simon */3 :
    case /* Llajuita */6 :
    case /* CatStevens */9 :
    case /* Aruma */10 :
    case /* Dlala */13 :
    case /* Nonhlanhla */14 :
    case /* Tarkus */15 :
        return /* tuple */[
                "24",
                "10",
                0.2,
                5
              ];
    case /* Espumita */7 :
    case /* Cubai */8 :
    case /* Isisa */12 :
    case /* Ucok */16 :
        return /* tuple */[
                "60",
                "10",
                0.5,
                2
              ];
    
  }
}

var nextLaunchDate = Moment.utc("2020-05-21T17:00:00");

function isLaunched(anAnimal) {
  if (anAnimal !== 15) {
    return /* Launched */0;
  } else {
    return /* LaunchDate */[nextLaunchDate];
  }
}

function hasGovernance(anAnimal) {
  return anAnimal === 1;
}

export {
  orderedArray ,
  getId ,
  getTokenId ,
  getNameFromId ,
  getName ,
  getAnimal ,
  getAnimalFromId ,
  getNextPrev ,
  getImage ,
  getAlternateImage ,
  getOrgBadgeImage ,
  getStoryParagraphs ,
  pledgeRate ,
  nextLaunchDate ,
  isLaunched ,
  hasGovernance ,
  
}
/* nextLaunchDate Not a pure module */
