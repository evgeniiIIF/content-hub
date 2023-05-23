<template>
	<div class="map"
			 id="map"></div>
</template>
<!-- to connect to (html => head)  -->
<!-- <script src="https://api-maps.yandex.ru/2.1/?apikey=657c13da-cbea-44f0-8362-2a2beb55e357&lang=ru_RU"></script>  -->

<!-- to will know coords -->
<!-- https://yandex.ru/map-constructor/location-tool/?from=club -->
<script>

let map;
let placemark;

export default {
	name: "Map",
	mounted() {
		yandexMap()

		function yandexMap() {
			const center = [45.01153507458498, 41.92907249999995];
			const zoom = 17;

			if (ymaps) {
				ymaps.ready(init);

				function init() {
					const map = new ymaps.Map("map", {
						center: center, // ваши данные
						zoom: zoom,
					});

					const placeMark = new ymaps.Placemark(// конфигурируем метку
						center,
						{},
						{
							iconLayout: "default#image",
							iconImageHref: "https://cdn-icons-png.flaticon.com/512/2776/2776067.png",
							iconImageSize: [40, 40],
							iconImageOffset: [-12.5, -60],
						}
					);

					// map.container.getElement().style.filter = 'grayscale(1)';// вслючить черно-белую карту

					map.controls.remove("geolocationControl"); // удаляем геолокацию
					map.controls.remove("searchControl"); // удаляем поиск
					map.controls.remove("trafficControl"); // удаляем контроль трафика
					map.controls.remove("typeSelector"); // удаляем тип
					map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
					map.controls.remove("zoomControl"); // удаляем контрол зуммирования
					map.controls.remove("rulerControl"); // удаляем контрол правил
					map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

					map.geoObjects.add(placeMark);// отобразить метку
				}

			}
		}
	}
}
</script>
<style lang="scss">
.map {
	width: 100%;
	height: 100%;



	.ymaps-2-1-79-map-copyrights-promo,
	.ymaps-2-1-79-copyright,
	.ymaps-2-1-79-copyright_logo_no {
		display: none;
	}
}
</style>