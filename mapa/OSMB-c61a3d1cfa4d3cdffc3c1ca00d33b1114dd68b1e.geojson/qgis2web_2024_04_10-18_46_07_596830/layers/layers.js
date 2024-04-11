var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_mapaedovenezuela_1 = new ol.format.GeoJSON();
var features_mapaedovenezuela_1 = format_mapaedovenezuela_1.readFeatures(json_mapaedovenezuela_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mapaedovenezuela_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapaedovenezuela_1.addFeatures(features_mapaedovenezuela_1);
var lyr_mapaedovenezuela_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mapaedovenezuela_1, 
                style: style_mapaedovenezuela_1,
                popuplayertitle: "mapaedovenezuela",
                interactive: true,
                title: '<img src="styles/legend/mapaedovenezuela_1.png" /> mapaedovenezuela'
            });

lyr_OSMStandard_0.setVisible(true);lyr_mapaedovenezuela_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_mapaedovenezuela_1];
lyr_mapaedovenezuela_1.set('fieldAliases', {'osm_id': 'osm_id', 'boundary': 'boundary', 'admin_level': 'admin_level', 'parents': 'parents', 'name': 'name', 'local_name': 'local_name', 'name_en': 'name_en', });
lyr_mapaedovenezuela_1.set('fieldImages', {'osm_id': '', 'boundary': '', 'admin_level': '', 'parents': '', 'name': '', 'local_name': '', 'name_en': '', });
lyr_mapaedovenezuela_1.set('fieldLabels', {'osm_id': 'no label', 'boundary': 'no label', 'admin_level': 'no label', 'parents': 'no label', 'name': 'no label', 'local_name': 'no label', 'name_en': 'no label', });
lyr_mapaedovenezuela_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});