import '../dist/GlobeMap.js';

const globeMap = new GlobeMap(document, {
    holderSelector: '#chart-holder',

    // highlightedCountries: [
    //     {
    //         name: 'united states',
    //         color: '#00FF00'
    //     },

    //     {
    //         name: 'austria',
    //         color: '#F00'
    //     },

    //     {
    //         name: 'italy',
    //         color: '#F00'
    //     },

    //     {
    //         name: 'australia',
    //         color: '#F00'
    //     },

    //     {
    //         name: 'united states',
    //         color: '#F00'
    //     },

    //     {
    //         name: 'ireland',
    //         color: '#F00'
    //     },

    //     {
    //         name: 'germany',
    //         color: '#F00'
    //     },

    //     {
    //         name: 'brazil',
    //         color: '#F00'
    //     }
    // ],

    // highlightedRegions: [
    //     {
    //         name: 'africa'
    //     }
    // ]
});

console.log(globeMap);
globeMap.init();

function createControl(label, func) {
    const controls = document.querySelector('#controls');

    const button = document.createElement('button');
    button.innerHTML = label;

    button.onclick = () => {
        func();
    };

    controls.appendChild(button);
}

createControl('Reset zoom', globeMap.resetZoom.bind(globeMap));

createControl('Africa', globeMap.zoomOnAfrica.bind(globeMap));
createControl('N Africa', globeMap.zoomOnNorthernAfrica.bind(globeMap));
createControl('S Africa', globeMap.zoomOnSouthernAfrica.bind(globeMap));
createControl('W Africa', globeMap.zoomOnWesternAfrica.bind(globeMap));

createControl('Antarctica', globeMap.zoomOnAntartica.bind(globeMap));

createControl('Asia', globeMap.zoomOnAsia.bind(globeMap));
createControl('C Asia', globeMap.zoomOnCentralAsia.bind(globeMap));
createControl('S Asia', globeMap.zoomOnSouthernAsia.bind(globeMap));
createControl('E Asia', globeMap.zoomOnEasternAsia.bind(globeMap));
createControl('SE Asia', globeMap.zoomOnSouthEasternAsia.bind(globeMap));

createControl('Europe', globeMap.zoomOnEurope.bind(globeMap));
createControl('N Europe', globeMap.zoomOnNorthernEurope.bind(globeMap));
createControl('E Europe', globeMap.zoomOnEasternEurope.bind(globeMap));
createControl('S Europe', globeMap.zoomOnSouthernEurope.bind(globeMap));
createControl('W Europe', globeMap.zoomOnWesternEurope.bind(globeMap));

createControl('Middle East', globeMap.zoomOnMiddleEast.bind(globeMap));

createControl('Caribbean', globeMap.zoomOnCaribbean.bind(globeMap));

createControl('N America', globeMap.zoomOnNorthAmerica.bind(globeMap));
createControl('C America', globeMap.zoomOnCentralAmerica.bind(globeMap));
createControl('S America', globeMap.zoomOnSouthAmerica.bind(globeMap));

createControl('Aus/NZ', globeMap.zoomOnAustraliaAndNewZealand.bind(globeMap));
