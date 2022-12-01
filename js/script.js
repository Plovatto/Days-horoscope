
const btnMobile = document.getElementById('bot');

function toggleMenu(){

    const nav = document.getElementById('nav');
nav.classList.toggle('active');
}


btnMobile.addEventListener('click', toggleMenu); 
//menu



var escolha = "null";

function Aries(){  
  escolha = "aries";
  names.textContent = "Aries";
  namesign.textContent = "Aries date:";
  fazerFetch();
  
} 

function Touro(){  
  escolha = "taurus";
  names.textContent = "Taurus";
  namesign.textContent = "Taurus date:";
  fazerFetch();
  
} 

function Gemeos(){  
  escolha = "gemini";
  names.textContent = "Gemini";
  namesign.textContent = "Gemini date:";
  fazerFetch();
  
} 

function Cancer(){  
  escolha = "cancer";
  names.textContent = "Cancer";
  namesign.textContent = "Cancer date:";
  fazerFetch();
  
} 

function Leao(){  
  escolha = "leo";
  names.textContent = "Leo";
  namesign.textContent = "Leo date:";
  fazerFetch();
  
} 

function Virgem(){  
  escolha = "virgo";
  names.textContent = "Virgo";
  namesign.textContent = "Virgo date:";
  fazerFetch();
  
} 

function Libra(){  
  escolha = "libra";
  names.textContent = "Libra";
  namesign.textContent = "Libra date:";
  fazerFetch();
  
} 

function Escorpiao(){  
  escolha = "scorpio";
  names.textContent = "Scorpio";
  namesign.textContent = "Scorpio date:";
  fazerFetch();
  
} 

function Sagitario(){  
  escolha = "sagittarius";
  names.textContent = "Sagittarius";
  namesign.textContent = "Sagittarius date:";
  fazerFetch();
  
} 

function Capricornio(){  
  escolha = "capricorn";
  names.textContent = "Capricorn";
  namesign.textContent = "Capricorn date:";
  fazerFetch();
  
}

function Aquario(){  
  escolha = "aquarius";
  names.textContent = "Aquarius";
  namesign.textContent = "Aquarius date:";
  fazerFetch();
  
}

function Peixes(){  
  escolha = "pisces";
  names.textContent = "Pisces";
  namesign.textContent = "Pisces date:";
  fazerFetch();
  
}
function fazerFetch(){
  var URL = "https://aztro.sameerkumar.website/?sign="+escolha+"&day=today";
  fetch(URL, {
      method: 'POST'
   
  })
  .then(response => response.json()).then(response=>{
    textsign.textContent = `${response.description}`
    data.textContent = `${response.current_date}`
    colorsign.textContent = `${response.color}`
    numbersign.textContent = `${response.lucky_number}`
    moodsign.textContent = `${response.mood}` 
    comptsign.textContent = `${response.compatibility}`
    datesign.textContent = `${response.date_range}`
  })
}

//api





