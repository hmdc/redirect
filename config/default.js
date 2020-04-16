const process = require('process');

module.exports = {
    "defaultRedirect": "https://www.iq.harvard.edu",
    "port": process.env.PORT || 3000,
    "redirectMap": [
        { "src": "^(.*\\.)cga\\.harvard\\.edu$", "dst": "https://www.gis.harvard.edu" },
        { "src": "^(.*\\.)africamap\\.harvard\\.edu$", "dst": "https://worldmap.harvard.edu/africamap" },
        { "src": "^(.*\\.)?chgis\\.hmdc\\.harvard\\.edu$", "dst": "https://maps.cga.harvard.edu" },
        { "src": "^(.*\\.)?gking-projects\\.hmdc\\.harvard\\.edu$", "dst": "https://gking-projects.iq.harvard.edu" },
        { "src": "^(.*\\.)?mydatacan\\.hmdc\\.harvard\\.edu$", "dst": "https://mydatacan.org" },
        { "src": "^(.*\\.)?skinner\\.hmdc\\.harvard\\.edu$", "dst": "https://dataverse.harvard.edu/dataverse/hrs" },
        { "src": "^(.*\\.)?support\\.hmdc\\.harvard\\.edu$", "dst": "https://css.iq.harvard.edu" },
        { "src": "^(.*\\.)?votegps\\.hmdc\\.harvard\\.edu$", "dst": "https://votegps.org"}
    ]
}