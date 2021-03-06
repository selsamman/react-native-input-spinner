/**
 * Input Spinner - Style
 * @author Marco Cesarato <cesarato.developer@gmail.com>
 */

import {Platform, StyleSheet} from "react-native";

export const Style = StyleSheet.create({
	container: {
		borderRadius: 4,
		flexDirection: "row",
		overflow: "visible",
		width: 150,
		alignItems: "center",
		justifyContent: "center",
	},
	containerShadow: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.39,
		shadowRadius: 8.3,

		elevation: 10,
	},
	buttonLeft: {
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 2,
		borderBottomRightRadius: 0,
		borderTopRightRadius: 0,
	},
	buttonRight: {
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 2,
		borderBottomLeftRadius: 0,
		borderTopLeftRadius: 0,
	},
	buttonRounded: {
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 999,
		...Platform.select({
			web: {
				outlineWidth: 0,
			},
		}),
	},
	buttonText: {
		color: "white",
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		textAlignVertical: "center",
	},
	numberText: {
		flex: 1,
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		textAlignVertical: "center",
		borderWidth: 0,
		...Platform.select({
			web: {
				outlineWidth: 0,
			},
		}),
	},
});
