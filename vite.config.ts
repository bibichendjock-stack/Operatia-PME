import tailwindcss from "/node_modules/.vite/deps/@tailwindcss_vite.js?v=f912c7eb";
import react from "/node_modules/.vite/deps/@vitejs_plugin-react.js?v=51b3b2bf";
import path from "/@id/__vite-browser-external:path";
import { defineConfig } from "/node_modules/.vite/deps/vite.js?v=70f63122";
import { VitePWA } from "/node_modules/.vite/deps/vite-plugin-pwa.js?v=36dc5102";
export default defineConfig(() => {
	return {
		plugins: [
			react(),
			tailwindcss(),
			VitePWA({
				registerType: "autoUpdate",
				includeAssets: [
					"favicon.ico",
					"apple-touch-icon.png",
					"icon.svg"
				],
				manifest: {
					id: "/",
					name: "OperatIA PME - Studio d'Agents IA",
					short_name: "OperatIA",
					description: "Studio d'Agents IA No-Code pour PME : service client 24/7, facturation, prise de rendez-vous et suivi des prospects.",
					theme_color: "#4f46e5",
					background_color: "#ffffff",
					display: "standalone",
					start_url: "/",
					scope: "/",
					icons: [
						{
							src: "/pwa-192x192.png",
							sizes: "192x192",
							type: "image/png",
							purpose: "any"
						},
						{
							src: "/pwa-512x512.png",
							sizes: "512x512",
							type: "image/png",
							purpose: "any"
						},
						{
							src: "/pwa-maskable-512x512.png",
							sizes: "512x512",
							type: "image/png",
							purpose: "maskable"
						}
					]
				},
				workbox: {
					globPatterns: ["**/*.{js,css,html,ico,png,svg,woff,woff2}"],
					runtimeCaching: [{
						urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
						handler: "CacheFirst",
						options: {
							cacheName: "google-fonts-cache",
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 60 * 24 * 365
							},
							cacheableResponse: { statuses: [0, 200] }
						}
					}, {
						urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
						handler: "CacheFirst",
						options: {
							cacheName: "gstatic-fonts-cache",
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 60 * 24 * 365
							},
							cacheableResponse: { statuses: [0, 200] }
						}
					}]
				},
				devOptions: {
					enabled: true,
					type: "module"
				}
			})
		],
		resolve: { alias: { "@": path.resolve(".") } },
		server: {
			// HMR is disabled in AI Studio via DISABLE_HMR env var.
			// Do not modify—file watching is disabled to prevent flickering during agent edits.
			hmr: process.env.DISABLE_HMR !== "true",
			// Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
			watch: process.env.DISABLE_HMR === "true" ? null : {}
		}
	};
});

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGVBQWU7QUFFeEIsZUFBZSxtQkFBbUI7Q0FDaEMsT0FBTztFQUNMLFNBQVM7R0FDUCxNQUFNO0dBQ04sWUFBWTtHQUNaLFFBQVE7SUFDTixjQUFjO0lBQ2QsZUFBZTtLQUFDO0tBQWU7S0FBd0I7SUFBVTtJQUNqRSxVQUFVO0tBQ1IsSUFBSTtLQUNKLE1BQU07S0FDTixZQUFZO0tBQ1osYUFBYTtLQUNiLGFBQWE7S0FDYixrQkFBa0I7S0FDbEIsU0FBUztLQUNULFdBQVc7S0FDWCxPQUFPO0tBQ1AsT0FBTztNQUNMO09BQ0UsS0FBSztPQUNMLE9BQU87T0FDUCxNQUFNO09BQ04sU0FBUztNQUNYO01BQ0E7T0FDRSxLQUFLO09BQ0wsT0FBTztPQUNQLE1BQU07T0FDTixTQUFTO01BQ1g7TUFDQTtPQUNFLEtBQUs7T0FDTCxPQUFPO09BQ1AsTUFBTTtPQUNOLFNBQVM7TUFDWDtLQUNGO0lBQ0Y7SUFDQSxTQUFTO0tBQ1AsY0FBYyxDQUFDLDJDQUEyQztLQUMxRCxnQkFBZ0IsQ0FDZDtNQUNFLFlBQVk7TUFDWixTQUFTO01BQ1QsU0FBUztPQUNQLFdBQVc7T0FDWCxZQUFZO1FBQ1YsWUFBWTtRQUNaLGVBQWUsS0FBSyxLQUFLLEtBQUs7T0FDaEM7T0FDQSxtQkFBbUIsRUFDakIsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUNuQjtNQUNGO0tBQ0YsR0FDQTtNQUNFLFlBQVk7TUFDWixTQUFTO01BQ1QsU0FBUztPQUNQLFdBQVc7T0FDWCxZQUFZO1FBQ1YsWUFBWTtRQUNaLGVBQWUsS0FBSyxLQUFLLEtBQUs7T0FDaEM7T0FDQSxtQkFBbUIsRUFDakIsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUNuQjtNQUNGO0tBQ0YsQ0FDRjtJQUNGO0lBQ0EsWUFBWTtLQUNWLFNBQVM7S0FDVCxNQUFNO0lBQ1I7R0FDRixDQUFDO0VBQ0g7RUFDQSxTQUFTLEVBQ1AsT0FBTyxFQUNMLEtBQUssS0FBSyxRQUFRLEdBQUcsRUFDdkIsRUFDRjtFQUNBLFFBQVE7OztHQUdOLEtBQUssUUFBUSxJQUFJLGdCQUFnQjs7R0FFakMsT0FBTyxRQUFRLElBQUksZ0JBQWdCLFNBQVMsT0FBTyxDQUFDO0VBQ3REO0NBQ0Y7QUFDRixDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbInZpdGUuY29uZmlnLnRzIl0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0YWlsd2luZGNzcyBmcm9tICdAdGFpbHdpbmRjc3Mvdml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtcbiAgICAgIHJlYWN0KCksXG4gICAgICB0YWlsd2luZGNzcygpLFxuICAgICAgVml0ZVBXQSh7XG4gICAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgICAgICBpbmNsdWRlQXNzZXRzOiBbJ2Zhdmljb24uaWNvJywgJ2FwcGxlLXRvdWNoLWljb24ucG5nJywgJ2ljb24uc3ZnJ10sXG4gICAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgICAgaWQ6ICcvJyxcbiAgICAgICAgICBuYW1lOiBcIk9wZXJhdElBIFBNRSAtIFN0dWRpbyBkJ0FnZW50cyBJQVwiLFxuICAgICAgICAgIHNob3J0X25hbWU6ICdPcGVyYXRJQScsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiU3R1ZGlvIGQnQWdlbnRzIElBIE5vLUNvZGUgcG91ciBQTUUgOiBzZXJ2aWNlIGNsaWVudCAyNC83LCBmYWN0dXJhdGlvbiwgcHJpc2UgZGUgcmVuZGV6LXZvdXMgZXQgc3VpdmkgZGVzIHByb3NwZWN0cy5cIixcbiAgICAgICAgICB0aGVtZV9jb2xvcjogJyM0ZjQ2ZTUnLFxuICAgICAgICAgIGJhY2tncm91bmRfY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICBkaXNwbGF5OiAnc3RhbmRhbG9uZScsXG4gICAgICAgICAgc3RhcnRfdXJsOiAnLycsXG4gICAgICAgICAgc2NvcGU6ICcvJyxcbiAgICAgICAgICBpY29uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6ICcvcHdhLTE5MngxOTIucG5nJyxcbiAgICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3JjOiAnL3B3YS01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgICBwdXJwb3NlOiAnYW55JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNyYzogJy9wd2EtbWFza2FibGUtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgICAgcHVycG9zZTogJ21hc2thYmxlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgd29ya2JveDoge1xuICAgICAgICAgIGdsb2JQYXR0ZXJuczogWycqKi8qLntqcyxjc3MsaHRtbCxpY28scG5nLHN2Zyx3b2ZmLHdvZmYyfSddLFxuICAgICAgICAgIHJ1bnRpbWVDYWNoaW5nOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHVybFBhdHRlcm46IC9eaHR0cHM6XFwvXFwvZm9udHNcXC5nb29nbGVhcGlzXFwuY29tXFwvLiovaSxcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ0NhY2hlRmlyc3QnLFxuICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lOiAnZ29vZ2xlLWZvbnRzLWNhY2hlJyxcbiAgICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICBtYXhFbnRyaWVzOiAxMCxcbiAgICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDM2NSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNhY2hlYWJsZVJlc3BvbnNlOiB7XG4gICAgICAgICAgICAgICAgICBzdGF0dXNlczogWzAsIDIwMF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHVybFBhdHRlcm46IC9eaHR0cHM6XFwvXFwvZm9udHNcXC5nc3RhdGljXFwuY29tXFwvLiovaSxcbiAgICAgICAgICAgICAgaGFuZGxlcjogJ0NhY2hlRmlyc3QnLFxuICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lOiAnZ3N0YXRpYy1mb250cy1jYWNoZScsXG4gICAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgICAgbWF4RW50cmllczogMTAsXG4gICAgICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgKiAzNjUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjYWNoZWFibGVSZXNwb25zZToge1xuICAgICAgICAgICAgICAgICAgc3RhdHVzZXM6IFswLCAyMDBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGRldk9wdGlvbnM6IHtcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIHR5cGU6ICdtb2R1bGUnLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZSgnLicpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgLy8gSE1SIGlzIGRpc2FibGVkIGluIEFJIFN0dWRpbyB2aWEgRElTQUJMRV9ITVIgZW52IHZhci5cbiAgICAgIC8vIERvIG5vdCBtb2RpZnnigJRmaWxlIHdhdGNoaW5nIGlzIGRpc2FibGVkIHRvIHByZXZlbnQgZmxpY2tlcmluZyBkdXJpbmcgYWdlbnQgZWRpdHMuXG4gICAgICBobXI6IHByb2Nlc3MuZW52LkRJU0FCTEVfSE1SICE9PSAndHJ1ZScsXG4gICAgICAvLyBEaXNhYmxlIGZpbGUgd2F0Y2hpbmcgd2hlbiBESVNBQkxFX0hNUiBpcyB0cnVlIHRvIHNhdmUgQ1BVIGR1cmluZyBhZ2VudCBlZGl0cy5cbiAgICAgIHdhdGNoOiBwcm9jZXNzLmVudi5ESVNBQkxFX0hNUiA9PT0gJ3RydWUnID8gbnVsbCA6IHt9LFxuICAgIH0sXG4gIH07XG59KTtcbiJdfQ==