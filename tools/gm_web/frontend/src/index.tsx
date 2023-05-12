import React from "react";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
	<MantineProvider
		theme={{ colorScheme: "dark" }}
		withGlobalStyles
		withNormalizeCSS
	>
		<App />
	</MantineProvider>
);
