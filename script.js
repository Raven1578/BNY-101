const userMessages = {
"Lucy": `Dear Lucy,\n\nHappy Birthday tol, Godbless sayo and ir family and more birthdays to come. Valo na agad tol wag kana mag celebrate\n\n
HAHAHAHAHA\n\n
Goodluck sa school just so u know im rooting for you!!\n\n
Happy birthday uli tol\n\n
\n\nBest regards,\nRaven.`,
  
  "Yosmar": `Dear Yosmar,\n\nHappy Birthday bro i know we havent talk for like a year but maaaan i still love you (no homo).
Remember that even if we dont talk for a year or so youll still have a special place in ma heart.\n\nI hope your relationship with Angel last forever, im always rooting for you guys.
You guys made me belive in love again and im thankful for that, sorry if i could not give you any expensive gift for christmas or your birthday.
Keep this in mind tho once i became a successful game dev
i wont forget you. Once again Happy Birthday, Marry Christmas, and Happy New Year :* \n\nBest regards,\nRaven.`,

"Alice":  `Dear Alice,\n\If reincarnation were to exist, I would find you in every life.
In different bodies, in different times,
but always with the same heart,
so I could experience life and death with you, my love.\n\n
Every time I kiss your hands, it feels like I'm courting all over again,
renewing my vow to cherish you forever.
I can't wait for the day I can call you my one and only wife.\n\n
Always remember, my love for you is eternal —
until death does us part

\n\nBest regards,\n\nYour Girly Pop.`,

"Fin": `Dear Fantastic Finy,\n\nThank you for everthing, thank you for being a friend.\n\n
No,no,no...\n\n
Let me rephrase that, thank you for being a awesome brother, your like a big brother that i never had
and I love you for that I trully do. Thank you for always hearing me out, for keeping my head up all the time.
thank you for being there where i needed u the most. It was you who stayed when I was at my lowest point in life.
You mean so much to me, you gave me everything.\n\n
Ill repay you someday.\n\n
Im sorry if i could not get you any expensive gifts\n\n
But remember this once i become a successful game dev ill never forget you.
I also promise once i graduate ill come to U.S and meet you there (Part of my bucket list)\n\n
I love you man...\n\n
Your a brother not by blood but by bond.\n\n
Merry Christmas and Happy New Year\n\n
Best regards,\n\nRavey Wavey
`,

"Kine": `Dear Mr.Fine Kine,\n\nThank you brotha, for making my life better.
Thank you for always making me laugh, thank you for inviting me into your games
I love you not just a friend but a brother not by blood but by bond, ill repay you someday once I became successful\n\n
I respect you so much i love you man\n\n
Merry Christmas and Happy New Year\n\n
Best regards,\n\nRavey Wavey`,

"Kayee": `Dear Wabuu,\n\nThank you sa lahat, specially yung mga araw na kailangan kita yung na down ako.
thank you sa mga advice mo, Im always rooting for you. I hope na makagraduate ka and maging nurse para ikaw tatakbuhan ko if mabuntis si Alice\n\n
HAHAHAHA (charr)\n\n
Always praying for your safety and health goodluck sa life :*
Merry Christmas and Happy New Year\n\n
Best regards,\n\nRibin`,

"Aizel": `Dear Aizel,\n\nThank you for listening to my rant giving me advice all the daaaamnn TIMEEE, I appreciate you for that.
Always rooting sainyo ni karl,sana maka pasa ka para pag najuntis alis meron kayong dalawa ni Kayee\n\n
HAHAHAHAHAHAHHA (char)\n\nAlways praying for your safety and health goodluck sa life :*
Merry Christmas and Happy New Year\n\n
Best regards,\n\nRibin`,

"Shane": `Dear Shane,\n\nThank you for make my shs life fun thank you for listening to my rants and giving me advices.
Rooting sayo, bawi next year UC kana haa.\n\n
Ay oo pala meron parin sakin letter mo\n\n
HAHAHAHAHAHAHHAH\n\n
Thank you Shane, always praying for your safety and health goodluck sa life :*
Merry Christmas and Happy New Year\n\n
Best regards,\n\nRibin`,

"Andong": `Dear Andong,\n\nThank you bro kung wala ka di siguro masaya buhay ko HAHAHAH
Sorry kung naging immature ako nung una love you bro
babawi ako, rides tayo pag naayos na bike
love you ulit tol rooting for you always muah muah\n\n
chat kalang if need moko man
Merry Christmas and Happy New Year\n\n
Best regards,\n\nRJuan`,

"Karl": `Dear Karlos,\n\nThank you bro sa lahat babawi din ako sayo someday
always rooting sainyo ni Aizel.\n\n
Inom na ulit bai kiss kita marami ulit
love you ulit tol rooting for you always muah muah\n\n
chat kalang if need moko man
Merry Christmas and Happy New Year\n\n
Best regards,\n\nRJuan`,

"Argay": `Dear Argay\n\nThank you bro ikaw pinakapinag kakatiwalaan ko love you man.
Respect you alot bruv bigyan kita bj, goodluck sa school mo bro love you
love you tol rooting for you always muah muah\n\n
chat kalang if need moko bruv
Merry Christmas and Happy New Year\n\n
Best regards,\n\nRJuan`,

"Malong":`Dear Malong,\n\nThank you bro love you so much more kagaguhan to come bro
pahiramin mo pa sana ako damit mo libre na please also ukay na ulit tayo man hihi
love you ulit tol rooting for you always muah muah\n\n
chat kalang if need moko man
Merry Christmas and Happy New Year\n\n
Best regards,\n\nRJuan`
};

function typeWriter(text, element, callback) {
  let i = 0;
  const typingSound = document.getElementById("typing-sound"); 
  element.innerHTML = ''; 
  
  typingSound.currentTime = 0;
  typingSound.play();
  

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      typingSound.currentTime = 0; 
      typingSound.play(); 
      i++;
      setTimeout(typing, 80); 
    } else {
      typingSound.pause(); 
      typingSound.currentTime = 0; 
      if (callback) {
        callback(); 
      }
    }
  }
  typing();
}

window.onload = function() {
  const promptText = "Trojan.pxp [Version 10.0.19045.5247]>";
  const prompt2Text = "C:\\Users\\YourName>";
  const prompt3Text = "Enter Your Name:";

  const promptElement = document.getElementById("prompt");
  const prompt2Element = document.getElementById("prompt2");
  const prompt3Element = document.getElementById("prompt3");

  const typingSound = document.getElementById("typing-sound");
  
  typingSound.currentTime = 0;
  typingSound.play();

  typeWriter(promptText, promptElement, function() {
    prompt2Element.style.display = "block"; 
    typeWriter(prompt2Text, prompt2Element, function() {
      prompt3Element.style.display = "block"; 
      typeWriter(prompt3Text, prompt3Element, function() {
        document.getElementById("user-input").focus(); 
      });
    });
  });
};

document.getElementById("user-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    const input = event.target.value.trim();
    const responseElement = document.getElementById("response");

    if (userMessages[input]) {
      typeWriter("Downloading Virus Trojan.pxp...", responseElement, function() {
        setTimeout(() => {
          responseElement.innerHTML = ''; 
          typeWriter("Extracting Virus Trojan.pxp...", responseElement, function() {
            setTimeout(() => {
              typeWriter("Trojan Extracted! System Compromised!", responseElement, function() {
                setTimeout(() => {
                  typeWriter("Just kidding... :P", responseElement, function() {
                    setTimeout(() => {
                      typeWriter(userMessages[input], responseElement);
                    }, 1000); 
                  });
                }, 3000); 
              });
            }, 3000); 
          });
        }, 3000); 
      });
    } else if (input) {
      typeWriter(`Unknown Codename: ${input}!`, responseElement);
    } else {
      typeWriter("Please enter a valid name.", responseElement);
    }

    event.target.value = "";
  }
});
