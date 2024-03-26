const legendName = document.getElementById("mysteryLegend");
const legend_image = document.getElementById("img-legend");
const weapon1 = document.getElementById("mysteryWeapon1");
const weapon2 = document.getElementById("mysteryWeapon2");



const legendList = [
{name:"Ash", class: "assult", img:"legends/ash.png"}, {name:"Ballistic" , class: "assult", img:"legends/ballistic.png"}, {name:"Bangalore", class: "assult", img:"legends/bangalore.png"}, 
{name:"Bloodhound", class: "recon", img:"legends/bloodhound.png"}, {name:"Catalyst", class: "controller", img:"legends/catalyst.png"}, 
{name:"Caustic", class: "controller", img:"legends/caustic.png"}, {name:"Conduit", class: "support", img:"legends/conduit.png"}, {name:"Crypto", class: "recon", img:"legends/crypto.png"}, 
{name:"Fuse", class: "assult",img:"legends/fuse.png"}, {name:"Gibraltar", class: "support", img:"legends/gibraltar.png"},{name:"Horizon", class: "skirmisher", img:"legends/horizon.png"},
{name:"Lifeline", class: "support", img:"legends/lifeline.png"},{name:"Loba", class: "support", img:"legends/loba.png"}, {name:"Mad Maggie", class: "assult", img:"legends/mad_maggie.png"}, 
{name:"Mirage", class: "support", img:"legends/mirage.png"},{name:"Newcastle", class: "support", img:"legends/newcastle.png"},
{name:"Octane", class: "skirmisher", img:"legends/octane.png"}, {name:"Pathfinder", class: "skirmisher", img:"legends/pathfinder.png"},{name:"Rampart", class: "controller", img:"legends/rampart.png"},
{name:"Revenant", class: "skirmisher", img:"legends/revenant.png"},{name:"Seer", class: "recon", img:"legends/seer.png"},{name:"Valkyrie", class: "skirmisher", img:"legends/valkyrie.png"},
{name:"Vantage", class: "recon", img:"legends/vantage.png"},{name:"Wattson", class: "controller", img:"legends/wattson.png"}, 
{name:"Wraith", class: "skirmisher", img:"legends/wraith.png"}];

const ammoList = [
    {name:"light", original:"ammo/Light_Rounds.png", carePackage:"ammo/Mythic_Light_Rounds.png"},
    {name:"heavy", original:"ammo/Heavy_Rounds.png", carePackage:"ammo/Mythic_Heavy_Rounds.png"},
    {name:"energy", original:"ammo/Energy_Ammo.png", carePackage:"ammo/Mythic_Energy_Ammo.png"},
    {name:"shotgun", original:"ammo/Shotgun_Shells.png", carePackage:"ammo/Mythic_Shotgun_Shells.png"},
    {name:"sniper", original:"ammo/Sniper_Ammo.png", carePackage:"ammo/Mythic_Sniper_Ammo.png"},
    {name:"arrow", original:null, carePackage:"ammo/Mythic_Arrows.png"}
]
const classList = [
    {name: "assult", img: "/legend_icon/assult.png"},  
    {name: "recon", img: "/legend_icon/recon.png"}, 
    {name: "support", img: "/legend_icon/support.png"},
    {name: "skirmisher", img: "/legend_icon/skirmisher.png"},
    {name: "controller", img: "/legend_icon/controller.png"}
]
const weaponList = [
{name:"Alternator SMG", type:"light", img:"guns/alternator.png", isCarePackage: false} ,{name:"R-99 SMG", type:"light", img:"guns/r99.png", isCarePackage: false},
{name:"R-301 Carbine", type:"light", img:"guns/r301.png", isCarePackage: false},{name:"M600 Spitfire", type:"light", img:"guns/spitfire.png", isCarePackage: false},
{name:"G7 Scout", type:"light", img:"guns/g7.png", isCarePackage: false},{name:"RE-45 Auto", type:"light", img:"guns/re45.png", isCarePackage: false},
{name:"P2020", type:"light", img:"guns/p2020.png", isCarePackage: false},{name:"VK-47 Flatline", type:"heavy", img:"guns/flatline.png", isCarePackage: false},
{name:"Hemlok Burst AR", type:"heavy", img:"guns/hemlock.png", isCarePackage: false},{name:"C.A.R. SMG", type:"heavy", img:"guns/car.png", isCarePackage: false},
{name:"Prowler Burst PDW", type:"heavy", img:"guns/prowler.png", isCarePackage: false},{name:"Rampage LMG", type:"heavy", img:"guns/rampage.png", isCarePackage: false},
{name:"30-30 Repeater", type:"heavy", img:"guns/3030.png", isCarePackage: false},{name:"HAVOC Rifle", type:"energy", img:"guns/havoc.png", isCarePackage: false}, 
{name:"Nemesis Burst AR", type:"energy", img:"guns/nemisis.png", isCarePackage: false},{name:"Devotion LMG", type:"energy", img:"guns/devo.png", isCarePackage: false},
{name:"L-STAR EMG", type:"energy", img:"guns/lstar.png", isCarePackage: false},{name:"Volt SMG", type:"energy", img:"guns/volt.png", isCarePackage: false},
{name:"Triple Take", type:"energy", img:"guns/triple_take.png", isCarePackage: false},{name:"Charge Rifle", type:"sniper", img:"guns/charge_rifle.png", isCarePackage: false},
{name:"Longbow DMR", type:"sniper", img:"guns/longbow.png", isCarePackage: false},{name:"Sentinel", type:"sniper", img:"guns/sentinal.png", isCarePackage: false},
{name:"Wingman", type:"sniper", img:"guns/wingman.png", isCarePackage: true},{name:"Kraber .50-Cal Sniper", type:"sniper", img:"guns/kraber.png", isCarePackage: true},
{name:"EVA-8 Auto", type:"shotgun", img:"guns/eva8.png", isCarePackage: true},{name:"Mastiff Shotgun", type:"shotgun", img:"guns/mastiff.png", isCarePackage: false},
{name:"Mozambique Shotgun", type:"shotgun", img:"guns/mozam.png", isCarePackage: false},{name:"Peacekeeper", type:"shotgun", img:"guns/peacekeeper.png", isCarePackage: false},
{name:"Bocek Compound Bow", type:"arrow", img:"guns/bocek.png", isCarePackage: true}];

const btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    randomizeLengnd();
    randomizeWeapon1();
    randomizeWeapon2();
    });

const legendbtn = document.querySelector(".reroll-legend");
legendbtn.addEventListener("click", function(){
    randomizeLengnd();
})

const weapon1btn = document.querySelector(".reroll-weapon1");
weapon1btn.addEventListener("click", function(){
    randomizeWeapon1();
})

const weapon2btn = document.querySelector(".reroll-weapon2");
weapon2btn.addEventListener("click", function(){
    randomizeWeapon2();
})

const legend_icon = document.getElementById("legend_class");
function randomizeLengnd(){
    let ran = Math.floor(Math.random()*legendList.length); 
    let legend = legendList[ran];
    if(!passAllLegendChecks(legend)){
        randomizeLengnd()
    }else{
        legendName.textContent  = legend.name;
        legend_image.src=legend.img;
        let isFound = false;
        let i = 0;
        while(!isFound && i != classList.length){
            if(legend.class == classList[i].name){
                isFound = true;
            }else{
                i++;
            }
        }
        legend_icon.src = classList[i].img;
    }
    
}
let currentAmmo = "";
const ammo1 = document.getElementById("ammo1");
function changeAmmoImg1(type, isCarePackage){
    let i = 0;
    let isFound = false;
    while(!isFound && i != ammoList.length){
        if(ammoList[i].name == type){
            isFound = true;
        }else{
            i++;
        }
        
    }
    if(isCarePackage){
        ammo1.src = ammoList[i].carePackage;
        currentAmmo = ammoList[i].name;
    }else{
        ammo1.src = ammoList[i].original;
        currentAmmo = ammoList[i].name;
    }
}
const ammo2 = document.getElementById("ammo2");
function changeAmmoImg2(type, isCarePackage){
    let i = 0;
    let isFound = false;
    while(!isFound && i != ammoList.length){
        if(ammoList[i].name == type){
            isFound = true;
        }else{
            i++;
        }
        
    }
    if(isCarePackage){
        ammo2.src = ammoList[i].carePackage;
    }else{
        ammo2.src = ammoList[i].original;
    }
}
let previousGun1Name = "";
const gun1Img = document.getElementById("img-weapon1");
function randomizeWeapon1(){
    previousGun1Name = weapon1.textContent;
    let ran = Math.floor(Math.random()*weaponList.length); 
    let gun = weaponList[ran];
    if(!passAllChecks1(gun)){
        randomizeWeapon1();
    } else{
        weapon1.textContent = gun.name;
        changeAmmoImg1(gun.type, gun.isCarePackage);
        gun1Img.src = gun.img;
        
    }
    
}
let previousGun2Name = "";
const gun2Img = document.getElementById("img-weapon2");
function randomizeWeapon2(){
    previousGun2Name = weapon2.textContent;
    let ran = Math.floor(Math.random()*weaponList.length); 
    let gun = weaponList[ran];
    if(!passAllChecks2(gun)){
        randomizeWeapon2();
    } else{
        weapon2.textContent = gun.name;
        changeAmmoImg2(gun.type, gun.isCarePackage);
        gun2Img.src = gun.img;
    }
}
const optionbtn = document.querySelector(".option-button");
const optionContainer = document.querySelector(".options-container");
optionbtn.addEventListener("click", function () {
    optionContainer.style.display = "inline";
    optionContainer.style.backgroundColor = "rgba(0,0,0,0.5)";
})
const exitButton = document.querySelector(".exitButton");
exitButton.addEventListener("click", function(){
    optionContainer.style.display = "none";
    optionContainer.style.backgroundColor = "rgba(0,0,0,0)";
})
const includeCarePackage = document.querySelector(".includeCarePackage");
const removeDupe = document.querySelector(".removeDupe");
function checkCarePackage(gun){
    if(includeCarePackage.checked == false && gun.isCarePackage == true){
        return false;
    }
    return true;
}
function checkDupe(gun){
    //console.log(weapon1.textContent)
    //console.log(gun.name)
    if(removeDupe.checked == true && gun.name == weapon1.textContent){
        return false;
    }
    return true;
}
const removeSameAmmo = document.querySelector(".removeSameAmmo");
function checkSameAmmo(gun){
    if(removeSameAmmo.checked == true && gun.type == currentAmmo){
        return false;
    }
    return true;
}
const removeRepeatGuns = document.querySelector(".removeRepeatGuns");
function checkSameGun1(gun){
    if(removeRepeatGuns.checked == true ){
        if(gun.name == weapon1.textContent || gun.name == weapon2.textContent){
            
            return false;
        }
        
    }
    
    return true;
}
function checkSameGun2(gun){
    if(removeRepeatGuns.checked == true ){
        if(gun.name == previousGun1Name || gun.name == weapon2.textContent){
            
            return false;

        }
        
    }
    
    return true;
}

const removeRepeatLegend = document.querySelector(".removeRepeatLegend");
function checkRepeatLegend(legend){
    if(removeRepeatLegend.checked == true && legend.name == legendName.textContent){
        return false;
    }
    return true;
}
function passAllChecks1(gun){
    if(checkCarePackage(gun) && checkSameGun1(gun)){
        return true;
    }
    return false;
}
function passAllChecks2(gun){
    if(checkDupe(gun) && checkCarePackage(gun) && checkSameAmmo(gun) && checkSameGun2(gun)){
        return true;
    }
    return false;
}
function passAllLegendChecks(legend){
    if(checkRepeatLegend(legend)){
        return true;
    }
    return false;
}