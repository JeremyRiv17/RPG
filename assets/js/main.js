$(document).ready(function() {
//Character Stats
var gameStart=false
var playerDamage=0
var cpuDamage=0
var tankTrue=false
var adcTrue=false
var supportTrue=false
var mageTrue=false
var adcPlayer=false
var tankPlayer=false
var magePlayer=false
var support=false
var tankAlive=true
var adcAlive=true
var mageAlive=true
var supportAlive=true
var adc = {
    health:100,
    strength:100
}
var tank ={
    health:150,
    strength:50,
}
var mage = {
    health:75,
    strength:125
}
var support = {
    health: 75,
    strength:50,
    healing:75
}
console.log(gameStart)
document.getElementById("tankHealth").innerHTML = tank.health;
document.getElementById("mageHealth").innerHTML = mage.health;
document.getElementById("adcHealth").innerHTML = tank.health;
document.getElementById("supportHealth").innerHTML = mage.health;

//character select
$("#adc").on("click", function(){
    if (gameStart===false){
        gameStart=true
    adcPlayer=true
    $("#tankBox").appendTo(".eniBox").css("background-color", "red").attr("id", "eniTankBox")
    $("#tank").attr("id","eniTank")
    $("#mageBox").appendTo(".eniBox").css("background-color", "red").attr("id", "eniMageBox")
    $("#mage").attr("id","eniMage")
    $("#supportBox").appendTo(".eniBox").css("background-color", "red").attr("id", "eniSupportBox")
    $("#support").attr("id","eniSupport")
    }
    //Enemy select
    $("#eniMage").on("click", function(){
        $("#eniMageBox").appendTo(".arena")
        mageTrue=true
    })
    $("#eniSupport").on("click", function(){
        $("#eniSupportBox").appendTo(".arena")
        supportTrue=true
    })
    $("#eniTank").on("click", function(){
        $("#eniTankBox").appendTo(".arena")
        tankTrue=true
    })
});
    console.log(gameStart)

$("#tank").on("click", function(){
    if (gameStart===false){
        gameStart=true
    tankPlayer=true
    $("#adcBox").appendTo(".eniBox").css("background-color", "red").attr("id", "eniAdcBox")
    $("#adc").attr("id","eniAdc")
    $("#mageBox").appendTo(".eniBox").css("background-color", "red").attr("id", "eniMageBox")
    $("#mage").attr("id","eniMage")
    $("#supportBox").appendTo(".eniBox").css("background-color", "red").attr("id", "eniSupportBox")
    $("#support").attr("id","eniSupport")
    }
    //Enemy select
    $("#eniAdc").on("click", function(){
        $("#eniAdcBox").appendTo(".arena").attr("id", "trueEnemy")
        adcTrue=true
    })
    $("#eniSupport").on("click", function(){
        $("#eniSupportBox").appendTo(".arena").attr("id", "trueEnemy")
        supportTrue=true
    })
    $("#eniMage").on("click", function(){
        $("#eniMageBox").appendTo(".arena").attr("id", "trueEnemy")
        mageTrue=true
    })
});
$("#mage").on("click", function(){
    if (gameStart===false){
        gameStart=true
    magePlayer=true
    $("#adcBox").appendTo(".eniBox").css("background-color", "red").attr("id", "eniAdcBox")
    $("#adc").attr("id","eniAdc")
    $("#tankBox").appendTo(".eniBox").css("background-color", "red").attr("id", "eniTankBox")
    $("#tank").attr("id","eniTank")
    $("#supportBox").appendTo(".eniBox").css("background-color", "red").attr("id", "eniSupportBox")
    $("#support").attr("id","eniSupport")
    }
    //Enemy select
    $("#eniTank").on("click", function(){
        $("#eniTankBox").appendTo(".arena").attr("id", "trueEnemy")
        $("#eniTankBox").css("background-color", "black")
        tankTrue=true
    })
    $("#eniAdc").on("click", function(){
        $("#eniAdcBox").appendTo(".arena").attr("id", "trueEnemy")
        adcTrue=true
    })
    $("#eniSupport").on("click", function(){
        $("#eniSupportBox").appendTo(".arena").attr("id", "trueEnemy")
        supportTrue=true
    })
});
$("#support").on("click", function(){
    if (gameStart===false){
        gameStart=true
    supportPlayer=true
    $("#adcBox").appendTo(".eniBox").css("background-color", "red").attr("id", "eniAdcBox")
    $("#adc").attr("id","eniAdc")
    $("#mageBox").appendTo(".eniBox").css("background-color", "red").attr("id", "eniMageBox")
    $("#mage").attr("id","eniMage")
    $("#tankBox").appendTo(".eniBox").css("background-color", "red").attr("id", "eniTankBox")
    $("#tank").attr("id","eniTank")
    }
    //Enemy select
    $("#eniTank").on("click", function(){
        $("#eniTankBox").appendTo(".arena").attr("id", "trueEnemy")
        tankTrue=true
    })
    $("#eniAdc").on("click", function(){
        $("#eniAdcBox").appendTo(".arena").attr("id", "trueEnemy")
        adcTrue=true
    })
    $("#eniMage").on("click", function(){
        $("#eniMageBox").appendTo(".arena").attr("id","trueEnemy")
        mageTrue=true
    })
});
//AttackBTN
$("#attackBtn").on("click", function(){
    if (magePlayer=true, tankTrue=true){
   var playerDamage = Math.floor((Math.random() * mage.strength))
   var cpuDamage= Math.floor((Math.random() * tank.strength))
    tank.health=tank.health-playerDamage
   mage.health=mage.health-cpuDamage
   console.log(playerDamage, cpuDamage, magePlayer, tankTrue, )
    document.getElementById("tankHealth").innerHTML = tank.health;
    document.getElementById("mageHealth").innerHTML = mage.health;
    }
    if (tank.health<=0){
        $("eniTank", "eniTankBox").css("display", "none")
        tankTrue=false
        tankAlive=false
    }
});
$("#attackBtn").on("click", function(){
    if (magePlayer=true, adcTrue=true)
   var playerDamage = Math.floor((Math.random() * mage.strength))
   var cpuDamage= Math.floor((Math.random() * adc.strength))
    adc.health=adc.health-playerDamage
   mage.health=mage.health-cpuDamage
    document.getElementById("adcHealth").innerHTML = adc.health;
    document.getElementById("mageHealth").innerHTML = mage.health;
    if (adc.health<=0){
        $("eniAdc", "eniADCBox").css("display", "none")
        adcTrue=false
        adcAlive=false
        console.log(adcAlive)
    }
});

$("#attackBtn").on("click", function(){
    if (magePlayer=true, supportTrue=true){
   var playerDamage = Math.floor((Math.random() * mage.strength))
   var cpuDamage= Math.floor((Math.random() * support.strength))
    support.health=support.health-playerDamage
   mage.health=mage.health-cpuDamage
   console.log(playerDamage, cpuDamage, magePlayer, tankTrue, )
    document.getElementById("supportHealth").innerHTML = support.health;
    document.getElementById("mageHealth").innerHTML = mage.health;
    }
    if (tank.health<=0){
        $("eniSupport", "eniSupportBox").css("display", "none")
        supportTrue=false
        supportAlive=false
    } 
});
$("#attackBtn").on("click", function(){
    if (tankPlayer=true, adcTrue=true){
   var playerDamage = Math.floor((Math.random() * tank.strength))
   var cpuDamage= Math.floor((Math.random() * adc.strength))
    adc.health=adc.health-playerDamage
   tank.health=tank.health-cpuDamage
    document.getElementById("adcHealth").innerHTML = adc.health;
    document.getElementById("tankHealth").innerHTML = tank.health;
    }
    if (tank.health<=0){
        $("eniAdc", "eniAdcBox").css("display", "none")
        adcTrue=false
        adcAlive=false 
    }
});
$("#attackBtn").on("click", function(){
    if (tankPlayer=true, mageTrue=true){
   var playerDamage = Math.floor((Math.random() * tank.strength))
   var cpuDamage= Math.floor((Math.random() * mage.strength))
    mage.health=mage.health-playerDamage
   tank.health=tank.health-cpuDamage
    document.getElementById("mageHealth").innerHTML = mage.health;
    document.getElementById("tankHealth").innerHTML = tank.health;
    }
    if (mage.health<=0){
        $("enimage", "eniMageBox").css("display", "none")
        mageTrue=false
        mageAlive=false
    }
});
$("#attackBtn").on("click", function(){
    if (tankPlayer=true, supportTrue=true){
   var playerDamage = Math.floor((Math.random() * tank.strength))
   var cpuDamage= Math.floor((Math.random() * support.strength))
    support.health=support.health-playerDamage
   tank.health=tank.health-cpuDamage
    document.getElementById("supportHealth").innerHTML = support.health;
    document.getElementById("tankHealth").innerHTML = tank.health;
    }
    if (support.health<=0){
        $("eniSupport", "eniSupportBox").css("display", "none")
        supportTrue=false
        supportAlive=false
    } 
});
$("#attackBtn").on("click", function(){
    if (adcPlayer=true, tankTrue=true){
   var playerDamage = Math.floor((Math.random() * adc.strength))
   var cpuDamage= Math.floor((Math.random() * tank.strength))
    tank.health=tank.health-playerDamage
   adc.health=adc.health-cpuDamage
    document.getElementById("tankHealth").innerHTML = tank.health;
    document.getElementById("adcHealth").innerHTML = adc.health;
    }
    if (tank.health<=0){
        $("eniTank", "eniTankBox").css("display", "none")
        tankTrue=false
        tankAlive=false
    }
});
$("#attackBtn").on("click", function(){
    if (adcPlayer=true, mageTrue=true){
   var playerDamage = Math.floor((Math.random() * adc.strength))
   var cpuDamage= Math.floor((Math.random() * mage.strength))
    mage.health=mage.health-playerDamage
   adc.health=adc.health-cpuDamage
    document.getElementById("mageHealth").innerHTML = mage.health;
    document.getElementById("adcHealth").innerHTML = adc.health;
    }
    if (mage.health<=0){
        $("eniMage", "eniMageBox").css("display", "none")
        mageTrue=false
       mageAlive=false
    }
});
$("#attackBtn").on("click", function(){
    if (adcPlayer=true, supportTrue=true){
   var playerDamage = Math.floor((Math.random() * adc.strength))
   var cpuDamage= Math.floor((Math.random() * support.strength))
    support.health=support.health-playerDamage
   adc.health=adc.health-cpuDamage
    document.getElementById("supportHealth").innerHTML = support.health;
    document.getElementById("adcHealth").innerHTML = adc.health;
    }
    if (support.health<=0){
        $("eniSupport", "eniSupportBox").css("display", "none")
        supportTrue=false
        supportAlive=false 
    }
});
$("#attackBtn").on("click", function(){
    if (supportPlayer=true, tankTrue=true){
   var playerDamage = Math.floor((Math.random() * support.strength))
   var cpuDamage= Math.floor((Math.random() * tank.strength))
    tank.health=tank.health-playerDamage
   support.health=support.health-cpuDamage
    document.getElementById("tankHealth").innerHTML = tank.health;
    document.getElementById("supportHealth").innerHTML = support.health;
    }
    if (tank.health<=0){
        $("eniTank", "eniTankBox").css("display", "none")
        tankTrue=false
        tankAlive=false 
    }     
});
$("#attackBtn").on("click", function(){
    if (supportPlayer=true, mageTrue=true){
   var playerDamage = Math.floor((Math.random() * support.strength))
   var cpuDamage= Math.floor((Math.random() * mage.strength))
    mage.health=mage.health-playerDamage
   support.health=support.health-cpuDamage
    document.getElementById("mageHealth").innerHTML = mage.health;
    document.getElementById("supportHealth").innerHTML = support.health;
    }
    if (mage.health<=0){
        $("eniMage", "eniMageBox").css("display", "none")
        mageTrue=false
        mageAlive=false
    }    
});
$("#attackBtn").on("click", function(){
    if (supportPlayer=true, adcTrue=true){
   var playerDamage = Math.floor((Math.random() * support.strength))
   var cpuDamage= Math.floor((Math.random() * adc.strength))
    adc.health=adc.health-playerDamage
   support.health=support.health-cpuDamage
    document.getElementById("adcHealth").innerHTML = adc.health;
    document.getElementById("supportHealth").innerHTML = support.health;
    }
    if (adc.health<=0){
        $("eniAdc", "eniAdcBox").css("display", "none")
        adcTrue=false
        adcAlive=false
    }   
});
//lose conditions 
//win conditions
if (tankAlive=false, supportAlive=false, mageAlive=false){
    alert("YouWin!!!!!")
}
if (mageAlive=false, supportAlive=false, adcAlive=false){
    alert("YouWin!!!!!!")
}
if (tankAlive=false, mageAlive=false, adcAlive=false){
    alert("YouWin!!!!!!")
}
if (tankAlive=false, supportAlive=false, adcAlive=false){

    alert("YouWin!!!!!!")
}
});