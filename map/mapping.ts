import config from '@arcgis/core/config';
import ArcGISMap from '@arcgis/core/Map';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import MapView from '@arcgis/core/views/MapView';

const API = "AAPK6e2e371c0cd645db955fffc84c955043hV8ZzZNODcMzp0t74BMMWQWj5Sa6Zo_y7Kdf_eTa9W3nvTZ5fcZF6qjcR0hIIPai";
config.apiKey = API;

interface MapApp {
    view?: MapView;
    map?: ArcGISMap;
    layer?: FeatureLayer;
}

const app: MapApp = {};

export async function initialize(container: HTMLDivElement) {
    if (app.view) {
        app.view.destroy();
    }

    // const layer = new FeatureLayer({
    //     url: "https://services7.arcgis.com/J3hAXnMntfOSlR8o/ArcGIS/rest/services/export/FeatureServer/0",
    //     outFields: ["*"]
    // });

    const map = new ArcGISMap({
        basemap: 'arcgis-topographic',
        // layers: [layer]
    });

    const view = new MapView({
        map: map,
        center: [ 28.841, 49.98 ],
        zoom: 8,
        container: container,
    });

    // layer.when(() => {
    //     view.extent = layer.fullExtent;
    // });

    // view.when(async () => {
    //     await layer.when();
    //     const element = document.createElement('div');
    //     element.classList.add('esri-component', 'esri-widget', 'esri-widget--panel', 'item-description');
    //     element.innerHTML = layer.portalItem.description;
    //     const expand = new Expand({
    //         content: element,
    //         expandIconClass: 'esri-icon-description'
    //     });
    //     view.ui.add(expand, 'bottom-right')
    // });

    app.map = map;
    // app.layer = layer;
    app.view = view;

    return cleanup;
}

function cleanup() {
    app.view?.destroy();
}