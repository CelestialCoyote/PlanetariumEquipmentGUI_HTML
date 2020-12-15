// Updated 14Dec20.

/**************************************************************************************************
*
* Functions Used by NavBar and all Tabs.
*
**************************************************************************************************/

/******************
*
* Send Hercules commands to Java server.
*
******************/

// Send Herules command to web server.
function sendCommand(commandString) {
    console.log(commandString);
//    eccs.sendEvent("herc=" + commandString);
}


/******************
*
* AutoSys and ManSys buttons.
*
******************/

$(function() {
   $("#autoButton").click(function() {
       sendCommand("AUTOSYS");
   });
    
    $("#manButton").click(function() {
       sendCommand("MANSYS");
   });
});


/******************
*
* Create XMLHttpRequests to send command strings to Java server via http protocol.
*
******************/

let eccs = {
    sendEvent: function(event) {
        let xhr = new XMLHttpRequest();
        
        xhr.open('POST', '/hercCommand', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(event);
    }
};




/**************************************************************************************************
*
* Functions For RGB Cove Tab.
*
**************************************************************************************************/

/******************
*
* Functions called on page load to set Preset Button text and RGBW Fade Rate button values.
*
******************/

// Set RGB cove preset button text on page load.
function setPresetButtonText() {
    document.getElementById("presetOn01").textContent = PRESET_COVE_01[0];
    document.getElementById("presetOff01").textContent = PRESET_COVE_01[1];
    document.getElementById("presetOn02").textContent = PRESET_COVE_02[0];
    document.getElementById("presetOff02").textContent = PRESET_COVE_02[1];
    document.getElementById("presetOn03").textContent = PRESET_COVE_03[0];
    document.getElementById("presetOff03").textContent = PRESET_COVE_03[1];
}

// Set RGB cove button fade rates on page load.
function setCoveFadeValues() {
    document.getElementById("redCoveOn").textContent = RED_FADE_UP + " Red";
    document.getElementById("redCoveOff").textContent = RED_FADE_DOWN + " Red";
    document.getElementById("grnCoveOn").textContent = GRN_FADE_UP + " Grn";
    document.getElementById("grnCoveOff").textContent = GRN_FADE_DOWN + " Grn";
    document.getElementById("bluCoveOn").textContent = BLU_FADE_UP + " Blu";
    document.getElementById("bluCoveOff").textContent = BLU_FADE_DOWN + " Blu";
    document.getElementById("rgbCoveOn").textContent = RGB_FADE_UP + " RGB";
    document.getElementById("rgbCoveOff").textContent = RGB_FADE_DOWN + " RGB";
    document.getElementById("rgbCoveOnLong").textContent = RGB_FADE_UP_LONG + " RGB";
    document.getElementById("rgbCoveOffLong").textContent = RGB_FADE_DOWN_LONG + " RGB";
}

// Set RGB cove strobe button fade rates on page load.

function setRGBStrobeFadeValues() {
    document.getElementById("stobeFade01Label").textContent = RGB_STROBE_FADE_01 + " Sec";
    document.getElementById("stobeFade02Label").textContent = RGB_STROBE_FADE_02 + " Sec";
    document.getElementById("stobeFade03Label").textContent = RGB_STROBE_FADE_03 + " Sec";
    document.getElementById("stobeFade04Label").textContent = RGB_STROBE_FADE_04 + " Sec";
    document.getElementById("stobeFade05Label").textContent = RGB_STROBE_FADE_05 + " Sec";
    document.getElementById("stobeFade06Label").textContent = RGB_STROBE_FADE_06 + " Sec";
    document.getElementById("stobeFade07Label").textContent = RGB_STROBE_FADE_07 + " Sec";
    document.getElementById("stobeFade08Label").textContent = RGB_STROBE_FADE_08 + " Sec";
    $("input:radio[id='strobeFade01']").val(RGB_STROBE_FADE_01);
    $("input:radio[id='strobeFade02']").val(RGB_STROBE_FADE_02);
    $("input:radio[id='strobeFade03']").val(RGB_STROBE_FADE_03);
    $("input:radio[id='strobeFade04']").val(RGB_STROBE_FADE_04);
    $("input:radio[id='strobeFade05']").val(RGB_STROBE_FADE_05);
    $("input:radio[id='strobeFade06']").val(RGB_STROBE_FADE_06);
    $("input:radio[id='strobeFade07']").val(RGB_STROBE_FADE_07);
    $("input:radio[id='strobeFade08']").val(RGB_STROBE_FADE_08);
}


/******************
*
* RGB and RGBMaster Slider and Button Functions.
*
******************/

// REDCOVE control.
$(function() {
    // REDCOVE slider.
    $("#REDCOVE").slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,
        step: 1,
        value: 0,
        slide: function(event, ui) {
            $("#lblREDCOVE").val(ui.value);
            rgbLevelUpdate('REDCOVE', parseInt(ui.value));
        }
    });
    
    // REDCOVE Off Button.
    $("#redCoveOff").click(function() {
        $("#REDCOVE").slider('value', 0);
        $("#lblREDCOVE").val(0);
    
        sendCommand(RED_FADE_DOWN + "//REDCOVE");
    });

    // REDCOVE On Button.
    $("#redCoveOn").click(function() {
        $("#REDCOVE").slider('value', 100);
        $("#lblREDCOVE").val("100");
        
        let level = getNewCoveLevel(100);
        
        sendCommand(RED_FADE_UP + "//REDCOVE//" + level);
    });
});

// GRNCOVE control.
$(function() {
    // GRNCOVE slider.
    $("#GRNCOVE").slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,
        step: 1,
        value: 0,
        slide: function(event, ui) {
            $("#lblGRNCOVE").val(ui.value);
            rgbLevelUpdate('GRNCOVE', parseInt(ui.value));
        }
    });
    
    // GRNCOVE Off Button.
    $("#grnCoveOff").click(function() {
        $("#GRNCOVE").slider('value', 0);
        $("#lblGRNCOVE").val(0);
    
        sendCommand(GRN_FADE_DOWN + "//GRNCOVE");
    });

    // GRNCOVE On Button.
    $("#grnCoveOn").click(function() {
        $("#GRNCOVE").slider('value', 100);
        $("#lblGRNCOVE").val("100");
        
        let level = getNewCoveLevel(100);
        
        sendCommand(GRN_FADE_UP + "//GRNCOVE//" + level);
    });
});

// BLUCOVE control.
$(function() {
    // BLUCOVE slider.
    $("#BLUCOVE").slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,
        step: 1,
        value: 0,
        slide: function(event, ui) {
            $("#lblBLUCOVE").val(ui.value);
            rgbLevelUpdate('BLUCOVE', parseInt(ui.value));
        }
    });
    
    // BLUCOVE Off Button.
    $("#bluCoveOff").click(function() {
        $("#BLUCOVE").slider('value', 0);
        $("#lblBLUCOVE").val(0);
    
        sendCommand(BLU_FADE_DOWN + "//BLUCOVE");
    });

    // BLUCOVE On Button.
    $("#bluCoveOn").click(function() {
        $("#BLUCOVE").slider('value', 100);
        $("#lblBLUCOVE").val("100");
        
        let level = getNewCoveLevel(100);
        
        sendCommand(BLU_FADE_UP + "//BLUCOVE//" + level);
    });
});

// RGBCOVE control.
$(function() {
    // RGBCOVE slider.
    $("#RGBCOVE").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 100,
        step: 1,
        value: 100,
        slide: function(event, ui) {
            $("#lblRGBCOVE").val(ui.value);
            rgbMasterLevelUpdate();
        }
    });
    
    // RGBCOVE Off Button.
    $("#rgbCoveOff").click(function() {
        $("#RGBCOVE").slider('value', 0);
        $("#lblRGBCOVE").val(0);
    
        sendCommand(RGB_FADE_DOWN + "//RGBCOVE");
    });

    // RGBCOVE On Button.
    $("#rgbCoveOn").click(function() {
        let redLevel = $("#lblREDCOVE").val();
        let grnLevel = $("#lblGRNCOVE").val();
        let bluLevel = $("#lblBLUCOVE").val();
    
        $("#lblRGBCOVE").val(100);
        $("#RGBCOVE").slider('value', 100);

        sendCommand(RGB_FADE_UP + "//REDCOVE//" + redLevel);
        sendCommand(RGB_FADE_UP + "//GRNCOVE//" + grnLevel);
        sendCommand(RGB_FADE_UP + "//BLUCOVE//" + bluLevel);
    });
    
    // RGBCOVE Off Long Button.
    $("#rgbCoveOffLong").click(function() {
        $("#RGBCOVE").slider('value', 0);
        $("#lblRGBCOVE").val(0);
    
        sendCommand(RGB_FADE_DOWN_LONG + "//RGBCOVE");
    });

    // RGBCOVE On Long Button.
    $("#rgbCoveOnLong").click(function() {
        let redLevel = $("#lblREDCOVE").val();
        let grnLevel = $("#lblGRNCOVE").val();
        let bluLevel = $("#lblBLUCOVE").val();
        
        $("#RGBCOVE").slider('value', 100);
        $("#lblRGBCOVE").val("100");
        
        let level = getNewCoveLevel(100);
        
        sendCommand(RGB_FADE_UP_LONG + "//REDCOVE//" + redLevel);
        sendCommand(RGB_FADE_UP_LONG + "//GRNCOVE//" + grnLevel);
        sendCommand(RGB_FADE_UP_LONG + "//BLUCOVE//" + bluLevel);
    });
});

// Sets R, G, B levels from individual sliders based on RGB Master level.
function rgbLevelUpdate(devCode, level) {
    let newCoveLevel = getNewCoveLevel(level);

    sendCommand("0N//" + devCode + "//" + newCoveLevel);
}

// Overall R, G, B levels set by RGB Master slider.
function rgbMasterLevelUpdate() {
    // Get R, G, B slider values.
    let redLevel = $("#lblREDCOVE").val();
    let grnLevel = $("#lblGRNCOVE").val();
    let bluLevel = $("#lblBLUCOVE").val();
    
    sendCommand("0N//REDCOVE//" + getNewCoveLevel(redLevel));
    sendCommand("0N//GRNCOVE//" + getNewCoveLevel(grnLevel));
    sendCommand("0N//BLUCOVE//" + getNewCoveLevel(bluLevel));
}

// Determines the actual cove level based on value of RGB Master.
function getNewCoveLevel(coveLevel) {
    let rgbMaster = $("#lblRGBCOVE").val();
    let newCoveLevel = coveLevel * (rgbMaster * 0.01);
    
    return Math.round(newCoveLevel);
}


/******************
*
* Preset Button Functions.
*
******************/

$(function() {
    // Preset01 buttons.
    $("#presetOn01").click(function() {
        // Set Red label and slider.
        $("#lblREDCOVE").val(PRESET_COVE_01[2]);
        $("#REDCOVE").slider('value', PRESET_COVE_01[2]);
        // Set Green label and slider.
        $("#lblGRNCOVE").val(PRESET_COVE_01[3]);
        $("#GRNCOVE").slider('value', PRESET_COVE_01[3]);
        // Set Blue label and slider.
        $("#lblBLUCOVE").val(PRESET_COVE_01[4]);
        $("#BLUCOVE").slider('value', PRESET_COVE_01[4]);
    
        sendCommand(PRESET_COVE_01[5] + "N//REDCOVE//" + PRESET_COVE_01[2]);
        sendCommand(PRESET_COVE_01[5] + "N//GRNCOVE//" + PRESET_COVE_01[3]);
        sendCommand(PRESET_COVE_01[5] + "N//BLUCOVE//" + PRESET_COVE_01[4]);
    });
    
    $("#presetOff01").click(function() {
        // Set Red label and slider.
        $("#lblREDCOVE").val(0);
        $("#REDCOVE").slider('value', 0);
        // Set Green label and slider.
        $("#lblGRNCOVE").val(0);
        $("#GRNCOVE").slider('value', 0);
        // Set Blue label and slider.
        $("#lblBLUCOVE").val(0);
        $("#BLUCOVE").slider('value', 0);
    
        sendCommand(PRESET_COVE_01[5] + "F//RGBCOVE");
    });
    
    // Preset02 buttons.
    $("#presetOn02").click(function() {
        // Set Red label and slider.
        $("#lblREDCOVE").val(PRESET_COVE_02[2]);
        $("#REDCOVE").slider('value', PRESET_COVE_02[2]);
        // Set Green label and slider.
        $("#lblGRNCOVE").val(PRESET_COVE_02[3]);
        $("#GRNCOVE").slider('value', PRESET_COVE_02[3]);
        // Set Blue label and slider.
        $("#lblBLUCOVE").val(PRESET_COVE_02[4]);
        $("#BLUCOVE").slider('value', PRESET_COVE_02[4]);
    
        sendCommand(PRESET_COVE_02[5] + "N//REDCOVE//" + PRESET_COVE_02[2]);
        sendCommand(PRESET_COVE_02[5] + "N//GRNCOVE//" + PRESET_COVE_02[3]);
        sendCommand(PRESET_COVE_02[5] + "N//BLUCOVE//" + PRESET_COVE_02[4]);
    });
    
    $("#presetOff02").click(function() {
        // Set Red label and slider.
        $("#lblREDCOVE").val(0);
        $("#REDCOVE").slider('value', 0);
        // Set Green label and slider.
        $("#lblGRNCOVE").val(0);
        $("#GRNCOVE").slider('value', 0);
        // Set Blue label and slider.
        $("#lblBLUCOVE").val(0);
        $("#BLUCOVE").slider('value', 0);
    
        sendCommand(PRESET_COVE_02[5] + "F//RGBCOVE");
    });
    
    // Preset03 buttons.
    $("#presetOn03").click(function() {
        // Set Red label and slider.
        $("#lblREDCOVE").val(PRESET_COVE_03[2]);
        $("#REDCOVE").slider('value', PRESET_COVE_03[2]);
        // Set Green label and slider.
        $("#lblGRNCOVE").val(PRESET_COVE_03[3]);
        $("#GRNCOVE").slider('value', PRESET_COVE_03[3]);
        // Set Blue label and slider.
        $("#lblBLUCOVE").val(PRESET_COVE_03[4]);
        $("#BLUCOVE").slider('value', PRESET_COVE_03[4]);
    
        sendCommand(PRESET_COVE_03[5] + "N//REDCOVE//" + PRESET_COVE_03[2]);
        sendCommand(PRESET_COVE_03[5] + "N//GRNCOVE//" + PRESET_COVE_03[3]);
        sendCommand(PRESET_COVE_03[5] + "N//BLUCOVE//" + PRESET_COVE_03[4]);
    });
    
    $("#presetOff03").click(function() {
        // Set Red label and slider.
        $("#lblREDCOVE").val(0);
        $("#REDCOVE").slider('value', 0);
        // Set Green label and slider.
        $("#lblGRNCOVE").val(0);
        $("#GRNCOVE").slider('value', 0);
        // Set Blue label and slider.
        $("#lblBLUCOVE").val(0);
        $("#BLUCOVE").slider('value', 0);
    
        sendCommand(PRESET_COVE_03[5] + "F//RGBCOVE");
    });
});


/******************
*
* Strobe Button Functions.
*
******************/

$(function() {
    $("#strobeRed").click(function() {
        let strobeDuration = $("input:radio[name='selectRGBStrobeFadeDuration']:checked").val();
        
        sendCommand("LN//REDCOVE//100");
        // Add slight delay so lamp on command always arrives first to server.
        setTimeout(function(){
            sendCommand(strobeDuration + "F//REDCOVE");
        }, 10);
    });
    
    $("#strobeGrn").click(function() {
        let strobeDuration = $("input:radio[name='selectRGBStrobeFadeDuration']:checked").val();
    
        sendCommand("LN//GRNCOVE//100");
        // Add slight delay so lamp on command always arrives first to server.
        setTimeout(function(){
            sendCommand(strobeDuration + "F//GRNCOVE");
        }, 10);
    });
    
    $("#strobeBlu").click(function() {
        let strobeDuration = $("input:radio[name='selectRGBStrobeFadeDuration']:checked").val();
    
        sendCommand("LN//BLUCOVE//100");
        // Add slight delay so lamp on command always arrives first to server.
        setTimeout(function(){
            sendCommand(strobeDuration + "F//BLUCOVE");
        }, 10);
    });
    
    $("#strobeRGB").click(function() {
        let strobeDuration = $("input:radio[name='selectRGBStrobeFadeDuration']:checked").val();
    
        sendCommand("LN//RGBCOVE//100");
        // Add slight delay so lamp on command always arrives first to server.
        setTimeout(function(){
            sendCommand(strobeDuration + "F//RGBCOVE");
        }, 10);
    });
    
});




/**************************************************************************************************
*
* Functions For FX1 Tab.
*
**************************************************************************************************/

/******************
*
* Function called on page load to set FX1 Fade Rate button values.
*
******************/

// Set FX1 cove button fade rates on page load.
function setFX1FadeValues() {
    document.getElementById("rfx1On").textContent = RFX1_FADE_UP + " RED";
    document.getElementById("rfx1Off").textContent = RFX1_FADE_DOWN + " RED";
    document.getElementById("gfx1On").textContent = GFX1_FADE_UP + " GRN";
    document.getElementById("gfx1Off").textContent = GFX1_FADE_DOWN + " GRN";
    document.getElementById("bfx1On").textContent = BFX1_FADE_UP + " BLU";
    document.getElementById("bfx1Off").textContent = BFX1_FADE_DOWN + " BLU";
    document.getElementById("rgbFX1On").textContent = RFX1_FADE_UP + " RGB";
    document.getElementById("rgbFX1Off").textContent = RFX1_FADE_DOWN + " RGB";
}


/******************
*
* FX1 and FX1Master Slider and Button Functions.
*
******************/

// RFX1 control.
$(function() {
    // RFX1 slider.
    $("#RFX1").slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,
        step: 1,
        value: 0,
        slide: function(event, ui) {
            $("#lblRFX1").val(ui.value);
            rgbFX1LevelUpdate('RFX1', parseInt(ui.value));
        }
    });
    
    // RFX1 Off Button.
    $("#rfx1Off").click(function() {
        $("#RFX1").slider('value', 0);
        $("#lblRFX1").val(0);
    
        sendCommand(RFX1_FADE_DOWN + "//RFX1");
    });

    // RFX1 On Button.
    $("#rfx1On").click(function() {
        $("#RFX1").slider('value', 100);
        $("#lblRFX1").val("100");
        
        let level = getNewFX1Level(100);
        
        sendCommand(RFX1_FADE_UP + "//RFX1//" + level);
    });
});

// GFX1 control.
$(function() {
    // GFX1 slider.
    $("#GFX1").slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,
        step: 1,
        value: 0,
        slide: function(event, ui) {
            $("#lblGFX1").val(ui.value);
            rgbFX1LevelUpdate('GFX1', parseInt(ui.value));
        }
    });
    
    
    // GFX1 Off Button.
    $("#gfx1Off").click(function() {
        $("#GFX1").slider('value', 0);
        $("#lblGFX1").val(0);
    
        sendCommand(GFX1_FADE_DOWN + "//GFX1");
    });

    // GFX1 On Button.
    $("#gfx1On").click(function() {
        $("#GFX1").slider('value', 100);
        $("#lblGFX1").val("100");
        
        let level = getNewFX1Level(100);
        
        sendCommand(GFX1_FADE_UP + "//GFX1//" + level);
    });
});

// BFX1 control.
$(function() {
    // BFX1 slider.
    $("#BFX1").slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,
        step: 1,
        value: 0,
        slide: function(event, ui) {
            $("#lblBFX1").val(ui.value);
            rgbFX1LevelUpdate('BFX1', parseInt(ui.value));
        }
    });
    
    // BFX1 Off Button.
    $("#bfx1Off").click(function() {
        $("#BFX1").slider('value', 0);
        $("#lblBFX1").val(0);
    
        sendCommand(BFX1_FADE_DOWN + "//BFX1");
    });

    // BFX1 On Button.
    $("#bfx1On").click(function() {
        $("#BFX1").slider('value', 100);
        $("#lblBFX1").val("100");
        
        let level = getNewFX1Level(100);
        
        sendCommand(BFX1_FADE_UP + "//BFX1//" + level);
    });
});

// RGBFX1 control.
$(function() {
    // RGBFX1 slider.
    $("#RGBFX1").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 100,
        step: 1,
        value: 100,
        slide: function(event, ui) {
            $("#lblRGBFX1").val(ui.value);
            rgbFX1MasterLevelUpdate();
        }
    });
    
    // RGBFX1 Off Button.
    $("#rgbFX1Off").click(function() {
        $("#RGBFX1").slider('value', 0);
        $("#lblRGBFX1").val(0);
    
        sendCommand(RGBFX1_FADE_DOWN + "//RGBFX1");
    });

    // RGBFX1 On Button.
    $("#rgbFX1On").click(function() {
        let redLevel = $("#lblRFX1").val();
        let grnLevel = $("#lblGFX1").val();
        let bluLevel = $("#lblBFX1").val();
    
        $("#lblRGBFX1Master").val(100);
        $("#RGBFX1").slider('value', 100);

        sendCommand(RFX1_FADE_UP + "//RFX1//" + redLevel);
        sendCommand(GFX1_FADE_UP + "//GFX1//" + grnLevel);
        sendCommand(BFX1_FADE_UP + "//BFX1//" + bluLevel);
    });
});

// Sets RFX1, GFX1, BFX1 levels from individual sliders based on RGBFX1 Master level.
function rgbFX1LevelUpdate(devCode, level) {
    let newFX1Level = getNewFX1Level(level);

    sendCommand("0N//" + devCode + "//" + newFX1Level);
}

// Overall RFX1, GFX1, BFX1 levels set by RGBFX1 Master slider.
function rgbFX1MasterLevelUpdate() {
    // Get R, G, B slider values.
    let rfx1Level = $("#lblRFX1").val();
    let gfx1Level = $("#lblGFX1").val();
    let bfx1Level = $("#lblBFX1").val();
    
    sendCommand("0N//RFX1//" + getNewFX1Level(rfx1Level));
    sendCommand("0N//GFX1//" + getNewFX1Level(gfx1Level));
    sendCommand("0N//BFX1//" + getNewFX1Level(bfx1Level));
}

// Determines the actual cove level based on value of RGBFX1 Master.
function getNewFX1Level(coveLevel) {
    let rgbFX1Master = $("#lblRGBFX1").val();
    let newCoveLevel = coveLevel * (rgbFX1Master * 0.01);
    
    return Math.round(newCoveLevel);
}


/******************
*
* FX1 parameter set functions.
*
******************/

$(function() {
    // FX1 Bulbs On slider
    $("#fX1BulbsOn").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 99,
        step: 1,
        value: 1,
        slide: function(event, ui) {
            $("#lblFX1BulbsOn").val(ui.value);
        }
    });
    
    // FX1 Bulbs Off slider
    $("#fX1BulbsOff").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 99,
        step: 1,
        value: 3,
        slide: function(event, ui) {
            $("#lblFX1BulbsOff").val(ui.value);
        }
    });
    
    // FX1 Bulb Pattern ('BPxx,yy') set.
    $("#fx1BulbPatternSet").click(function() {
        let bulbsOn = $("#lblFX1BulbsOn").val();
        let bulbsOff = $("#lblFX1BulbsOff").val();
        let deviceCode =$("input:radio[name='fx1DeviceSelect']:checked").val();
    
        sendCommand("BP" + bulbsOn + "," + bulbsOff + "//" + deviceCode);
    });
    
    // FX1 Speed Control slider.
    $("#fX1Speed").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 120,
        step: 1,
        value: 5,
        slide: function(event, ui) {
            $("#lblFX1Speed").val(ui.value);
        }
    });
    
    // FX1 Speed ('BD=xxx) set.
    $("#fx1SpeedSet").click(function() {
        let fx1Speed = $("#lblFX1Speed").val();
        let deviceCode =$("input:radio[name='fx1DeviceSelect']:checked").val();
    
        sendCommand("BD=" + fx1Speed + "//" + deviceCode);            
    });
    
    // FX1 Bulb Enable Start slider
    $("#fx1BulbEnableStart").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 64,
        step: 1,
        value: 1,
        slide: function(event, ui) {
            $("#lblFX1BulbEnableStart").val(ui.value);
        }
    });
    
    // FX1 Bulb Enable End slider
    $("#fx1BulbEnableEnd").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 64,
        step: 1,
        value: 64,
        slide: function(event, ui) {
            $("#lblFX1BulbEnableEnd").val(ui.value);
        }
    });
    
    // FX1 Bulb Enable ('Exx,yy') set.
    $("#fx1BulbEnableSet").click(function() {
        let enableStart = $("#lblFX1BulbEnableStart").val();
        let enableEnd = $("#lblFX1BulbEnableEnd").val();
        let deviceCode =$("input:radio[name='fx1DeviceSelect']:checked").val();
    
        sendCommand("E" + enableStart + "," + enableEnd + "//" + deviceCode);
    });
    
    // FX1 Bulb Disable Start slider
    $("#fx1BulbDisableStart").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 64,
        step: 1,
        value: 0,
        slide: function(event, ui) {
            $("#lblFX1BulbDisableStart").val(ui.value);
        }
    });
    
    // FX1 Bulb Disable End slider
    $("#fx1BulbDisableEnd").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 64,
        step: 1,
        value: 0,
        slide: function(event, ui) {
            $("#lblFX1BulbDisableEnd").val(ui.value);
        }
    });
    
    // FX1 Bulb Disable ('Dxx,yy') set.
    $("#fx1BulbDisableSet").click(function() {
        let disableStart = $("#lblFX1BulbDisableStart").val();
        let disableEnd = $("#lblFX1BulbDisableEnd").val();
        let deviceCode =$("input:radio[name='fx1DeviceSelect']:checked").val();
    
        sendCommand("D" + disableStart + "," + disableEnd + "//" + deviceCode);
    });
    
    // FX1 Chase Pattern select slider
    $("#fX1ChasePattern").slider({
        orientation: "horizontal",
        range: "min",
        min: 0,
        max: 7,
        step: 1,
        value: 0,
        slide: function(event, ui) {
            $("#lblFX1ChasePattern").val(ui.value);
            
            if($("#lblFX1ChasePattern").val() === '0') {
                $("#lblFX1ChasePatternText").text("Stop Chase");
            } else if($("#lblFX1ChasePattern").val() === '1') {
                $("#lblFX1ChasePatternText").text("Circle from Left");
            } else if($("#lblFX1ChasePattern").val() === '2') {
                $("#lblFX1ChasePatternText").text("Circle from Right");
            } else if($("#lblFX1ChasePattern").val() === '3') {
                $("#lblFX1ChasePatternText").text("Center Out Chase");
            } else if($("#lblFX1ChasePattern").val() === '4') {
                $("#lblFX1ChasePatternText").text("Center In Chase");
            } else if($("#lblFX1ChasePattern").val() === '5') {
                $("#lblFX1ChasePatternText").text("8 Segment Chase");
            } else if($("#lblFX1ChasePattern").val() === '6') {
                $("#lblFX1ChasePatternText").text("Popcorn");
            } else if($("#lblFX1ChasePattern").val() === '7') {
                $("#lblFX1ChasePatternText").text("Sunrise / Sunset");
            }
        }
    });
    
    // FX1 Chase Patern set button.
    $("#fx1ChaseSet").click(function() {
        let chaseSelected = $('#fX1ChasePattern').slider("option", "value");
        let deviceCode = $("input:radio[name='fx1DeviceSelect']:checked").val();
    
        sendCommand("CP" + chaseSelected + "//" + deviceCode);
    });
    
    // FX1 Initialize button.
    $("#fx1Initialize").click(function() {
        let deviceCode = $("input:radio[name='fx1DeviceSelect']:checked").val();
    
        sendCommand("INIT" + "//" + deviceCode);
    });
    
    // FX1 Projector Home button.
    $("#fx1ProjectorHome").click(function() {
        let deviceCode = $("input:radio[name='fx1DeviceSelect']:checked").val();
        
        //Reset to default values.
        // Set to default - BP1,3.
        $("#fX1BulbsOn").slider('value', 1);
        $("#lblFX1BulbsOn").text(1);
        $("#fX1BulbsOff").slider('value', 3);
        $("#lblFX1BulbsOff").text(3);
        // Set to default - BD=5.
        $("#fX1Speed").slider('value', 5);
        $("#lblFX1Speed").text(5);
        // Set to default - E1,64.
        $("#fX1BulbEnableStart").slider('value', 1);
        $("#lblFX1BulbEnableStart").text(1);
        $("#fX1BulbEnableEnd").slider('value', 64);
        $("#lblFX1BulbEnableEnd").text(64);
        // Set to default - D0,0.
        $("#fx1BulbDisableStart").slider('value', 0);
        $("#lblFX1BulbDisableStart").text(0);
        $("#fx1BulbDisableEnd").slider('value', 0);
        $("#lblFX1BulbDisableEnd").text(0);
        // Set to default - CP0..
        $('#fX1ChasePattern').slider('value', 0);
        $("#lblFX1ChasePattern").text(0);
        $("#lblFX1ChasePatternText").text("Stop Chase");
    
        sendCommand("PH" + "//" + deviceCode);
    });
});




/**************************************************************************************************
*
* Functions For FX Quick Chase Tab.
*
**************************************************************************************************/

/******************
*
* Function called on page load to set FX Quick Chase button text on page load.
*
******************/

function setFXQuickChaseButtonText() {
    // FX1 Bank.
    document.getElementById("fx1QuickChase01_On").textContent = FX1_QUICK_01[0];
    document.getElementById("fx1QuickChase01_Off").textContent = FX1_QUICK_01[1];
    document.getElementById("fx1QuickChase02_On").textContent = FX1_QUICK_02[0];
    document.getElementById("fx1QuickChase02_Off").textContent = FX1_QUICK_02[1];
    document.getElementById("fx1QuickChase03_On").textContent = FX1_QUICK_03[0];
    document.getElementById("fx1QuickChase03_Off").textContent = FX1_QUICK_03[1];
    document.getElementById("fx1QuickChase04_On").textContent = FX1_QUICK_04[0];
    document.getElementById("fx1QuickChase04_Off").textContent = FX1_QUICK_04[1];
    document.getElementById("fx1QuickChase05_On").textContent = FX1_QUICK_05[0];
    document.getElementById("fx1QuickChase05_Off").textContent = FX1_QUICK_05[1];
    document.getElementById("fx1QuickChase06_On").textContent = FX1_QUICK_06[0];
    document.getElementById("fx1QuickChase06_Off").textContent = FX1_QUICK_06[1];
    document.getElementById("fx1QuickChase07_On").textContent = FX1_QUICK_07[0];
    document.getElementById("fx1QuickChase07_Off").textContent = FX1_QUICK_07[1];
    
    // FX2 Bank.
    document.getElementById("fx2QuickChase01_On").textContent = FX2_QUICK_01[0];
    document.getElementById("fx2QuickChase01_Off").textContent = FX2_QUICK_01[1];
    document.getElementById("fx2QuickChase02_On").textContent = FX2_QUICK_02[0];
    document.getElementById("fx2QuickChase02_Off").textContent = FX2_QUICK_02[1];
    document.getElementById("fx2QuickChase03_On").textContent = FX2_QUICK_03[0];
    document.getElementById("fx2QuickChase03_Off").textContent = FX2_QUICK_03[1];
    document.getElementById("fx2QuickChase04_On").textContent = FX2_QUICK_04[0];
    document.getElementById("fx2QuickChase04_Off").textContent = FX2_QUICK_04[1];
    document.getElementById("fx2QuickChase05_On").textContent = FX2_QUICK_05[0];
    document.getElementById("fx2QuickChase05_Off").textContent = FX2_QUICK_05[1];
    document.getElementById("fx2QuickChase06_On").textContent = FX2_QUICK_06[0];
    document.getElementById("fx2QuickChase06_Off").textContent = FX2_QUICK_06[1];
    document.getElementById("fx2QuickChase07_On").textContent = FX2_QUICK_07[0];
    document.getElementById("fx2QuickChase07_Off").textContent = FX2_QUICK_07[1];
    
    // FX3 Bank.
    document.getElementById("fx3QuickChase01_On").textContent = FX3_QUICK_01[0];
    document.getElementById("fx3QuickChase01_Off").textContent = FX3_QUICK_01[1];
    document.getElementById("fx3QuickChase02_On").textContent = FX3_QUICK_02[0];
    document.getElementById("fx3QuickChase02_Off").textContent = FX3_QUICK_02[1];
    document.getElementById("fx3QuickChase03_On").textContent = FX3_QUICK_03[0];
    document.getElementById("fx3QuickChase03_Off").textContent = FX3_QUICK_03[1];
    document.getElementById("fx3QuickChase04_On").textContent = FX3_QUICK_04[0];
    document.getElementById("fx3QuickChase04_Off").textContent = FX3_QUICK_04[1];
    document.getElementById("fx3QuickChase05_On").textContent = FX3_QUICK_05[0];
    document.getElementById("fx3QuickChase05_Off").textContent = FX3_QUICK_05[1];
    document.getElementById("fx3QuickChase06_On").textContent = FX3_QUICK_06[0];
    document.getElementById("fx3QuickChase06_Off").textContent = FX3_QUICK_06[1];
    document.getElementById("fx3QuickChase07_On").textContent = FX3_QUICK_07[0];
    document.getElementById("fx3QuickChase07_Off").textContent = FX3_QUICK_07[1];
}


/******************
*
* FX1 Quick Chase buttons.
*
******************/

$(function() {
    // FX1 Projector Home button.
    $("#fx1QuickChasePH").click(function() {
       sendCommand("PH//RGBFX1");
    });
    
    // FX1 Quick Chase 01 On button.
    $("#fx1QuickChase01_On").click(function() {
        let bp_x = FX1_QUICK_01[2];
        let bp_y = FX1_QUICK_01[3];
        let bd = FX1_QUICK_01[4];
        let cp = FX1_QUICK_01[5];
        let level = FX1_QUICK_01[6];
        let deviceCode = FX1_QUICK_01[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX1 Quick Chase 01 Off button.
    $("#fx1QuickChase01_Off").click(function() {
        let deviceCode = FX1_QUICK_01[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
    
    // FX1 Quick Chase 02 On button.
    $("#fx1QuickChase02_On").click(function() {
        let bp_x = FX1_QUICK_02[2];
        let bp_y = FX1_QUICK_02[3];
        let bd = FX1_QUICK_02[4];
        let cp = FX1_QUICK_02[5];
        let level = FX1_QUICK_02[6];
        let deviceCode = FX1_QUICK_02[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX1 Quick Chase 02 Off button.
    $("#fx1QuickChase02_Off").click(function() {
        let deviceCode = FX1_QUICK_02[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
    
    // FX1 Quick Chase 03 On button.
    $("#fx1QuickChase03_On").click(function() {
        let bp_x = FX1_QUICK_03[2];
        let bp_y = FX1_QUICK_03[3];
        let bd = FX1_QUICK_03[4];
        let cp = FX1_QUICK_03[5];
        let level = FX1_QUICK_03[6];
        let deviceCode = FX1_QUICK_03[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX1 Quick Chase 03 Off button.
    $("#fx1QuickChase03_Off").click(function() {
        let deviceCode = FX1_QUICK_03[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
    
    // FX1 Quick Chase 04 On button.
    $("#fx1QuickChase04_On").click(function() {
        let bp_x = FX1_QUICK_04[2];
        let bp_y = FX1_QUICK_04[3];
        let bd = FX1_QUICK_04[4];
        let cp = FX1_QUICK_04[5];
        let level = FX1_QUICK_04[6];
        let deviceCode = FX1_QUICK_04[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX1 Quick Chase 04 Off button.
    $("#fx1QuickChase04_Off").click(function() {
        let deviceCode = FX1_QUICK_04[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
    
    // FX1 Quick Chase 05 On button.
    $("#fx1QuickChase05_On").click(function() {
        let bp_x = FX1_QUICK_05[2];
        let bp_y = FX1_QUICK_05[3];
        let bd = FX1_QUICK_05[4];
        let cp = FX1_QUICK_05[5];
        let level = FX1_QUICK_05[6];
        let deviceCode = FX1_QUICK_05[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX1 Quick Chase 05 Off button.
    $("#fx1QuickChase05_Off").click(function() {
        let deviceCode = FX1_QUICK_05[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
    
    // FX1 Quick Chase 06 On button.
    $("#fx1QuickChase06_On").click(function() {
        let bp_x = FX1_QUICK_06[2];
        let bp_y = FX1_QUICK_06[3];
        let bd = FX1_QUICK_06[4];
        let cp = FX1_QUICK_06[5];
        let level = FX1_QUICK_06[6];
        let deviceCode = FX1_QUICK_06[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX1 Quick Chase 06 Off button.
    $("#fx1QuickChase06_Off").click(function() {
        let deviceCode = FX1_QUICK_06[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
    
    // FX1 Quick Chase 07 On button.
    $("#fx1QuickChase07_On").click(function() {
        let bp_x = FX1_QUICK_07[2];
        let bp_y = FX1_QUICK_07[3];
        let bd = FX1_QUICK_07[4];
        let cp = FX1_QUICK_07[5];
        let level = FX1_QUICK_07[6];
        let deviceCode = FX1_QUICK_07[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX1 Quick Chase 07 Off button.
    $("#fx1QuickChase07_Off").click(function() {
        let deviceCode = FX1_QUICK_07[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
});


/******************
*
* FX2 Quick Chase buttons.
*
******************/

$(function() {
    // FX2 Projector Home button.
    $("#fx2QuickChasePH").click(function() {
       sendCommand("PH//RGBFX2");
    });
    
    // FX2 Quick Chase 01 On button.
    $("#fx2QuickChase01_On").click(function() {
        let bp_x = FX2_QUICK_01[2];
        let bp_y = FX2_QUICK_01[3];
        let bd = FX2_QUICK_01[4];
        let cp = FX2_QUICK_01[5];
        let level = FX2_QUICK_01[6];
        let deviceCode = FX2_QUICK_01[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX2 Quick Chase 01 Off button.
    $("#fx2QuickChase01_Off").click(function() {
        let deviceCode = FX2_QUICK_01[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
    
    // FX2 Quick Chase 02 On button.
    $("#fx2QuickChase02_On").click(function() {
        let bp_x = FX2_QUICK_02[2];
        let bp_y = FX2_QUICK_02[3];
        let bd = FX2_QUICK_02[4];
        let cp = FX2_QUICK_02[5];
        let level = FX2_QUICK_02[6];
        let deviceCode = FX2_QUICK_02[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX2 Quick Chase 02 Off button.
    $("#fx2QuickChase02_Off").click(function() {
        let deviceCode = FX2_QUICK_02[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
    
    // FX2 Quick Chase 03 On button.
    $("#fx2QuickChase03_On").click(function() {
        let bp_x = FX2_QUICK_03[2];
        let bp_y = FX2_QUICK_03[3];
        let bd = FX2_QUICK_03[4];
        let cp = FX2_QUICK_03[5];
        let level = FX2_QUICK_03[6];
        let deviceCode = FX2_QUICK_03[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX2 Quick Chase 03 Off button.
    $("#fx2QuickChase03_Off").click(function() {
        let deviceCode = FX2_QUICK_03[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
    
    // FX2 Quick Chase 04 On button.
    $("#fx2QuickChase04_On").click(function() {
        let bp_x = FX2_QUICK_04[2];
        let bp_y = FX2_QUICK_04[3];
        let bd = FX2_QUICK_04[4];
        let cp = FX2_QUICK_04[5];
        let level = FX2_QUICK_04[6];
        let deviceCode = FX2_QUICK_04[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX2 Quick Chase 04 Off button.
    $("#fx2QuickChase04_Off").click(function() {
        let deviceCode = FX2_QUICK_04[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
    
    // FX2 Quick Chase 05 On button.
    $("#fx2QuickChase05_On").click(function() {
        let bp_x = FX2_QUICK_05[2];
        let bp_y = FX2_QUICK_05[3];
        let bd = FX2_QUICK_05[4];
        let cp = FX2_QUICK_05[5];
        let level = FX2_QUICK_05[6];
        let deviceCode = FX2_QUICK_05[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX2 Quick Chase 05 Off button.
    $("#fx2QuickChase05_Off").click(function() {
        let deviceCode = FX2_QUICK_05[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
    
    // FX2 Quick Chase 06 On button.
    $("#fx2QuickChase06_On").click(function() {
        let bp_x = FX2_QUICK_06[2];
        let bp_y = FX2_QUICK_06[3];
        let bd = FX2_QUICK_06[4];
        let cp = FX2_QUICK_06[5];
        let level = FX2_QUICK_06[6];
        let deviceCode = FX2_QUICK_06[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX2 Quick Chase 06 Off button.
    $("#fx2QuickChase06_Off").click(function() {
        let deviceCode = FX2_QUICK_06[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
    
    // FX2 Quick Chase 07 On button.
    $("#fx2QuickChase07_On").click(function() {
        let bp_x = FX2_QUICK_07[2];
        let bp_y = FX2_QUICK_07[3];
        let bd = FX2_QUICK_07[4];
        let cp = FX2_QUICK_07[5];
        let level = FX2_QUICK_07[6];
        let deviceCode = FX2_QUICK_07[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX2 Quick Chase 07 Off button.
    $("#fx2QuickChase07_Off").click(function() {
        let deviceCode = FX2_QUICK_07[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
});


/******************
*
* FX3 Quick Chase buttons.
*
******************/

$(function() {
    // FX3 Projector Home button.
    $("#fx3QuickChasePH").click(function() {
       sendCommand("PH//RGBFX3");
    });
    
    // FX3 Quick Chase 01 On button.
    $("#fx3QuickChase01_On").click(function() {
        let bp_x = FX3_QUICK_01[2];
        let bp_y = FX3_QUICK_01[3];
        let bd = FX3_QUICK_01[4];
        let cp = FX3_QUICK_01[5];
        let level = FX3_QUICK_01[6];
        let deviceCode = FX3_QUICK_01[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX3 Quick Chase 01 Off button.
    $("#fx3QuickChase01_Off").click(function() {
        let deviceCode = FX3_QUICK_01[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
    
    // FX3 Quick Chase 02 On button.
    $("#fx3QuickChase02_On").click(function() {
        let bp_x = FX3_QUICK_02[2];
        let bp_y = FX3_QUICK_02[3];
        let bd = FX3_QUICK_02[4];
        let cp = FX3_QUICK_02[5];
        let level = FX3_QUICK_02[6];
        let deviceCode = FX3_QUICK_02[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX3 Quick Chase 02 Off button.
    $("#fx3QuickChase02_Off").click(function() {
        let deviceCode = FX3_QUICK_02[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
    
    // FX3 Quick Chase 03 On button.
    $("#fx3QuickChase03_On").click(function() {
        let bp_x = FX3_QUICK_03[2];
        let bp_y = FX3_QUICK_03[3];
        let bd = FX3_QUICK_03[4];
        let cp = FX3_QUICK_03[5];
        let level = FX3_QUICK_03[6];
        let deviceCode = FX3_QUICK_03[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX3 Quick Chase 03 Off button.
    $("#fx3QuickChase03_Off").click(function() {
        let deviceCode = FX3_QUICK_03[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
    
    // FX3 Quick Chase 04 On button.
    $("#fx3QuickChase04_On").click(function() {
        let bp_x = FX3_QUICK_04[2];
        let bp_y = FX3_QUICK_04[3];
        let bd = FX3_QUICK_04[4];
        let cp = FX3_QUICK_04[5];
        let level = FX3_QUICK_04[6];
        let deviceCode = FX3_QUICK_04[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX3 Quick Chase 04 Off button.
    $("#fx3QuickChase04_Off").click(function() {
        let deviceCode = FX3_QUICK_04[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
    
    // FX3 Quick Chase 05 On button.
    $("#fx3QuickChase05_On").click(function() {
        let bp_x = FX3_QUICK_05[2];
        let bp_y = FX3_QUICK_05[3];
        let bd = FX3_QUICK_05[4];
        let cp = FX3_QUICK_05[5];
        let level = FX3_QUICK_05[6];
        let deviceCode = FX3_QUICK_05[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX3 Quick Chase 05 Off button.
    $("#fx3QuickChase05_Off").click(function() {
        let deviceCode = FX3_QUICK_05[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
    
    // FX3 Quick Chase 06 On button.
    $("#fx3QuickChase06_On").click(function() {
        let bp_x = FX3_QUICK_06[2];
        let bp_y = FX3_QUICK_06[3];
        let bd = FX3_QUICK_06[4];
        let cp = FX3_QUICK_06[5];
        let level = FX3_QUICK_06[6];
        let deviceCode = FX3_QUICK_06[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX3 Quick Chase 06 Off button.
    $("#fx3QuickChase06_Off").click(function() {
        let deviceCode = FX3_QUICK_06[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
    
    // FX3 Quick Chase 07 On button.
    $("#fx3QuickChase07_On").click(function() {
        let bp_x = FX3_QUICK_07[2];
        let bp_y = FX3_QUICK_07[3];
        let bd = FX3_QUICK_07[4];
        let cp = FX3_QUICK_07[5];
        let level = FX3_QUICK_07[6];
        let deviceCode = FX3_QUICK_07[7];
    
        sendCommand("BP" + bp_x + "," + bp_y + "//" + deviceCode);
        sendCommand("BD=" + bd + "//" + deviceCode);
        sendCommand("CP" + cp + "//" + deviceCode);
        sendCommand("LN//" + deviceCode + "//" + level);
    });
    
    // FX3 Quick Chase 07 Off button.
    $("#fx3QuickChase07_Off").click(function() {
        let deviceCode = FX3_QUICK_07[7];
    
        sendCommand("LF//" + deviceCode);
        sendCommand("PH//" + deviceCode);
    });
});




/**************************************************************************************************
*
* Functions For White Cove Tab.
*
**************************************************************************************************/

/******************
*
* Functions called on page load to set Preset Button text and RGBW Fade Rate button values.
*
******************/

// Set White cove button fade rates on page load.
function setWhiteCoveFadeValues() {
    document.getElementById("whtCoveOn").textContent = WHT_FADE_UP + " Wht";
    document.getElementById("whtCoveOff").textContent = WHT_FADE_DOWN + " Wht";
    document.getElementById("whtCovePercentage01").textContent = WHT_PERCENTAGE01[0] + " Wht" + " " + WHT_PERCENTAGE01[1];
    document.getElementById("whtCovePercentage02").textContent = WHT_PERCENTAGE02[0] + " Wht" + " " + WHT_PERCENTAGE02[1];
    document.getElementById("whtCoveOnLong").textContent = WHT_FADE_UP_LONG + " Wht";
    document.getElementById("whtCoveOffLong").textContent = WHT_FADE_DOWN_LONG + " Wht";
}

// Set White cove strobe button fade rates on page load.

function setWhiteStrobeFadeValues() {
    document.getElementById("whiteStobeFade01Label").textContent = WHT_STROBE_FADE_01 + " Sec";
    document.getElementById("whiteStobeFade02Label").textContent = WHT_STROBE_FADE_02 + " Sec";
    document.getElementById("whiteStobeFade03Label").textContent = WHT_STROBE_FADE_03 + " Sec";
    document.getElementById("whiteStobeFade04Label").textContent = WHT_STROBE_FADE_04 + " Sec";
    document.getElementById("whiteStobeFade05Label").textContent = WHT_STROBE_FADE_05 + " Sec";
    document.getElementById("whiteStobeFade06Label").textContent = WHT_STROBE_FADE_06 + " Sec";
    document.getElementById("whiteStobeFade07Label").textContent = WHT_STROBE_FADE_07 + " Sec";
    document.getElementById("whiteStobeFade08Label").textContent = WHT_STROBE_FADE_08 + " Sec";
    $("input:radio[id='whiteStrobeFade01']").val(WHT_STROBE_FADE_01);
    $("input:radio[id='whiteStrobeFade02']").val(WHT_STROBE_FADE_02);
    $("input:radio[id='whiteStrobeFade03']").val(WHT_STROBE_FADE_03);
    $("input:radio[id='whiteStrobeFade04']").val(WHT_STROBE_FADE_04);
    $("input:radio[id='whiteStrobeFade05']").val(WHT_STROBE_FADE_05);
    $("input:radio[id='whiteStrobeFade06']").val(WHT_STROBE_FADE_06);
    $("input:radio[id='whiteStrobeFade07']").val(WHT_STROBE_FADE_07);
    $("input:radio[id='whiteStrobeFade08']").val(WHT_STROBE_FADE_08);
}


/******************
*
* WHTCOVE control.
*
******************/

$(function() {
    // WHTCOVE slider.
    $("#WHTCOVE").slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,
        step: 1,
        value: 0,
        slide: function(event, ui) {
            $("#lblWHTCOVE").val(ui.value);
            sendCommand("0N//WHTCOVE//" + parseInt(ui.value));
        }
    });
    
    // WHTCOVE Off Button.
    $("#whtCoveOff").click(function() {
        $("#WHTCOVE").slider('value', 0);
        $("#lblWHTCOVE").val(0);
    
        sendCommand(WHT_FADE_DOWN + "//WHTCOVE");
    });

    // WHTCOVE On Button.
    $("#whtCoveOn").click(function() {
        $("#WHTCOVE").slider('value', 100);
        $("#lblWHTCOVE").val(100);
    
        sendCommand(WHT_FADE_UP + "//WHTCOVE//100");
    });
    
    // WHTCOVE Percentage01 On Button.
    $("#whtCovePercentage01").click(function() {
        $("#WHTCOVE").slider('value', WHT_PERCENTAGE01[1]);
        $("#lblWHTCOVE").val(WHT_PERCENTAGE01[1]);
    
        sendCommand(WHT_PERCENTAGE01[0] + "//WHTCOVE//" + WHT_PERCENTAGE01[1]);
    });
    
    // WHTCOVE Percentage02 On Button.
    $("#whtCovePercentage02").click(function() {
        $("#WHTCOVE").slider('value', WHT_PERCENTAGE02[1]);
        $("#lblWHTCOVE").val(WHT_PERCENTAGE02[1]);
    
        sendCommand(WHT_PERCENTAGE02[0] + "//WHTCOVE//" + WHT_PERCENTAGE02[1]);
    });
    
    // WHTCOVE Off Long Button.
    $("#whtCoveOffLong").click(function() {
        $("#WHTCOVE").slider('value', 0);
        $("#lblWHTCOVE").val(0);
    
        sendCommand(WHT_FADE_DOWN_LONG + "//WHTCOVE");
    });

    // WHTCOVE On Long Button.
    $("#whtCoveOnLong").click(function() {
        $("#WHTCOVE").slider('value', 100);
        $("#lblWHTCOVE").val(100);
    
        sendCommand(WHT_FADE_UP_LONG + "//WHTCOVE//100");
    });
    
    $("#strobeWht").click(function() {
        let strobeDuration = $("input:radio[name='selectWhiteStrobeFadeDuration']:checked").val();
        
        sendCommand("LN//WHTCOVE//100");
        // Add slight delay so lamp on command always arrives first to server.
        setTimeout(function(){
            sendCommand(strobeDuration + "F//WHTCOVE");
        }, 10);
    });
});


/******************
*
* WHTCOVE Zone control. Checkboxes toggle White Zones on/ off.
*
******************/

$(function() {
    
    $("#cbxWHTZONE1").change(function() {
        if(this.checked) {
            sendCommand("SN//WHT1");
        } else {
            sendCommand("SF//WHT1");
        }
    });
    
    $("#cbxWHTZONE2").change(function() {
        if(this.checked) {
            sendCommand("SN//WHT2");
        } else {
            sendCommand("SF//WHT2");
        }
    });
    
    $("#cbxWHTZONE3").change(function() {
        if(this.checked) {
            sendCommand("SN//WHT3");
        } else {
            sendCommand("SF//WHT3");
        }
    });
    
    $("#cbxWHTZONE4").change(function() {
        if(this.checked) {
            sendCommand("SN//WHT4");
        } else {
            sendCommand("SF//WHT4");
        }
    });
    
    $("#cbxWHTZONE5").change(function() {
        if(this.checked) {
            sendCommand("SN//WHT5");
        } else {
            sendCommand("SF//WHT5");
        }
    });
    
    $("#cbxWHTZONE6").change(function() {
        if(this.checked) {
            sendCommand("SN//WHT6");
        } else {
            sendCommand("SF//WHT6");
        }
    });
    
    $("#cbxWHTZONE7").change(function() {
        if(this.checked) {
            sendCommand("SN//WHT7");
        } else {
            sendCommand("SF//WHT7");
        }
    });
    
    $("#cbxWHTZONE8").change(function() {
        if(this.checked) {
            sendCommand("SN//WHT8");
        } else {
            sendCommand("SF//WHT8");
        }
    });

});




/**************************************************************************************************
*
* Functions For Elevator and Star Machine Lamps Tab.
*
**************************************************************************************************/

/******************
*
* Star machine elevator, G4 panel light control, lamp control, and moon phase control code.
*
******************/

$(function() {
    // Elevator Up.
     $("#elevatorUp").click(function() {
         sendCommand("ELUP//ELEV");
    });
    // Elevator Stow.
    $("#elevatorStow").click(function() {
         sendCommand("ELSTW//ELEV");
    });
    // Elevator Down.
    $("#elevatorDown").click(function() {
         sendCommand("ELDN//ELEV");
    });
    // Elevator Off.
    $("#elevatorOff").click(function() {
         sendCommand("ELOFF//ELEV");
    });
    // Star Machine to Latitude 90.
    $("#elevatorLat90").click(function() {
         sendCommand("PS=90//Lat//100");
    });
    
    // G4 panel light control.
    $("#togglePIP").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("SN//PIP");
        } else if($(this).prop("checked") == false) {
            sendCommand("SF//PIP");
        }
    });
    
    $("#toggleSoffit").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("SN//SOFFIT");
        } else if($(this).prop("checked") == false) {
            sendCommand("SF//SOFFIT");
        }
    });
    
    // Stars lamp.
    $("#toggleStars").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("3N//STARS//100");
        } else if($(this).prop("checked") == false) {
            sendCommand("3F//STARS");
        }
    });
    
    // Twilight1 lamp.
    $("#toggleTwi1").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("3N//TWI1//100");
        } else if($(this).prop("checked") == false) {
            sendCommand("3F//TWI1");
        }
    });
    
    // Twilight2 lamp.
    $("#toggleTwi2").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("3N//TWI2//100");
        } else if($(this).prop("checked") == false) {
            sendCommand("3F//TWI2");
        }
    });
    
    // Moon lamp.
    $("#toggleMoon").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("3N//MOON//100");
        } else if($(this).prop("checked") == false) {
            sendCommand("3F//MOON");
        }
    });
    
    // Moon GLow lamp.
    $("#toggleMglo").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("3N//MGLO//100");
        } else if($(this).prop("checked") == false) {
            sendCommand("3F//MGLO");
        }
    });
    
    // Solar Sytem lamp.
    $("#toggleSol").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("3N//SOL//100");
        } else if($(this).prop("checked") == false) {
            sendCommand("3F//SOL");
        }
    });
    
    // Sun shutter.
    $("#toggleSunShut").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("SN//SUNSHUT");
        } else if($(this).prop("checked") == false) {
            sendCommand("SF//SUNSHUT");
        }
    });
    
    // Mercury shutter.
    $("#toggleMercuryShut").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("SN//MERCSHUT");
        } else if($(this).prop("checked") == false) {
            sendCommand("SF//MERCSHUT");
        }
    });
    
    // Venus shutter.
    $("#toggleVenusShut").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("SN//VENSHUT");
        } else if($(this).prop("checked") == false) {
            sendCommand("SF//VENSHUT");
        }
    });
    
    // Mars shutter.
    $("#toggleMarsShut").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("SN//MARSHUT");
        } else if($(this).prop("checked") == false) {
            sendCommand("SF//MARSHUT");
        }
    });
    
    // Jupiter shutter.
    $("#toggleJupiterShut").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("SN//JUPSHUT");
        } else if($(this).prop("checked") == false) {
            sendCommand("SF//JUPSHUT");
        }
    });
    
    // Saturn shutter.
    $("#toggleSaturnShut").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("SN//SATSHUT");
        } else if($(this).prop("checked") == false) {
            sendCommand("SF//SATSHUT");
        }
    });
    
    // Meridian lamp.
    $("#toggleMrdn").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("3N//MRDN//100");
        } else if($(this).prop("checked") == false) {
            sendCommand("3F//MRDN");
        }
    });
    
    // Coordinates lamp.
    $("#toggleCoor").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("3N//COOR//100");
        } else if($(this).prop("checked") == false) {
            sendCommand("3F//COOR");
        }
    });
    
    // Ecliptic lamp.
    $("#toggleEcl").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("3N//ECL//100");
        } else if($(this).prop("checked") == false) {
            sendCommand("3F//ECL");
        }
    });
    
    // Cardinal Points lamp.
    $("#toggleCard").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("3N//CARD//100");
        } else if($(this).prop("checked") == false) {
            sendCommand("3F//CARD");
        }
    });
    
    // Home Latitude lamp.
    $("#toggleHlat").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("3N//HLAT//100");
        } else if($(this).prop("checked") == false) {
            sendCommand("3F//HLAT");
        }
    });
    
    // Pole Marker lamp.
    $("#togglePole").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("3N//POLE//100");
        } else if($(this).prop("checked") == false) {
            sendCommand("3F//POLE");
        }
    });
    
    // Zenith lamp.
    $("#toggleZen").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("3N//ZEN//100");
        } else if($(this).prop("checked") == false) {
            sendCommand("3F//ZEN");
        }
    });
    
    // Satelite lamp.
    $("#toggleSat").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("3N//SAT//100");
        } else if($(this).prop("checked") == false) {
            sendCommand("3F//SAT");
        }
    });
    
    // Constellation01 lamp.
    $("#toggleCon1").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("3N//CON1//100");
        } else if($(this).prop("checked") == false) {
            sendCommand("3F//CON1");
        }
    });
    
    // Constellation02 lamp.
    $("#toggleCon2").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("3N//CON2//100");
        } else if($(this).prop("checked") == false) {
            sendCommand("3F//CON2");
        }
    });
    
    // Constellation03 lamp.
    $("#toggleCon3").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("3N//CON3//100");
        } else if($(this).prop("checked") == false) {
            sendCommand("3F//CON3");
        }
    });
    
    // Constellation04 lamp.
    $("#toggleCon4").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("3N//CON4//100");
        } else if($(this).prop("checked") == false) {
            sendCommand("3F//CON4");
        }
    });
    
    // Constellation05 lamp.
    $("#toggleCon5").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("3N//CON5//100");
        } else if($(this).prop("checked") == false) {
            sendCommand("3F//CON5");
        }
    });
    
    // Constellation06 lamp.
    $("#toggleCon6").click(function() {
        if($(this).prop("checked") == true) {
            sendCommand("3N//CON6//100");
        } else if($(this).prop("checked") == false) {
            sendCommand("3F//CON6");
        }
    });
    
    // Radio button selection for Moon Phase motion.
    // Moon Phase linked to Annual Motion.
    $("#mnphsam").click(function() {
        sendCommand("MNPHSAM");
    });
    // Moon Phase off.
    $("#mnphsoff").click(function() {
        sendCommand("MNPHSOFF");
    });
    // Moon Phase run.
    $("#mnphson").click(function() {
        sendCommand("MNPHSON");
    });
});




/**************************************************************************************************
*
* Functions For Star Machine Motions Tab.
*
**************************************************************************************************/

/******************
*
* Functions called on page load to set Motion checkbox values.
*
******************/

function setMotionCheckboxValues() {
    if(DAILY_ENABLED) {
        $("#cbxDAILY").prop("checked", true);
    } else {
        $("#cbxDAILY").prop("checked", false);
        $("#stopDAILY").prop("disabled", true).css('opacity', 0.3);
    }
    
    if(LAT_ENABLED) {
        $("#cbxLAT").prop("checked", true);
    } else {
        $("#cbxLAT").prop("checked", false);
        $("#stopLAT").prop("disabled", true).css('opacity', 0.3);
    }
    
    if(ANN_ENABLED) {
        $("#cbxANN").prop("checked", true);
    } else {
        $("#cbxANN").prop("checked", false);
        $("#stopANN").prop("disabled", true).css('opacity', 0.3);
    }
    
    if(HEAD_ENABLED) {
        $("#cbxHEAD").prop("checked", true);
    } else {
        $("#cbxHEAD").prop("checked", false);
        $("#stopHEAD").prop("disabled", true).css('opacity', 0.3);
    }
    
    if(PREC_ENABLED) {
        $("#cbxPREC").prop("checked", true);
    } else {
        $("#cbxPREC").prop("checked", false);
        $("#stopPREC").prop("disabled", true).css('opacity', 0.3);
    }
}


/******************
*
* Daily Motion preset position buttons.
*
******************/

$(function() {
    $("#daily00Hours").click(function() {
        sendCommand("DP=//00:00:00.00");
    });
    
    $("#daily06Hours").click(function() {
        sendCommand("DP=//06:00:00.00");
    });
    
    $("#daily12Hours").click(function() {
        sendCommand("DP=//12:00:00.00");
    });
    
    $("#daily18Hours").click(function() {
        sendCommand("DP=//18:00:00.00");
    });
});


/******************
*
* Star Motion Slider, Enable/ Disable checkbox, and stop button code.
*
******************/

// Daily motion control.
$(function() {
    // Checkbox toggles slider enable/ disable.
    $("#cbxDAILY").change(function() {
        if(this.checked) {
            $("#DAILY").slider("enable");
            $("#stopDAILY").prop("disabled", false).css('opacity', 1.0);
        } else {
            $("#DAILY").slider("disable");
            $("#stopDAILY").prop("disabled", true).css('opacity', 0.3);
        }
    });
    
    // Slider creation and control.
    $("#DAILY").slider({
        orientation: "vertical",
        range: "min",
        min: -100,
        max: 100,
        step: 5,
        value: 0,
        slide: function(event, ui) {
            $("#lblDAILY").val(ui.value);
            sendCommand("RT=" + parseInt(ui.value) + "//DAILY");
        },
        disabled: !DAILY_ENABLED
    });

    // Stop button.
    $("#stopDAILY").click(function() {
        $("#lblDAILY").val(0);
        $("#DAILY").slider('value', 0);

        sendCommand("RT=0//DAILY");
    });
});

// Latitude motion control.
$(function() {
    // Checkbox toggles slider enable/ disable.
    $("#cbxLAT").change(function() {
        if(this.checked) {
            $("#LAT").slider("enable");
            $("#stopLAT").prop("disabled", false).css('opacity', 1.0);
        } else {
            $("#LAT").slider("disable");
            $("#stopLAT").prop("disabled", true).css('opacity', 0.3);
        }
    });
    
    // Slider creation and control.
    $("#LAT").slider({
        orientation: "vertical",
        range: "min",
        min: -100,
        max: 100,
        step: 5,
        value: 0,
        slide: function(event, ui) {
            $("#lblLAT").val(ui.value);
            sendCommand("RT=" + parseInt(ui.value) + "//LAT");
        },
        disabled: !LAT_ENABLED
    });
    
    // Stop button.
    $("#stopLAT").click(function() {
        $("#lblLAT").val(0);
        $("#LAT").slider('value', 0);
        
        sendCommand("RT=0//LAT");
    });
});

// Annual motion control.
$(function() {
    // Checkbox toggles slider enable/ disable.
    $("#cbxANN").change(function() {
        if(this.checked) {
            $("#ANN").slider("enable");
            $("#stopANN").prop("disabled", false).css('opacity', 1.0);
        } else {
            $("#ANN").slider("disable");
            $("#stopANN").prop("disabled", true).css('opacity', 0.3);
        }
    });
    
    // Slider creation and control.
    $("#ANN").slider({
        orientation: "vertical",
        range: "min",
        min: -100,
        max: 100,
        step: 5,
        value: 0,
        slide: function(event, ui) {
            $("#lblANN").val(ui.value);
            sendCommand("RT=" + parseInt(ui.value) + "//ANN");
        },
        disabled: !ANN_ENABLED
    });
    
    // Stop button.
    $("#stopANN").click(function() {
        $("#lblANN").val(0);
        $("#ANN").slider('value', 0);

        sendCommand("RT=0//ANN");
    });
});

// Heading motion control.
$(function() {
    // Checkbox toggles slider enable/ disable.
    $("#cbxHEAD").change(function() {
        if(this.checked) {
            $("#HEAD").slider("enable");
            $("#stopHEAD").prop("disabled", false).css('opacity', 1.0);
        } else {
            $("#HEAD").slider("disable");
            $("#stopHEAD").prop("disabled", true).css('opacity', 0.3);
        }
    });
    
    // Slider creation and control.
    $("#HEAD").slider({
        orientation: "vertical",
        range: "min",
        min: -100,
        max: 100,
        step: 5,
        value: 0,
        slide: function(event, ui) {
            $("#lblHEAD").val(ui.value);
            sendCommand("RT=" + parseInt(ui.value) + "//HEAD");
        },
        disabled: !HEAD_ENABLED
    });
    
    // Stop button.
    $("#stopHEAD").click(function() {
        $("#lblHEAD").val(0);
        $("#HEAD").slider('value', 0);

        sendCommand("RT=0//HEAD");
    });
});

// Precession motion control.
$(function() {
    // Checkbox toggles slider enable/ disable.
    $("#cbxPREC").change(function() {
        if(this.checked) {
            $("#PREC").slider("enable");
            $("#stopPREC").prop("disabled", false).css('opacity', 1.0);
        } else {
            $("#PREC").slider("disable");
            $("#stopPREC").prop("disabled", true).css('opacity', 0.3);
        }
    });
    
    // Slider creation and control.
    $("#PREC").slider({
        orientation: "vertical",
        range: "min",
        min: -100,
        max: 100,
        step: 5,
        value: 0,
        slide: function(event, ui) {
            $("#lblPREC").val(ui.value);
            sendCommand("RT=" + parseInt(ui.value) + "//PREC");
        },
        disabled: !PREC_ENABLED
    });
    
    // Stop button.
    $("#stopPREC").click(function() {
        $("#lblPREC").val(0);
        $("#PREC").slider('value', 0);

        sendCommand("RT=0//PREC");
    });
});




/**************************************************************************************************
*
* Functions For Hercules Remote Tab.
*
**************************************************************************************************/

/******************
*
* Function called on page load to Hercules command button text and Hercules show button text.
*
******************/

// Set Hercules Command button text.
function setHercCommandButtonText() {
    $("#hercFileNew").html("(F)ile (N)ew");
    $("#hercRealTimeMode").html("Set (M)ode (R)ealtime");
    $("#hercEditMode").html("Set (M)ode (E)didt Program");
    $("#hercFollowMode").html("Set (M)ode (F)ollow");
    $("#hercClockDriveMode").html("Set (M)ode (C)lock Drive");
    $("#hercStandbyMode").html("Set (M)ode (S)tandby");
    $("#hercNextCue").html("Execute Next Cue Block");
    $("#hercPreviousCue").html("Reverse to Prev Cue Block");
}

// Set Preset button text on page load.
function setHercShowButtonText() {
    $("#hercShow01").html(HERCSHOW_01);
    $("#hercShow02").html(HERCSHOW_02);
    $("#hercShow03").html(HERCSHOW_03);
    $("#hercShow04").html(HERCSHOW_04);
    $("#hercShow05").html(HERCSHOW_05);
    $("#hercShow06").html(HERCSHOW_06);
    $("#hercShow07").html(HERCSHOW_07);
    $("#hercShow08").html(HERCSHOW_08);
    $("#hercShow09").html(HERCSHOW_09);
    $("#hercShow10").html(HERCSHOW_10);
    $("#hercShow11").html(HERCSHOW_11);
    $("#hercShow12").html(HERCSHOW_12);
    $("#hercShow13").html(HERCSHOW_13);
    $("#hercShow14").html(HERCSHOW_14);
    $("#hercShow15").html(HERCSHOW_15);
    $("#hercShow16").html(HERCSHOW_16);
    $("#hercShow17").html(HERCSHOW_17);
    $("#hercShow18").html(HERCSHOW_18);
    $("#hercShow19").html(HERCSHOW_19);
    $("#hercShow20").html(HERCSHOW_20);
    $("#hercShow21").html(HERCSHOW_21);
    $("#hercShow22").html(HERCSHOW_22);
    $("#hercShow23").html(HERCSHOW_23);
    $("#hercShow24").html(HERCSHOW_24);
}


/******************
*
* Hercules remote control functions.
*
******************/

// File operations, Hercules Mode Change, NextCue & PreviousCue functions.
$(function() {
    $("#hercFileNew").click(function() {
        sendCommand("\~FN");
    });
    
    $("#hercRealTimeMode").click(function() {
        sendCommand("\~MR");
    });
    
    $("#hercEditMode").click(function() {
        sendCommand("\~ME");
    });
    
    $("#hercFollowMode").click(function() {
        sendCommand("\~MF");
    });
    
    $("#hercClockDriveMode").click(function() {
        sendCommand("\~MC");
    });
    
    $("#hercStandbyMode").click(function() {
        sendCommand("\~MS");
    });
    
    $("#hercNextCue").click(function() {
        sendCommand("\~Q+");
    });
    
    $("#hercPreviousCue").click(function() {
        sendCommand("\~Q-");
    });
});

// Load show files.
$(function() {
    $("#hercShow01").click(function() {
        sendCommand("\~FO" + HERCSHOW_01);
    });
    
    $("#hercShow02").click(function() {
        sendCommand("\~FO" + HERCSHOW_02);
    });
    
    $("#hercShow03").click(function() {
        sendCommand("\~FO" + HERCSHOW_03);
    });
    
    $("#hercShow04").click(function() {
        sendCommand("\~FO" + HERCSHOW_04);
    });
    
    $("#hercShow05").click(function() {
        sendCommand("\~FO" + HERCSHOW_05);
    });
    
    $("#hercShow06").click(function() {
        sendCommand("\~FO" + HERCSHOW_06);
    });
    
    $("#hercShow07").click(function() {
        sendCommand("\~FO" + HERCSHOW_07);
    });
    
    $("#hercShow08").click(function() {
        sendCommand("\~FO" + HERCSHOW_08);
    });
    
    $("#hercShow09").click(function() {
        sendCommand("\~FO" + HERCSHOW_09);
    });
    
    $("#hercShow10").click(function() {
        sendCommand("\~FO" + HERCSHOW_10);
    });
    
    $("#hercShow11").click(function() {
        sendCommand("\~FO" + HERCSHOW_11);
    });
    
    $("#hercShow12").click(function() {
        sendCommand("\~FO" + HERCSHOW_12);
    });
    
    $("#hercShow13").click(function() {
        sendCommand("\~FO" + HERCSHOW_13);
    });
    
    $("#hercShow14").click(function() {
        sendCommand("\~FO" + HERCSHOW_14);
    });
    
    $("#hercShow15").click(function() {
        sendCommand("\~FO" + HERCSHOW_15);
    });
    
    $("#hercShow16").click(function() {
        sendCommand("\~FO" + HERCSHOW_16);
    });
    
    $("#hercShow17").click(function() {
        sendCommand("\~FO" + HERCSHOW_17);
    });
    
    $("#hercShow18").click(function() {
        sendCommand("\~FO" + HERCSHOW_18);
    });
    
    $("#hercShow19").click(function() {
        sendCommand("\~FO" + HERCSHOW_19);
    });
    
    $("#hercShow20").click(function() {
        sendCommand("\~FO" + HERCSHOW_20);
    });
    
    $("#hercShow21").click(function() {
        sendCommand("\~FO" + HERCSHOW_21);
    });
    
    $("#hercShow22").click(function() {
        sendCommand("\~FO" + HERCSHOW_22);
    });
    
    $("#hercShow23").click(function() {
        sendCommand("\~FO" + HERCSHOW_23);
    });
    
    $("#hercShow24").click(function() {
        sendCommand("\~FO" + HERCSHOW_24);
    });
});
