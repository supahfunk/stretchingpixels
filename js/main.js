/*--------------------------------------------------
S T R E T C H I N G   P I X E L S
by Supah
--------------------------------------------------*/


/*--------------------------------------------------
Stretching Pixels
--------------------------------------------------*/
var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	w = canvas.clientWidth,
	h = canvas.clientHeight,
	img = new Image(),
	img2 = new Image(),
	imgW,
	imgH,
	prop,
	i = 0,
	speed = 10,
	slider = document.querySelector('.slider'),
	slider2 = document.querySelector('.slider2');;
	
	img.onload = function(){
		imgW = img.naturalWidth;
		imgH = img.naturalHeight;
		canvas.width = w;
		canvas.height = h;
		prop = imgW / w;
		console.log(imgW, w, imgH, h);
		// loop();
	}
	
	img.src = 'img/test2.jpg';
	img2.src = 'img/test3.jpg';
	
	slider.onmousemove = function() {
		val = this.value;
		
		console.log(val);
		
		
		/*
		ctx.drawImage(
			img,
			0, 0,
			prop * val, imgH,
			0, 0,
			val, h
		)
		*/
		
		ctx.drawImage(
			img,
			imgW - (val * prop) - speed, 0,
			speed, imgH,
			w - val - (val * 0.8), 0,
			w, h
		)
		ctx.drawImage(
			img,
			imgW - (val * prop), 0,
			imgW, imgH,
			w - val, 0,
			w, h
		)
			
	}
	
	slider2.onmousemove = function() {
		val = this.value;
		
		console.log(val);
		
		
		ctx.drawImage(
			img2,
			imgW - (val * prop) - speed, 0,
			speed, imgH,
			w - val - (val * 0.8), 0,
			w, h
		)
		ctx.drawImage(
			img2,
			imgW - (val * prop), 0,
			imgW, imgH,
			w - val, 0,
			w, h
		)
			
	}
	
	function draw() {
			
			// immagine completa da 0 a 100%
			/*
			if (i <= w) {
				console.log('draw');
				ctx.drawImage(
					img,
					i * prop, 0,
					prop * (i + speed), imgH,
					i, 0,
					i + speed, h
				)
				i += speed;
			}
			*/
			
			// immagine completa da 100% a 0
			/*
			if (i <= w) {
				console.log('draw');
				ctx.drawImage(
					img,
					imgW - (i * prop), 0,
					imgW, imgH,
					w - i, 0,
					w, h
				)
				i += speed;
			}
			*/
			
			// immagine che appare da sinistra a destra
			/*
			if (i <= w) {
				console.log('draw');
				ctx.drawImage(
					img,
					imgW - (i * prop), 0,
					imgW, imgH,
					0, 0,
					w, h
				)
				i += speed;
			}
			*/
			
			// strething pixel da 100% a 0
			/*
			if (i <= w) {
				console.log('draw');
				ctx.drawImage(
					img,
					imgW - (i * prop) - speed, 0,
					speed, imgH,
					0, 0,
					w - i, h
				)
				i += 1;
			}
			*/
			
			// strething pixel da 100% a 0 veloce
			if (i <= w) {
				console.log('draw');
				ctx.drawImage(
					img,
					imgW - (i * prop) - speed, 0,
					speed, imgH,
					0, 0,
					w - i, h
				)
				ctx.drawImage(
					img,
					imgW - (i * prop), 0,
					imgW, imgH,
					w - i, 0,
					w, h
				)
				i += speed;
			}
			
	}
	
	function loop(){
		draw();
		requestAnimationFrame(loop);
	}
	
	
	



/*--------------------------------------------------
DOC READY
--------------------------------------------------*/
$(function () {
});


/*--------------------------------------------------
WIN LOAD
--------------------------------------------------*/
$(window).on('load', function () {
});