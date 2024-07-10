import type { Module } from "/hooks/index.ts";

import { Color } from "/modules/stdlib/src/webpack/misc.ts";
import schemer from "/modules/palette-manager/schemer.ts";

export default async function (mod: Module) {
	schemer.createSchemer(mod).register("Base", {
		text: Color.fromHex("#ffffff"),
		subtext: Color.fromHex("#c0b4b4"),
		base: Color.fromHex("#0a0a0f"),
		main: Color.fromHex("#0F111A"),
		main_elevated: Color.fromHex("#1b1e2c"),
		highlight: Color.fromHex("#1b1e2c"),
		highlight_elevated: Color.fromHex("#1b1e2c"),
		card: Color.fromHex("#0a0a0f"),
		button: Color.fromHex("#FF4151"),
		button_active: Color.fromHex("#ff5c69"),
		notification: Color.fromHex("#33bacc"),
		tab: Color.fromHex("#c0b4b4"),
		tab_active: Color.fromHex("#FF4151"),
		playbar: Color.fromHex("#c0b4b4"),
		playbar_active: Color.fromHex("#FF4151"),
	});
}
