function LearningLibrary() {

    const data = {
    A: {
      subtitle: "The Anchor Shape",
      image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133743/Screenshot_2026-06-11_044754_py7zds.png",
      description: "Closed fist with thumb resting beside the index finger.",
      step1: "Fold four fingers into a standard fist.",
  step2: "Place thumb beside the index finger."
    },

    B: {
      subtitle: "Flat Palm",
      image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133743/Screenshot_2026-06-11_044802_won6sb.png",
      description: "All fingers extended upward together.",
      step1: "Keep all fingers straight.",
  step2: "Place thumb across the palm."
    },

    C: {
      subtitle: "Curved Hand",
      image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133744/Screenshot_2026-06-11_044807_kv9laz.png",
       step1: "Curve fingers slightly inward.",
  step2: "Form a clear C shape."
    },

    D: {
      subtitle: "Pointing Shape",
      image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133744/Screenshot_2026-06-11_044823_ojmnwj.png",
      description: "Index finger points upward while others touch thumb.",
      step1: "Raise the index finger.",
  step2: "Touch thumb with remaining fingers."
    },
    E: {
  subtitle: "Folded Fingers",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133745/Screenshot_2026-06-11_044829_yui6ph.png",
  description: "Fingers folded down touching the thumb.",
  step1: "Curl all fingers inward.",
  step2: "Place thumb across fingertips."
},
F: {
  subtitle: "Victory Shape",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133746/Screenshot_2026-06-11_044853_ayngfa.png",
  description: "Index and middle fingers raised together.",
  step1: "Raise index and middle fingers.",
  step2: "Fold remaining fingers under the thumb."
},

G: {
  subtitle: "Side Point",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133747/Screenshot_2026-06-11_044900_avo2m8.png",
  description: "Index finger and thumb extended sideways.",
  step1: "Point index finger sideways.",
  step2: "Extend thumb parallel to index finger."
},

H: {
  subtitle: "Double Pointer",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133748/Screenshot_2026-06-11_044906_s3nfpr.png",
  description: "Index and middle fingers extended together sideways.",
  step1: "Extend index and middle fingers.",
  step2: "Keep fingers together pointing sideways."
},

I: {
  subtitle: "Little Finger",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133749/Screenshot_2026-06-11_044915_tmzdyr.png",
  description: "Only the pinky finger raised.",
  step1: "Raise pinky finger upward.",
  step2: "Keep all other fingers folded."
},

J: {
  subtitle: "Hook Motion",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133750/Screenshot_2026-06-11_044923_tqtbcn.png",
  description: "Like the letter I, drawn in a J motion.",
  step1: "Raise pinky finger.",
  step2: "Move hand in a J shape."
},

K: {
  subtitle: "Split Fingers",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133130/Screenshot_2026-06-11_044046_jyfyit.png",
  description: "Index and middle fingers raised with thumb between them.",
  step1: "Raise index and middle fingers.",
  step2: "Place thumb between both fingers."
},

L: {
  subtitle: "L Shape",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133280/Screenshot_2026-06-11_044058_nterdd.png",
  description: "Thumb and index finger form an L.",
  step1: "Extend thumb outward.",
  step2: "Raise index finger upward."
},

M: {
  subtitle: "Three Fingers Over Thumb",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133281/Screenshot_2026-06-11_044106_n6hfkq.png",
  description: "Three fingers rest over the thumb.",
  step1: "Place thumb under fingers.",
  step2: "Rest three fingers over thumb."
},

N: {
  subtitle: "Two Fingers Over Thumb",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133750/Screenshot_2026-06-11_044947_uwh7m3.png",
  description: "Two fingers rest over the thumb.",
  step1: "Place thumb under fingers.",
  step2: "Rest two fingers over thumb."
},

O: {
  subtitle: "Circle Shape",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133752/Screenshot_2026-06-11_045000_a45sim.png",
  description: "Fingers and thumb form a circle.",
  step1: "Curve fingers inward.",
  step2: "Touch fingertips to thumb."
},

P: {
  subtitle: "Downward K",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133752/Screenshot_2026-06-11_045007_y9mmvy.png",
  description: "Like K but pointing downward.",
  step1: "Form the K handshape.",
  step2: "Tilt hand downward."
},

Q: {
  subtitle: "Downward G",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133282/Screenshot_2026-06-11_044115_dz1ygt.png",
  description: "Like G but pointing downward.",
  step1: "Form the G handshape.",
  step2: "Point fingers downward."
},

R: {
  subtitle: "Crossed Fingers",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133282/Screenshot_2026-06-11_044120_fy64x7.png",
  description: "Index and middle fingers crossed.",
  step1: "Cross index finger over middle finger.",
  step2: "Fold remaining fingers inward."
},

S: {
  subtitle: "Closed Fist",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133282/Screenshot_2026-06-11_044127_jfdwz9.png",
  description: "Tight fist with thumb across fingers.",
  step1: "Make a fist.",
  step2: "Place thumb across front of fingers."
},

T: {
  subtitle: "Thumb Between Fingers",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133753/Screenshot_2026-06-11_045030_efj4bc.png",
  description: "Thumb placed between index and middle finger.",
  step1: "Make a fist.",
  step2: "Slide thumb between fingers."
},

U: {
  subtitle: "Two Upright Fingers",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133754/Screenshot_2026-06-11_045037_ycm0ga.png",
  description: "Index and middle fingers raised together.",
  step1: "Raise index and middle fingers.",
  step2: "Keep them close together."
},

V: {
  subtitle: "V Shape",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133283/Screenshot_2026-06-11_044139_hxkpti.png",
  description: "Index and middle fingers spread apart.",
  step1: "Raise index and middle fingers.",
  step2: "Separate fingers into a V."
},

W: {
  subtitle: "Three Upright Fingers",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133283/Screenshot_2026-06-11_044145_zta9ru.png",
  description: "Three fingers raised upward.",
  step1: "Raise index, middle, and ring fingers.",
  step2: "Spread them slightly apart."
},

X: {
  subtitle: "Hook Finger",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133284/Screenshot_2026-06-11_044150_ttgd3r.png",
  description: "Index finger bent into a hook.",
  step1: "Raise index finger.",
  step2: "Bend finger into a hook shape."
},

Y: {
  subtitle: "Thumb and Pinky",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133755/Screenshot_2026-06-11_045055_bkj2qh.png",
  description: "Thumb and pinky extended outward.",
  step1: "Extend thumb and pinky.",
  step2: "Fold remaining fingers inward."
},

Z: {
  subtitle: "Air Z Motion",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781133756/Screenshot_2026-06-11_045103_gnfs0i.png",
  description: "Index finger draws the letter Z in air.",
  step1: "Raise index finger.",
  step2: "Draw a Z shape in the air."
},
};
const numbersData = {
  0: {
    subtitle: "Closed Circle",
    image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781134491/Screenshot_2026-06-11_050315_ikspyg.png",
    description: "Fingers and thumb touch to form 0.",
    step1: "Curve fingers inward.",
    step2: "Touch fingertips to thumb."
  },

  1: {
    subtitle: "Pointer",
    image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781134491/Screenshot_2026-06-11_050320_tcw7nl.png",
    description: "Index finger points upward.",
    step1: "Raise index finger.",
    step2: "Keep other fingers folded."
  },

  2: {
    subtitle: "V Sign",
    image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781134492/Screenshot_2026-06-11_050324_nppt8i.png",
    description: "Index and middle fingers raised.",
    step1: "Raise index and middle fingers.",
    step2: "Spread them slightly apart."
  },

  3: {
    subtitle: "Three Fingers",
    image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781134493/Screenshot_2026-06-11_050330_imgxm1.png",
    description: "Thumb, index and middle fingers raised.",
    step1: "Raise thumb, index and middle fingers.",
    step2: "Fold remaining fingers."
  },

  4: {
    subtitle: "Four Fingers",
    image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781134494/Screenshot_2026-06-11_050337_hnpdte.png",
    description: "Four fingers raised together.",
    step1: "Raise four fingers.",
    step2: "Keep thumb folded."
  },

  5: {
    subtitle: "Open Palm",
    image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781134495/Screenshot_2026-06-11_050346_pnf6h1.png",
    description: "All fingers extended.",
    step1: "Open palm fully.",
    step2: "Spread fingers naturally."
  },

  6: {
    subtitle: "Thumb to Pinky",
    image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781134497/Screenshot_2026-06-11_050350_iwx4mu.png",
    description: "Thumb touches pinky finger.",
    step1: "Touch thumb to pinky.",
    step2: "Raise remaining fingers."
  },

  7: {
    subtitle: "Thumb to Ring Finger",
    image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781134498/Screenshot_2026-06-11_050358_ou9fms.png",
    description: "Thumb touches ring finger.",
    step1: "Touch thumb to ring finger.",
    step2: "Raise remaining fingers."
  },

  8: {
    subtitle: "Thumb to Middle Finger",
    image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781134499/Screenshot_2026-06-11_050405_wuvrr5.png",
    description: "Thumb touches middle finger.",
    step1: "Touch thumb to middle finger.",
    step2: "Raise remaining fingers."
  },

  9: {
    subtitle: "Thumb to Index Finger",
    image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781134500/Screenshot_2026-06-11_050411_rtrlzc.png",
    description: "Thumb touches index finger.",
    step1: "Touch thumb to index finger.",
    step2: "Raise remaining fingers."
  },

  10: {
    subtitle: "Thumbs Up",
    image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781134501/Screenshot_2026-06-11_050419_yuy214.png",
    description: "Thumb raised upward while other fingers folded.",
    step1: "Make a fist.",
    step2: "Raise thumb upward and move the thumb left to right."
  }
};
const phrasesData = {
  hello: {
    subtitle: "Greeting",
    image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781135459/Screenshot_2026-06-11_051143_bonha1.png",
    description: "A friendly greeting used when meeting someone.",
    step1: "Raise your hand.",
    step2: "Wave gently side to side."
  },
  thankyou: {
    subtitle: "Gratitude",
    image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781135460/Screenshot_2026-06-11_051201_a1xbsk.png",
    description: "Used to express thanks.",
    step1: "Touch chin with fingers.",
    step2: "Move hand forward."
  },
  please: {
    subtitle: "Polite Request",
    image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781135460/Screenshot_2026-06-11_051303_ugjljq.png",
    description: "Used when asking politely.",
    step1: "Place flat hand on chest.",
    step2: "Move in circular motion."
  },
  sorry: {
    subtitle: "Apology",
    image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781135462/Screenshot_2026-06-11_051321_ekfcfh.png",
    description: "Used to express regret.",
    step1: "Make fist and rub chest.",
    step2: "Move in small circles."
  },
  iloveyou: {
  subtitle: "Affection",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781135619/Screenshot_2026-06-11_051357_xfn0dl.png",
  description: "A gesture expressing love and affection.",
  step1: "Extend thumb, index finger, and pinky.",
  step2: "Hold hand outward."
},

no: {
  subtitle: "Negation",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781135463/Screenshot_2026-06-11_051336_zhvshi.png",
  description: "Used to indicate 'no' or refusal.",
  step1: "Extend index and middle fingers.",
  step2: "Shake hand side to side."
},

yes: {
  subtitle: "Affirmation",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781135619/Screenshot_2026-06-11_051425_vplmit.png",
  description: "Used to indicate 'yes' or agreement.",
  step1: "Make a fist.",
  step2: "Nod hand up and down."
},

help: {
  subtitle: "Assistance",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781135620/Screenshot_2026-06-11_051834_hpizin.png",
  description: "Used to ask for help.",
  step1: "Raise one hand with thumb up.",
  step2: "Place it on the palm and move hand in small circles."
},

stop: {
  subtitle: "Command",
  image: "https://res.cloudinary.com/dssogrbjo/image/upload/v1781136069/Screenshot_2026-06-11_053054_qbvk6q.png",
  description: "Used to command someone to stop.",
  step1: "Place one hand flat with palm up.",
  step2: "Hit the palm of the hand with the other hand extended, fingers together, and palm visible like a knife."
}
};


const letters = Object.keys(data);
const numbers = Object.keys(numbersData);
const phrases = Object.keys(phrasesData);
const openDetail = (letter) => {

    const title = document.getElementById("detail-title");
    const subtitle = document.getElementById("detail-subtitle");
    const image = document.getElementById("detail-image");
    const description = document.getElementById("detail-description");
    const guide1 = document.getElementById("guide-step-1");
    const guide2 = document.getElementById("guide-step-2");

    title.innerText = letter;
    const selected =
  data[letter] || numbersData[letter] || phrasesData[letter];
subtitle.innerText = selected.subtitle;
image.src = selected.image;
description.innerText = selected.description;
guide1.innerText = selected.step1;
guide2.innerText = selected.step2;
  };
  return (
<>
  
  
  <div className="flex pt-20 items-start">
    
    <main className="flex-1 ml-64 px-8 py-8 pb-32">
      <section className="mb-10">


        <h1 className="font-display-lg text-display-lg text-on-background mb-4">
          Gesture Library
        </h1>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
         <p
  
  className="text-on-surface-variant text-body-md border-l-4 border-primary-container pl-4">
            Master the art of silent conversation by exploring our curated
            archive of signs.
          </p>
          
        </div>
      </section>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-8">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="archive-tab bg-primary text-on-primary px-8 py-2 font-bold text-label-sm uppercase tracking-widest shadow-sm">
                  Folder: A-Z
                </div>
                <div className="h-px flex-1 bg-outline-variant" />
              </div>
              
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

  {letters.map((letter) => (
    <button
      key={letter}
      className="group relative card-sage border border-outline/20 p-5 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 text-left flex flex-col"
      onClick={() => openDetail(letter)}
    >

      <div className="absolute top-3 right-3 text-primary/40 group-hover:text-primary transition-colors">
        <span className="material-symbols-outlined text-lg">
          push_pin
        </span>
      </div>

      <img
        alt={`ASL ${letter}`}
        className="w-full aspect-square object-contain mb-4 drop-shadow-md"
        src={data[letter].image}
      />

      <div className="mt-auto">
        <span className="font-display-lg text-4xl text-primary leading-none">
          {letter}
        </span>
      </div>

    </button>
  ))}

</div>

              
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="archive-tab bg-secondary text-on-secondary px-8 py-2 font-bold text-label-sm uppercase tracking-widest shadow-sm">
                  Folder: 0-10
                </div>
                <div className="h-px flex-1 bg-outline-variant" />
              </div>
              
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

  {numbers.map((number) => (
    <button
      key={number}
      className="group relative card-cream border border-outline/20 p-5 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 text-left flex flex-col"
      onClick={() => openDetail(number)}
    >

      <div className="absolute top-3 right-3 text-secondary/40 group-hover:text-secondary transition-colors">
        <span className="material-symbols-outlined text-lg">
          push_pin
        </span>
      </div>

      <img
        alt={`ASL ${number}`}
        className="w-full aspect-square object-contain mb-4 drop-shadow-md"
        src={numbersData[number].image}
      />

      <div className="mt-auto">
        <span className="font-display-lg text-4xl text-secondary leading-none">
          {number}
        </span>
      </div>

    </button>
  ))}

</div>
                    
                    
              
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="archive-tab bg-[#d9a5b3] text-on-tertiary px-8 py-2 font-bold text-label-sm uppercase tracking-widest shadow-sm">
                  Folder: Phrases
                </div>
                <div className="h-px flex-1 bg-outline-variant" />
              </div>
              
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

  {phrases.map((phrase) => {
    const icons = {
      hello: "waving_hand",
      thankyou: "volunteer_activism",
      please: "pan_tool",
      sorry: "sentiment_dissatisfied",
      iloveyou: "favorite"
    };

    return (
      <button
        key={phrase}
        onClick={() => openDetail(phrase)}
        className="group relative card-sage border border-outline/20 p-5 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 text-left flex flex-col"
      >
        <div className="absolute top-3 right-3 text-on-surface-variant/20 group-hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-lg">
            push_pin
          </span>
        </div>

        <img
  alt={`ASL ${phrase}`}
  className="w-full aspect-square object-contain mb-4 drop-shadow-md"
  src={phrasesData[phrase].image}
/>

        <div className="mt-auto">
          <span className="font-bold text-lg text-primary leading-none">
            {phrase}
          </span>
        </div>
      </button>
    );
  })}

</div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-4 hidden md:block">
  <div className="sticky top-4">
          <div className="bg-surface border border-outline rounded-[2rem] shadow-2xl overflow-hidden flex flex-col paper-texture">
            <div className="bg-surface-container-high px-6 py-4 border-b border-outline/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-primary"
                  data-icon="attach_file">
                  attach_file
                </span>
                <span className="font-bold text-xs uppercase tracking-tighter text-on-surface-variant">
                  Log: ASL-ALPH-01
                </span>
              </div>
            </div>  
            <div className="p-8">
              <div className="relative bg-surface-bright border-2 border-dashed border-outline-variant rounded-3xl p-10 flex items-center justify-center mb-8">
                <img
                  alt="Detail View"
                  className="max-h-56 object-contain drop-shadow-2xl scale-110"
                  id="detail-image"
                  src="https://res.cloudinary.com/dssogrbjo/image/upload/v1781133743/Screenshot_2026-06-11_044754_py7zds.png"
                />
              </div>
              <div className="flex items-end justify-between mb-4">
                <div>
                  <h2
                    className="font-display-lg text-6xl text-primary leading-none"
                    id="detail-title">
                    A
                  </h2>
                  <p
                    className="font-bold italic text-on-surface-variant mt-2"
                    id="detail-subtitle">
                    "The Anchor Shape"
                  </p>
                </div>
                <span className="bg-primary-container text-on-primary-container px-4 py-1.5 rounded-full text-xs font-bold uppercase">
                  Alphabet
                </span>
              </div>
              <div className="space-y-6">
                <p 
                 id="detail-description"
                className="text-on-surface-variant text-body-md border-l-4 border-primary-container pl-4">
                  The letter 'A' is foundational. Closed fist with the thumb
                  resting against the index finger.
                </p>
                <div className="space-y-4">
                  <h4 className="font-bold text-primary flex items-center gap-2 text-sm uppercase tracking-widest">
                    <span
                      className="material-symbols-outlined text-lg"
                      data-icon="edit_note">
                      edit_note
                    </span>
                    Guide
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex gap-4 items-start">
                      <span className="flex-none w-5 h-5 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center text-[10px] font-black">
                        1
                      </span>
                      <p id="guide-step-1" className="text-sm">
                      Fold four fingers into a standard fist.
                    </p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="flex-none w-5 h-5 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center text-[10px] font-black">
                        2
                      </span>
                      <p id="guide-step-2" className="text-sm">
                      Place thumb against index finger's side.
                   </p>
                   </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>
    </main>
  </div>
</>
  );
}
export default LearningLibrary;