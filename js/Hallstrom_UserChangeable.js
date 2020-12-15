// Updated 14Dec20.

/**************************************************************************************************
*
* User changeable code.  Only change values after the equals (=).
* DO NOT change any of the contant name values as it will break things . . .
*
**************************************************************************************************/


/******************
*
* RGB Cove Tab.
*
******************/

// Preset button values, [LabelOn, LabelOff, REDCOVE, GRNCOVE, BLUCOVE, FadeDuration].
const PRESET_COVE_01 = ["House On", "House Off", "30", "0", "0", "3"];
const PRESET_COVE_02 = ["Day On", "Day Off", "0", "0", "50", "5"];
const PRESET_COVE_03 = ["Lt Pol On", "Lt Pol Off", "20", "15", "0", "2"];

// Constant values to set REDCOVE, GRNCOVE, BLUCOVE Cove button fade rates.
const RED_FADE_UP = "4N";
const RED_FADE_DOWN = "5F";
const GRN_FADE_UP = "4N";
const GRN_FADE_DOWN = "5F";
const BLU_FADE_UP = "4N";
const BLU_FADE_DOWN = "5F";
const RGB_FADE_UP = "4N";
const RGB_FADE_DOWN = "5F";
const RGB_FADE_UP_LONG = "90N";
const RGB_FADE_DOWN_LONG = "90F";

// Constant values to set REDCOVE, GRNCOVE, BLUCOVE strobe button fade rates.
const RGB_STROBE_FADE_01 = "0.0";
const RGB_STROBE_FADE_02 = "0.1";
const RGB_STROBE_FADE_03 = "0.5";
const RGB_STROBE_FADE_04 = "1.0";
const RGB_STROBE_FADE_05 = "1.5";
const RGB_STROBE_FADE_06 = "3.0";
const RGB_STROBE_FADE_07 = "5.0";
const RGB_STROBE_FADE_08 = "10.0";




/******************
*
* RGBFX1 Cove Tab.
*
******************/

// Constant values to set RGBFX1 button fade rates.
const RFX1_FADE_UP = "3N";
const RFX1_FADE_DOWN = "3F";
const GFX1_FADE_UP = "3N";
const GFX1_FADE_DOWN = "3F";
const BFX1_FADE_UP = "3N";
const BFX1_FADE_DOWN = "3F";
const RGBFX1_FADE_UP = "3N";
const RGBFX1_FADE_DOWN = "3F";




/******************
*
* White Cove Tab.
*
******************/

// Constant values to set WHTCOVE button fade rates.
const WHT_FADE_UP = "4N";
const WHT_FADE_DOWN = "5F";
const WHT_FADE_UP_LONG = "90N";
const WHT_FADE_DOWN_LONG = "90F";

// Constant values for WHTCOVE percentage 'ON' value.
const WHT_PERCENTAGE01 = ["4N", "75"];
const WHT_PERCENTAGE02 = ["4N", "50"];

// Constant values to set WHTCOVE strobe button fade rates.
const WHT_STROBE_FADE_01 = "0.0";
const WHT_STROBE_FADE_02 = "0.1";
const WHT_STROBE_FADE_03 = "0.5";
const WHT_STROBE_FADE_04 = "1.0";
const WHT_STROBE_FADE_05 = "1.5";
const WHT_STROBE_FADE_06 = "3.0";
const WHT_STROBE_FADE_07 = "5.0";
const WHT_STROBE_FADE_08 = "10.0";




/******************
*
* Quick Chase Tab.
*
******************/

// FX1 chase pararmeters, (OnButtonText, OffButtonText, BPx, BPy, BD, CP, Level, DeviceCode).
const FX1_QUICK_01 = ["CirL 3,3 RFX1 On", "CirL 3,3 RFX1 Off", "3", "3", "5", "1", "100", "RFX1"];
const FX1_QUICK_02 = ["CirR 3,3 GFX1 On", "CirR 3,3 GFX1 Off", "3", "3", "5", "2", "100", "GFX1"];
const FX1_QUICK_03 = ["CenO 4,4 BFX1 On", "CenO 4,4 BFX1 Off", "2", "4", "2", "3", "100", "BFX1"];
const FX1_QUICK_04 = ["CenI 4,4 RFX1 On", "CenI 4,4 RFX1 Off", "2", "4", "2", "4", "100", "RFX1"];
const FX1_QUICK_05 = ["Popcorn RGBFX1 On", "Popcorn RGBFX1 Off", "1", "1", "10", "6", "100", "RGBFX1"];
const FX1_QUICK_06 = ["Popcorn RFX1 On", "Popcorn RFX1 Off", "1", "5", "9", "6", "75", "RFX1"];
const FX1_QUICK_07 = ["CirL 99,0 GFX1 On", "CirL 99,0 GFX1 Off", "99", "0", "3", "1", "75", "GFX1"];

// FX2 chase pararmeters, (OnButtonText, OffButtonText, BPx, BPy, BD, CP, Level, DeviceCode).
const FX2_QUICK_01 = ["CirL 3,3 RFX2 On", "CirL 3,3 RFX2 Off", "3", "3", "5", "1", "100", "RFX2"];
const FX2_QUICK_02 = ["CirR 3,3 GFX2 On", "CirR 3,3 GFX2 Off", "3", "3", "5", "2", "100", "GFX2"];
const FX2_QUICK_03 = ["CenO 4,4 BFX2 On", "CenO 4,4 BFX2 Off", "2", "4", "2", "3", "100", "BFX2"];
const FX2_QUICK_04 = ["CenI 4,4 RFX2 On", "CenI 4,4 RFX2 Off", "2", "4", "2", "4", "100", "RFX2"];
const FX2_QUICK_05 = ["Popcorn RGBFX2 On", "Popcorn RGBFX2 Off", "1", "1", "10", "6", "100", "RGBFX2"];
const FX2_QUICK_06 = ["Popcorn RFX2 On", "Popcorn RFX2 Off", "1", "5", "9", "6", "75", "RFX2"];
const FX2_QUICK_07 = ["CirL 99,0 GFX2 On", "CirL 99,0 GFX2 Off", "99", "0", "3", "1", "75", "GFX2"];

// FX3 chase pararmeters, (OnButtonText, OffButtonText, BPx, BPy, BD, CP, Level, DeviceCode).
const FX3_QUICK_01 = ["CirL 3,3 RFX3 On", "CirL 3,3 RFX3 Off", "3", "3", "5", "1", "100", "RFX3"];
const FX3_QUICK_02 = ["CirR 3,3 GFX3 On", "CirR 3,3 GFX3 Off", "3", "3", "5", "2", "100", "GFX3"];
const FX3_QUICK_03 = ["CenO 4,4 BFX3 On", "CenO 4,4 BFX3 Off", "2", "4", "2", "3", "100", "BFX3"];
const FX3_QUICK_04 = ["CenI 4,4 RFX3 On", "CenI 4,4 RFX3 Off", "2", "4", "2", "4", "100", "RFX3"];
const FX3_QUICK_05 = ["Popcorn RGBFX3 On", "Popcorn RGBFX3 Off", "1", "1", "10", "6", "100", "RGBFX3"];
const FX3_QUICK_06 = ["Popcorn RFX3 On", "Popcorn RFX3 Off", "1", "5", "9", "6", "75", "RFX3"];
const FX3_QUICK_07 = ["CirL 99,0 GFX3 On", "CirL 99,0 GFX3 Off", "99", "0", "3", "1", "75", "GFX3"];




/******************
*
* Star Machine Motion Tab.
*
******************/

const DAILY_ENABLED = true;
const LAT_ENABLED = true;
const ANN_ENABLED = false;
const HEAD_ENABLED = false;
const PREC_ENABLED = false;




/******************
*
* Hercules Remote Control Tab.
*
******************/

// Show list filenames.
const HERCSHOW_01 = "TEST01";
const HERCSHOW_02 = "Prog0002";
const HERCSHOW_03 = "Prog0003";
const HERCSHOW_04 = "Prog0004";
const HERCSHOW_05 = "Prog0005";
const HERCSHOW_06 = "Prog0006";
const HERCSHOW_07 = "Prog0007";
const HERCSHOW_08 = "Prog0008";
const HERCSHOW_09 = "Prog0009";
const HERCSHOW_10 = "Prog0010";
const HERCSHOW_11 = "Prog0011";
const HERCSHOW_12 = "Prog0012";
const HERCSHOW_13 = "Prog0013";
const HERCSHOW_14 = "Prog0014";
const HERCSHOW_15 = "Prog0015";
const HERCSHOW_16 = "Prog0016";
const HERCSHOW_17 = "Prog0017";
const HERCSHOW_18 = "Prog0018";
const HERCSHOW_19 = "Prog0019";
const HERCSHOW_20 = "Prog0020";
const HERCSHOW_21 = "Prog0021";
const HERCSHOW_22 = "Prog0022";
const HERCSHOW_23 = "Prog0023";
const HERCSHOW_24 = "Prog0024";
