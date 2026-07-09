// ELEMENTS
const elements = [
{"number":1,"symbol":"H","name":"Hydrogen","mass":"1.008","category":"gas(NonMetal)","year":1766,"valency":1,"config":"1s1","mp":-259,"bp":-252,"electronegativity":2.20,"ionizationEnergy":1312,"density":0.0000899,"atomicRadius":53,"oxidationStates":[1,-1],"scientist":"Henry Cavendish","info1":"Hydrogen is the lightest and most abundant element in the universe.","info2":"It is used in fuel cells, rockets, and ammonia production.","infoLink":"https://en.wikipedia.org/wiki/Hydrogen"},

{"number":2,"symbol":"He","name":"Helium","mass":"4.0026","category":"Noble Gas(NonMetal)","year":1895,"valency":0,"config":"1s2","mp":-272,"bp":-269,"electronegativity":null,"ionizationEnergy":2372,"density":0.0001785,"atomicRadius":31,"oxidationStates":[0],"scientist":"William Ramsay","info1":"Helium is a colorless, odorless, inert noble gas.","info2":"It is used in balloons, cryogenics, and MRI cooling systems.","infoLink":"https://en.wikipedia.org/wiki/Helium"},

{"number":3,"symbol":"Li","name":"Lithium","mass":"6.94","category":"alkali metal","year":1817,"valency":1,"config":"[He] 2s1","mp":180,"bp":1342,"electronegativity":0.98,"ionizationEnergy":520,"density":0.534,"atomicRadius":167,"oxidationStates":[1],"scientist":"Arfwedson","info1":"Lithium is a soft, silvery-white alkali metal.","info2":"It is mainly used in rechargeable batteries and medicine.","infoLink":"https://en.wikipedia.org/wiki/Lithium"},

{"number":4,"symbol":"Be","name":"Beryllium","mass":"9.0122","category":"alkaline earth metal","year":1798,"valency":2,"config":"[He] 2s2","mp":1287,"bp":2471,"electronegativity":1.57,"ionizationEnergy":900,"density":1.85,"atomicRadius":112,"oxidationStates":[2],"scientist":"Vauquelin","info1":"Beryllium is a hard, lightweight metal.","info2":"It is used in aerospace components and X-ray equipment.","infoLink":"https://en.wikipedia.org/wiki/Beryllium"},

{"number":5,"symbol":"B","name":"Boron","mass":"10.81","category":"metalloid","year":1808,"valency":3,"config":"[He] 2s2 2p1","mp":2076,"bp":4000,"electronegativity":2.04,"ionizationEnergy":801,"density":2.34,"atomicRadius":87,"oxidationStates":[3],"scientist":"Davy/Gay-Lussac/Thénard","info1":"Boron is a hard, black metalloid.","info2":"It is used in glass, detergents, and semiconductors.","infoLink":"https://en.wikipedia.org/wiki/Boron"},

{"number":6,"symbol":"C","name":"Carbon","mass":"12.011","category":"gas(NonMetal)","year":"ancient","valency":4,"config":"[He] 2s2 2p2","mp":3550,"bp":4827,"electronegativity":2.55,"ionizationEnergy":1086,"density":2.26,"atomicRadius":67,"oxidationStates":[4,2,-4],"scientist":"Unknown","info1":"Carbon is the foundation of all known life.","info2":"It forms diamond, graphite, and organic compounds.","infoLink":"https://en.wikipedia.org/wiki/Carbon"},

{"number":7,"symbol":"N","name":"Nitrogen","mass":"14.007","category":"gas(NonMetal)","year":1772,"valency":3,"config":"[He] 2s2 2p3","mp":-210,"bp":-196,"electronegativity":3.04,"ionizationEnergy":1402,"density":0.0012506,"atomicRadius":56,"oxidationStates":[5,4,3,2,1,-1,-2,-3],"scientist":"Daniel Rutherford","info1":"Nitrogen makes up about 78% of Earth’s atmosphere.","info2":"It is used in fertilizers and food preservation.","infoLink":"https://en.wikipedia.org/wiki/Nitrogen"},

{"number":8,"symbol":"O","name":"Oxygen","mass":"15.999","category":"gas(NonMetal)","year":1774,"valency":2,"config":"[He] 2s2 2p4","mp":-218,"bp":-183,"electronegativity":3.44,"ionizationEnergy":1314,"density":0.001429,"atomicRadius":48,"oxidationStates":[-2,-1,1,2],"scientist":"Priestley/Scheele","info1":"Oxygen is essential for respiration in living organisms.","info2":"It is used in medical care, welding, and steelmaking.","infoLink":"https://en.wikipedia.org/wiki/Oxygen"},

{"number":9,"symbol":"F","name":"Fluorine","mass":"18.998","category":"halogen(Nonmetal)","year":1886,"valency":1,"config":"[He] 2s2 2p5","mp":-220,"bp":-188,"electronegativity":3.98,"ionizationEnergy":1681,"density":0.001696,"atomicRadius":42,"oxidationStates":[-1],"scientist":"Moissan","info1":"Fluorine is the most reactive and electronegative element.","info2":"It is used in toothpaste, Teflon, and water fluoridation.","infoLink":"https://en.wikipedia.org/wiki/Fluorine"},

{"number":10,"symbol":"Ne","name":"Neon","mass":"20.180","category":"Noble Gas(NonMetal)","year":1898,"valency":0,"config":"[He] 2s2 2p6","mp":-249,"bp":-246,"electronegativity":null,"ionizationEnergy":2081,"density":0.0008999,"atomicRadius":38,"oxidationStates":[0],"scientist":"Ramsay & Travers","info1":"Neon is a noble gas known for its bright reddish-orange glow.","info2":"It is commonly used in advertising signs and lighting.","infoLink":"https://en.wikipedia.org/wiki/Neon"},

{"number":11,"symbol":"Na","name":"Sodium","mass":"22.990","category":"alkali metal","year":1807,"valency":1,"config":"[Ne] 3s1","mp":98,"bp":883,"electronegativity":0.93,"ionizationEnergy":496,"density":0.97,"atomicRadius":190,"oxidationStates":[1],"scientist":"Humphry Davy","info1":"Sodium is a soft, highly reactive alkali metal.","info2":"It is essential for nerve function and found in table salt.","infoLink":"https://en.wikipedia.org/wiki/Sodium"},

{"number":12,"symbol":"Mg","name":"Magnesium","mass":"24.305","category":"alkaline earth metal","year":1755,"valency":2,"config":"[Ne] 3s2","mp":650,"bp":1091,"electronegativity":1.31,"ionizationEnergy":738,"density":1.74,"atomicRadius":145,"oxidationStates":[2],"scientist":"Black","info1":"Magnesium is a lightweight, silvery metal.","info2":"It is used in alloys, fireworks, and is vital for human health.","infoLink":"https://en.wikipedia.org/wiki/Magnesium"},

{"number":13,"symbol":"Al","name":"Aluminium","mass":"26.982","category":"post-transition metal","year":1825,"valency":3,"config":"[Ne] 3s2 3p1","mp":660,"bp":2467,"electronegativity":1.61,"ionizationEnergy":578,"density":2.70,"atomicRadius":118,"oxidationStates":[3],"scientist":"Oersted","info1":"Aluminium is a lightweight and corrosion-resistant metal.","info2":"It is widely used in packaging, construction, and transport.","infoLink":"https://en.wikipedia.org/wiki/Aluminium"},

{"number":14,"symbol":"Si","name":"Silicon","mass":"28.085","category":"metalloid","year":1824,"valency":4,"config":"[Ne] 3s2 3p2","mp":1414,"bp":2900,"electronegativity":1.90,"ionizationEnergy":787,"density":2.33,"atomicRadius":111,"oxidationStates":[4,-4],"scientist":"Berzelius","info1":"Silicon is a hard, brittle metalloid.","info2":"It is the main material used in computer chips and solar cells.","infoLink":"https://en.wikipedia.org/wiki/Silicon"},

{"number":15,"symbol":"P","name":"Phosphorus","mass":"30.974","category":"gas(NonMetal)","year":1669,"valency":3,"config":"[Ne] 3s2 3p3","mp":44,"bp":280,"electronegativity":2.19,"ionizationEnergy":1012,"density":1.82,"atomicRadius":98,"oxidationStates":[5,3,-3],"scientist":"Brand","info1":"Phosphorus exists in several forms including white and red.","info2":"It is essential for DNA, bones, and fertilizers.","infoLink":"https://en.wikipedia.org/wiki/Phosphorus"},

{"number":16,"symbol":"S","name":"Sulfur","mass":"32.06","category":"gas(NonMetal)","year":"ancient","valency":2,"config":"[Ne] 3s2 3p4","mp":115,"bp":445,"electronegativity":2.58,"ionizationEnergy":1000,"density":2.07,"atomicRadius":88,"oxidationStates":[6,4,2,-2],"scientist":"Unknown","info1":"Sulfur is a yellow, brittle nonmetal.","info2":"It is used in fertilizers, chemicals, and vulcanization of rubber.","infoLink":"https://en.wikipedia.org/wiki/Sulfur"},

{"number":17,"symbol":"Cl","name":"Chlorine","mass":"35.45","category":"halogen(Nonmetal)","year":1774,"valency":1,"config":"[Ne] 3s2 3p5","mp":-101,"bp":-34,"electronegativity":3.16,"ionizationEnergy":1251,"density":0.003214,"atomicRadius":79,"oxidationStates":[7,5,3,1,-1],"scientist":"Scheele","info1":"Chlorine is a greenish-yellow toxic gas.","info2":"It is used in water purification and disinfectants.","infoLink":"https://en.wikipedia.org/wiki/Chlorine"},

{"number":18,"symbol":"Ar","name":"Argon","mass":"39.948","category":"Noble Gas(NonMetal)","year":1894,"valency":0,"config":"[Ne] 3s2 3p6","mp":-189,"bp":-186,"electronegativity":null,"ionizationEnergy":1521,"density":0.0017837,"atomicRadius":71,"oxidationStates":[0],"scientist":"Ramsay & Rayleigh","info1":"Argon is an inert noble gas present in air.","info2":"It is used in welding and in incandescent light bulbs.","infoLink":"https://en.wikipedia.org/wiki/Argon"},

{"number":19,"symbol":"K","name":"Potassium","mass":"39.098","category":"alkali metal","year":1807,"valency":1,"config":"[Ar] 4s1","mp":64,"bp":759,"electronegativity":0.82,"ionizationEnergy":419,"density":0.86,"atomicRadius":243,"oxidationStates":[1],"scientist":"Humphry Davy","info1":"Potassium is a soft and highly reactive metal.","info2":"It is essential for muscle contraction and nerve signals.","infoLink":"https://en.wikipedia.org/wiki/Potassium"},

{"number":20,"symbol":"Ca","name":"Calcium","mass":"40.078","category":"alkaline earth metal","year":"ancient","valency":2,"config":"[Ar] 4s2","mp":842,"bp":1484,"electronegativity":1.00,"ionizationEnergy":590,"density":1.55,"atomicRadius":194,"oxidationStates":[2],"scientist":"Unknown","info1":"Calcium is a reactive alkaline earth metal.","info2":"It is essential for strong bones, teeth, and muscle function.","infoLink":"https://en.wikipedia.org/wiki/Calcium"},

{"number":21,"symbol":"Sc","name":"Scandium","mass":"44.956","category":"transition metal","year":1879,"valency":3,"config":"[Ar] 3d1 4s2","mp":1541,"bp":2836,"electronegativity":1.36,"ionizationEnergy":633,"density":2.99,"atomicRadius":184,"oxidationStates":[3],"scientist":"Nilson","info1":"Scandium is a soft, silvery transition metal.","info2":"Used in aerospace alloys and sports equipment.","infoLink":"https://en.wikipedia.org/wiki/Scandium"},

{"number":22,"symbol":"Ti","name":"Titanium","mass":"47.867","category":"transition metal","year":1791,"valency":4,"config":"[Ar] 3d2 4s2","mp":1668,"bp":3287,"electronegativity":1.54,"ionizationEnergy":659,"density":4.54,"atomicRadius":176,"oxidationStates":[4,3],"scientist":"Gregor","info1":"Titanium is strong and corrosion resistant.","info2":"Used in aircraft, implants, and pigments.","infoLink":"https://en.wikipedia.org/wiki/Titanium"},

{"number":23,"symbol":"V","name":"Vanadium","mass":"50.942","category":"transition metal","year":1801,"valency":5,"config":"[Ar] 3d3 4s2","mp":1910,"bp":3407,"electronegativity":1.63,"ionizationEnergy":651,"density":6.11,"atomicRadius":171,"oxidationStates":[5,4,3,2],"scientist":"del Río","info1":"Vanadium is a hard, silvery-grey metal.","info2":"Used in steel alloys and catalysts.","infoLink":"https://en.wikipedia.org/wiki/Vanadium"},

{"number":24,"symbol":"Cr","name":"Chromium","mass":"51.996","category":"transition metal","year":1797,"valency":3,"config":"[Ar] 3d5 4s1","mp":1907,"bp":2671,"electronegativity":1.66,"ionizationEnergy":653,"density":7.19,"atomicRadius":166,"oxidationStates":[6,3,2],"scientist":"Vauquelin","info1":"Chromium is hard and shiny.","info2":"Used in stainless steel and plating.","infoLink":"https://en.wikipedia.org/wiki/Chromium"},

{"number":25,"symbol":"Mn","name":"Manganese","mass":"54.938","category":"transition metal","year":1774,"valency":2,"config":"[Ar] 3d5 4s2","mp":1246,"bp":2061,"electronegativity":1.55,"ionizationEnergy":717,"density":7.21,"atomicRadius":161,"oxidationStates":[7,4,2],"scientist":"Gahn","info1":"Manganese is a brittle metal.","info2":"Important in steel production.","infoLink":"https://en.wikipedia.org/wiki/Manganese"},

{"number":26,"symbol":"Fe","name":"Iron","mass":"55.845","category":"transition metal","year":"ancient","valency":2,"config":"[Ar] 3d6 4s2","mp":1538,"bp":2862,"electronegativity":1.83,"ionizationEnergy":762,"density":7.87,"atomicRadius":156,"oxidationStates":[3,2],"scientist":"Unknown","info1":"Iron is essential for blood hemoglobin.","info2":"Main component of steel.","infoLink":"https://en.wikipedia.org/wiki/Iron"},

{"number":27,"symbol":"Co","name":"Cobalt","mass":"58.933","category":"transition metal","year":1735,"valency":2,"config":"[Ar] 3d7 4s2","mp":1495,"bp":2927,"electronegativity":1.88,"ionizationEnergy":760,"density":8.90,"atomicRadius":152,"oxidationStates":[3,2],"scientist":"Brandt","info1":"Cobalt is a hard, lustrous metal.","info2":"Used in batteries and blue pigments.","infoLink":"https://en.wikipedia.org/wiki/Cobalt"},

{"number":28,"symbol":"Ni","name":"Nickel","mass":"58.693","category":"transition metal","year":1751,"valency":2,"config":"[Ar] 3d8 4s2","mp":1455,"bp":2913,"electronegativity":1.91,"ionizationEnergy":737,"density":8.90,"atomicRadius":149,"oxidationStates":[2,3],"scientist":"Cronstedt","info1":"Nickel is corrosion-resistant.","info2":"Used in coins and stainless steel.","infoLink":"https://en.wikipedia.org/wiki/Nickel"},

{"number":29,"symbol":"Cu","name":"Copper","mass":"63.546","category":"transition metal","year":"ancient","valency":2,"config":"[Ar] 3d10 4s1","mp":1085,"bp":2562,"electronegativity":1.90,"ionizationEnergy":746,"density":8.96,"atomicRadius":145,"oxidationStates":[2,1],"scientist":"Unknown","info1":"Copper is an excellent conductor.","info2":"Used in electrical wiring.","infoLink":"https://en.wikipedia.org/wiki/Copper"},

{"number":30,"symbol":"Zn","name":"Zinc","mass":"65.38","category":"transition metal","year":1746,"valency":2,"config":"[Ar] 3d10 4s2","mp":420,"bp":907,"electronegativity":1.65,"ionizationEnergy":906,"density":7.14,"atomicRadius":142,"oxidationStates":[2],"scientist":"Marggraf","info1":"Zinc is used for galvanizing steel.","info2":"Essential trace element.","infoLink":"https://en.wikipedia.org/wiki/Zinc"},

{"number":31,"symbol":"Ga","name":"Gallium","mass":"69.723","category":"post-transition metal","year":1875,"valency":3,"config":"[Ar] 3d10 4s2 4p1","mp":30,"bp":2403,"electronegativity":1.81,"ionizationEnergy":579,"density":5.91,"atomicRadius":136,"oxidationStates":[3],"scientist":"Lecoq de Boisbaudran","info1":"Gallium melts near room temperature.","info2":"Used in semiconductors.","infoLink":"https://en.wikipedia.org/wiki/Gallium"},

{"number":32,"symbol":"Ge","name":"Germanium","mass":"72.630","category":"metalloid","year":1886,"valency":4,"config":"[Ar] 3d10 4s2 4p2","mp":938,"bp":2833,"electronegativity":2.01,"ionizationEnergy":762,"density":5.32,"atomicRadius":125,"oxidationStates":[4,2],"scientist":"Winkler","info1":"Germanium is a brittle metalloid.","info2":"Used in fiber optics and electronics.","infoLink":"https://en.wikipedia.org/wiki/Germanium"},

{"number":33,"symbol":"As","name":"Arsenic","mass":"74.922","category":"metalloid","year":"ancient","valency":3,"config":"[Ar] 3d10 4s2 4p3","mp":817,"bp":614,"electronegativity":2.18,"ionizationEnergy":947,"density":5.72,"atomicRadius":114,"oxidationStates":[5,3,-3],"scientist":"Unknown","info1":"Arsenic is toxic.","info2":"Used in semiconductors.","infoLink":"https://en.wikipedia.org/wiki/Arsenic"},

{"number":34,"symbol":"Se","name":"Selenium","mass":"78.971","category":"gas(NonMetal)","year":1817,"valency":2,"config":"[Ar] 3d10 4s2 4p4","mp":221,"bp":685,"electronegativity":2.55,"ionizationEnergy":941,"density":4.81,"atomicRadius":103,"oxidationStates":[6,4,-2],"scientist":"Berzelius","info1":"Selenium is a nonmetal.","info2":"Used in glass and electronics.","infoLink":"https://en.wikipedia.org/wiki/Selenium"},

{"number":35,"symbol":"Br","name":"Bromine","mass":"79.904","category":"halogen(Nonmetal)","year":1826,"valency":1,"config":"[Ar] 3d10 4s2 4p5","mp":-7,"bp":59,"electronegativity":2.96,"ionizationEnergy":1140,"density":3.12,"atomicRadius":94,"oxidationStates":[5,3,1,-1],"scientist":"Balard","info1":"Bromine is a reddish-brown liquid.","info2":"Used in flame retardants.","infoLink":"https://en.wikipedia.org/wiki/Bromine"},

{"number":36,"symbol":"Kr","name":"Krypton","mass":"83.798","category":"Noble Gas(NonMetal)","year":1898,"valency":0,"config":"[Ar] 3d10 4s2 4p6","mp":-157,"bp":-153,"electronegativity":3.00,"ionizationEnergy":1351,"density":0.00375,"atomicRadius":88,"oxidationStates":[0,2],"scientist":"Ramsay & Travers","info1":"Krypton is a noble gas.","info2":"Used in lighting and lasers.","infoLink":"https://en.wikipedia.org/wiki/Krypton"},

{"number":37,"symbol":"Rb","name":"Rubidium","mass":"85.468","category":"alkali metal","year":1861,"valency":1,"config":"[Kr] 5s1","mp":39,"bp":688,"electronegativity":0.82,"ionizationEnergy":403,"density":1.53,"atomicRadius":265,"oxidationStates":[1],"scientist":"Bunsen & Kirchhoff","info1":"Rubidium is very reactive.","info2":"Used in research.","infoLink":"https://en.wikipedia.org/wiki/Rubidium"},

{"number":38,"symbol":"Sr","name":"Strontium","mass":"87.62","category":"alkaline earth metal","year":1790,"valency":2,"config":"[Kr] 5s2","mp":777,"bp":1377,"electronegativity":0.95,"ionizationEnergy":549,"density":2.64,"atomicRadius":219,"oxidationStates":[2],"scientist":"Crawford","info1":"Strontium gives red flame color.","info2":"Used in fireworks.","infoLink":"https://en.wikipedia.org/wiki/Strontium"},

{"number":39,"symbol":"Y","name":"Yttrium","mass":"88.906","category":"transition metal","year":1794,"valency":3,"config":"[Kr] 4d1 5s2","mp":1526,"bp":3336,"electronegativity":1.22,"ionizationEnergy":600,"density":4.47,"atomicRadius":212,"oxidationStates":[3],"scientist":"Gadolin","info1":"Yttrium is a rare-earth element.","info2":"Used in LEDs and phosphors.","infoLink":"https://en.wikipedia.org/wiki/Yttrium"},

{"number":40,"symbol":"Zr","name":"Zirconium","mass":"91.224","category":"transition metal","year":1789,"valency":4,"config":"[Kr] 4d2 5s2","mp":1855,"bp":4409,"electronegativity":1.33,"ionizationEnergy":640,"density":6.52,"atomicRadius":206,"oxidationStates":[4],"scientist":"Klaproth","info1":"Zirconium resists corrosion.","info2":"Used in nuclear reactors.","infoLink":"https://en.wikipedia.org/wiki/Zirconium"},

{"number":41,"symbol":"Nb","name":"Niobium","mass":"92.906","category":"transition metal","year":1801,"valency":5,"config":"[Kr] 4d4 5s1","mp":2477,"bp":4744,"electronegativity":1.6,"ionizationEnergy":652,"density":8.57,"atomicRadius":198,"oxidationStates":[5,3],"scientist":"Hatchett","info1":"Niobium strengthens steel.","info2":"Used in superconductors.","infoLink":"https://en.wikipedia.org/wiki/Niobium"},

{"number":42,"symbol":"Mo","name":"Molybdenum","mass":"95.95","category":"transition metal","year":1778,"valency":6,"config":"[Kr] 4d5 5s1","mp":2623,"bp":4639,"electronegativity":2.16,"ionizationEnergy":684,"density":10.28,"atomicRadius":190,"oxidationStates":[6,4,2],"scientist":"Scheele","info1":"Molybdenum is heat resistant.","info2":"Used in alloys and enzymes.","infoLink":"https://en.wikipedia.org/wiki/Molybdenum"},

{"number":43,"symbol":"Tc","name":"Technetium","mass":"98","category":"transition metal","year":1937,"valency":7,"config":"[Kr] 4d5 5s2","mp":2157,"bp":4265,"electronegativity":1.9,"ionizationEnergy":702,"density":11.0,"atomicRadius":183,"oxidationStates":[7,4],"scientist":"Perrier & Segrè","info1":"Technetium is radioactive.","info2":"Used in medical imaging.","infoLink":"https://en.wikipedia.org/wiki/Technetium"},

{"number":44,"symbol":"Ru","name":"Ruthenium","mass":"101.07","category":"transition metal","year":1844,"valency":3,"config":"[Kr] 4d7 5s1","mp":2334,"bp":4150,"electronegativity":2.2,"ionizationEnergy":710,"density":12.37,"atomicRadius":178,"oxidationStates":[4,3,2],"scientist":"Claus","info1":"Ruthenium is a platinum-group metal.","info2":"Used in electronics and catalysts.","infoLink":"https://en.wikipedia.org/wiki/Ruthenium"},

{"number":45,"symbol":"Rh","name":"Rhodium","mass":"102.91","category":"transition metal","year":1803,"valency":3,"config":"[Kr] 4d8 5s1","mp":1964,"bp":3695,"electronegativity":2.28,"ionizationEnergy":720,"density":12.41,"atomicRadius":173,"oxidationStates":[3],"scientist":"Wollaston","info1":"Rhodium is rare and reflective.","info2":"Used in catalytic converters.","infoLink":"https://en.wikipedia.org/wiki/Rhodium"},

{"number":46,"symbol":"Pd","name":"Palladium","mass":"106.42","category":"transition metal","year":1803,"valency":2,"config":"[Kr] 4d10","mp":1555,"bp":2963,"electronegativity":2.20,"ionizationEnergy":804,"density":12.02,"atomicRadius":169,"oxidationStates":[2,4],"scientist":"Wollaston","info1":"Palladium absorbs hydrogen.","info2":"Used in electronics and catalysts.","infoLink":"https://en.wikipedia.org/wiki/Palladium"},

{"number":47,"symbol":"Ag","name":"Silver","mass":"107.87","category":"transition metal","year":"ancient","valency":1,"config":"[Kr] 4d10 5s1","mp":962,"bp":2162,"electronegativity":1.93,"ionizationEnergy":731,"density":10.49,"atomicRadius":165,"oxidationStates":[1],"scientist":"Unknown","info1":"Silver is highly conductive.","info2":"Used in jewelry and electronics.","infoLink":"https://en.wikipedia.org/wiki/Silver"},

{"number":48,"symbol":"Cd","name":"Cadmium","mass":"112.41","category":"transition metal","year":1817,"valency":2,"config":"[Kr] 4d10 5s2","mp":321,"bp":767,"electronegativity":1.69,"ionizationEnergy":868,"density":8.65,"atomicRadius":161,"oxidationStates":[2],"scientist":"Stromeyer","info1":"Cadmium is toxic.","info2":"Used in batteries and pigments.","infoLink":"https://en.wikipedia.org/wiki/Cadmium"},

{"number":49,"symbol":"In","name":"Indium","mass":"114.82","category":"post-transition metal","year":1863,"valency":3,"config":"[Kr] 4d10 5s2 5p1","mp":157,"bp":2072,"electronegativity":1.78,"ionizationEnergy":558,"density":7.31,"atomicRadius":156,"oxidationStates":[3],"scientist":"Reich & Richter","info1":"Indium is soft and malleable.","info2":"Used in touchscreens and semiconductors.","infoLink":"https://en.wikipedia.org/wiki/Indium"},

{"number":50,"symbol":"Sn","name":"Tin","mass":"118.71","category":"post-transition metal","year":"ancient","valency":2,"config":"[Kr] 4d10 5s2 5p2","mp":232,"bp":2602,"electronegativity":1.96,"ionizationEnergy":709,"density":7.29,"atomicRadius":145,"oxidationStates":[4,2],"scientist":"Unknown","info1":"Tin resists corrosion.","info2":"Used in solder and coatings.","infoLink":"https://en.wikipedia.org/wiki/Tin"},

{"number":51,"symbol":"Sb","name":"Antimony","mass":"121.76","category":"metalloid","year":"ancient","valency":3,"config":"[Kr] 4d10 5s2 5p3","mp":631,"bp":1587,"electronegativity":2.05,"ionizationEnergy":834,"density":6.68,"atomicRadius":133,"oxidationStates":[5,3,-3],"scientist":"Unknown","info1":"Antimony is brittle.","info2":"Used in flame retardants.","infoLink":"https://en.wikipedia.org/wiki/Antimony"},

{"number":52,"symbol":"Te","name":"Tellurium","mass":"127.60","category":"metalloid","year":1782,"valency":2,"config":"[Kr] 4d10 5s2 5p4","mp":449,"bp":988,"electronegativity":2.1,"ionizationEnergy":869,"density":6.24,"atomicRadius":123,"oxidationStates":[6,4,-2],"scientist":"Müller","info1":"Tellurium is a brittle metalloid.","info2":"Used in alloys and semiconductors.","infoLink":"https://en.wikipedia.org/wiki/Tellurium"},

{"number":53,"symbol":"I","name":"Iodine","mass":"126.90","category":"halogen(Nonmetal)","year":1811,"valency":1,"config":"[Kr] 4d10 5s2 5p5","mp":114,"bp":184,"electronegativity":2.66,"ionizationEnergy":1008,"density":4.93,"atomicRadius":115,"oxidationStates":[7,5,1,-1],"scientist":"Courtois","info1":"Iodine is essential for thyroid function.","info2":"Used as antiseptic.","infoLink":"https://en.wikipedia.org/wiki/Iodine"},

{"number":54,"symbol":"Xe","name":"Xenon","mass":"131.29","category":"Noble Gas(NonMetal)","year":1898,"valency":0,"config":"[Kr] 4d10 5s2 5p6","mp":-112,"bp":-108,"electronegativity":2.6,"ionizationEnergy":1170,"density":0.0059,"atomicRadius":108,"oxidationStates":[0,2,4,6],"scientist":"Ramsay & Travers","info1":"Xenon is a heavy noble gas.","info2":"Used in high-intensity lamps.","infoLink":"https://en.wikipedia.org/wiki/Xenon"},

{"number":55,"symbol":"Cs","name":"Cesium","mass":"132.91","category":"alkali metal","year":1860,"valency":1,"config":"[Xe] 6s1","mp":28,"bp":671,"electronegativity":0.79,"ionizationEnergy":376,"density":1.93,"atomicRadius":298,"oxidationStates":[1],"scientist":"Bunsen & Kirchhoff","info1":"Cesium is extremely reactive.","info2":"Used in atomic clocks.","infoLink":"https://en.wikipedia.org/wiki/Cesium"},

{"number":56,"symbol":"Ba","name":"Barium","mass":"137.33","category":"alkaline earth metal","year":1808,"valency":2,"config":"[Xe] 6s2","mp":727,"bp":1870,"electronegativity":0.89,"ionizationEnergy":503,"density":3.62,"atomicRadius":253,"oxidationStates":[2],"scientist":"Davy","info1":"Barium compounds are dense.","info2":"Used in medical imaging.","infoLink":"https://en.wikipedia.org/wiki/Barium"},

{"number":57,"symbol":"La","name":"Lanthanum","mass":"138.91","category":"lanthanide","year":1839,"valency":3,"config":"[Xe] 5d1 6s2","mp":920,"bp":3464,"electronegativity":1.10,"ionizationEnergy":538,"density":6.15,"atomicRadius":195,"oxidationStates":[3],"scientist":"Mosander","info1":"Lanthanum is a rare earth metal.","info2":"Used in camera lenses.","infoLink":"https://en.wikipedia.org/wiki/Lanthanum"},

{"number":58,"symbol":"Ce","name":"Cerium","mass":"140.12","category":"lanthanide","year":1803,"valency":3,"config":"[Xe] 4f1 5d1 6s2","mp":795,"bp":3443,"electronegativity":1.12,"ionizationEnergy":534,"density":6.77,"atomicRadius":185,"oxidationStates":[4,3],"scientist":"Berzelius & Hisinger","info1":"Cerium is the most abundant rare earth.","info2":"Used in catalysts and polishing.","infoLink":"https://en.wikipedia.org/wiki/Cerium"},

{"number":59,"symbol":"Pr","name":"Praseodymium","mass":"140.91","category":"lanthanide","year":1885,"valency":3,"config":"[Xe] 4f3 6s2","mp":931,"bp":3520,"electronegativity":1.13,"ionizationEnergy":527,"density":6.77,"atomicRadius":247,"oxidationStates":[3],"scientist":"Auer von Welsbach","info1":"Praseodymium is a soft rare earth metal.","info2":"Used in magnets and glass coloring.","infoLink":"https://en.wikipedia.org/wiki/Praseodymium"},

{"number":60,"symbol":"Nd","name":"Neodymium","mass":"144.24","category":"lanthanide","year":1885,"valency":3,"config":"[Xe] 4f4 6s2","mp":1024,"bp":3074,"electronegativity":1.14,"ionizationEnergy":533,"density":7.01,"atomicRadius":206,"oxidationStates":[3],"scientist":"Auer von Welsbach","info1":"Neodymium is used in powerful magnets.","info2":"Essential for electric motors and speakers.","infoLink":"https://en.wikipedia.org/wiki/Neodymium"},

{"number":61,"symbol":"Pm","name":"Promethium","mass":"145","category":"lanthanide","year":1945,"valency":3,"config":"[Xe] 4f5 6s2","mp":1042,"bp":3000,"electronegativity":1.13,"ionizationEnergy":540,"density":7.26,"atomicRadius":205,"oxidationStates":[3],"scientist":"Marinsky & Glendenin","info1":"Promethium is radioactive and rare.","info2":"Used in nuclear batteries.","infoLink":"https://en.wikipedia.org/wiki/Promethium"},

{"number":62,"symbol":"Sm","name":"Samarium","mass":"150.36","category":"lanthanide","year":1879,"valency":3,"config":"[Xe] 4f6 6s2","mp":1072,"bp":1794,"electronegativity":1.17,"ionizationEnergy":545,"density":7.52,"atomicRadius":238,"oxidationStates":[3,2],"scientist":"Lecoq de Boisbaudran","info1":"Samarium is a rare earth metal.","info2":"Used in magnets and cancer treatment.","infoLink":"https://en.wikipedia.org/wiki/Samarium"},

{"number":63,"symbol":"Eu","name":"Europium","mass":"151.96","category":"lanthanide","year":1901,"valency":3,"config":"[Xe] 4f7 6s2","mp":822,"bp":1529,"electronegativity":1.2,"ionizationEnergy":547,"density":5.24,"atomicRadius":231,"oxidationStates":[3,2],"scientist":"Demarçay","info1":"Europium is highly reactive.","info2":"Used in phosphors and LEDs.","infoLink":"https://en.wikipedia.org/wiki/Europium"},

{"number":64,"symbol":"Gd","name":"Gadolinium","mass":"157.25","category":"lanthanide","year":1880,"valency":3,"config":"[Xe] 4f7 5d1 6s2","mp":1313,"bp":3273,"electronegativity":1.2,"ionizationEnergy":593,"density":7.90,"atomicRadius":233,"oxidationStates":[3],"scientist":"Marignac","info1":"Gadolinium has magnetic properties.","info2":"Used in MRI contrast agents.","infoLink":"https://en.wikipedia.org/wiki/Gadolinium"},

{"number":65,"symbol":"Tb","name":"Terbium","mass":"158.93","category":"lanthanide","year":1843,"valency":3,"config":"[Xe] 4f9 6s2","mp":1356,"bp":3230,"electronegativity":1.2,"ionizationEnergy":566,"density":8.23,"atomicRadius":225,"oxidationStates":[3,4],"scientist":"Mosander","info1":"Terbium is a rare earth metal.","info2":"Used in green phosphors.","infoLink":"https://en.wikipedia.org/wiki/Terbium"},

{"number":66,"symbol":"Dy","name":"Dysprosium","mass":"162.50","category":"lanthanide","year":1886,"valency":3,"config":"[Xe] 4f10 6s2","mp":1412,"bp":2567,"electronegativity":1.22,"ionizationEnergy":573,"density":8.55,"atomicRadius":228,"oxidationStates":[3],"scientist":"de Boisbaudran","info1":"Dysprosium is used in magnets.","info2":"Important in electric vehicles.","infoLink":"https://en.wikipedia.org/wiki/Dysprosium"},

{"number":67,"symbol":"Ho","name":"Holmium","mass":"164.93","category":"lanthanide","year":1878,"valency":3,"config":"[Xe] 4f11 6s2","mp":1474,"bp":2700,"electronegativity":1.23,"ionizationEnergy":581,"density":8.80,"atomicRadius":226,"oxidationStates":[3],"scientist":"Cleve","info1":"Holmium has strong magnetic properties.","info2":"Used in lasers.","infoLink":"https://en.wikipedia.org/wiki/Holmium"},

{"number":68,"symbol":"Er","name":"Erbium","mass":"167.26","category":"lanthanide","year":1843,"valency":3,"config":"[Xe] 4f12 6s2","mp":1529,"bp":2868,"electronegativity":1.24,"ionizationEnergy":589,"density":9.07,"atomicRadius":226,"oxidationStates":[3],"scientist":"Mosander","info1":"Erbium gives pink color to glass.","info2":"Used in fiber optics.","infoLink":"https://en.wikipedia.org/wiki/Erbium"},

{"number":69,"symbol":"Tm","name":"Thulium","mass":"168.93","category":"lanthanide","year":1879,"valency":3,"config":"[Xe] 4f13 6s2","mp":1545,"bp":1950,"electronegativity":1.25,"ionizationEnergy":597,"density":9.32,"atomicRadius":222,"oxidationStates":[3],"scientist":"Cleve","info1":"Thulium is rare and expensive.","info2":"Used in portable X-ray devices.","infoLink":"https://en.wikipedia.org/wiki/Thulium"},

{"number":70,"symbol":"Yb","name":"Ytterbium","mass":"173.05","category":"lanthanide","year":1878,"valency":3,"config":"[Xe] 4f14 6s2","mp":824,"bp":1196,"electronegativity":1.1,"ionizationEnergy":603,"density":6.97,"atomicRadius":222,"oxidationStates":[3,2],"scientist":"Marignac","info1":"Ytterbium is soft and reactive.","info2":"Used in lasers and atomic clocks.","infoLink":"https://en.wikipedia.org/wiki/Ytterbium"},

{"number":71,"symbol":"Lu","name":"Lutetium","mass":"174.97","category":"lanthanide","year":1907,"valency":3,"config":"[Xe] 4f14 5d1 6s2","mp":1663,"bp":3402,"electronegativity":1.27,"ionizationEnergy":524,"density":9.84,"atomicRadius":217,"oxidationStates":[3],"scientist":"Urbain","info1":"Lutetium is the heaviest lanthanide.","info2":"Used in PET scan detectors.","infoLink":"https://en.wikipedia.org/wiki/Lutetium"},

{"number":72,"symbol":"Hf","name":"Hafnium","mass":"178.49","category":"transition metal","year":1923,"valency":4,"config":"[Xe] 4f14 5d2 6s2","mp":2233,"bp":4603,"electronegativity":1.3,"ionizationEnergy":659,"density":13.31,"atomicRadius":208,"oxidationStates":[4],"scientist":"Coster & Hevesy","info1":"Hafnium resists corrosion.","info2":"Used in nuclear control rods.","infoLink":"https://en.wikipedia.org/wiki/Hafnium"},

{"number":73,"symbol":"Ta","name":"Tantalum","mass":"180.95","category":"transition metal","year":1802,"valency":5,"config":"[Xe] 4f14 5d3 6s2","mp":3017,"bp":5458,"electronegativity":1.5,"ionizationEnergy":761,"density":16.69,"atomicRadius":200,"oxidationStates":[5],"scientist":"Ekeberg","info1":"Tantalum is highly corrosion-resistant.","info2":"Used in capacitors.","infoLink":"https://en.wikipedia.org/wiki/Tantalum"},

{"number":74,"symbol":"W","name":"Tungsten","mass":"183.84","category":"transition metal","year":1783,"valency":6,"config":"[Xe] 4f14 5d4 6s2","mp":3422,"bp":5555,"electronegativity":2.36,"ionizationEnergy":770,"density":19.25,"atomicRadius":193,"oxidationStates":[6,4],"scientist":"Elhuyar brothers","info1":"Tungsten has highest melting point.","info2":"Used in filaments and alloys.","infoLink":"https://en.wikipedia.org/wiki/Tungsten"},

{"number":75,"symbol":"Re","name":"Rhenium","mass":"186.21","category":"transition metal","year":1925,"valency":7,"config":"[Xe] 4f14 5d5 6s2","mp":3186,"bp":5596,"electronegativity":1.9,"ionizationEnergy":760,"density":21.02,"atomicRadius":188,"oxidationStates":[7,4],"scientist":"Noddack","info1":"Rhenium is dense and rare.","info2":"Used in jet engines.","infoLink":"https://en.wikipedia.org/wiki/Rhenium"},

{"number":76,"symbol":"Os","name":"Osmium","mass":"190.23","category":"transition metal","year":1803,"valency":4,"config":"[Xe] 4f14 5d6 6s2","mp":3033,"bp":5012,"electronegativity":2.2,"ionizationEnergy":840,"density":22.59,"atomicRadius":185,"oxidationStates":[4,8],"scientist":"Tennant","info1":"Osmium is densest natural element.","info2":"Used in alloys and pens.","infoLink":"https://en.wikipedia.org/wiki/Osmium"},

{"number":77,"symbol":"Ir","name":"Iridium","mass":"192.22","category":"transition metal","year":1803,"valency":4,"config":"[Xe] 4f14 5d7 6s2","mp":2446,"bp":4428,"electronegativity":2.20,"ionizationEnergy":880,"density":22.56,"atomicRadius":180,"oxidationStates":[4,3],"scientist":"Tennant","info1":"Iridium is corrosion-resistant.","info2":"Used in spark plugs.","infoLink":"https://en.wikipedia.org/wiki/Iridium"},

{"number":78,"symbol":"Pt","name":"Platinum","mass":"195.08","category":"transition metal","year":"ancient","valency":2,"config":"[Xe] 4f14 5d9 6s1","mp":1768,"bp":3825,"electronegativity":2.28,"ionizationEnergy":870,"density":21.45,"atomicRadius":177,"oxidationStates":[4,2],"scientist":"Unknown","info1":"Platinum is precious and catalytic.","info2":"Used in jewelry and converters.","infoLink":"https://en.wikipedia.org/wiki/Platinum"},

{"number":79,"symbol":"Au","name":"Gold","mass":"196.97","category":"transition metal","year":"ancient","valency":3,"config":"[Xe] 4f14 5d10 6s1","mp":1064,"bp":2856,"electronegativity":2.54,"ionizationEnergy":890,"density":19.32,"atomicRadius":174,"oxidationStates":[3,1],"scientist":"Unknown","info1":"Gold is highly malleable.","info2":"Used in jewelry and electronics.","infoLink":"https://en.wikipedia.org/wiki/Gold"},

{"number":80,"symbol":"Hg","name":"Mercury","mass":"200.59","category":"transition metal","year":"ancient","valency":2,"config":"[Xe] 4f14 5d10 6s2","mp":-39,"bp":357,"electronegativity":2.00,"ionizationEnergy":1007,"density":13.53,"atomicRadius":171,"oxidationStates":[2,1],"scientist":"Unknown","info1":"Mercury is liquid at room temp.","info2":"Used in thermometers.","infoLink":"https://en.wikipedia.org/wiki/Mercury"},

{"number":81,"symbol":"Tl","name":"Thallium","mass":"204.38","category":"post-transition metal","year":1861,"valency":3,"config":"[Xe] 4f14 5d10 6s2 6p1","mp":304,"bp":1473,"electronegativity":1.62,"ionizationEnergy":589,"density":11.85,"atomicRadius":156,"oxidationStates":[3,1],"scientist":"Crookes","info1":"Thallium is toxic.","info2":"Used in electronics.","infoLink":"https://en.wikipedia.org/wiki/Thallium"},

{"number":82,"symbol":"Pb","name":"Lead","mass":"207.2","category":"post-transition metal","year":"ancient","valency":2,"config":"[Xe] 4f14 5d10 6s2 6p2","mp":327,"bp":1749,"electronegativity":2.33,"ionizationEnergy":716,"density":11.34,"atomicRadius":154,"oxidationStates":[4,2],"scientist":"Unknown","info1":"Lead is dense and soft.","info2":"Used in batteries.","infoLink":"https://en.wikipedia.org/wiki/Lead"},

{"number":83,"symbol":"Bi","name":"Bismuth","mass":"208.98","category":"post-transition metal","year":"ancient","valency":3,"config":"[Xe] 4f14 5d10 6s2 6p3","mp":271,"bp":1564,"electronegativity":2.02,"ionizationEnergy":703,"density":9.78,"atomicRadius":143,"oxidationStates":[3,5],"scientist":"Unknown","info1":"Bismuth is brittle and low toxicity.","info2":"Used in medicines.","infoLink":"https://en.wikipedia.org/wiki/Bismuth"},

{"number":84,"symbol":"Po","name":"Polonium","mass":"209","category":"post-transition metal","year":1898,"valency":2,"config":"[Xe] 4f14 5d10 6s2 6p4","mp":254,"bp":962,"electronegativity":2.0,"ionizationEnergy":812,"density":9.32,"atomicRadius":135,"oxidationStates":[4,2],"scientist":"Marie Curie","info1":"Polonium is radioactive.","info2":"Used in research.","infoLink":"https://en.wikipedia.org/wiki/Polonium"},

{"number":85,"symbol":"At","name":"Astatine","mass":"210","category":"halogen(Nonmetal)","year":1940,"valency":1,"config":"[Xe] 4f14 5d10 6s2 6p5","mp":302,"bp":337,"electronegativity":2.2,"ionizationEnergy":920,"density":7.0,"atomicRadius":127,"oxidationStates":[7,5,1,-1],"scientist":"Corson","info1":"Astatine is very rare and radioactive.","info2":"Studied for cancer therapy.","infoLink":"https://en.wikipedia.org/wiki/Astatine"},

{"number":86,"symbol":"Rn","name":"Radon","mass":"222","category":"Noble Gas(NonMetal)","year":1900,"valency":0,"config":"[Xe] 4f14 5d10 6s2 6p6","mp":-71,"bp":-62,"electronegativity":2.2,"ionizationEnergy":1037,"density":0.00973,"atomicRadius":120,"oxidationStates":[0],"scientist":"Dorn","info1":"Radon is radioactive gas.","info2":"Health hazard in homes.","infoLink":"https://en.wikipedia.org/wiki/Radon"},

{"number":87,"symbol":"Fr","name":"Francium","mass":"223","category":"alkali metal","year":1939,"valency":1,"config":"[Rn] 7s1","mp":27,"bp":677,"electronegativity":0.7,"ionizationEnergy":380,"density":1.87,"atomicRadius":348,"oxidationStates":[1],"scientist":"Perey","info1":"Francium is extremely rare.","info2":"Highly radioactive.","infoLink":"https://en.wikipedia.org/wiki/Francium"},

{"number":88,"symbol":"Ra","name":"Radium","mass":"226","category":"alkaline earth metal","year":1898,"valency":2,"config":"[Rn] 7s2","mp":700,"bp":1737,"electronegativity":0.9,"ionizationEnergy":509,"density":5.5,"atomicRadius":283,"oxidationStates":[2],"scientist":"Marie Curie","info1":"Radium is radioactive.","info2":"Historic use in luminous paint.","infoLink":"https://en.wikipedia.org/wiki/Radium"},

{"number":89,"symbol":"Ac","name":"Actinium","mass":"227","category":"actinide","year":1899,"valency":3,"config":"[Rn] 6d1 7s2","mp":1050,"bp":3200,"electronegativity":1.1,"ionizationEnergy":499,"density":10.07,"atomicRadius":260,"oxidationStates":[3],"scientist":"Debierne","info1":"Actinium is radioactive.","info2":"Used in research.","infoLink":"https://en.wikipedia.org/wiki/Actinium"},

{"number":90,"symbol":"Th","name":"Thorium","mass":"232.04","category":"actinide","year":1828,"valency":4,"config":"[Rn] 6d2 7s2","mp":1750,"bp":4788,"electronegativity":1.3,"ionizationEnergy":587,"density":11.72,"atomicRadius":237,"oxidationStates":[4],"scientist":"Berzelius","info1":"Thorium is weakly radioactive.","info2":"Potential nuclear fuel.","infoLink":"https://en.wikipedia.org/wiki/Thorium"},

{"number":91,"symbol":"Pa","name":"Protactinium","mass":"231.04","category":"actinide","year":1913,"valency":5,"config":"[Rn] 5f2 6d1 7s2","mp":1572,"bp":4000,"electronegativity":1.5,"ionizationEnergy":568,"density":15.37,"atomicRadius":243,"oxidationStates":[5,4],"scientist":"Fajans","info1":"Protactinium is rare and radioactive.","info2":"Used in research.","infoLink":"https://en.wikipedia.org/wiki/Protactinium"},

{"number":92,"symbol":"U","name":"Uranium","mass":"238.03","category":"actinide","year":1789,"valency":6,"config":"[Rn] 5f3 6d1 7s2","mp":1132,"bp":4131,"electronegativity":1.38,"ionizationEnergy":598,"density":19.1,"atomicRadius":240,"oxidationStates":[6,4],"scientist":"Klaproth","info1":"Uranium is radioactive.","info2":"Used as nuclear fuel.","infoLink":"https://en.wikipedia.org/wiki/Uranium"},

{"number":93,"symbol":"Np","name":"Neptunium","mass":"237","category":"actinide","year":1940,"valency":5,"config":"[Rn] 5f4 6d1 7s2","mp":644,"bp":4000,"electronegativity":1.36,"ionizationEnergy":604,"density":20.45,"atomicRadius":221,"oxidationStates":[5,4,6],"scientist":"McMillan","info1":"Neptunium is radioactive.","info2":"Byproduct of reactors.","infoLink":"https://en.wikipedia.org/wiki/Neptunium"},

{"number":94,"symbol":"Pu","name":"Plutonium","mass":"244","category":"actinide","year":1940,"valency":4,"config":"[Rn] 5f6 7s2","mp":640,"bp":3228,"electronegativity":1.28,"ionizationEnergy":585,"density":19.84,"atomicRadius":243,"oxidationStates":[6,4,3],"scientist":"Seaborg","info1":"Plutonium is radioactive.","info2":"Used in nuclear weapons and reactors.","infoLink":"https://en.wikipedia.org/wiki/Plutonium"},

{"number":95,"symbol":"Am","name":"Americium","mass":"243","category":"actinide","year":1944,"valency":3,"config":"[Rn] 5f7 7s2","mp":1176,"bp":2607,"electronegativity":1.3,"ionizationEnergy":578,"density":13.69,"atomicRadius":244,"oxidationStates":[3,4],"scientist":"Seaborg","info1":"Americium is radioactive.","info2":"Used in smoke detectors.","infoLink":"https://en.wikipedia.org/wiki/Americium"},

{"number":96,"symbol":"Cm","name":"Curium","mass":"247","category":"actinide","year":1944,"valency":3,"config":"[Rn] 5f7 6d1 7s2","mp":1345,"bp":3110,"electronegativity":1.3,"ionizationEnergy":581,"density":13.51,"atomicRadius":245,"oxidationStates":[3],"scientist":"Seaborg","info1":"Curium is radioactive.","info2":"Used in space probes.","infoLink":"https://en.wikipedia.org/wiki/Curium"},

{"number":97,"symbol":"Bk","name":"Berkelium","mass":"247","category":"actinide","year":1949,"valency":3,"config":"[Rn] 5f9 7s2","mp":986,"bp":2627,"electronegativity":1.3,"ionizationEnergy":601,"density":14.78,"atomicRadius":247,"oxidationStates":[3,4],"scientist":"Seaborg","info1":"Berkelium is synthetic.","info2":"Used in research.","infoLink":"https://en.wikipedia.org/wiki/Berkelium"},

{"number":98,"symbol":"Cf","name":"Californium","mass":"251","category":"actinide","year":1950,"valency":3,"config":"[Rn] 5f10 7s2","mp":900,"bp":1470,"electronegativity":1.3,"ionizationEnergy":608,"density":15.1,"atomicRadius":245,"oxidationStates":[3],"scientist":"Seaborg","info1":"Californium emits neutrons.","info2":"Used in nuclear reactors.","infoLink":"https://en.wikipedia.org/wiki/Californium"},

{"number":99,"symbol":"Es","name":"Einsteinium","mass":"252","category":"actinide","year":1952,"valency":3,"config":"[Rn] 5f11 7s2","mp":860,"bp":996,"electronegativity":1.3,"ionizationEnergy":619,"density":8.84,"atomicRadius":245,"oxidationStates":[3],"scientist":"Ghiorso","info1":"Einsteinium is synthetic and radioactive.","info2":"Used in research only.","infoLink":"https://en.wikipedia.org/wiki/Einsteinium"},

{"number":100,"symbol":"Fm","name":"Fermium","mass":"257","category":"actinide","year":1952,"valency":3,"config":"[Rn] 5f12 7s2","mp":1527,"bp":null,"electronegativity":1.3,"ionizationEnergy":627,"density":9.7,"atomicRadius":245,"oxidationStates":[3],"scientist":"Ghiorso","info1":"Fermium is highly radioactive.","info2":"Produced in nuclear reactions.","infoLink":"https://en.wikipedia.org/wiki/Fermium"},
{"number":101,"symbol":"Md","name":"Mendelevium","mass":"258","category":"actinide","year":1955,"valency":3,"config":"[Rn] 5f13 7s2","mp":827,"bp":null,"electronegativity":1.3,"ionizationEnergy":635,"density":10.3,"atomicRadius":245,"oxidationStates":[3,2],"scientist":"Ghiorso","info1":"Mendelevium is synthetic and radioactive.","info2":"Named after Dmitri Mendeleev.","infoLink":"https://en.wikipedia.org/wiki/Mendelevium"},

{"number":102,"symbol":"No","name":"Nobelium","mass":"259","category":"actinide","year":1958,"valency":2,"config":"[Rn] 5f14 7s2","mp":827,"bp":null,"electronegativity":1.3,"ionizationEnergy":642,"density":9.9,"atomicRadius":246,"oxidationStates":[2,3],"scientist":"Joint Institute for Nuclear Research","info1":"Nobelium is synthetic.","info2":"Named after Alfred Nobel.","infoLink":"https://en.wikipedia.org/wiki/Nobelium"},

{"number":103,"symbol":"Lr","name":"Lawrencium","mass":"266","category":"actinide","year":1961,"valency":3,"config":"[Rn] 5f14 7s2 7p1","mp":1627,"bp":null,"electronegativity":1.3,"ionizationEnergy":470,"density":15.6,"atomicRadius":246,"oxidationStates":[3],"scientist":"Ghiorso","info1":"Lawrencium is synthetic.","info2":"Named after Ernest Lawrence.","infoLink":"https://en.wikipedia.org/wiki/Lawrencium"},

{"number":104,"symbol":"Rf","name":"Rutherfordium","mass":"267","category":"transition metal","year":1964,"valency":4,"config":"[Rn] 5f14 6d2 7s2","mp":2100,"bp":5500,"electronegativity":null,"ionizationEnergy":580,"density":23.2,"atomicRadius":157,"oxidationStates":[4],"scientist":"Joint Institute for Nuclear Research","info1":"Rutherfordium is synthetic.","info2":"Named after Ernest Rutherford.","infoLink":"https://en.wikipedia.org/wiki/Rutherfordium"},

{"number":105,"symbol":"Db","name":"Dubnium","mass":"268","category":"transition metal","year":1967,"valency":5,"config":"[Rn] 5f14 6d3 7s2","mp":null,"bp":null,"electronegativity":null,"ionizationEnergy":null,"density":29.3,"atomicRadius":149,"oxidationStates":[5],"scientist":"Joint Institute for Nuclear Research","info1":"Dubnium is synthetic.","info2":"Named after Dubna, Russia.","infoLink":"https://en.wikipedia.org/wiki/Dubnium"},

{"number":106,"symbol":"Sg","name":"Seaborgium","mass":"269","category":"transition metal","year":1974,"valency":6,"config":"[Rn] 5f14 6d4 7s2","mp":null,"bp":null,"electronegativity":null,"ionizationEnergy":757,"density":35.0,"atomicRadius":143,"oxidationStates":[6],"scientist":"Lawrence Berkeley Lab","info1":"Seaborgium is synthetic.","info2":"Named after Glenn Seaborg.","infoLink":"https://en.wikipedia.org/wiki/Seaborgium"},

{"number":107,"symbol":"Bh","name":"Bohrium","mass":"270","category":"transition metal","year":1981,"valency":7,"config":"[Rn] 5f14 6d5 7s2","mp":null,"bp":null,"electronegativity":null,"ionizationEnergy":742,"density":37.1,"atomicRadius":141,"oxidationStates":[7],"scientist":"GSI Darmstadt","info1":"Bohrium is synthetic.","info2":"Named after Niels Bohr.","infoLink":"https://en.wikipedia.org/wiki/Bohrium"},

{"number":108,"symbol":"Hs","name":"Hassium","mass":"277","category":"transition metal","year":1984,"valency":8,"config":"[Rn] 5f14 6d6 7s2","mp":null,"bp":null,"electronegativity":null,"ionizationEnergy":733,"density":40.7,"atomicRadius":134,"oxidationStates":[8],"scientist":"GSI Darmstadt","info1":"Hassium is synthetic.","info2":"Named after Hesse, Germany.","infoLink":"https://en.wikipedia.org/wiki/Hassium"},

{"number":109,"symbol":"Mt","name":"Meitnerium","mass":"278","category":"transition metal","year":1982,"valency":null,"config":"[Rn] 5f14 6d7 7s2","mp":null,"bp":null,"electronegativity":null,"ionizationEnergy":800,"density":37.4,"atomicRadius":129,"oxidationStates":[null],"scientist":"GSI Darmstadt","info1":"Meitnerium is synthetic.","info2":"Named after Lise Meitner.","infoLink":"https://en.wikipedia.org/wiki/Meitnerium"},

{"number":110,"symbol":"Ds","name":"Darmstadtium","mass":"281","category":"transition metal","year":1994,"valency":null,"config":"[Rn] 5f14 6d9 7s1","mp":null,"bp":null,"electronegativity":null,"ionizationEnergy":960,"density":34.8,"atomicRadius":128,"oxidationStates":[null],"scientist":"GSI Darmstadt","info1":"Darmstadtium is synthetic.","info2":"Named after Darmstadt, Germany.","infoLink":"https://en.wikipedia.org/wiki/Darmstadtium"},

{"number":111,"symbol":"Rg","name":"Roentgenium","mass":"282","category":"transition metal","year":1994,"valency":null,"config":"[Rn] 5f14 6d10 7s1","mp":null,"bp":null,"electronegativity":null,"ionizationEnergy":1022,"density":28.7,"atomicRadius":121,"oxidationStates":[null],"scientist":"GSI Darmstadt","info1":"Roentgenium is synthetic.","info2":"Named after Wilhelm Röntgen.","infoLink":"https://en.wikipedia.org/wiki/Roentgenium"},

{"number":112,"symbol":"Cn","name":"Copernicium","mass":"285","category":"transition metal","year":1996,"valency":2,"config":"[Rn] 5f14 6d10 7s2","mp":null,"bp":null,"electronegativity":null,"ionizationEnergy":1155,"density":23.7,"atomicRadius":122,"oxidationStates":[2],"scientist":"GSI Darmstadt","info1":"Copernicium is synthetic.","info2":"Named after Copernicus.","infoLink":"https://en.wikipedia.org/wiki/Copernicium"},

{"number":113,"symbol":"Nh","name":"Nihonium","mass":"286","category":"post-transition metal","year":2004,"valency":1,"config":"[Rn] 5f14 6d10 7s2 7p1","mp":430,"bp":1130,"electronegativity":null,"ionizationEnergy":704,"density":16,"atomicRadius":136,"oxidationStates":[1,3],"scientist":"RIKEN","info1":"Nihonium is synthetic.","info2":"First element discovered in Japan.","infoLink":"https://en.wikipedia.org/wiki/Nihonium"},

{"number":114,"symbol":"Fl","name":"Flerovium","mass":"289","category":"post-transition metal","year":1998,"valency":2,"config":"[Rn] 5f14 6d10 7s2 7p2","mp":70,"bp":150,"electronegativity":null,"ionizationEnergy":812,"density":14,"atomicRadius":143,"oxidationStates":[2,4],"scientist":"Joint Institute for Nuclear Research","info1":"Flerovium is synthetic.","info2":"Named after Flerov Laboratory.","infoLink":"https://en.wikipedia.org/wiki/Flerovium"},

{"number":115,"symbol":"Mc","name":"Moscovium","mass":"290","category":"post-transition metal","year":2003,"valency":1,"config":"[Rn] 5f14 6d10 7s2 7p3","mp":400,"bp":1100,"electronegativity":null,"ionizationEnergy":538,"density":13.5,"atomicRadius":162,"oxidationStates":[1,3],"scientist":"Joint Institute for Nuclear Research","info1":"Moscovium is synthetic.","info2":"Named after Moscow region.","infoLink":"https://en.wikipedia.org/wiki/Moscovium"},

{"number":116,"symbol":"Lv","name":"Livermorium","mass":"293","category":"post-transition metal","year":2000,"valency":2,"config":"[Rn] 5f14 6d10 7s2 7p4","mp":364,"bp":762,"electronegativity":null,"ionizationEnergy":723,"density":12.9,"atomicRadius":175,"oxidationStates":[2,4],"scientist":"Joint Institute for Nuclear Research","info1":"Livermorium is synthetic.","info2":"Named after Livermore lab.","infoLink":"https://en.wikipedia.org/wiki/Livermorium"},

{"number":117,"symbol":"Ts","name":"Tennessine","mass":"294","category":"halogen(Nonmetal)","year":2010,"valency":-1,"config":"[Rn] 5f14 6d10 7s2 7p5","mp":350,"bp":610,"electronegativity":null,"ionizationEnergy":742,"density":7.2,"atomicRadius":165,"oxidationStates":[-1,1,3,5],"scientist":"Joint Institute for Nuclear Research","info1":"Tennessine is synthetic.","info2":"Named after Tennessee.","infoLink":"https://en.wikipedia.org/wiki/Tennessine"},

{"number":118,"symbol":"Og","name":"Oganesson","mass":"294","category":"Noble Gas(NonMetal)","year":2002,"valency":0,"config":"[Rn] 5f14 6d10 7s2 7p6","mp":null,"bp":null,"electronegativity":null,"ionizationEnergy":860,"density":5.0,"atomicRadius":152,"oxidationStates":[0],"scientist":"Joint Institute for Nuclear Research","info1":"Oganesson is synthetic.","info2":"Heaviest known element.","infoLink":"https://en.wikipedia.org/wiki/Oganesson"}
];

//  table Grid
const layout = {
    1:{x:1,y:1}, 2:{x:18,y:1},
    3:{x:1,y:2}, 4:{x:2,y:2}, 5:{x:13,y:2}, 6:{x:14,y:2}, 7:{x:15,y:2}, 8:{x:16,y:2}, 9:{x:17,y:2}, 10:{x:18,y:2},
    11:{x:1,y:3}, 12:{x:2,y:3}, 13:{x:13,y:3}, 14:{x:14,y:3}, 15:{x:15,y:3}, 16:{x:16,y:3}, 17:{x:17,y:3}, 18:{x:18,y:3},
    19:{x:1,y:4}, 20:{x:2,y:4}, 21:{x:3,y:4}, 22:{x:4,y:4}, 23:{x:5,y:4}, 24:{x:6,y:4}, 25:{x:7,y:4}, 26:{x:8,y:4},
    27:{x:9,y:4}, 28:{x:10,y:4}, 29:{x:11,y:4}, 30:{x:12,y:4}, 31:{x:13,y:4}, 32:{x:14,y:4}, 33:{x:15,y:4}, 34:{x:16,y:4},
    35:{x:17,y:4}, 36:{x:18,y:4},
    37:{x:1,y:5}, 38:{x:2,y:5}, 39:{x:3,y:5}, 40:{x:4,y:5}, 41:{x:5,y:5}, 42:{x:6,y:5}, 43:{x:7,y:5}, 44:{x:8,y:5},
    45:{x:9,y:5}, 46:{x:10,y:5}, 47:{x:11,y:5}, 48:{x:12,y:5}, 49:{x:13,y:5}, 50:{x:14,y:5}, 51:{x:15,y:5}, 52:{x:16,y:5},
    53:{x:17,y:5}, 54:{x:18,y:5},
    55:{x:1,y:6}, 56:{x:2,y:6}, 57:{x:4,y:9}, 58:{x:5,y:9}, 59:{x:6,y:9}, 60:{x:7,y:9}, 61:{x:8,y:9}, 62:{x:9,y:9},
    63:{x:10,y:9}, 64:{x:11,y:9}, 65:{x:12,y:9}, 66:{x:13,y:9}, 67:{x:14,y:9}, 68:{x:15,y:9}, 69:{x:16,y:9}, 70:{x:17,y:9},
    71:{x:18,y:9}, 72:{x:4,y:6}, 73:{x:5,y:6}, 74:{x:6,y:6}, 75:{x:7,y:6}, 76:{x:8,y:6}, 77:{x:9,y:6}, 78:{x:10,y:6},
    79:{x:11,y:6}, 80:{x:12,y:6}, 81:{x:13,y:6}, 82:{x:14,y:6}, 83:{x:15,y:6}, 84:{x:16,y:6}, 85:{x:17,y:6}, 86:{x:18,y:6},
    87:{x:1,y:7}, 88:{x:2,y:7}, 89:{x:4,y:10}, 90:{x:5,y:10}, 91:{x:6,y:10}, 92:{x:7,y:10}, 93:{x:8,y:10}, 94:{x:9,y:10},
    95:{x:10,y:10}, 96:{x:11,y:10}, 97:{x:12,y:10}, 98:{x:13,y:10}, 99:{x:14,y:10}, 100:{x:15,y:10}, 101:{x:16,y:10},
    102:{x:17,y:10}, 103:{x:18,y:10}, 104:{x:4,y:7}, 105:{x:5,y:7}, 106:{x:6,y:7}, 107:{x:7,y:7}, 108:{x:8,y:7},
    109:{x:9,y:7}, 110:{x:10,y:7}, 111:{x:11,y:7}, 112:{x:12,y:7}, 113:{x:13,y:7}, 114:{x:14,y:7}, 115:{x:15,y:7},
    116:{x:16,y:7}, 117:{x:17,y:7}, 118:{x:18,y:7}
};
layout["dBlockHeading"]={x:5,y:0};
layout["pBlockHeading"]={x:15,y:0};
layout["fBlockHeading"]={x:3,y:5};

//lanthanide and actinide 
layout["LaSeries"] = { x: 3, y: 6 };
layout["AcSeries"] = { x: 3, y: 7 };


window.showSection = function(sectionId) {
    document.querySelectorAll(".section").forEach(function(s) {
        s.classList.remove("active");
    });

    var activeSection = document.getElementById(sectionId);
    if (activeSection) activeSection.classList.add("active");
    var filter = document.getElementById("filterSelect");
    if (filter) {
        if (sectionId === "table") {
            filter.style.display = "inline-block"; 
        } else {
            filter.style.display = "none";         
        }
    }
    var searchInput = document.getElementById("searchInput");
    var searchBtn = document.getElementById("searchBtn");
    if (searchInput && searchBtn) {
        if (sectionId === "learnmore") {
            searchInput.style.display = "none";
            searchBtn.style.display = "none";
        } else {
            searchInput.style.display = "inline-block";
            searchBtn.style.display = "inline-block";
        }
    }

    document.getElementById("sideMenu").classList.remove("open");
};

window.showInfo = function(el) {
    document.getElementById("infoName").innerText = el.name;

    document.getElementById("infoDetails").innerHTML =
        "<b>Symbol:</b> " + el.symbol + "<br>" +
        "<b>Atomic Number:</b> " + el.number + "<br>" +
        "<b>Atomic Mass:</b> " + el.mass + "<br>" +
        "<b>Atomic radius:</b> " + el.atomicRadius + "pm<br>" +
        "<b>Category:</b> " + el.category + "<br>" +
        "<b>Valency:</b> " + el.valency + "<br>" +
        "<b>Configuration:</b> " + el.config + "<br>" +
        "<b>Melting Point:</b> " + el.mp + "°C<br>" +
        "<b>Boiling Point:</b> " + el.bp + "°C<br>" +
        "<b>Density:</b> " + el.density + "g/cm³<br>" +
        "<b>Electronegativity:</b> " + el.electronegativity + "(Pauling scale)<br>" +
        "<b>oxidation state:</b> " + el.oxidationStates + "<br>" +
        "<b>Ionization energy(Ist):</b> " + el.ionizationEnergy + "kJ/mol<br>" +
        "<b>Scientist:</b> " + el.scientist + "<br><br>" +
        el.info1 + "<br>" + el.info2 + "<br>" +
        "<a href=\"" + el.infoLink + "\" target=\"_blank\">More Info (Wikipedia)</a>";

    document.getElementById("infoPanel").classList.add("open");
};

window.closeInfoPanel = function() {
    document.getElementById("infoPanel").classList.remove("open");
};

window.searchElement = function() {
    var term = document.getElementById("searchInput").value.trim().toLowerCase();
    var foundBox = null;
    var foundElement = null;

    document.querySelectorAll(".element").forEach(function(b) {
        b.classList.remove("highlight");

        var symEl = b.querySelector("b:nth-of-type(2)");
        if (!symEl) return;

        var symbol = symEl.innerText.toLowerCase();
        var el = elements.find(function(e) {
            return e.symbol.toLowerCase() === symbol;
        });

        if (!el) return;

        if (term === el.name.toLowerCase() ||
            term === el.symbol.toLowerCase() ||
            term === String(el.number)) {
            foundBox = b;
            foundElement = el;
        }
    });

    if (foundBox) {
        foundBox.classList.add("highlight");
        foundBox.scrollIntoView({ behavior: "smooth", block: "center" });
        showInfo(foundElement);
    } else {
        alert("Element not found. Use name, symbol or number.");
    }
};

window.createComparisonInputs = function() {
    var n = parseInt(document.getElementById("compareCount").value);
    var div = document.getElementById("compareInputs");
    div.innerHTML = "";

    for (var i = 1; i <= n; i++) {
        div.innerHTML += "<input id=\"c" + i + "\" placeholder=\"Element " + i + " (name/symbol/number)\"> ";
    }

    div.innerHTML += "<button onclick=\"compareElements()\">Compare</button>";
};

window.compareElements = function() {
    var n = parseInt(document.getElementById("compareCount").value);
    var list = [];

    for (var i = 1; i <= n; i++) {
        var input = document.getElementById("c" + i);
        if (!input) continue;

        var val = input.value.trim().toLowerCase();
        if (!val) continue;

        var el = elements.find(function(e) {
            return e.name.toLowerCase() === val ||
                   e.symbol.toLowerCase() === val ||
                   e.number == val;
        });

        if (el) list.push(el);
    }



    var container = document.getElementById("compareCards");
    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = "<p>No valid element names entered.</p>";
        return;
    }

    list.forEach(function(e) {
        var card = document.createElement("div");
        card.className = "compare-card";

        card.innerHTML =
            "<h3>" + e.name + " (" + e.symbol + ")</h3>" +
            "<p><b>Atomic #:</b> " + e.number + "</p>" +
        "<p><b>Atomic Mass:</b> " + e.mass + "</p>" +
        "<p><b>Atomic radius:</b> " + e.atomicRadius + "pm</p>" +
        "<p><b>Category:</b> " + e.category + "</p>" +
        "<p><b>Valency:</b> " + e.valency + "</p>" +
        "<p><b>Configuration:</b> " + e.config + "</p>" +
        "<p><b>Melting Point:</b> " + e.mp + "°C</p>" +
        "<p><b>Boiling Point:</b> " + e.bp + "°C</p>" +
        "<p><b>Density:</b> " + e.density + "g/cm³</p>" +
        "<p><b>Electronegativity:</b> " + e.electronegativity + "(Pauling scale)</p>" +
        "<p><b>oxidation state:</b> " + e.oxidationStates + "</p>" +
        "<p><b>Ionization energy(Ist):</b> " + e.ionizationEnergy + "kJ/mol</p>";

        container.appendChild(card);
    });
};

document.addEventListener("DOMContentLoaded", function() {

    var table = document.getElementById("periodicTable");

    if (table) {
        table.innerHTML = "";

        elements.forEach(function(el) {
            var box = document.createElement("div");
            var catClass = el.category.replace(/ /g, "-");

            box.className = "element " + catClass;

            var pos = layout[el.number];

            if (pos) {
                box.style.gridColumn = pos.x;
                box.style.gridRow = pos.y;
            } else {
                box.style.gridColumn = 1;
                box.style.gridRow = 1;
            }

            box.innerHTML =
                "<b>" + el.number + "</b><br>" +
                "<b>" + el.symbol + "</b><br>" +
                "<small><b>" + el.name + "</b></small>";

            box.onclick = function() {
                showInfo(el);
            };

            table.appendChild(box);
        });

        var laBox = document.createElement("div");
        laBox.className = "element placeholder";
        laBox.id = "laBox";
        laBox.style.gridColumn = layout["LaSeries"].x;
        laBox.style.gridRow = layout["LaSeries"].y;
        laBox.innerHTML = "<b>57-71</b><br>La-Lu";
        table.appendChild(laBox);

        var acBox = document.createElement("div");
        acBox.className = "element placeholder";
        acBox.id = "acBox"; 
        acBox.style.gridColumn = layout["AcSeries"].x;
        acBox.style.gridRow = layout["AcSeries"].y;
        acBox.innerHTML = "<b>89-103</b><br>Ac-Lr";
        table.appendChild(acBox);
    }

    document.getElementById("hamburgerBtn").addEventListener("click", function() {
        document.getElementById("sideMenu").classList.toggle("open");
    });

   // click Search button
document.getElementById("searchBtn").addEventListener("click", function() {
    var activeSection = document.querySelector(".section.active");
    if (!activeSection || activeSection.id === "learnmore") return; 
    window.searchElement();
});

// Enter element in search input
document.getElementById("searchInput").addEventListener("keydown", function(e) {
    var activeSection = document.querySelector(".section.active");
    if (!activeSection || activeSection.id === "learnmore") return;

    if (e.key === "Enter") window.searchElement();
});

    var filterSelect = document.getElementById("filterSelect");
    if (filterSelect) {
        filterSelect.addEventListener("change", function() {
            var activeSection = document.querySelector(".section.active");
            if (!activeSection || activeSection.id !== "table") return;

            var filter = this.value;

            document.querySelectorAll(".element").forEach(function(b) {
                 var symEl = b.querySelector("b:nth-of-type(2)");
    var show = true;
               if (!symEl) {
  b.style.display = "block";

  if (filter === "all") {
    b.style.opacity = "1";
  } 
  else if (filter === "lanthanide") {
    b.style.opacity = (b.id === "laBox") ? "1" : "0.2";
  } 
  else if (filter === "actinide") {
    b.style.opacity = (b.id === "acBox") ? "1" : "0.2";
  } 
  else {
    b.style.opacity = "0.2";
  }

  return;
}

                var sym = symEl.innerText;
                var el = elements.find(e => e.symbol === sym);
                if (!el) return;

                var show = true;
                if (filter === "metal") show = ["alkali metal","alkaline earth metal","transition metal","post-transition metal"].includes(el.category);
                else if (filter === "nonmetal") show = ["gas(NonMetal)","halogen(Nonmetal)","Noble Gas(NonMetal)"].includes(el.category);
                else if (filter === "gas") show = el.category.includes("gas(NonMetal)") ;
                else if (filter === "lanthanide") show = el.category.includes("lanthanide");
                else if (filter === "Noble Gas") show = el.category.includes("Noble Gas(NonMetal)");
                else if (filter === "halogen") show = el.category.includes("halogen(Nonmetal)");
                else if (filter === "metalloid") show = el.category.includes("metalloid");
                else if (filter === "actinide") show = el.category.includes("actinide");

                b.style.display = "block";
                b.style.opacity = show ? "1" : "0.25";
            });
        });
    }


    document.getElementById("closePanel").addEventListener("click", window.closeInfoPanel);
    document.getElementById("createCompareBtn").addEventListener("click", window.createComparisonInputs);

    window.showSection("home");
});