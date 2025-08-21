// CUT START
var disableSetup = false; // Manually set to true to disable setup page menu option
var topBarCenterText = "K4FZN - EM94ow";

// Grid layout desired
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows: HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  [
    "#2196f3",
    "CLUBLOG",
    "https://clublog.org/livestream/KR4DAL",
    1,
    "L"
  ],
  [
    "#2196f3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    1,
    "L"
  ],
  [
    "#2196f3",
    "DX CLUSTER",
    "https://dxcluster.ha8tks.hu/map/",
    1,
    "L"
  ],
  [
    "#2196f3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    1,
    "R"
  ],
  [
    "#2196f3",
    "PISTAR",
    "http://pi-star.local/",
    1,
    "L"
  ],
  [
    "#2196f3",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",
    1,
    "R"
  ],
  [
    "#2196f3",
    "TIME.IS",
    "https://time.is/",
    1,
    "R"
  ],
  [
    "#2196f3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=35.1199&lon=-81.1450&zoom=5",
    1,
    "R"
  ],
  [
    "#2196f3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-82.053,35.969",
    1,
    "R"
  ]
];

// Feed items
// Structure is as follows: target URL
// The values are [target link]
var aRSS = [
  [
    "https://www.amsat.org/feed/",
    60
  ],
  [
    "https://daily.hamweekly.com/atom.xml",
    120
  ]
];

// Dashboard Tiles items
// Tile Structure is Title, Source URL
// To display a website on the tiles use "iframe|" keyword before the tile URL
// [Title, Source URL],
// the comma at the end is important!
var aIMG = [
  [
    "RADAR",
    "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"
  ],
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KCAE_loop.gif"
  ],
  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png"
  ],
  [
    "ISS POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544"
  ],
  [
    "SATELLITE SE",
    "https://cdn.star.nesdis.noaa.gov/GOES19/GLM/SECTOR/se/EXTENT3/GOES19-SE-EXTENT3-600x600.gif"
  ],
  [
    "SATELLITE CGL",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/cgl/EXTENT3/GOES16-CGL-EXTENT3-600x600.gif"
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa"
  ],
  [
    "LIGHTNING LOCAL",
    "https://www.blitzortung.org/en/Images/image_b_fl.png"
  ],
  [
    "TEMP/R",
    "https://www.weather.gov/images/rah/statebrief/MaxT_SFC-Day1State.png",
    "https://www.weather.gov/images/rah/statebrief/MinT_SFC-Day1State.png"
  ],
  [
    "CLT",
    "iframe|https://globe.airplanes.live/?airport=CLT"
  ],
  [
    "WATCHES and WARNINGs",
    "https://forecast.weather.gov/wwamap/png/US.png"
  ],
  [
    "National Forecast/R",
    "https://www.wpc.ncep.noaa.gov/noaa/noaad1.gif",
    "https://www.wpc.ncep.noaa.gov/noaa/noaad2.gif",
    "https://www.wpc.ncep.noaa.gov/noaa/noaad3.gif"
  ]
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, tiles will be rotated every 5000 milliseconds (5s)
var tileDelay = [
  11200,
  10000,
  11000,
  10100,
  10200,
  10500,
  10300,
  10600,
  30400,
  60700,
  60900,
  10800
];

// CUT END