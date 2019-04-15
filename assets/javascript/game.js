// List of dog breeds 

var wins = 0;
var losses = 0;

var maxErrors = 10;

var wordDisplayLettersElement = document.getElementById("word-display-letters");
var guessedLettersElement = document.getElementById("guessed-letters");
var errorCountElement = document.getElementById("error-count");
var winCountElement = document.getElementById("win-count");
var lossCountElement = document.getElementById("loss-count");
var alertLineElements = document.getElementsByClassName("alert-line");

var validGuesses = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

var youWin = ["You win!"];
var youLose = ["You lose!"];
var emptyAlert = [];
var game = new Hangman();

document.onkeyup = function(event) {
	var userGuess = event.key;

	if (!game.gameOver) {
		if (validGuesses.includes(userGuess) && !game.guessedLetters.includes(userGuess)) {
			game.checkGuess(userGuess);
		}
	} else {
		game = new Hangman();
		game.updatePageData();
	}
}

function Hangman() {
    this.wordList = ["affenpinscher","afghanhound","aidi","airedaleterrier","akbashdog","akita","alanoespañol","alaskankleekai","alaskanmalamute","alpinedachsbracke","alpinespaniel","americanbulldog","americancockerspaniel","americaneskimodog","americanfoxhound","americanhairlessterrier","americanpitbullterrier","americanstaffordshireterrier","americanwaterspaniel","anglo-françaisdepetitevénerie","appenzellersennenhund","ariegepointer","ariegeois","armant","armeniangamprdog","artoishound","australiancattledog","australiankelpie","australianshepherd","australiansilkyterrier","australianstumpytailcattledog","australianterrier","azawakh","bakharwaldog","barbet","basenji","basqueshepherddog","bassetartésiennormand","bassetbleudegascogne","bassetfauvedebretagne","bassethound","bavarianmountainhound","beagle","beagle-harrier","beardedcollie","beauceron","bedlingtonterrier","belgianshepherddog(groenendael)","belgianshepherddog(laekenois)","belgianshepherddog(malinois)","bergamascoshepherd","bergerblancsuisse","bergerpicard","bernerlaufhund","bernesemountaindog","billy","blackandtancoonhound","blackandtanvirginiafoxhound","blacknorwegianelkhound","blackrussianterrier","bloodhound","bluelacy","bluepaulterrier","boerboel","bohemianshepherd","bolognese","bordercollie","borderterrier","borzoi","bostonterrier","bouvierdesardennes","bouvierdesflandres","boxer","boykinspaniel","braccoitaliano","braqued'auvergne","braquedubourbonnais","braquedupuy","braquefrancais","braquesaint-germain","brazilianterrier","briard","briquetgriffonvendéen","brittany","broholmer","brunojurahound","bucovinashepherddog","bullandterrier","bullterrier(miniature)","bullterrier","bulldog","bullenbeisser","bullmastiff","bullykutta","burgospointer","cairnterrier","canaandog","canadianeskimodog","canecorso","cardiganwelshcorgi","carolinadog","carpathianshepherddog","catahoulacur","catalansheepdog","caucasianshepherddog","cavalierkingcharlesspaniel","centralasianshepherddog","ceskyfousek","ceskyterrier","chesapeakebayretriever","chienfrançaisblancetnoir","chienfrançaisblancetorange","chienfrançaistricolore","chien-gris","chihuahua","chileanfoxterrier","chinesechongqingdog","chinesecresteddog","chineseimperialdog","chinook","chippiparai","chowchow","ciernysery","cimarrónuruguayo","cirnecodell'etna","clumberspaniel","combai","cordobafightingdog","cotondetulear","cretanhound","croatiansheepdog","cumberlandsheepdog","curlycoatedretriever","cursinu","cãodaserradeaires","cãodecastrolaboreiro","cãofiladesãomiguel","dachshund","dalmatian","dandiedinmontterrier","danishswedishfarmdog","deutschebracke","dobermanpinscher","dogoargentino","dogocubano","doguedebordeaux","drentsepatrijshond","drever","dunker","dutchshepherddog","dutchsmoushond","eastsiberianlaika","east-europeanshepherd","elo","englishcockerspaniel","englishfoxhound","englishmastiff","englishsetter","englishshepherd","englishspringerspaniel","englishtoyterrier(black&amp;tan)","englishwaterspaniel","englishwhiteterrier","entlebuchermountaindog","estonianhound","estrelamountaindog","eurasier","fieldspaniel","filabrasileiro","finnishhound","finnishlapphund","finnishspitz","flat-coatedretriever","formosanmountaindog","foxterrier(smooth)","frenchbulldog","frenchspaniel","galgoespañol","gasconsaintongeois","germanlonghairedpointer","germanpinscher","germanshepherd","germanshorthairedpointer","germanspaniel","germanspitz","germanwirehairedpointer","giantschnauzer","glenofimaalterrier","goldenretriever","gordonsetter","granmastíndeborínquen","grandanglo-françaisblancetnoir","grandanglo-françaisblancetorange","grandanglo-françaistricolore","grandbassetgriffonvendéen","grandbleudegascogne","grandgriffonvendéen","greatdane","greatpyrenees","greaterswissmountaindog","greekharehound","greenlanddog","greyhound","griffonbleudegascogne","griffonbruxellois","griffonfauvedebretagne","griffonnivernais","hamiltonstövare","hanoverhound","hareindiandog","harrier","havanese","hawaiianpoidog","himalayansheepdog","hokkaido","hovawart","huntaway","hygenhund","ibizanhound","icelandicsheepdog","indianpariahdog","indianspitz","irishredandwhitesetter","irishsetter","irishterrier","irishwaterspaniel","irishwolfhound","istriancoarse-hairedhound","istrianshorthairedhound","italiangreyhound","jackrussellterrier","jagdterrier","jämthund","kaiken","kaikadi","kanni","karelianbeardog","karstshepherd","keeshond","kerrybeagle","kerryblueterrier","kingcharlesspaniel","kingshepherd","kintamani","kishu","komondor","kooikerhondje","koolie","koreanjindodog","kromfohrländer","kumaonmastiff","kurī","kuvasz","kyi-leo","labradorhusky","labradorretriever","lagottoromagnolo","lakelandterrier","lancashireheeler","landseer","lapponianherder","largemünsterländer","leonberger","lhasaapso","lithuanianhound","longhairedwhippet","löwchen","mahrattagreyhound","maltese","manchesterterrier","maremmasheepdog","mcnab","mexicanhairlessdog","miniatureamericanshepherd","miniatureaustralianshepherd","miniaturefoxterrier","miniaturepinscher","miniatureschnauzer","miniaturesharpei","molossus","montenegrinmountainhound","moscowwatchdog","moscowwaterdog","mountaincur","mucuchies","mudholhound","mudi","neapolitanmastiff","newzealandheadingdog","newfoundland","norfolkspaniel","norfolkterrier","norrbottenspets","northcountrybeagle","northerninuitdog","norwegianbuhund","norwegianelkhound","norwegianlundehund","norwichterrier","oldcroatiansighthound","olddanishpointer","oldenglishsheepdog","oldenglishterrier","oldgermanshepherddog","oldeenglishbulldogge","otterhound","pachonnavarro","paisleyterrier","pandikona","papillon","parsonrussellterrier","patterdaleterrier","pekingese","pembrokewelshcorgi","perrodepresacanario","perrodepresamallorquin","peruvianhairlessdog","petitbassetgriffonvendéen","petitbleudegascogne","phalène","pharaohhound","phuquocridgebackdog","picardyspaniel","plotthound","podencocanario","pointer(dogbreed)","polishgreyhound","polishhound","polishhuntingdog","polishlowlandsheepdog","polishtatrasheepdog","pomeranian","pont-audemerspaniel","poodle","porcelaine","portuguesepodengo","portuguesepointer","portuguesewaterdog","posavachound","pražskýkrysařík","pudelpointer","pug","puli","pumi","pungsandog","pyreneanmastiff","pyreneanshepherd","rafeirodoalentejo","rajapalayam","rampurgreyhound","rastreadorbrasileiro","ratterrier","ratonerobodegueroandaluz","redbonecoonhound","rhodesianridgeback","rottweiler","roughcollie","russellterrier","russianspaniel","russiantracker","russo-europeanlaika","sabuesoespañol","saint-usugespaniel","sakhalinhusky","saluki","samoyed","sapsali","schapendoes","schillerstövare","schipperke","schweizerlaufhund","schweizerischerniederlaufhund","scotchcollie","scottishdeerhound","scottishterrier","sealyhamterrier","segugioitaliano","seppalasiberiansleddog","serbianhound","serbiantricolourhound","sharpei","shetlandsheepdog","shibainu","shihtzu","shikoku","shilohshepherddog","siberianhusky","silkenwindhound","sinhalahound","skyeterrier","sloughi","slovakcuvac","slovakianrough-hairedpointer","smallgreekdomesticdog","smallmünsterländer","smoothcollie","southrussianovcharka","southernhound","spanishmastiff","spanishwaterdog","spinoneitaliano","sportinglucasterrier","st.bernard","st.john'swaterdog","stabyhoun","staffordshirebullterrier","standardschnauzer","stephenscur","styriancoarse-hairedhound","sussexspaniel","swedishlapphund","swedishvallhund","tahltanbeardog","taigan","talbot","tamaskandog","teddyrooseveltterrier","telomian","tenterfieldterrier","thaibangkaewdog","thairidgeback","tibetanmastiff","tibetanspaniel","tibetanterrier","tornjak","tosa","toybulldog","toyfoxterrier","toymanchesterterrier","toytrawlerspaniel","transylvanianhound","treeingcur","treeingwalkercoonhound","trigghound","tweedwaterspaniel","tyroleanhound","vizsla","volpinoitaliano","weimaraner","welshsheepdog","welshspringerspaniel","welshterrier","westhighlandwhiteterrier","westsiberianlaika","westphaliandachsbracke","wetterhoun","whippet","whiteshepherd","wirefoxterrier","wirehairedpointinggriffon","wirehairedvizsla","yorkshireterrier","šarplaninac"];
	this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)];
	this.guessedLetters = [];
	this.errors = 0;
	this.visibleLetters = [];
	this.gameOver = false;
	this.alertLines = emptyAlert;
	for (var i = 0; i < this.word.length; i++) {
		this.visibleLetters[i] = (false);
	}
}

Hangman.prototype.checkGuess = function(char) {
	this.guessedLetters.push(char);

	var isInWord = false;
	for (var i = 0; i < this.word.length; i++) {
		if (this.word.charAt(i) === char) {
			isInWord = true;
			this.visibleLetters[i] = true;
		}
	}
	if (!isInWord) {
		this.errors++;
	}

	if (this.errors >= maxErrors) {
		losses++;
		this.alertLines = youLose;
		this.gameOver = true;
	}

	if (!this.visibleLetters.includes(false)) {
		wins++;
		this.alertLines = youWin;
        this.gameOver = true;
	}

	game.updatePageData();
};

Hangman.prototype.updatePageData = function() {
	var tempString = "";
	for (var i = 0; i < this.visibleLetters.length; i++) {
		tempString += ((this.visibleLetters[i] || this.gameOver) ? this.word.charAt(i).toUpperCase() : "_");
		if (i < (this.visibleLetters.length - 1)) tempString += " ";
	}
	wordDisplayLettersElement.textContent = tempString;

	tempString = "";
	for (var i = 0; i < this.guessedLetters.length; i++) {
		tempString += (this.guessedLetters[i].toUpperCase());
		if (i < (this.guessedLetters.length - 1)) tempString += " ";
	}
	for (var i = tempString.length; i < 51; i++) {
		tempString += " ";
	}
	guessedLettersElement.textContent = tempString;

	tempString = this.errors + " / " + maxErrors;
	for (var i = tempString.length; i < 32; i++) {
		tempString += " ";
	}
	errorCountElement.textContent = tempString;

	tempString = wins + "";
	for (var i = tempString.length; i < 45; i++) {
		tempString += " ";
	}
	winCountElement.textContent = tempString;

	tempString = losses + "";
	for (var i = tempString.length; i < 43; i++) {
		tempString += " ";
	}
	lossCountElement.textContent = tempString;

	for (var i = 0; i < alertLineElements.length; i++) {
		alertLineElements[i].textContent = (this.alertLines[i]);
	}
}

game.updatePageData();