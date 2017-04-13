/*
La Gitane (^._.^)
Copyright © 2017 Tina Anastopoulos
Licensed under the MIT license.
*/

(function($) { 
	
	var gitane = $('#gitane'),
			eyeLeftOpen = $('#eyeLeftOpen'),
			eyeRightOpen = $('#eyeRightOpen'),
			lowerArm = $('#lowerArm'),
			arm = $('#arm'),
			card = $('#card'),
			smile = $('#smile'),
			cardPic = $('#cardPic'),
			label = $('#label'),
			luckyNumbers = $('#luckyNumbers'),
			intro = $('.intro');
			tl = new TimelineLite();
	
	tl
			.to(intro,.2,{opacity:0, y:-50})
			.from(gitane,4,{y:500})
			.to(gitane,2,{opacity:1},'-=2')
			.to(eyeLeftOpen,.5,{opacity:0})
			.to(eyeRightOpen,.5,{opacity:0},'-=.5')
			.to(lowerArm,.2,{rotation:70,transformOrigin:'center bottom'})
			.to(arm,.2,{rotation:-14,transformOrigin:'center top'},'-=.2')
			.to(lowerArm,.1,{rotation:60,transformOrigin:'center bottom'})
			.to(arm,.1,{rotation:-12,transformOrigin:'center top'},'-=.1')
			.to(card,.1,{opacity:1},'-=.2')
			.to(lowerArm,.2,{rotation:0,transformOrigin:'center bottom'})
			.to(arm,.2,{rotation:0,transformOrigin:'center top'},'-=.2')
			.to(eyeLeftOpen,.2,{opacity:1})
			.to(eyeRightOpen,.2,{opacity:1},'-=.2')
			.to(smile,.2,{opacity:1},'-=.2')
			.to(cardPic,.2,{opacity:1},'+=.5')
			.to(label,.2,{opacity:1},'-=.2')
			.to(luckyNumbers,.2,{opacity:1},'-=.2')
			.to(eyeLeftOpen,.5,{opacity:0},'+=.5')
			.to(eyeLeftOpen,.1,{opacity:1})
			.to(smile,.2,{opacity:0},'+=6')				
			.to(gitane,2,{y:500})
			.to(gitane,2,{opacity:0},'-=3');
	
	tl.pause();
	
	$('#btn').click(function(){
			getFortune();
			getLuckyNumbers();
			tl.restart();
	})

})(jQuery);

function getFortune() {
/* PART 1: Get tarot card and meaning. */

	var imgRoute = 'http://www.tinaanastos.com/tarot/images/';

	var tarotDeck = [
  {cardNum:  0, cardImg: imgRoute+'maj_00.jpg', cardId: 'The Fool', cardMeaning: 'new beginnings, optimism, trust in life, a fresh start.'},
  {cardNum:  1, cardImg: imgRoute+'maj_01.jpg', cardId: 'The Magician', cardMeaning: 'action, the power to manifest, ideas.'},
  {cardNum:  2, cardImg: imgRoute+'maj_02.jpg', cardId: 'The High Priestess', cardMeaning: 'inaction, going within, the subconscious.'},
  {cardNum:  3, cardImg: imgRoute+'maj_03.jpg', cardId: 'The Empress', cardMeaning:'abundance, nurturing, fertility, generosity.'},
  {cardNum:  4, cardImg: imgRoute+'maj_04.jpg', cardId: 'The Emperor', cardMeaning:'structure, stability, rules and power.'},
  {cardNum:  5, cardImg: imgRoute+'maj_05.jpg', cardId: 'The Hierophant', cardMeaning:'institutions, tradition, society and its rules.'},
  {cardNum:  6, cardImg: imgRoute+'maj_06.jpg', cardId: 'The Lovers', cardMeaning:' passion, choice, uniting, decisions.'},
  {cardNum:  7, cardImg: imgRoute+'maj_07.jpg', cardId: 'The Chariot', cardMeaning:'movement, progress, integration.'},
  {cardNum:  8, cardImg: imgRoute+'maj_08.jpg', cardId: 'Strength', cardMeaning:'courage, subtle power, integration of animal self, fortitude.'},
  {cardNum:  9, cardImg: imgRoute+'maj_09.jpg', cardId: 'The Hermit', cardMeaning:'meditation, solitude, consciousness.'},
  {cardNum: 10, cardImg: imgRoute+'maj_10.jpg', cardId: 'Wheel of Fortune', cardMeaning:'cycles, change, ups and downs.'},
  {cardNum: 11, cardImg: imgRoute+'maj_11.jpg', cardId: 'Justice', cardMeaning:'fairness, equality, balance.'},
  {cardNum: 12, cardImg: imgRoute+'maj_12.jpg', cardId: 'The Hanged Man', cardMeaning:'surrender, new perspective, life in suspension.'},
  {cardNum: 13, cardImg: imgRoute+'maj_13.jpg', cardId: 'Death', cardMeaning:'changes, physical or metaphorical endings.'},
  {cardNum: 14, cardImg: imgRoute+'maj_14.jpg', cardId: 'Temperance', cardMeaning:'balance, moderation, being sensible.'},
  {cardNum: 15, cardImg: imgRoute+'maj_15.jpg', cardId: 'The Devil', cardMeaning:'destructive patterns, addiction, giving away your power.'},
  {cardNum: 16, cardImg: imgRoute+'maj_16.jpg', cardId: 'The Tower', cardMeaning:'collapse of stability, release, sudden insight.'},
  {cardNum: 17, cardImg: imgRoute+'maj_17.jpg', cardId: 'The Star', cardMeaning:'hope, calm, a good omen.'},
  {cardNum: 18, cardImg: imgRoute+'maj_18.jpg', cardId: 'The Moon', cardMeaning:'mystery, the subconscious, dreams.'},
  {cardNum: 19, cardImg: imgRoute+'maj_19.jpg', cardId: 'The Sun', cardMeaning:'success, happiness, all will be well.'},
  {cardNum: 20, cardImg: imgRoute+'maj_20.jpg', cardId: 'Judgment', cardMeaning:'rebirth, inner calling, healing and renewal.'},
  {cardNum: 21, cardImg: imgRoute+'maj_21.jpg', cardId: 'The World', cardMeaning:'completion, wholeness, attainment, celebration of life.'},
  {cardNum: 22, cardImg: imgRoute+'min_s_ki.jpg', cardId: 'King of Swords', cardMeaning:'seriousness, control, all things rational and intellect-focused.'},
  {cardNum: 23, cardImg: imgRoute+'min_s_qu.jpg', cardId: 'Queen of Swords', cardMeaning:'intelligence, writing, all things direct and to the point.'},
  {cardNum: 24, cardImg: imgRoute+'min_s_kn.jpg', cardId: 'Knight of Swords', cardMeaning:'determination, aggressive pursuit of goals.'},
  {cardNum: 25, cardImg: imgRoute+'min_s_pa.jpg', cardId: 'Page of Swords', cardMeaning:'mental instability, acting without thinking.'},
  {cardNum: 26, cardImg: imgRoute+'min_s_ac.jpg', cardId: 'Ace of Swords', cardMeaning:'a fresh start, a sudden opportunity or idea, clarity.'},
  {cardNum: 27, cardImg: imgRoute+'min_s_02.jpg', cardId: 'Two of Swords', cardMeaning:'indecision or procrastination.'},
  {cardNum: 28, cardImg: imgRoute+'min_s_03.jpg', cardId: 'Three of Swords', cardMeaning:'heartbreak, betrayal.'},
  {cardNum: 29, cardImg: imgRoute+'min_s_04.jpg', cardId: 'Four of Swords', cardMeaning:'meditation, rest, retreat.'},
  {cardNum: 30, cardImg: imgRoute+'min_s_05.jpg', cardId: 'Five of Swords', cardMeaning:'mind games, hostility.'},
  {cardNum: 31, cardImg: imgRoute+'min_s_06.jpg', cardId: 'Six of Swords', cardMeaning:'departure, accepting help, going somewhere better.'},
  {cardNum: 32, cardImg: imgRoute+'min_s_07.jpg', cardId: 'Seven of Swords', cardMeaning:'secret plans, suspicion.'},
  {cardNum: 33, cardImg: imgRoute+'min_s_08.jpg', cardId: 'Eight of Swords', cardMeaning:'feelings of powerlessless and stagnation.'},
  {cardNum: 34, cardImg: imgRoute+'min_s_09.jpg', cardId: 'Nine of Swords', cardMeaning:'overactive mind, anxiety.'},
  {cardNum: 35, cardImg: imgRoute+'min_s_10.jpg', cardId: 'Ten of Swords', cardMeaning:'feelings of defeat, things coming to an end.'},
  {cardNum: 36, cardImg: imgRoute+'min_c_ki.jpg', cardId: 'King of Cups', cardMeaning:'balance, control, generosity.'},
  {cardNum: 37, cardImg: imgRoute+'min_c_qu.jpg', cardId: 'Queen of Cups', cardMeaning:'emotional nurturing, intuition, sensitivity. '},
  {cardNum: 38, cardImg: imgRoute+'min_c_kn.jpg', cardId: 'Knight of Cups', cardMeaning:'romance, adventure, following the heart.'},
  {cardNum: 39, cardImg: imgRoute+'min_c_pa.jpg', cardId: 'Page of Cups', cardMeaning:' creativity, inspiration, learning an artistic skill.'},
  {cardNum: 40, cardImg: imgRoute+'min_c_ac.jpg', cardId: 'Ace of Cups', cardMeaning:'emotional fulfillment, joy.'},
  {cardNum: 41, cardImg: imgRoute+'min_c_02.jpg', cardId: 'Two of Cups', cardMeaning:'partnership, mutual attraction, compatibility.'},
  {cardNum: 42, cardImg: imgRoute+'min_c_03.jpg', cardId: 'Three of Cups', cardMeaning:'celebration, fun with friends, laughter.'},
  {cardNum: 43, cardImg: imgRoute+'min_c_04.jpg', cardId: 'Four of Cups', cardMeaning:'boredom, dissatisfaction with what is being offered.'},
  {cardNum: 44, cardImg: imgRoute+'min_c_05.jpg', cardId: 'Five of Cups', cardMeaning:'dwelling on the negative, self-pity.'},
  {cardNum: 45, cardImg: imgRoute+'min_c_06.jpg', cardId: 'Six of Cups', cardMeaning:'sentimentality, kindness, help.'},
  {cardNum: 46, cardImg: imgRoute+'min_c_07.jpg', cardId: 'Seven of Cups', cardMeaning:'indecision, getting lost in fantasy.'},
  {cardNum: 47, cardImg: imgRoute+'min_c_08.jpg', cardId: 'Eight of Cups', cardMeaning:'abandoning something in search of better.'},
  {cardNum: 48, cardImg: imgRoute+'min_c_09.jpg', cardId: 'Nine of Cups', cardMeaning:'indulgence, self-satisfaction, a great omen.'},
  {cardNum: 49, cardImg: imgRoute+'min_c_10.jpg', cardId: 'Ten of Cups', cardMeaning:'emotional bliss, happiness, attainment.'},
  {cardNum: 50, cardImg: imgRoute+'min_w_ki.jpg', cardId: 'King of Wands', cardMeaning:'career focus, maturity, passion.'},
  {cardNum: 51, cardImg: imgRoute+'min_w_qu.jpg', cardId: 'Queen of Wands', cardMeaning:'confidence, focus, zest for life.'},
  {cardNum: 52, cardImg: imgRoute+'min_w_kn.jpg', cardId: 'Knight of Wands', cardMeaning:'adventure, risk-taking, travel, following passions.'},
  {cardNum: 53, cardImg: imgRoute+'min_w_pa.jpg', cardId: 'Page of Wands', cardMeaning:'new inspiration, excitement about life. '},
  {cardNum: 54, cardImg: imgRoute+'min_w_ac.jpg', cardId: 'Ace of Wands', cardMeaning:'new beginnings, creative spark, fertile ideas.'},
  {cardNum: 55, cardImg: imgRoute+'min_w_02.jpg', cardId: 'Two of Wands', cardMeaning:'contemplation, assessing direction in life.'},
  {cardNum: 56, cardImg: imgRoute+'min_w_03.jpg', cardId: 'Three of Wands', cardMeaning:'success, reaping the rewards of efforts.'},
  {cardNum: 57, cardImg: imgRoute+'min_w_04.jpg', cardId: 'Four of Wands', cardMeaning:'celebration, the home.'},
  {cardNum: 58, cardImg: imgRoute+'min_w_05.jpg', cardId: 'Five of Wands', cardMeaning:'competition, minor struggles or disagreements.'},
  {cardNum: 59, cardImg: imgRoute+'min_w_06.jpg', cardId: 'Six of Wands', cardMeaning:'success, accolades and achievement.'},
  {cardNum: 60, cardImg: imgRoute+'min_w_07.jpg', cardId: 'Seven of Wands', cardMeaning:'feelings of defensiveness, being on guard.'},
  {cardNum: 61, cardImg: imgRoute+'min_w_08.jpg', cardId: 'Eight of Wands', cardMeaning:'speed, things manifesting quickly.'},
  {cardNum: 62, cardImg: imgRoute+'min_w_09.jpg', cardId: 'Nine of Wands', cardMeaning:'pessimism, gearing up for the worst.'},
  {cardNum: 63, cardImg: imgRoute+'min_w_10.jpg', cardId: 'Ten of Wands', cardMeaning:'exhaustion, responsibilities.'},
  {cardNum: 64, cardImg: imgRoute+'min_p_ki.jpg', cardId: 'King of Pentacles', cardMeaning:'enjoying the good life, financial security.'},
  {cardNum: 65, cardImg: imgRoute+'min_p_qu.jpg', cardId: 'Queen of Pentacles', cardMeaning:'physical and financial health, being grounded in calm.'},
  {cardNum: 66, cardImg: imgRoute+'min_p_kn.jpg', cardId: 'Knight of Pentacles', cardMeaning:'being cautious, sensible, and slow to progress.'},
  {cardNum: 67, cardImg: imgRoute+'min_p_pa.jpg', cardId: 'Page of Pentacles', cardMeaning:'commitment to learning, new beginnings, inspiration.'},
  {cardNum: 68, cardImg: imgRoute+'min_p_ac.jpg', cardId: 'Ace of Pentacles', cardMeaning:'financial reward, clarity of life purpose, goals.'},
  {cardNum: 69, cardImg: imgRoute+'min_p_02.jpg', cardId: 'Two of Pentacles', cardMeaning:'balance, multi-tasking.'},
  {cardNum: 70, cardImg: imgRoute+'min_p_03.jpg', cardId: 'Three of Pentacles', cardMeaning:'meaningful or enjoyable work, suitable career, opportunity.'},
  {cardNum: 71, cardImg: imgRoute+'min_p_04.jpg', cardId: 'Four of Pentacles', cardMeaning:'hoarding, feeling poor, holding back out of fear.'},
  {cardNum: 72, cardImg: imgRoute+'min_p_05.jpg', cardId: 'Five of Pentacles', cardMeaning:'minor money troubles, health problems, feeling like an outsider. '},
  {cardNum: 73, cardImg: imgRoute+'min_p_06.jpg', cardId: 'Six of Pentacles', cardMeaning:'charity, accepting and giving help.'},
  {cardNum: 74, cardImg: imgRoute+'min_p_07.jpg', cardId: 'Seven of Pentacles', cardMeaning:'patience, waiting for results.'},
  {cardNum: 75, cardImg: imgRoute+'min_p_08.jpg', cardId: 'Eight of Pentacles', cardMeaning:'hard work, focused efforts.'},
  {cardNum: 76, cardImg: imgRoute+'min_p_09.jpg', cardId: 'Nine of Pentacles', cardMeaning:'luxury, rest, comfort.'},
  {cardNum: 77, cardImg: imgRoute+'min_p_10.jpg', cardId: 'Ten of Pentacles', cardMeaning:'financial success, strong business relationships.'}
];

/* Keep shuffle array to expand game to several cards later on  */

	function shuffle(array) {
  	var currentIndex = array.length, temporaryValue, randomIndex;

  	// While there remain elements to shuffle,  
  	while (0 !== currentIndex) {

    	// pick a remaining element;
    	randomIndex = Math.floor(Math.random() * currentIndex);
    	currentIndex -= 1;

    	// swap it with the current element.
    	temporaryValue = array[currentIndex];
    	array[currentIndex] = array[randomIndex];
    	array[randomIndex] = temporaryValue;
  	}

  	return array;
	}

	shuffle(tarotDeck);

	$("#cardPic").attr("src",tarotDeck[0].cardImg);
	$('#label').html(tarotDeck[0].cardId+': Your answer involves '+tarotDeck[0].cardMeaning);

}

function getLuckyNumbers() {
/* Part 2: Get lucky numbers.  */

	var arr = [];
	//  7 numbers between 1 and 75
	var amount = 7, min = 1, max = 75, output='';
	function getNumbers(min, max, amount) {
            while (arr.length < amount) {
                var randomnumber = Math.floor(Math.random() * (max - min + 1) + min);
                var found = false;
									// Check for duplicates
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i] == randomnumber) {
                            found = true;
                            break
                        }
                    }

                if (!found) {
                    arr[arr.length] = randomnumber
                }
            }
						// Sort in order
            arr.sort(function(a, b) {
                return a - b
            });
				 
				return arr;
        }

	getNumbers(min, max, amount);
	
	for(var i=0;i<=amount-1;i++) {
		output+=arr[i]+(i==amount-1 ? '.' : ', ')+(i==amount-2 ? ' and ' : '');
	}

	$('#luckyNumbers').html('Your lucky numbers are '+output);
	
}
