
// MUSIC PLAYER
let interactable = document.getElementById("Play")
let player = document.getElementById("player")

        // PLAY WHEN MOUSE IN
        interactable.addEventListener('mouseenter', () => {
          player.play();
        })
        // LOWER OPACITY WHEN MOUSE IN
        player.addEventListener('play', () => {
          interactable.style.opacity = "0.6";
          interactable.style.color = "#dccb7a";
        })

        // INCREASE OPACTIY WHEN MOUSE OUT
        player.addEventListener('pause', () => {
          interactable.style.opacity = "1";
          interactable.style.color = "black";
        })

        // PAUSE WHEN MOUSE LEAVES
        interactable.addEventListener('mouseleave', () => {
          player.pause();
        })

// EXPLANATIONS POPUPS

let instruction = document.getElementById('In_Instructions')

        // DANCE AND CONNECT
        let dancehoveree = document.getElementById('In_Div_DanceandConnect')
        let dancepopup = document.getElementById('In_Div_Exp_DanceandConnect')

        dancehoveree.addEventListener('mouseenter', () => {
          console.log("hoveredDandC")
          dancepopup.style.display="block";
                benpopup.style.display="none";
                oasispopup.style.display="none";
                chromapopup.style.display="none";
                instruction.style.display="none";
        })

        // BENNY THE WHALE
        let benhoveree = document.getElementById('In_Div_BennytheWhale')
        let benpopup = document.getElementById('In_Div_Exp_BennytheWhale')

        benhoveree.addEventListener('mouseenter', () => {
          console.log("hoveredben")
          benpopup.style.display="block";
                dancepopup.style.display="none";
                oasispopup.style.display="none";
                chromapopup.style.display="none";
                instruction.style.display="none";
        })

        // OASIS
        let oasishoveree = document.getElementById('In_Div_Oasis')
        let oasispopup = document.getElementById('In_Div_Exp_Oasis')

        oasishoveree.addEventListener('mouseenter', () => {
          console.log("hoveredoasis")
          oasispopup.style.display="block";
                dancepopup.style.display="none";
                benpopup.style.display="none";
                chromapopup.style.display="none";
                instruction.style.display="none";
        })

        // CHROMA

        let chromahoveree = document.getElementById('In_Div_Chroma')
        let chromapopup = document.getElementById('In_Div_Exp_Chroma')

        chromahoveree.addEventListener('mouseenter', () => {
          console.log("hoveredchroma")
          chromapopup.style.display="block";
                dancepopup.style.display="none";
                benpopup.style.display="none";
                oasispopup.style.display="none";
                instruction.style.display="none";
        })
