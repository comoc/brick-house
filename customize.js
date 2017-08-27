// Reference:
// https://forge.autodesk.com/cloud_and_mobile/2015/02/add-custom-light-for-the-view-data-api-viewer.html
// https://developer.autodesk.com/en/docs/viewer/v2/reference/javascript/viewer3d/
var customLightIndex = 0;
var currentLightIndex = customLightIndex;
function initCustomize(viewer) {
	function addCustomLight() {

		Autodesk.Viewing.Private.LightPresets.push({
			name: "My Custom Light",
			path: null,
			tonemap: 0,
			E_bias: 0,
			directLightColor: [0.2, 0.2, 0.2],
			ambientColor: [0.2, 0.2, 0.2],
			lightMultiplier: 0.1,
			bgColorGradient: [100, 100, 100, 40, 40, 40],
			darkerFade: !1
		});

		//to switch to the new light at once.
		customLightIndex = Autodesk.Viewing.Private.LightPresets.length - 1;
		viewer.setLightPreset(0);
	}
	addCustomLight();
}

function toggleLight(viewer) {
	if (currentLightIndex == customLightIndex)
		currentLightIndex = 0;
	else
		currentLightIndex = customLightIndex;
	viewer.setLightPreset(currentLightIndex);
}
