const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport13_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=f4bb9b4f";
import { Header } from "/src/components/Header.tsx";
import { HeroSection } from "/src/components/HeroSection.tsx";
import { AgentCatalog } from "/src/components/AgentCatalog.tsx";
import { LiveSimulator } from "/src/components/LiveSimulator.tsx";
import { NoCodeArchitectures } from "/src/components/NoCodeArchitectures.tsx";
import { RoiCalculator } from "/src/components/RoiCalculator.tsx";
import { CaseStudiesSection } from "/src/components/CaseStudiesSection.tsx";
import { ListingHub } from "/src/components/ListingHub.tsx";
import { AgentConfigModal } from "/src/components/AgentConfigModal.tsx";
import { DownloadAppModal } from "/src/components/DownloadAppModal.tsx";
import { OfflineIndicator } from "/src/components/OfflineIndicator.tsx";
import { Footer } from "/src/components/Footer.tsx";
var _jsxFileName = "/app/applet/src/App.tsx";
import __vite__cjsImport13_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f4bb9b4f";
export default function App() {
	const [activeSection, setActiveSection] = useState("hero");
	const [currentAgentId, setCurrentAgentId] = useState("support");
	const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
	const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
	const handleNavigate = (sectionId) => {
		setActiveSection(sectionId);
		if (sectionId === "hero") {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
			return;
		}
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};
	const handleSelectAgentForTest = (agentId) => {
		setCurrentAgentId(agentId);
		handleNavigate("simulator");
	};
	const handleViewBlueprint = (agentId) => {
		setCurrentAgentId(agentId);
		handleNavigate("architectures");
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900",
		children: [
			/* @__PURE__ */ _jsxDEV(Header, {
				activeSection,
				onNavigate: handleNavigate,
				onOpenConfig: () => setIsConfigModalOpen(true),
				onOpenDownload: () => setIsDownloadModalOpen(true)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("main", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ _jsxDEV(HeroSection, {
						onExploreAgents: () => handleNavigate("agents"),
						onLaunchSimulator: () => handleNavigate("simulator"),
						onOpenDownload: () => setIsDownloadModalOpen(true)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV(AgentCatalog, {
						onSelectAgentForTest: handleSelectAgentForTest,
						onViewBlueprint: handleViewBlueprint
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV(LiveSimulator, {
						currentAgentId,
						onAgentChange: setCurrentAgentId
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV(NoCodeArchitectures, { initialAgentId: currentAgentId }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV(RoiCalculator, { onConfigureAgent: () => setIsConfigModalOpen(true) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 81,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV(CaseStudiesSection, { onConfigureAgent: () => setIsConfigModalOpen(true) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV(ListingHub, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(Footer, {
				onNavigate: handleNavigate,
				onOpenDownload: () => setIsDownloadModalOpen(true)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 95,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(AgentConfigModal, {
				isOpen: isConfigModalOpen,
				onClose: () => setIsConfigModalOpen(false)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 101,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(DownloadAppModal, {
				isOpen: isDownloadModalOpen,
				onClose: () => setIsDownloadModalOpen(false)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 107,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(OfflineIndicator, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 113,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 5
	}, this);
}

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLGdCQUFnQjtBQUNoQyxTQUFTLGNBQWM7QUFDdkIsU0FBUyxtQkFBbUI7QUFDNUIsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUywyQkFBMkI7QUFDcEMsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUywwQkFBMEI7QUFDbkMsU0FBUyxrQkFBa0I7QUFDM0IsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxjQUFjOzs7QUFHdkIsZUFBZSxTQUFTLE1BQU07Q0FDNUIsTUFBTSxDQUFDLGVBQWUsb0JBQW9CLFNBQWlCLE1BQU07Q0FDakUsTUFBTSxDQUFDLGdCQUFnQixxQkFBcUIsU0FBb0IsU0FBUztDQUN6RSxNQUFNLENBQUMsbUJBQW1CLHdCQUF3QixTQUFrQixLQUFLO0NBQ3pFLE1BQU0sQ0FBQyxxQkFBcUIsMEJBQTBCLFNBQWtCLEtBQUs7Q0FFN0UsTUFBTSxrQkFBa0IsY0FBc0I7RUFDNUMsaUJBQWlCLFNBQVM7RUFDMUIsSUFBSSxjQUFjLFFBQVE7R0FDeEIsT0FBTyxTQUFTO0lBQUUsS0FBSztJQUFHLFVBQVU7R0FBUyxDQUFDO0dBQzlDO0VBQ0Y7RUFFQSxNQUFNLFVBQVUsU0FBUyxlQUFlLFNBQVM7RUFDakQsSUFBSSxTQUFTO0dBQ1gsUUFBUSxlQUFlLEVBQUUsVUFBVSxTQUFTLENBQUM7RUFDL0M7Q0FDRjtDQUVBLE1BQU0sNEJBQTRCLFlBQXVCO0VBQ3ZELGtCQUFrQixPQUFPO0VBQ3pCLGVBQWUsV0FBVztDQUM1QjtDQUVBLE1BQU0sdUJBQXVCLFlBQXVCO0VBQ2xELGtCQUFrQixPQUFPO0VBQ3pCLGVBQWUsZUFBZTtDQUNoQztDQUVBLE9BQ0Usd0JBQUMsT0FBRDtFQUFLLFdBQVU7WUFBZjtHQUVFLHdCQUFDLFFBQUQ7SUFDaUI7SUFDZixZQUFZO0lBQ1osb0JBQW9CLHFCQUFxQixJQUFJO0lBQzdDLHNCQUFzQix1QkFBdUIsSUFBSTtHQUNsRDs7Ozs7R0FFRCx3QkFBQyxRQUFEO0lBQU0sV0FBVTtjQUFoQjtLQUVFLHdCQUFDLGFBQUQ7TUFDRSx1QkFBdUIsZUFBZSxRQUFRO01BQzlDLHlCQUF5QixlQUFlLFdBQVc7TUFDbkQsc0JBQXNCLHVCQUF1QixJQUFJO0tBQ2xEOzs7OztLQUdELHdCQUFDLGNBQUQ7TUFDRSxzQkFBc0I7TUFDdEIsaUJBQWlCO0tBQ2xCOzs7OztLQUdELHdCQUFDLGVBQUQ7TUFDa0I7TUFDaEIsZUFBZTtLQUNoQjs7Ozs7S0FHRCx3QkFBQyxxQkFBRCxFQUNFLGdCQUFnQixlQUNqQjs7Ozs7S0FHRCx3QkFBQyxlQUFELEVBQ0Usd0JBQXdCLHFCQUFxQixJQUFJLEVBQ2xEOzs7OztLQUdELHdCQUFDLG9CQUFELEVBQ0Usd0JBQXdCLHFCQUFxQixJQUFJLEVBQ2xEOzs7OztLQUdELHdCQUFDLFlBQUQsQ0FBYTs7Ozs7SUFDVDs7Ozs7O0dBR04sd0JBQUMsUUFBRDtJQUNFLFlBQVk7SUFDWixzQkFBc0IsdUJBQXVCLElBQUk7R0FDbEQ7Ozs7O0dBR0Qsd0JBQUMsa0JBQUQ7SUFDRSxRQUFRO0lBQ1IsZUFBZSxxQkFBcUIsS0FBSztHQUMxQzs7Ozs7R0FHRCx3QkFBQyxrQkFBRDtJQUNFLFFBQVE7SUFDUixlQUFlLHVCQUF1QixLQUFLO0dBQzVDOzs7OztHQUdELHdCQUFDLGtCQUFELENBQW1COzs7OztFQUNoQjs7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCB7IEhlcm9TZWN0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL0hlcm9TZWN0aW9uJztcbmltcG9ydCB7IEFnZW50Q2F0YWxvZyB9IGZyb20gJy4vY29tcG9uZW50cy9BZ2VudENhdGFsb2cnO1xuaW1wb3J0IHsgTGl2ZVNpbXVsYXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9MaXZlU2ltdWxhdG9yJztcbmltcG9ydCB7IE5vQ29kZUFyY2hpdGVjdHVyZXMgfSBmcm9tICcuL2NvbXBvbmVudHMvTm9Db2RlQXJjaGl0ZWN0dXJlcyc7XG5pbXBvcnQgeyBSb2lDYWxjdWxhdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL1JvaUNhbGN1bGF0b3InO1xuaW1wb3J0IHsgQ2FzZVN0dWRpZXNTZWN0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL0Nhc2VTdHVkaWVzU2VjdGlvbic7XG5pbXBvcnQgeyBMaXN0aW5nSHViIH0gZnJvbSAnLi9jb21wb25lbnRzL0xpc3RpbmdIdWInO1xuaW1wb3J0IHsgQWdlbnRDb25maWdNb2RhbCB9IGZyb20gJy4vY29tcG9uZW50cy9BZ2VudENvbmZpZ01vZGFsJztcbmltcG9ydCB7IERvd25sb2FkQXBwTW9kYWwgfSBmcm9tICcuL2NvbXBvbmVudHMvRG93bmxvYWRBcHBNb2RhbCc7XG5pbXBvcnQgeyBPZmZsaW5lSW5kaWNhdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL09mZmxpbmVJbmRpY2F0b3InO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgeyBBZ2VudFR5cGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbYWN0aXZlU2VjdGlvbiwgc2V0QWN0aXZlU2VjdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCdoZXJvJyk7XG4gIGNvbnN0IFtjdXJyZW50QWdlbnRJZCwgc2V0Q3VycmVudEFnZW50SWRdID0gdXNlU3RhdGU8QWdlbnRUeXBlPignc3VwcG9ydCcpO1xuICBjb25zdCBbaXNDb25maWdNb2RhbE9wZW4sIHNldElzQ29uZmlnTW9kYWxPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2lzRG93bmxvYWRNb2RhbE9wZW4sIHNldElzRG93bmxvYWRNb2RhbE9wZW5dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZU5hdmlnYXRlID0gKHNlY3Rpb25JZDogc3RyaW5nKSA9PiB7XG4gICAgc2V0QWN0aXZlU2VjdGlvbihzZWN0aW9uSWQpO1xuICAgIGlmIChzZWN0aW9uSWQgPT09ICdoZXJvJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb25JZCk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdEFnZW50Rm9yVGVzdCA9IChhZ2VudElkOiBBZ2VudFR5cGUpID0+IHtcbiAgICBzZXRDdXJyZW50QWdlbnRJZChhZ2VudElkKTtcbiAgICBoYW5kbGVOYXZpZ2F0ZSgnc2ltdWxhdG9yJyk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVmlld0JsdWVwcmludCA9IChhZ2VudElkOiBBZ2VudFR5cGUpID0+IHtcbiAgICBzZXRDdXJyZW50QWdlbnRJZChhZ2VudElkKTtcbiAgICBoYW5kbGVOYXZpZ2F0ZSgnYXJjaGl0ZWN0dXJlcycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctd2hpdGUgdGV4dC1zbGF0ZS05MDAgZmxleCBmbGV4LWNvbCBmb250LXNhbnMgc2VsZWN0aW9uOmJnLWluZGlnby0xMDAgc2VsZWN0aW9uOnRleHQtaW5kaWdvLTkwMFwiPlxuICAgICAgey8qIFVuaXZlcnNhbCBUb3AgQmFyICovfVxuICAgICAgPEhlYWRlclxuICAgICAgICBhY3RpdmVTZWN0aW9uPXthY3RpdmVTZWN0aW9ufVxuICAgICAgICBvbk5hdmlnYXRlPXtoYW5kbGVOYXZpZ2F0ZX1cbiAgICAgICAgb25PcGVuQ29uZmlnPXsoKSA9PiBzZXRJc0NvbmZpZ01vZGFsT3Blbih0cnVlKX1cbiAgICAgICAgb25PcGVuRG93bmxvYWQ9eygpID0+IHNldElzRG93bmxvYWRNb2RhbE9wZW4odHJ1ZSl9XG4gICAgICAvPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgey8qIEhlcm8gU2VjdGlvbiAqL31cbiAgICAgICAgPEhlcm9TZWN0aW9uXG4gICAgICAgICAgb25FeHBsb3JlQWdlbnRzPXsoKSA9PiBoYW5kbGVOYXZpZ2F0ZSgnYWdlbnRzJyl9XG4gICAgICAgICAgb25MYXVuY2hTaW11bGF0b3I9eygpID0+IGhhbmRsZU5hdmlnYXRlKCdzaW11bGF0b3InKX1cbiAgICAgICAgICBvbk9wZW5Eb3dubG9hZD17KCkgPT4gc2V0SXNEb3dubG9hZE1vZGFsT3Blbih0cnVlKX1cbiAgICAgICAgLz5cblxuICAgICAgICB7LyogNCBDb3JlIFBpbGxhcnMgQ2F0YWxvZyAqL31cbiAgICAgICAgPEFnZW50Q2F0YWxvZ1xuICAgICAgICAgIG9uU2VsZWN0QWdlbnRGb3JUZXN0PXtoYW5kbGVTZWxlY3RBZ2VudEZvclRlc3R9XG4gICAgICAgICAgb25WaWV3Qmx1ZXByaW50PXtoYW5kbGVWaWV3Qmx1ZXByaW50fVxuICAgICAgICAvPlxuXG4gICAgICAgIHsvKiBJbnRlcmFjdGl2ZSBMaXZlIFNpbXVsYXRvciAmIFRvb2wgSW5zcGVjdG9yICovfVxuICAgICAgICA8TGl2ZVNpbXVsYXRvclxuICAgICAgICAgIGN1cnJlbnRBZ2VudElkPXtjdXJyZW50QWdlbnRJZH1cbiAgICAgICAgICBvbkFnZW50Q2hhbmdlPXtzZXRDdXJyZW50QWdlbnRJZH1cbiAgICAgICAgLz5cblxuICAgICAgICB7LyogTm8tQ29kZSBBcmNoaXRlY3R1cmVzICYgQmx1ZXByaW50cyAqL31cbiAgICAgICAgPE5vQ29kZUFyY2hpdGVjdHVyZXNcbiAgICAgICAgICBpbml0aWFsQWdlbnRJZD17Y3VycmVudEFnZW50SWR9XG4gICAgICAgIC8+XG5cbiAgICAgICAgey8qIEZpbmFuY2lhbCBST0kgJiBUaW1lIFNhdmVkIENhbGN1bGF0b3IgKi99XG4gICAgICAgIDxSb2lDYWxjdWxhdG9yXG4gICAgICAgICAgb25Db25maWd1cmVBZ2VudD17KCkgPT4gc2V0SXNDb25maWdNb2RhbE9wZW4odHJ1ZSl9XG4gICAgICAgIC8+XG5cbiAgICAgICAgey8qIFJlYWwgU01FIENhc2UgU3R1ZGllcyAmIEFnZW5jeSBMYXVuY2ggR3VpZGUgKi99XG4gICAgICAgIDxDYXNlU3R1ZGllc1NlY3Rpb25cbiAgICAgICAgICBvbkNvbmZpZ3VyZUFnZW50PXsoKSA9PiBzZXRJc0NvbmZpZ01vZGFsT3Blbih0cnVlKX1cbiAgICAgICAgLz5cblxuICAgICAgICB7LyogTWFya2V0cGxhY2UgTGlzdGluZyBIdWIgZm9yIEFjcXVpcmUuY29tLCBGbGlwcGEgJiBUcnVzdGVyICovfVxuICAgICAgICA8TGlzdGluZ0h1YiAvPlxuICAgICAgPC9tYWluPlxuXG4gICAgICB7LyogQ2xlYW4gRm9vdGVyICovfVxuICAgICAgPEZvb3RlciBcbiAgICAgICAgb25OYXZpZ2F0ZT17aGFuZGxlTmF2aWdhdGV9IFxuICAgICAgICBvbk9wZW5Eb3dubG9hZD17KCkgPT4gc2V0SXNEb3dubG9hZE1vZGFsT3Blbih0cnVlKX0gXG4gICAgICAvPlxuXG4gICAgICB7LyogSW50ZXJhY3RpdmUgQnVzaW5lc3MgQ29uZmlndXJhdGlvbiBNb2RhbCAqL31cbiAgICAgIDxBZ2VudENvbmZpZ01vZGFsXG4gICAgICAgIGlzT3Blbj17aXNDb25maWdNb2RhbE9wZW59XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzQ29uZmlnTW9kYWxPcGVuKGZhbHNlKX1cbiAgICAgIC8+XG5cbiAgICAgIHsvKiBEb3dubG9hZCAvIEluc3RhbGwgb24gQ29tcHV0ZXIgTW9kYWwgKi99XG4gICAgICA8RG93bmxvYWRBcHBNb2RhbFxuICAgICAgICBpc09wZW49e2lzRG93bmxvYWRNb2RhbE9wZW59XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzRG93bmxvYWRNb2RhbE9wZW4oZmFsc2UpfVxuICAgICAgLz5cblxuICAgICAgey8qIFBXQSBPZmZsaW5lIEluZGljYXRvciAqL31cbiAgICAgIDxPZmZsaW5lSW5kaWNhdG9yIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0=