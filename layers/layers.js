var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Limite_Itaqua_2 = new ol.format.GeoJSON();
var features_Limite_Itaqua_2 = format_Limite_Itaqua_2.readFeatures(json_Limite_Itaqua_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_Itaqua_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_Itaqua_2.addFeatures(features_Limite_Itaqua_2);
var lyr_Limite_Itaqua_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_Itaqua_2, 
                style: style_Limite_Itaqua_2,
                interactive: true,
                title: '<img src="styles/legend/Limite_Itaqua_2.png" /> Limite_Itaqua'
            });
var format_Vila_Virginia_3 = new ol.format.GeoJSON();
var features_Vila_Virginia_3 = format_Vila_Virginia_3.readFeatures(json_Vila_Virginia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vila_Virginia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vila_Virginia_3.addFeatures(features_Vila_Virginia_3);
var lyr_Vila_Virginia_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vila_Virginia_3, 
                style: style_Vila_Virginia_3,
                interactive: true,
                title: '<img src="styles/legend/Vila_Virginia_3.png" /> Vila_Virginia'
            });
var format_Una_4 = new ol.format.GeoJSON();
var features_Una_4 = format_Una_4.readFeatures(json_Una_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Una_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Una_4.addFeatures(features_Una_4);
var lyr_Una_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Una_4, 
                style: style_Una_4,
                interactive: true,
                title: '<img src="styles/legend/Una_4.png" /> Una'
            });
var format_Tipoia_5 = new ol.format.GeoJSON();
var features_Tipoia_5 = format_Tipoia_5.readFeatures(json_Tipoia_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tipoia_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tipoia_5.addFeatures(features_Tipoia_5);
var lyr_Tipoia_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tipoia_5, 
                style: style_Tipoia_5,
                interactive: true,
                title: '<img src="styles/legend/Tipoia_5.png" /> Tipoia'
            });
var format_Sitio_Mato_Dentro_6 = new ol.format.GeoJSON();
var features_Sitio_Mato_Dentro_6 = format_Sitio_Mato_Dentro_6.readFeatures(json_Sitio_Mato_Dentro_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitio_Mato_Dentro_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitio_Mato_Dentro_6.addFeatures(features_Sitio_Mato_Dentro_6);
var lyr_Sitio_Mato_Dentro_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sitio_Mato_Dentro_6, 
                style: style_Sitio_Mato_Dentro_6,
                interactive: true,
                title: '<img src="styles/legend/Sitio_Mato_Dentro_6.png" /> Sitio_Mato_Dentro'
            });
var format_So_Bento_7 = new ol.format.GeoJSON();
var features_So_Bento_7 = format_So_Bento_7.readFeatures(json_So_Bento_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_So_Bento_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_So_Bento_7.addFeatures(features_So_Bento_7);
var lyr_So_Bento_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_So_Bento_7, 
                style: style_So_Bento_7,
                interactive: true,
                title: '<img src="styles/legend/So_Bento_7.png" /> São_Bento'
            });
var format_Rio_Abaixo_8 = new ol.format.GeoJSON();
var features_Rio_Abaixo_8 = format_Rio_Abaixo_8.readFeatures(json_Rio_Abaixo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rio_Abaixo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rio_Abaixo_8.addFeatures(features_Rio_Abaixo_8);
var lyr_Rio_Abaixo_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rio_Abaixo_8, 
                style: style_Rio_Abaixo_8,
                interactive: true,
                title: '<img src="styles/legend/Rio_Abaixo_8.png" /> Rio_Abaixo'
            });
var format_Pium_9 = new ol.format.GeoJSON();
var features_Pium_9 = format_Pium_9.readFeatures(json_Pium_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pium_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pium_9.addFeatures(features_Pium_9);
var lyr_Pium_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pium_9, 
                style: style_Pium_9,
                interactive: true,
                title: '<img src="styles/legend/Pium_9.png" /> Pium'
            });
var format_Pinheirinho_10 = new ol.format.GeoJSON();
var features_Pinheirinho_10 = format_Pinheirinho_10.readFeatures(json_Pinheirinho_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pinheirinho_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pinheirinho_10.addFeatures(features_Pinheirinho_10);
var lyr_Pinheirinho_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pinheirinho_10, 
                style: style_Pinheirinho_10,
                interactive: true,
                title: '<img src="styles/legend/Pinheirinho_10.png" /> Pinheirinho'
            });
var format_Perobal_11 = new ol.format.GeoJSON();
var features_Perobal_11 = format_Perobal_11.readFeatures(json_Perobal_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perobal_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perobal_11.addFeatures(features_Perobal_11);
var lyr_Perobal_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Perobal_11, 
                style: style_Perobal_11,
                interactive: true,
                title: '<img src="styles/legend/Perobal_11.png" /> Perobal'
            });
var format_Pedreira_12 = new ol.format.GeoJSON();
var features_Pedreira_12 = format_Pedreira_12.readFeatures(json_Pedreira_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pedreira_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pedreira_12.addFeatures(features_Pedreira_12);
var lyr_Pedreira_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pedreira_12, 
                style: style_Pedreira_12,
                interactive: true,
                title: '<img src="styles/legend/Pedreira_12.png" /> Pedreira'
            });
var format_Nova_Louzada_13 = new ol.format.GeoJSON();
var features_Nova_Louzada_13 = format_Nova_Louzada_13.readFeatures(json_Nova_Louzada_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nova_Louzada_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nova_Louzada_13.addFeatures(features_Nova_Louzada_13);
var lyr_Nova_Louzada_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nova_Louzada_13, 
                style: style_Nova_Louzada_13,
                interactive: true,
                title: '<img src="styles/legend/Nova_Louzada_13.png" /> Nova_Louzada'
            });
var format_Morro_Branco_14 = new ol.format.GeoJSON();
var features_Morro_Branco_14 = format_Morro_Branco_14.readFeatures(json_Morro_Branco_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Morro_Branco_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Morro_Branco_14.addFeatures(features_Morro_Branco_14);
var lyr_Morro_Branco_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Morro_Branco_14, 
                style: style_Morro_Branco_14,
                interactive: true,
                title: '<img src="styles/legend/Morro_Branco_14.png" /> Morro_Branco'
            });
var format_Monte_Belo_15 = new ol.format.GeoJSON();
var features_Monte_Belo_15 = format_Monte_Belo_15.readFeatures(json_Monte_Belo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monte_Belo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monte_Belo_15.addFeatures(features_Monte_Belo_15);
var lyr_Monte_Belo_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Monte_Belo_15, 
                style: style_Monte_Belo_15,
                interactive: true,
                title: '<img src="styles/legend/Monte_Belo_15.png" /> Monte_Belo'
            });
var format_Mandi_16 = new ol.format.GeoJSON();
var features_Mandi_16 = format_Mandi_16.readFeatures(json_Mandi_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mandi_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mandi_16.addFeatures(features_Mandi_16);
var lyr_Mandi_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mandi_16, 
                style: style_Mandi_16,
                interactive: true,
                title: '<img src="styles/legend/Mandi_16.png" /> Mandi'
            });
var format_Julio_Simoes_17 = new ol.format.GeoJSON();
var features_Julio_Simoes_17 = format_Julio_Simoes_17.readFeatures(json_Julio_Simoes_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Julio_Simoes_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Julio_Simoes_17.addFeatures(features_Julio_Simoes_17);
var lyr_Julio_Simoes_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Julio_Simoes_17, 
                style: style_Julio_Simoes_17,
                interactive: true,
                title: '<img src="styles/legend/Julio_Simoes_17.png" /> Julio_Simoes'
            });
var format_Jardim_Rio_Negro_18 = new ol.format.GeoJSON();
var features_Jardim_Rio_Negro_18 = format_Jardim_Rio_Negro_18.readFeatures(json_Jardim_Rio_Negro_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jardim_Rio_Negro_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jardim_Rio_Negro_18.addFeatures(features_Jardim_Rio_Negro_18);
var lyr_Jardim_Rio_Negro_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jardim_Rio_Negro_18, 
                style: style_Jardim_Rio_Negro_18,
                interactive: true,
                title: '<img src="styles/legend/Jardim_Rio_Negro_18.png" /> Jardim_Rio_Negro'
            });
var format_Jardim_Pinheirinho_19 = new ol.format.GeoJSON();
var features_Jardim_Pinheirinho_19 = format_Jardim_Pinheirinho_19.readFeatures(json_Jardim_Pinheirinho_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jardim_Pinheirinho_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jardim_Pinheirinho_19.addFeatures(features_Jardim_Pinheirinho_19);
var lyr_Jardim_Pinheirinho_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jardim_Pinheirinho_19, 
                style: style_Jardim_Pinheirinho_19,
                interactive: true,
                title: '<img src="styles/legend/Jardim_Pinheirinho_19.png" /> Jardim_Pinheirinho'
            });
var format_Jardim_Nicea_20 = new ol.format.GeoJSON();
var features_Jardim_Nicea_20 = format_Jardim_Nicea_20.readFeatures(json_Jardim_Nicea_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jardim_Nicea_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jardim_Nicea_20.addFeatures(features_Jardim_Nicea_20);
var lyr_Jardim_Nicea_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jardim_Nicea_20, 
                style: style_Jardim_Nicea_20,
                interactive: true,
                title: '<img src="styles/legend/Jardim_Nicea_20.png" /> Jardim_Nicea'
            });
var format_Jardim_Lucinda_21 = new ol.format.GeoJSON();
var features_Jardim_Lucinda_21 = format_Jardim_Lucinda_21.readFeatures(json_Jardim_Lucinda_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jardim_Lucinda_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jardim_Lucinda_21.addFeatures(features_Jardim_Lucinda_21);
var lyr_Jardim_Lucinda_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jardim_Lucinda_21, 
                style: style_Jardim_Lucinda_21,
                interactive: true,
                title: '<img src="styles/legend/Jardim_Lucinda_21.png" /> Jardim_Lucinda'
            });
var format_Jardim_Josely_22 = new ol.format.GeoJSON();
var features_Jardim_Josely_22 = format_Jardim_Josely_22.readFeatures(json_Jardim_Josely_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jardim_Josely_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jardim_Josely_22.addFeatures(features_Jardim_Josely_22);
var lyr_Jardim_Josely_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jardim_Josely_22, 
                style: style_Jardim_Josely_22,
                interactive: true,
                title: '<img src="styles/legend/Jardim_Josely_22.png" /> Jardim_Josely'
            });
var format_Jardim_Amazonas_23 = new ol.format.GeoJSON();
var features_Jardim_Amazonas_23 = format_Jardim_Amazonas_23.readFeatures(json_Jardim_Amazonas_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jardim_Amazonas_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jardim_Amazonas_23.addFeatures(features_Jardim_Amazonas_23);
var lyr_Jardim_Amazonas_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jardim_Amazonas_23, 
                style: style_Jardim_Amazonas_23,
                interactive: true,
                title: '<img src="styles/legend/Jardim_Amazonas_23.png" /> Jardim_Amazonas'
            });
var format_Jaguari_24 = new ol.format.GeoJSON();
var features_Jaguari_24 = format_Jaguari_24.readFeatures(json_Jaguari_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaguari_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaguari_24.addFeatures(features_Jaguari_24);
var lyr_Jaguari_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jaguari_24, 
                style: style_Jaguari_24,
                interactive: true,
                title: '<img src="styles/legend/Jaguari_24.png" /> Jaguari'
            });
var format_Estacao_25 = new ol.format.GeoJSON();
var features_Estacao_25 = format_Estacao_25.readFeatures(json_Estacao_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estacao_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estacao_25.addFeatures(features_Estacao_25);
var lyr_Estacao_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estacao_25, 
                style: style_Estacao_25,
                interactive: true,
                title: '<img src="styles/legend/Estacao_25.png" /> Estacao'
            });
var format_Corredor_26 = new ol.format.GeoJSON();
var features_Corredor_26 = format_Corredor_26.readFeatures(json_Corredor_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corredor_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corredor_26.addFeatures(features_Corredor_26);
var lyr_Corredor_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Corredor_26, 
                style: style_Corredor_26,
                interactive: true,
                title: '<img src="styles/legend/Corredor_26.png" /> Corredor'
            });
var format_Centro_27 = new ol.format.GeoJSON();
var features_Centro_27 = format_Centro_27.readFeatures(json_Centro_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centro_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centro_27.addFeatures(features_Centro_27);
var lyr_Centro_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centro_27, 
                style: style_Centro_27,
                interactive: true,
                title: '<img src="styles/legend/Centro_27.png" /> Centro'
            });
var format_Campo_Limpo_28 = new ol.format.GeoJSON();
var features_Campo_Limpo_28 = format_Campo_Limpo_28.readFeatures(json_Campo_Limpo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Campo_Limpo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campo_Limpo_28.addFeatures(features_Campo_Limpo_28);
var lyr_Campo_Limpo_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Campo_Limpo_28, 
                style: style_Campo_Limpo_28,
                interactive: true,
                title: '<img src="styles/legend/Campo_Limpo_28.png" /> Campo_Limpo'
            });
var format_Campo_da_Venda_29 = new ol.format.GeoJSON();
var features_Campo_da_Venda_29 = format_Campo_da_Venda_29.readFeatures(json_Campo_da_Venda_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Campo_da_Venda_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campo_da_Venda_29.addFeatures(features_Campo_da_Venda_29);
var lyr_Campo_da_Venda_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Campo_da_Venda_29, 
                style: style_Campo_da_Venda_29,
                interactive: true,
                title: '<img src="styles/legend/Campo_da_Venda_29.png" /> Campo_da_Venda'
            });
var format_Caiubi_30 = new ol.format.GeoJSON();
var features_Caiubi_30 = format_Caiubi_30.readFeatures(json_Caiubi_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caiubi_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caiubi_30.addFeatures(features_Caiubi_30);
var lyr_Caiubi_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Caiubi_30, 
                style: style_Caiubi_30,
                interactive: true,
                title: '<img src="styles/legend/Caiubi_30.png" /> Caiubi'
            });
var format_Bairro_Estancia_Guatambu_31 = new ol.format.GeoJSON();
var features_Bairro_Estancia_Guatambu_31 = format_Bairro_Estancia_Guatambu_31.readFeatures(json_Bairro_Estancia_Guatambu_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bairro_Estancia_Guatambu_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bairro_Estancia_Guatambu_31.addFeatures(features_Bairro_Estancia_Guatambu_31);
var lyr_Bairro_Estancia_Guatambu_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bairro_Estancia_Guatambu_31, 
                style: style_Bairro_Estancia_Guatambu_31,
                interactive: true,
                title: '<img src="styles/legend/Bairro_Estancia_Guatambu_31.png" /> Bairro_Estancia_Guatambu'
            });
var format_Aterro_Sanitario_Pajoan_32 = new ol.format.GeoJSON();
var features_Aterro_Sanitario_Pajoan_32 = format_Aterro_Sanitario_Pajoan_32.readFeatures(json_Aterro_Sanitario_Pajoan_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aterro_Sanitario_Pajoan_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aterro_Sanitario_Pajoan_32.addFeatures(features_Aterro_Sanitario_Pajoan_32);
var lyr_Aterro_Sanitario_Pajoan_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aterro_Sanitario_Pajoan_32, 
                style: style_Aterro_Sanitario_Pajoan_32,
                interactive: true,
                title: '<img src="styles/legend/Aterro_Sanitario_Pajoan_32.png" /> Aterro_Sanitario_Pajoan'
            });
var format_Aracare_33 = new ol.format.GeoJSON();
var features_Aracare_33 = format_Aracare_33.readFeatures(json_Aracare_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aracare_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aracare_33.addFeatures(features_Aracare_33);
var lyr_Aracare_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aracare_33, 
                style: style_Aracare_33,
                interactive: true,
                title: '<img src="styles/legend/Aracare_33.png" /> Aracare'
            });
var format_Acafrao_34 = new ol.format.GeoJSON();
var features_Acafrao_34 = format_Acafrao_34.readFeatures(json_Acafrao_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acafrao_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acafrao_34.addFeatures(features_Acafrao_34);
var lyr_Acafrao_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Acafrao_34, 
                style: style_Acafrao_34,
                interactive: true,
                title: '<img src="styles/legend/Acafrao_34.png" /> Acafrao'
            });
var format_Cidade_Kemel_35 = new ol.format.GeoJSON();
var features_Cidade_Kemel_35 = format_Cidade_Kemel_35.readFeatures(json_Cidade_Kemel_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cidade_Kemel_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cidade_Kemel_35.addFeatures(features_Cidade_Kemel_35);
var lyr_Cidade_Kemel_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cidade_Kemel_35, 
                style: style_Cidade_Kemel_35,
                interactive: true,
                title: '<img src="styles/legend/Cidade_Kemel_35.png" /> Cidade_Kemel'
            });
var format_Univeritas_36 = new ol.format.GeoJSON();
var features_Univeritas_36 = format_Univeritas_36.readFeatures(json_Univeritas_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Univeritas_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Univeritas_36.addFeatures(features_Univeritas_36);
var lyr_Univeritas_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Univeritas_36, 
                style: style_Univeritas_36,
                interactive: true,
                title: '<img src="styles/legend/Univeritas_36.png" /> Univeritas'
            });
var format_Servicos_Saude_37 = new ol.format.GeoJSON();
var features_Servicos_Saude_37 = format_Servicos_Saude_37.readFeatures(json_Servicos_Saude_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicos_Saude_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicos_Saude_37.addFeatures(features_Servicos_Saude_37);
var lyr_Servicos_Saude_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Servicos_Saude_37, 
                style: style_Servicos_Saude_37,
                interactive: true,
                title: '<img src="styles/legend/Servicos_Saude_37.png" /> Servicos_Saude'
            });
var format_Escolas_Estaduais_38 = new ol.format.GeoJSON();
var features_Escolas_Estaduais_38 = format_Escolas_Estaduais_38.readFeatures(json_Escolas_Estaduais_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Escolas_Estaduais_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Escolas_Estaduais_38.addFeatures(features_Escolas_Estaduais_38);
var lyr_Escolas_Estaduais_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Escolas_Estaduais_38, 
                style: style_Escolas_Estaduais_38,
                interactive: true,
                title: '<img src="styles/legend/Escolas_Estaduais_38.png" /> Escolas_Estaduais'
            });
var format_Escolas_Municipais_39 = new ol.format.GeoJSON();
var features_Escolas_Municipais_39 = format_Escolas_Municipais_39.readFeatures(json_Escolas_Municipais_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Escolas_Municipais_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Escolas_Municipais_39.addFeatures(features_Escolas_Municipais_39);
var lyr_Escolas_Municipais_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Escolas_Municipais_39, 
                style: style_Escolas_Municipais_39,
                interactive: true,
                title: '<img src="styles/legend/Escolas_Municipais_39.png" /> Escolas_Municipais'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(false);lyr_Limite_Itaqua_2.setVisible(true);lyr_Vila_Virginia_3.setVisible(true);lyr_Una_4.setVisible(true);lyr_Tipoia_5.setVisible(true);lyr_Sitio_Mato_Dentro_6.setVisible(true);lyr_So_Bento_7.setVisible(true);lyr_Rio_Abaixo_8.setVisible(true);lyr_Pium_9.setVisible(true);lyr_Pinheirinho_10.setVisible(true);lyr_Perobal_11.setVisible(true);lyr_Pedreira_12.setVisible(true);lyr_Nova_Louzada_13.setVisible(true);lyr_Morro_Branco_14.setVisible(true);lyr_Monte_Belo_15.setVisible(true);lyr_Mandi_16.setVisible(true);lyr_Julio_Simoes_17.setVisible(true);lyr_Jardim_Rio_Negro_18.setVisible(true);lyr_Jardim_Pinheirinho_19.setVisible(true);lyr_Jardim_Nicea_20.setVisible(true);lyr_Jardim_Lucinda_21.setVisible(true);lyr_Jardim_Josely_22.setVisible(true);lyr_Jardim_Amazonas_23.setVisible(true);lyr_Jaguari_24.setVisible(true);lyr_Estacao_25.setVisible(true);lyr_Corredor_26.setVisible(true);lyr_Centro_27.setVisible(true);lyr_Campo_Limpo_28.setVisible(true);lyr_Campo_da_Venda_29.setVisible(true);lyr_Caiubi_30.setVisible(true);lyr_Bairro_Estancia_Guatambu_31.setVisible(true);lyr_Aterro_Sanitario_Pajoan_32.setVisible(true);lyr_Aracare_33.setVisible(true);lyr_Acafrao_34.setVisible(true);lyr_Cidade_Kemel_35.setVisible(true);lyr_Univeritas_36.setVisible(true);lyr_Servicos_Saude_37.setVisible(true);lyr_Escolas_Estaduais_38.setVisible(true);lyr_Escolas_Municipais_39.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleSatellite_1,lyr_Limite_Itaqua_2,lyr_Vila_Virginia_3,lyr_Una_4,lyr_Tipoia_5,lyr_Sitio_Mato_Dentro_6,lyr_So_Bento_7,lyr_Rio_Abaixo_8,lyr_Pium_9,lyr_Pinheirinho_10,lyr_Perobal_11,lyr_Pedreira_12,lyr_Nova_Louzada_13,lyr_Morro_Branco_14,lyr_Monte_Belo_15,lyr_Mandi_16,lyr_Julio_Simoes_17,lyr_Jardim_Rio_Negro_18,lyr_Jardim_Pinheirinho_19,lyr_Jardim_Nicea_20,lyr_Jardim_Lucinda_21,lyr_Jardim_Josely_22,lyr_Jardim_Amazonas_23,lyr_Jaguari_24,lyr_Estacao_25,lyr_Corredor_26,lyr_Centro_27,lyr_Campo_Limpo_28,lyr_Campo_da_Venda_29,lyr_Caiubi_30,lyr_Bairro_Estancia_Guatambu_31,lyr_Aterro_Sanitario_Pajoan_32,lyr_Aracare_33,lyr_Acafrao_34,lyr_Cidade_Kemel_35,lyr_Univeritas_36,lyr_Servicos_Saude_37,lyr_Escolas_Estaduais_38,lyr_Escolas_Municipais_39];
lyr_Limite_Itaqua_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Cod_Cetesb': 'Cod_Cetesb', 'Cod_ibge': 'Cod_ibge', 'Nome': 'Nome', 'UGRHI': 'UGRHI', 'Nome_ugrhi': 'Nome_ugrhi', 'AREA_KM2': 'AREA_KM2', });
lyr_Vila_Virginia_3.set('fieldAliases', {'Name': 'Name', });
lyr_Una_4.set('fieldAliases', {'Name': 'Name', });
lyr_Tipoia_5.set('fieldAliases', {'Name': 'Name', });
lyr_Sitio_Mato_Dentro_6.set('fieldAliases', {'Name': 'Name', });
lyr_So_Bento_7.set('fieldAliases', {'Name': 'Name', });
lyr_Rio_Abaixo_8.set('fieldAliases', {'Name': 'Name', });
lyr_Pium_9.set('fieldAliases', {'Name': 'Name', });
lyr_Pinheirinho_10.set('fieldAliases', {'Nome': 'Nome', });
lyr_Perobal_11.set('fieldAliases', {'Name': 'Name', });
lyr_Pedreira_12.set('fieldAliases', {'Name': 'Name', });
lyr_Nova_Louzada_13.set('fieldAliases', {'Nome': 'Nome', });
lyr_Morro_Branco_14.set('fieldAliases', {'Name': 'Name', });
lyr_Monte_Belo_15.set('fieldAliases', {'Name': 'Name', });
lyr_Mandi_16.set('fieldAliases', {'Name': 'Name', });
lyr_Julio_Simoes_17.set('fieldAliases', {'Nome': 'Nome', });
lyr_Jardim_Rio_Negro_18.set('fieldAliases', {'Nome': 'Nome', });
lyr_Jardim_Pinheirinho_19.set('fieldAliases', {'Nome': 'Nome', });
lyr_Jardim_Nicea_20.set('fieldAliases', {'Nome': 'Nome', });
lyr_Jardim_Lucinda_21.set('fieldAliases', {'Nome': 'Nome', });
lyr_Jardim_Josely_22.set('fieldAliases', {'Nome': 'Nome', });
lyr_Jardim_Amazonas_23.set('fieldAliases', {'Nome': 'Nome', });
lyr_Jaguari_24.set('fieldAliases', {'Name': 'Name', });
lyr_Estacao_25.set('fieldAliases', {'Name': 'Name', });
lyr_Corredor_26.set('fieldAliases', {'Name': 'Name', });
lyr_Centro_27.set('fieldAliases', {'Name': 'Name', });
lyr_Campo_Limpo_28.set('fieldAliases', {'Name': 'Name', });
lyr_Campo_da_Venda_29.set('fieldAliases', {'Name': 'Name', });
lyr_Caiubi_30.set('fieldAliases', {'Name': 'Name', });
lyr_Bairro_Estancia_Guatambu_31.set('fieldAliases', {'Nome': 'Nome', });
lyr_Aterro_Sanitario_Pajoan_32.set('fieldAliases', {'Nome': 'Nome', });
lyr_Aracare_33.set('fieldAliases', {'Name': 'Name', });
lyr_Acafrao_34.set('fieldAliases', {'Name': 'Name', });
lyr_Cidade_Kemel_35.set('fieldAliases', {'Name': 'Name', });
lyr_Univeritas_36.set('fieldAliases', {'Name': 'Name', 'Endereco': 'Endereco', });
lyr_Servicos_Saude_37.set('fieldAliases', {'Name': 'Name', 'snippet': 'snippet', 'layer': 'layer', });
lyr_Escolas_Estaduais_38.set('fieldAliases', {'Name': 'Name', 'layer': 'layer', });
lyr_Escolas_Municipais_39.set('fieldAliases', {'Name': 'Name', 'snippet': 'snippet', 'layer': 'layer', });
lyr_Limite_Itaqua_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Cod_Cetesb': 'TextEdit', 'Cod_ibge': 'TextEdit', 'Nome': 'TextEdit', 'UGRHI': 'TextEdit', 'Nome_ugrhi': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Vila_Virginia_3.set('fieldImages', {'Name': '', });
lyr_Una_4.set('fieldImages', {'Name': '', });
lyr_Tipoia_5.set('fieldImages', {'Name': '', });
lyr_Sitio_Mato_Dentro_6.set('fieldImages', {'Name': '', });
lyr_So_Bento_7.set('fieldImages', {'Name': '', });
lyr_Rio_Abaixo_8.set('fieldImages', {'Name': '', });
lyr_Pium_9.set('fieldImages', {'Name': '', });
lyr_Pinheirinho_10.set('fieldImages', {'Nome': '', });
lyr_Perobal_11.set('fieldImages', {'Name': '', });
lyr_Pedreira_12.set('fieldImages', {'Name': '', });
lyr_Nova_Louzada_13.set('fieldImages', {'Nome': '', });
lyr_Morro_Branco_14.set('fieldImages', {'Name': '', });
lyr_Monte_Belo_15.set('fieldImages', {'Name': '', });
lyr_Mandi_16.set('fieldImages', {'Name': '', });
lyr_Julio_Simoes_17.set('fieldImages', {'Nome': '', });
lyr_Jardim_Rio_Negro_18.set('fieldImages', {'Nome': '', });
lyr_Jardim_Pinheirinho_19.set('fieldImages', {'Nome': '', });
lyr_Jardim_Nicea_20.set('fieldImages', {'Nome': '', });
lyr_Jardim_Lucinda_21.set('fieldImages', {'Nome': '', });
lyr_Jardim_Josely_22.set('fieldImages', {'Nome': '', });
lyr_Jardim_Amazonas_23.set('fieldImages', {'Nome': '', });
lyr_Jaguari_24.set('fieldImages', {'Name': '', });
lyr_Estacao_25.set('fieldImages', {'Name': '', });
lyr_Corredor_26.set('fieldImages', {'Name': '', });
lyr_Centro_27.set('fieldImages', {'Name': '', });
lyr_Campo_Limpo_28.set('fieldImages', {'Name': '', });
lyr_Campo_da_Venda_29.set('fieldImages', {'Name': '', });
lyr_Caiubi_30.set('fieldImages', {'Name': '', });
lyr_Bairro_Estancia_Guatambu_31.set('fieldImages', {'Nome': '', });
lyr_Aterro_Sanitario_Pajoan_32.set('fieldImages', {'Nome': '', });
lyr_Aracare_33.set('fieldImages', {'Name': '', });
lyr_Acafrao_34.set('fieldImages', {'Name': '', });
lyr_Cidade_Kemel_35.set('fieldImages', {'Name': '', });
lyr_Univeritas_36.set('fieldImages', {'Name': 'TextEdit', 'Endereco': 'TextEdit', });
lyr_Servicos_Saude_37.set('fieldImages', {'Name': 'TextEdit', 'snippet': 'TextEdit', 'layer': 'TextEdit', });
lyr_Escolas_Estaduais_38.set('fieldImages', {'Name': 'TextEdit', 'layer': 'TextEdit', });
lyr_Escolas_Municipais_39.set('fieldImages', {'Name': '', 'snippet': '', 'layer': '', });
lyr_Limite_Itaqua_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Cod_Cetesb': 'no label', 'Cod_ibge': 'no label', 'Nome': 'no label', 'UGRHI': 'header label', 'Nome_ugrhi': 'no label', 'AREA_KM2': 'header label', });
lyr_Vila_Virginia_3.set('fieldLabels', {'Name': 'no label', });
lyr_Una_4.set('fieldLabels', {'Name': 'no label', });
lyr_Tipoia_5.set('fieldLabels', {'Name': 'no label', });
lyr_Sitio_Mato_Dentro_6.set('fieldLabels', {'Name': 'no label', });
lyr_So_Bento_7.set('fieldLabels', {'Name': 'no label', });
lyr_Rio_Abaixo_8.set('fieldLabels', {'Name': 'no label', });
lyr_Pium_9.set('fieldLabels', {'Name': 'no label', });
lyr_Pinheirinho_10.set('fieldLabels', {'Nome': 'no label', });
lyr_Perobal_11.set('fieldLabels', {'Name': 'no label', });
lyr_Pedreira_12.set('fieldLabels', {'Name': 'no label', });
lyr_Nova_Louzada_13.set('fieldLabels', {'Nome': 'no label', });
lyr_Morro_Branco_14.set('fieldLabels', {'Name': 'no label', });
lyr_Monte_Belo_15.set('fieldLabels', {'Name': 'no label', });
lyr_Mandi_16.set('fieldLabels', {'Name': 'no label', });
lyr_Julio_Simoes_17.set('fieldLabels', {'Nome': 'no label', });
lyr_Jardim_Rio_Negro_18.set('fieldLabels', {'Nome': 'no label', });
lyr_Jardim_Pinheirinho_19.set('fieldLabels', {'Nome': 'no label', });
lyr_Jardim_Nicea_20.set('fieldLabels', {'Nome': 'no label', });
lyr_Jardim_Lucinda_21.set('fieldLabels', {'Nome': 'no label', });
lyr_Jardim_Josely_22.set('fieldLabels', {'Nome': 'no label', });
lyr_Jardim_Amazonas_23.set('fieldLabels', {'Nome': 'no label', });
lyr_Jaguari_24.set('fieldLabels', {'Name': 'no label', });
lyr_Estacao_25.set('fieldLabels', {'Name': 'no label', });
lyr_Corredor_26.set('fieldLabels', {'Name': 'header label', });
lyr_Centro_27.set('fieldLabels', {'Name': 'no label', });
lyr_Campo_Limpo_28.set('fieldLabels', {'Name': 'no label', });
lyr_Campo_da_Venda_29.set('fieldLabels', {'Name': 'no label', });
lyr_Caiubi_30.set('fieldLabels', {'Name': 'no label', });
lyr_Bairro_Estancia_Guatambu_31.set('fieldLabels', {'Nome': 'no label', });
lyr_Aterro_Sanitario_Pajoan_32.set('fieldLabels', {'Nome': 'no label', });
lyr_Aracare_33.set('fieldLabels', {'Name': 'no label', });
lyr_Acafrao_34.set('fieldLabels', {'Name': 'no label', });
lyr_Cidade_Kemel_35.set('fieldLabels', {'Name': 'no label', });
lyr_Univeritas_36.set('fieldLabels', {'Name': 'no label', 'Endereco': 'no label', });
lyr_Servicos_Saude_37.set('fieldLabels', {'Name': 'no label', 'snippet': 'no label', 'layer': 'no label', });
lyr_Escolas_Estaduais_38.set('fieldLabels', {'Name': 'no label', 'layer': 'no label', });
lyr_Escolas_Municipais_39.set('fieldLabels', {'Name': 'no label', 'snippet': 'no label', 'layer': 'no label', });
lyr_Escolas_Municipais_39.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});