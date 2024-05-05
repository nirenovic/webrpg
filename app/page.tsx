"use client";

import Image from "next/image";
import { Application, Assets, Sprite } from "pixi.js";
import { useEffect } from "react";
import { keyboard } from "@/src/util/keyboard.js";

export default function Home() {
	useEffect(() => {
		var player, 
		state;

		const app = new Application();

		function gameLoop(delta) {
			player.x += player.vx;
			player.y += player.vy;
			// state(delta);
		}

		function play(delta) {

		}

		const setup = async () => {
			await app.init({ background: '#171717', resizeTo: window });
			document.body.appendChild(app.canvas);

			const texture = await Assets.load('https://pixijs.com/assets/bunny.png');
			player = new Sprite(texture);

			app.stage.addChild(player);

			player.anchor.set(0.5)

			player.x = app.screen.width / 2
			player.y = app.screen.height / 2
			player.vx = 0;
			player.vy = 0;
			let acc = 2;

			//Capture the keyboard arrow keys
			const left = keyboard("ArrowLeft"),
				  up = keyboard("ArrowUp"),
				  right = keyboard("ArrowRight"),
				  down = keyboard("ArrowDown");

			//Left arrow key `press` method
			left.press = () => {
				player.vx -= acc;
			};
			
			//Left arrow key `release` method
			left.release = () => {
				player.vx += acc;
			};
			//Up
			up.press = () => {
				player.vy -= acc;
			};
			up.release = () => {
				player.vy += acc;
			};
			//Right
			right.press = () => {
				player.vx += acc;
			};
			right.release = () => {
				player.vx -= acc;
			};
			//Down
			down.press = () => {
				player.vy += acc;
			};
			down.release = () => {
				player.vy -= acc;
			};

			state = play;
		}

		const preload = async() => {
			console.log('preload');
		}

		// run
		const run = async () => {
			await setup();
			await preload();
			app.ticker.add((delta) => gameLoop(delta));
		};

		run();
	});
	return (
		<div>
		</div>
		);
}
