const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"]; const useRef = __vite__cjsImport0_react["useRef"]; const useEffect = __vite__cjsImport0_react["useEffect"];const _jsxDEV = __vite__cjsImport4_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=f4bb9b4f";
import { AGENTS_DATA, SECTOR_PRESETS } from "/src/data/agentsData.ts";
import { processAgentSimulation } from "/src/services/agentEngine.ts";
import { Send, RotateCcw, Terminal, CheckCircle2, Sliders, Copy, Check, Sparkles, Bot, User, Building2 } from "/node_modules/.vite/deps/lucide-react.js?v=f4bb9b4f";
var _jsxFileName = "/app/applet/src/components/LiveSimulator.tsx";
import __vite__cjsImport4_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f4bb9b4f";
export const LiveSimulator = ({ currentAgentId, onAgentChange }) => {
	const [selectedSector, setSelectedSector] = useState("btp");
	const [inputMessage, setInputMessage] = useState("");
	const [showPromptEditor, setShowPromptEditor] = useState(false);
	const [customPrompt, setCustomPrompt] = useState("");
	const [customKnowledge, setCustomKnowledge] = useState("");
	const [copiedPrompt, setCopiedPrompt] = useState(false);
	const [isProcessing, setIsProcessing] = useState(false);
	const activeAgent = AGENTS_DATA.find((a) => a.id === currentAgentId) || AGENTS_DATA[0];
	const sectorInfo = SECTOR_PRESETS[selectedSector] || SECTOR_PRESETS.btp;
	// Initialize conversation with welcome message
	const [messages, setMessages] = useState(() => [{
		id: "init_1",
		sender: "agent",
		content: `Bonjour ! Je suis l'assistant virtuel de ${sectorInfo.companyName}. Comment puis-je vous aider aujourd'hui ?`,
		timestamp: "09:00",
		actions: [{
			id: "init_act_1",
			tool: "Agent Runtime",
			actionName: "SessionInitialized",
			status: "executed",
			details: `Agent ${activeAgent.badge} connecté au canal client.`,
			timestamp: "09:00"
		}]
	}]);
	// Keep prompt in sync when agent or sector changes
	useEffect(() => {
		setCustomPrompt(activeAgent.systemPrompt);
		setCustomKnowledge(sectorInfo.defaultKnowledge);
		resetConversation();
	}, [currentAgentId, selectedSector]);
	const messagesEndRef = useRef(null);
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	useEffect(() => {
		scrollToBottom();
	}, [messages, isProcessing]);
	const resetConversation = () => {
		const time = new Date().toLocaleTimeString("fr-FR", {
			hour: "2-digit",
			minute: "2-digit"
		});
		setMessages([{
			id: `msg_${Date.now()}`,
			sender: "agent",
			content: `Bonjour ! Je suis l'assistant virtuel de ${sectorInfo.companyName}. Comment puis-je vous aider aujourd'hui ?`,
			timestamp: time,
			actions: [{
				id: `act_${Date.now()}`,
				tool: "Make.com Router",
				actionName: "ReadyForInboundMessage",
				status: "executed",
				details: `En attente d'interaction pour la PME : ${sectorInfo.companyName}.`,
				timestamp: time
			}]
		}]);
	};
	const handleSendMessage = (messageText) => {
		const textToSend = messageText.trim();
		if (!textToSend || isProcessing) return;
		const userTime = new Date().toLocaleTimeString("fr-FR", {
			hour: "2-digit",
			minute: "2-digit"
		});
		const userMsgId = `usr_${Date.now()}`;
		// Add user message
		setMessages((prev) => [...prev, {
			id: userMsgId,
			sender: "user",
			content: textToSend,
			timestamp: userTime
		}]);
		setInputMessage("");
		setIsProcessing(true);
		// Simulate agent latency (< 600ms for responsiveness)
		setTimeout(() => {
			const response = processAgentSimulation(currentAgentId, textToSend, selectedSector, customKnowledge);
			const agentTime = new Date().toLocaleTimeString("fr-FR", {
				hour: "2-digit",
				minute: "2-digit"
			});
			setMessages((prev) => [...prev, {
				id: `agt_${Date.now()}`,
				sender: "agent",
				content: response.message,
				timestamp: agentTime,
				actions: response.actions,
				entities: response.entities
			}]);
			setIsProcessing(false);
		}, 450);
	};
	const handleApplyScenario = (scenarioText) => {
		handleSendMessage(scenarioText);
	};
	const copySystemPrompt = () => {
		navigator.clipboard.writeText(customPrompt);
		setCopiedPrompt(true);
		setTimeout(() => setCopiedPrompt(false), 2e3);
	};
	// Find latest actions to show in the live tool inspection panel
	const latestAgentMessage = [...messages].reverse().find((m) => m.sender === "agent" && m.actions && m.actions.length > 0);
	const activeActions = latestAgentMessage?.actions || [];
	const activeEntities = latestAgentMessage?.entities;
	return /* @__PURE__ */ _jsxDEV("section", {
		id: "simulator",
		className: "py-16 bg-white border-b border-slate-200",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "max-w-7xl mx-auto px-6",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8",
					children: [/* @__PURE__ */ _jsxDEV("div", { children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs font-semibold uppercase tracking-wider text-indigo-700 mb-2",
							children: "Banc d'Essai Interactif"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 165,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance",
							children: "Simulateur d’Agent en Direct & Inspecteur d’Actions"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 168,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "text-sm text-slate-600 mt-2",
							children: "Testez le comportement de l'agent en conditions réelles et observez en direct les déclenchements d’outils (Make, Pennylane, Google Calendar, WhatsApp)."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 171,
							columnNumber: 13
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 164,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setShowPromptEditor(!showPromptEditor),
							className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer whitespace-nowrap",
							children: [/* @__PURE__ */ _jsxDEV(Sliders, { className: "w-3.5 h-3.5 text-slate-500" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 181,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: showPromptEditor ? "Masquer le Prompt" : "Modifier le Prompt" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 182,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 177,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("button", {
							onClick: resetConversation,
							className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer whitespace-nowrap",
							children: [/* @__PURE__ */ _jsxDEV(RotateCcw, { className: "w-3.5 h-3.5 text-slate-500" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 188,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Réinitialiser" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 189,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 184,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 176,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 163,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "p-4 bg-slate-50 rounded-xl border border-slate-200 mb-6 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ _jsxDEV("span", {
							className: "text-xs font-bold uppercase tracking-wider text-slate-500 mr-1",
							children: "Agent :"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 198,
							columnNumber: 13
						}, this), AGENTS_DATA.map((ag) => /* @__PURE__ */ _jsxDEV("button", {
							onClick: () => onAgentChange(ag.id),
							className: `px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${ag.id === currentAgentId ? "bg-indigo-600 text-white shadow-sm font-semibold" : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"}`,
							children: ag.badge
						}, ag.id, false, {
							fileName: _jsxFileName,
							lineNumber: 202,
							columnNumber: 15
						}, this))]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 197,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ _jsxDEV(Building2, { className: "w-4 h-4 text-slate-400 shrink-0" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 218,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								className: "text-xs font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap",
								children: "Secteur PME :"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 219,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("select", {
								value: selectedSector,
								onChange: (e) => setSelectedSector(e.target.value),
								className: "text-xs bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500",
								children: Object.entries(SECTOR_PRESETS).map(([key, item]) => /* @__PURE__ */ _jsxDEV("option", {
									value: key,
									children: item.label
								}, key, false, {
									fileName: _jsxFileName,
									lineNumber: 228,
									columnNumber: 17
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 222,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 217,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 195,
					columnNumber: 9
				}, this),
				showPromptEditor && /* @__PURE__ */ _jsxDEV("div", {
					className: "mb-6 p-4 bg-slate-900 rounded-xl text-slate-200 border border-slate-800 transition-all",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center justify-between mb-3",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-2 text-xs font-mono text-indigo-400",
							children: [/* @__PURE__ */ _jsxDEV(Terminal, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 241,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Prompt Système & Base de Connaissances Make.com" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 242,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 240,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("button", {
							onClick: copySystemPrompt,
							className: "flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors",
							children: [copiedPrompt ? /* @__PURE__ */ _jsxDEV(Check, { className: "w-3.5 h-3.5 text-emerald-400" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 248,
								columnNumber: 33
							}, this) : /* @__PURE__ */ _jsxDEV(Copy, { className: "w-3.5 h-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 248,
								columnNumber: 86
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: copiedPrompt ? "Copié !" : "Copier le Prompt" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 249,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 244,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 239,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-4",
						children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
							className: "block text-[11px] font-mono uppercase text-slate-400 mb-1",
							children: "Consigne Système (System Instruction)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 255,
							columnNumber: 17
						}, this), /* @__PURE__ */ _jsxDEV("textarea", {
							value: customPrompt,
							onChange: (e) => setCustomPrompt(e.target.value),
							rows: 5,
							className: "w-full text-xs font-mono bg-slate-950 text-slate-100 p-2.5 rounded-lg border border-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-400"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 258,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 254,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("label", {
							className: "block text-[11px] font-mono uppercase text-slate-400 mb-1",
							children: "Base de Connaissances PME (Notion / FAQ injectée)"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 267,
							columnNumber: 17
						}, this), /* @__PURE__ */ _jsxDEV("textarea", {
							value: customKnowledge,
							onChange: (e) => setCustomKnowledge(e.target.value),
							rows: 5,
							className: "w-full text-xs font-mono bg-slate-950 text-slate-100 p-2.5 rounded-lg border border-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-400"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 270,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 266,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 253,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 238,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "lg:col-span-7 flex flex-col bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-[580px]",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "px-5 py-3.5 bg-white border-b border-slate-200 flex items-center justify-between",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center",
										children: /* @__PURE__ */ _jsxDEV(Bot, { className: "w-4 h-4" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 289,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 288,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs font-bold text-slate-900 flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: activeAgent.title }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 293,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "text-[10px] text-slate-500 font-normal",
											children: ["· ", sectorInfo.companyName]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 294,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 292,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "text-[11px] text-emerald-600 flex items-center gap-1 font-medium",
										children: /* @__PURE__ */ _jsxDEV("span", { children: "Connecté à Make.com" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 299,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 298,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 291,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 287,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-xs text-slate-400 font-mono",
									children: "Latence: < 0.5s"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 304,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 286,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "px-4 py-2 bg-slate-100/70 border-b border-slate-200 flex items-center gap-2 overflow-x-auto text-xs",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "text-[11px] font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap shrink-0",
									children: "Scénarios rapides :"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 311,
									columnNumber: 15
								}, this), activeAgent.sampleScenarios.map((scen) => /* @__PURE__ */ _jsxDEV("button", {
									onClick: () => handleApplyScenario(scen.userMessage),
									className: "px-2.5 py-1 bg-white hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 rounded-md border border-slate-200 text-xs font-medium whitespace-nowrap shrink-0 transition-colors shadow-2xs cursor-pointer",
									title: scen.expectedOutcome,
									children: scen.label
								}, scen.id, false, {
									fileName: _jsxFileName,
									lineNumber: 315,
									columnNumber: 17
								}, this))]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 310,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex-1 p-4 overflow-y-auto space-y-4",
								children: [
									messages.map((msg) => {
										const isUser = msg.sender === "user";
										return /* @__PURE__ */ _jsxDEV("div", {
											className: `flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`,
											children: [/* @__PURE__ */ _jsxDEV("div", {
												className: `w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs ${isUser ? "bg-slate-800 text-white" : "bg-indigo-600 text-white"}`,
												children: isUser ? /* @__PURE__ */ _jsxDEV(User, { className: "w-4 h-4" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 342,
													columnNumber: 33
												}, this) : /* @__PURE__ */ _jsxDEV(Bot, { className: "w-4 h-4" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 342,
													columnNumber: 64
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 335,
												columnNumber: 21
											}, this), /* @__PURE__ */ _jsxDEV("div", {
												className: `max-w-[82%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${isUser ? "bg-slate-900 text-white rounded-tr-xs" : "bg-white text-slate-800 border border-slate-200 rounded-tl-xs shadow-xs"}`,
												children: [/* @__PURE__ */ _jsxDEV("p", {
													className: "whitespace-pre-wrap",
													children: msg.content
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 352,
													columnNumber: 23
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													className: `text-[10px] mt-1.5 flex items-center justify-end font-mono ${isUser ? "text-slate-400" : "text-slate-400"}`,
													children: msg.timestamp
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 353,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 345,
												columnNumber: 21
											}, this)]
										}, msg.id, true, {
											fileName: _jsxFileName,
											lineNumber: 331,
											columnNumber: 19
										}, this);
									}),
									isProcessing && /* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2.5 text-xs text-slate-500",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0",
											children: /* @__PURE__ */ _jsxDEV(Sparkles, { className: "w-4 h-4 animate-spin" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 368,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 367,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "bg-white border border-slate-200 rounded-2xl px-4 py-2.5 text-xs text-slate-600 shadow-xs",
											children: "L'agent analyse l'intention et interroge les outils..."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 370,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 366,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", { ref: messagesEndRef }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 375,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 327,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "p-3 bg-white border-t border-slate-200",
								children: /* @__PURE__ */ _jsxDEV("form", {
									onSubmit: (e) => {
										e.preventDefault();
										handleSendMessage(inputMessage);
									},
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ _jsxDEV("input", {
										type: "text",
										value: inputMessage,
										onChange: (e) => setInputMessage(e.target.value),
										placeholder: `Tapez un message pour tester l'agent ${activeAgent.badge}...`,
										className: "flex-1 bg-slate-50 text-slate-900 text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 387,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("button", {
										type: "submit",
										disabled: !inputMessage.trim() || isProcessing,
										className: "px-4 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-semibold text-xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap shadow-xs",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: "Envoyer" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 399,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV(Send, { className: "w-3.5 h-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 400,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 394,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 380,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 379,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 284,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "lg:col-span-5 flex flex-col bg-slate-900 rounded-2xl text-slate-200 border border-slate-800 shadow-md h-[580px] overflow-hidden",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2 text-xs font-mono font-bold text-indigo-400",
								children: [/* @__PURE__ */ _jsxDEV(Terminal, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 411,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Inspecteur d’Exécution en Direct" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 412,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 410,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "text-[10px] font-mono text-emerald-400 font-semibold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40",
								children: "Live Webhook Active"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 414,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 409,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "flex-1 p-5 overflow-y-auto space-y-5 text-xs font-mono",
							children: [
								/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-2",
									children: "01. Analyse Sémantique & Intention"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 423,
									columnNumber: 17
								}, this), activeEntities ? /* @__PURE__ */ _jsxDEV("div", {
									className: "bg-slate-950/80 rounded-lg p-3 border border-slate-800/80 space-y-1.5",
									children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center justify-between text-slate-300",
											children: [/* @__PURE__ */ _jsxDEV("span", {
												className: "text-slate-500",
												children: "Intention :"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 429,
												columnNumber: 23
											}, this), /* @__PURE__ */ _jsxDEV("span", {
												className: "font-semibold text-indigo-300 text-right truncate max-w-[200px]",
												children: activeEntities.intent
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 430,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 428,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center justify-between text-slate-300",
											children: [/* @__PURE__ */ _jsxDEV("span", {
												className: "text-slate-500",
												children: "Niveau d'Urgence :"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 435,
												columnNumber: 23
											}, this), /* @__PURE__ */ _jsxDEV("span", {
												className: `font-bold ${activeEntities.urgency === "Urgente" ? "text-rose-400" : activeEntities.urgency === "Haute" ? "text-amber-400" : "text-emerald-400"}`,
												children: activeEntities.urgency
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 436,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 434,
											columnNumber: 21
										}, this),
										activeEntities.requestedDate && /* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center justify-between text-slate-300",
											children: [/* @__PURE__ */ _jsxDEV("span", {
												className: "text-slate-500",
												children: "Créneau Détecté :"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 450,
												columnNumber: 25
											}, this), /* @__PURE__ */ _jsxDEV("span", {
												className: "text-slate-200",
												children: activeEntities.requestedDate
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 451,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 449,
											columnNumber: 23
										}, this),
										activeEntities.notes && /* @__PURE__ */ _jsxDEV("div", {
											className: "pt-1 border-t border-slate-800 text-[11px] text-slate-400",
											children: activeEntities.notes
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 455,
											columnNumber: 23
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 427,
									columnNumber: 19
								}, this) : /* @__PURE__ */ _jsxDEV("div", {
									className: "text-slate-500 italic bg-slate-950/40 p-3 rounded-lg border border-slate-800/40",
									children: "Envoyez un message pour analyser l'intention."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 461,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 422,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-2",
									children: [
										"02. Actions & Connecteurs Outils (",
										activeActions.length,
										")"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 469,
									columnNumber: 17
								}, this), activeActions.length > 0 ? /* @__PURE__ */ _jsxDEV("div", {
									className: "space-y-2",
									children: activeActions.map((act) => /* @__PURE__ */ _jsxDEV("div", {
										className: "bg-slate-950/80 rounded-lg p-3 border border-slate-800 text-[11px]",
										children: [
											/* @__PURE__ */ _jsxDEV("div", {
												className: "flex items-center justify-between mb-1.5",
												children: [/* @__PURE__ */ _jsxDEV("span", {
													className: "font-bold text-indigo-400",
													children: act.tool
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 481,
													columnNumber: 27
												}, this), /* @__PURE__ */ _jsxDEV("span", {
													className: "text-[10px] text-emerald-400 font-semibold flex items-center gap-1",
													children: [/* @__PURE__ */ _jsxDEV(CheckCircle2, { className: "w-3 h-3" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 483,
														columnNumber: 29
													}, this), /* @__PURE__ */ _jsxDEV("span", { children: act.status }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 484,
														columnNumber: 29
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 482,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 480,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "text-slate-200 font-semibold mb-1",
												children: [act.actionName, "()"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 487,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ _jsxDEV("p", {
												className: "text-slate-400 leading-normal",
												children: act.details
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 490,
												columnNumber: 25
											}, this),
											act.payload && /* @__PURE__ */ _jsxDEV("div", {
												className: "mt-2 p-2 bg-slate-900 rounded border border-slate-800 text-[10px] text-slate-300 overflow-x-auto",
												children: /* @__PURE__ */ _jsxDEV("pre", { children: JSON.stringify(act.payload, null, 2) }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 495,
													columnNumber: 29
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 494,
												columnNumber: 27
											}, this)
										]
									}, act.id, true, {
										fileName: _jsxFileName,
										lineNumber: 476,
										columnNumber: 23
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 474,
									columnNumber: 19
								}, this) : /* @__PURE__ */ _jsxDEV("div", {
									className: "text-slate-500 italic bg-slate-950/40 p-3 rounded-lg border border-slate-800/40",
									children: "Aucune action en cours."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 502,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 468,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "pt-3 border-t border-slate-800/80",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-2",
										children: "03. Intégrations No-Code Actives"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 510,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "flex flex-wrap gap-1.5",
										children: activeAgent.noCodeTools.map((t, idx) => /* @__PURE__ */ _jsxDEV("span", {
											className: "px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-300 border border-slate-700",
											children: t.name
										}, idx, false, {
											fileName: _jsxFileName,
											lineNumber: 515,
											columnNumber: 21
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 513,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 509,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 420,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 407,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 282,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 161,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 160,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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O3VCQUFoQixDQUNFLHdCQUFDLGNBQUQsRUFBYyxXQUFVLFVBQVc7Ozs7dUJBQ25DLHdCQUFDLFFBQUQsWUFBTyxJQUFJLE9BQWE7Ozs7cUJBQ3BCOzs7OztvQkFDSDs7Ozs7O1dBQ0wsd0JBQUMsT0FBRDtZQUFLLFdBQVU7c0JBQWYsQ0FDRyxJQUFJLFlBQVcsSUFDYjs7Ozs7O1dBQ0wsd0JBQUMsS0FBRDtZQUFHLFdBQVU7c0JBQ1YsSUFBSTtXQUNKOzs7OztXQUNGLElBQUksV0FDSCx3QkFBQyxPQUFEO1lBQUssV0FBVTtzQkFDYix3QkFBQyxPQUFELFlBQU0sS0FBSyxVQUFVLElBQUksU0FBUyxNQUFNLENBQUMsRUFBTzs7Ozs7V0FDN0M7Ozs7O1VBRUo7WUFyQkUsSUFBSTs7OztnQkFxQk4sQ0FDTjtRQUNFOzs7O21CQUVMLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUFrRjtRQUU1Rjs7OztnQkFFSjs7Ozs7UUFHTCx3QkFBQyxPQUFEO1NBQUssV0FBVTttQkFBZixDQUNFLHdCQUFDLE9BQUQ7VUFBSyxXQUFVO29CQUFxRTtTQUUvRTs7OzttQkFDTCx3QkFBQyxPQUFEO1VBQUssV0FBVTtvQkFDWixZQUFZLFlBQVksS0FBSyxHQUFHLFFBQy9CLHdCQUFDLFFBQUQ7V0FFRSxXQUFVO3FCQUVULEVBQUU7VUFDQyxHQUpDOzs7O2lCQUlELENBQ1A7U0FDRTs7OztpQkFDRjs7Ozs7O09BQ0Y7Ozs7O2NBQ0Y7Ozs7O2FBQ0Y7Ozs7OztHQUNGOzs7Ozs7Q0FDRTs7Ozs7QUFFYiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJMaXZlU2ltdWxhdG9yLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWdlbnRUeXBlLCBDaGF0TWVzc2FnZSwgU2VjdG9yVHlwZSwgQWdlbnRBY3Rpb24gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBBR0VOVFNfREFUQSwgU0VDVE9SX1BSRVNFVFMgfSBmcm9tICcuLi9kYXRhL2FnZW50c0RhdGEnO1xuaW1wb3J0IHsgcHJvY2Vzc0FnZW50U2ltdWxhdGlvbiB9IGZyb20gJy4uL3NlcnZpY2VzL2FnZW50RW5naW5lJztcbmltcG9ydCB7IFxuICBTZW5kLCBcbiAgUm90YXRlQ2N3LCBcbiAgVGVybWluYWwsIFxuICBDaGVja0NpcmNsZTIsIFxuICBTbGlkZXJzLCBcbiAgQ29weSwgXG4gIENoZWNrLCBcbiAgU3BhcmtsZXMsIFxuICBCb3QsIFxuICBVc2VyLCBcbiAgQnVpbGRpbmcyLCBcbiAgTGF5ZXJzIFxufSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5pbnRlcmZhY2UgTGl2ZVNpbXVsYXRvclByb3BzIHtcbiAgY3VycmVudEFnZW50SWQ6IEFnZW50VHlwZTtcbiAgb25BZ2VudENoYW5nZTogKGFnZW50SWQ6IEFnZW50VHlwZSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IExpdmVTaW11bGF0b3I6IFJlYWN0LkZDPExpdmVTaW11bGF0b3JQcm9wcz4gPSAoeyBjdXJyZW50QWdlbnRJZCwgb25BZ2VudENoYW5nZSB9KSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZFNlY3Rvciwgc2V0U2VsZWN0ZWRTZWN0b3JdID0gdXNlU3RhdGU8U2VjdG9yVHlwZT4oJ2J0cCcpO1xuICBjb25zdCBbaW5wdXRNZXNzYWdlLCBzZXRJbnB1dE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2hvd1Byb21wdEVkaXRvciwgc2V0U2hvd1Byb21wdEVkaXRvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjdXN0b21Qcm9tcHQsIHNldEN1c3RvbVByb21wdF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjdXN0b21Lbm93bGVkZ2UsIHNldEN1c3RvbUtub3dsZWRnZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjb3BpZWRQcm9tcHQsIHNldENvcGllZFByb21wdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1Byb2Nlc3NpbmcsIHNldElzUHJvY2Vzc2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgYWN0aXZlQWdlbnQgPSBBR0VOVFNfREFUQS5maW5kKChhKSA9PiBhLmlkID09PSBjdXJyZW50QWdlbnRJZCkgfHwgQUdFTlRTX0RBVEFbMF07XG4gIGNvbnN0IHNlY3RvckluZm8gPSBTRUNUT1JfUFJFU0VUU1tzZWxlY3RlZFNlY3Rvcl0gfHwgU0VDVE9SX1BSRVNFVFMuYnRwO1xuXG4gIC8vIEluaXRpYWxpemUgY29udmVyc2F0aW9uIHdpdGggd2VsY29tZSBtZXNzYWdlXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGU8Q2hhdE1lc3NhZ2VbXT4oKCkgPT4gW1xuICAgIHtcbiAgICAgIGlkOiAnaW5pdF8xJyxcbiAgICAgIHNlbmRlcjogJ2FnZW50JyxcbiAgICAgIGNvbnRlbnQ6IGBCb25qb3VyICEgSmUgc3VpcyBsJ2Fzc2lzdGFudCB2aXJ0dWVsIGRlICR7c2VjdG9ySW5mby5jb21wYW55TmFtZX0uIENvbW1lbnQgcHVpcy1qZSB2b3VzIGFpZGVyIGF1am91cmQnaHVpID9gLFxuICAgICAgdGltZXN0YW1wOiAnMDk6MDAnLFxuICAgICAgYWN0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdpbml0X2FjdF8xJyxcbiAgICAgICAgICB0b29sOiAnQWdlbnQgUnVudGltZScsXG4gICAgICAgICAgYWN0aW9uTmFtZTogJ1Nlc3Npb25Jbml0aWFsaXplZCcsXG4gICAgICAgICAgc3RhdHVzOiAnZXhlY3V0ZWQnLFxuICAgICAgICAgIGRldGFpbHM6IGBBZ2VudCAke2FjdGl2ZUFnZW50LmJhZGdlfSBjb25uZWN0w6kgYXUgY2FuYWwgY2xpZW50LmAsXG4gICAgICAgICAgdGltZXN0YW1wOiAnMDk6MDAnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF0pO1xuXG4gIC8vIEtlZXAgcHJvbXB0IGluIHN5bmMgd2hlbiBhZ2VudCBvciBzZWN0b3IgY2hhbmdlc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEN1c3RvbVByb21wdChhY3RpdmVBZ2VudC5zeXN0ZW1Qcm9tcHQpO1xuICAgIHNldEN1c3RvbUtub3dsZWRnZShzZWN0b3JJbmZvLmRlZmF1bHRLbm93bGVkZ2UpO1xuICAgIHJlc2V0Q29udmVyc2F0aW9uKCk7XG4gIH0sIFtjdXJyZW50QWdlbnRJZCwgc2VsZWN0ZWRTZWN0b3JdKTtcblxuICBjb25zdCBtZXNzYWdlc0VuZFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3Qgc2Nyb2xsVG9Cb3R0b20gPSAoKSA9PiB7XG4gICAgbWVzc2FnZXNFbmRSZWYuY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzY3JvbGxUb0JvdHRvbSgpO1xuICB9LCBbbWVzc2FnZXMsIGlzUHJvY2Vzc2luZ10pO1xuXG4gIGNvbnN0IHJlc2V0Q29udmVyc2F0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygnZnItRlInLCB7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSk7XG4gICAgc2V0TWVzc2FnZXMoW1xuICAgICAge1xuICAgICAgICBpZDogYG1zZ18ke0RhdGUubm93KCl9YCxcbiAgICAgICAgc2VuZGVyOiAnYWdlbnQnLFxuICAgICAgICBjb250ZW50OiBgQm9uam91ciAhIEplIHN1aXMgbCdhc3Npc3RhbnQgdmlydHVlbCBkZSAke3NlY3RvckluZm8uY29tcGFueU5hbWV9LiBDb21tZW50IHB1aXMtamUgdm91cyBhaWRlciBhdWpvdXJkJ2h1aSA/YCxcbiAgICAgICAgdGltZXN0YW1wOiB0aW1lLFxuICAgICAgICBhY3Rpb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IGBhY3RfJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgICB0b29sOiAnTWFrZS5jb20gUm91dGVyJyxcbiAgICAgICAgICAgIGFjdGlvbk5hbWU6ICdSZWFkeUZvckluYm91bmRNZXNzYWdlJyxcbiAgICAgICAgICAgIHN0YXR1czogJ2V4ZWN1dGVkJyxcbiAgICAgICAgICAgIGRldGFpbHM6IGBFbiBhdHRlbnRlIGQnaW50ZXJhY3Rpb24gcG91ciBsYSBQTUUgOiAke3NlY3RvckluZm8uY29tcGFueU5hbWV9LmAsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTZW5kTWVzc2FnZSA9IChtZXNzYWdlVGV4dDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgdGV4dFRvU2VuZCA9IG1lc3NhZ2VUZXh0LnRyaW0oKTtcbiAgICBpZiAoIXRleHRUb1NlbmQgfHwgaXNQcm9jZXNzaW5nKSByZXR1cm47XG5cbiAgICBjb25zdCB1c2VyVGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCdmci1GUicsIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTtcbiAgICBjb25zdCB1c2VyTXNnSWQgPSBgdXNyXyR7RGF0ZS5ub3coKX1gO1xuXG4gICAgLy8gQWRkIHVzZXIgbWVzc2FnZVxuICAgIHNldE1lc3NhZ2VzKChwcmV2KSA9PiBbXG4gICAgICAuLi5wcmV2LFxuICAgICAge1xuICAgICAgICBpZDogdXNlck1zZ0lkLFxuICAgICAgICBzZW5kZXI6ICd1c2VyJyxcbiAgICAgICAgY29udGVudDogdGV4dFRvU2VuZCxcbiAgICAgICAgdGltZXN0YW1wOiB1c2VyVGltZVxuICAgICAgfVxuICAgIF0pO1xuXG4gICAgc2V0SW5wdXRNZXNzYWdlKCcnKTtcbiAgICBzZXRJc1Byb2Nlc3NpbmcodHJ1ZSk7XG5cbiAgICAvLyBTaW11bGF0ZSBhZ2VudCBsYXRlbmN5ICg8IDYwMG1zIGZvciByZXNwb25zaXZlbmVzcylcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gcHJvY2Vzc0FnZW50U2ltdWxhdGlvbihcbiAgICAgICAgY3VycmVudEFnZW50SWQsXG4gICAgICAgIHRleHRUb1NlbmQsXG4gICAgICAgIHNlbGVjdGVkU2VjdG9yLFxuICAgICAgICBjdXN0b21Lbm93bGVkZ2VcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGFnZW50VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCdmci1GUicsIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTtcblxuICAgICAgc2V0TWVzc2FnZXMoKHByZXYpID0+IFtcbiAgICAgICAgLi4ucHJldixcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBgYWd0XyR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgIHNlbmRlcjogJ2FnZW50JyxcbiAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5tZXNzYWdlLFxuICAgICAgICAgIHRpbWVzdGFtcDogYWdlbnRUaW1lLFxuICAgICAgICAgIGFjdGlvbnM6IHJlc3BvbnNlLmFjdGlvbnMsXG4gICAgICAgICAgZW50aXRpZXM6IHJlc3BvbnNlLmVudGl0aWVzXG4gICAgICAgIH1cbiAgICAgIF0pO1xuXG4gICAgICBzZXRJc1Byb2Nlc3NpbmcoZmFsc2UpO1xuICAgIH0sIDQ1MCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQXBwbHlTY2VuYXJpbyA9IChzY2VuYXJpb1RleHQ6IHN0cmluZykgPT4ge1xuICAgIGhhbmRsZVNlbmRNZXNzYWdlKHNjZW5hcmlvVGV4dCk7XG4gIH07XG5cbiAgY29uc3QgY29weVN5c3RlbVByb21wdCA9ICgpID0+IHtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjdXN0b21Qcm9tcHQpO1xuICAgIHNldENvcGllZFByb21wdCh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHNldENvcGllZFByb21wdChmYWxzZSksIDIwMDApO1xuICB9O1xuXG4gIC8vIEZpbmQgbGF0ZXN0IGFjdGlvbnMgdG8gc2hvdyBpbiB0aGUgbGl2ZSB0b29sIGluc3BlY3Rpb24gcGFuZWxcbiAgY29uc3QgbGF0ZXN0QWdlbnRNZXNzYWdlID0gWy4uLm1lc3NhZ2VzXS5yZXZlcnNlKCkuZmluZCgobSkgPT4gbS5zZW5kZXIgPT09ICdhZ2VudCcgJiYgbS5hY3Rpb25zICYmIG0uYWN0aW9ucy5sZW5ndGggPiAwKTtcbiAgY29uc3QgYWN0aXZlQWN0aW9uczogQWdlbnRBY3Rpb25bXSA9IGxhdGVzdEFnZW50TWVzc2FnZT8uYWN0aW9ucyB8fCBbXTtcbiAgY29uc3QgYWN0aXZlRW50aXRpZXMgPSBsYXRlc3RBZ2VudE1lc3NhZ2U/LmVudGl0aWVzO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJzaW11bGF0b3JcIiBjbGFzc05hbWU9XCJweS0xNiBiZy13aGl0ZSBib3JkZXItYiBib3JkZXItc2xhdGUtMjAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTZcIj5cbiAgICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG1kOml0ZW1zLWVuZCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTYgbWItOFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1pbmRpZ28tNzAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgQmFuYyBkJ0Vzc2FpIEludGVyYWN0aWZcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIHNtOnRleHQtM3hsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LXNsYXRlLTkwMCB0ZXh0LWJhbGFuY2VcIj5cbiAgICAgICAgICAgICAgU2ltdWxhdGV1ciBk4oCZQWdlbnQgZW4gRGlyZWN0ICYgSW5zcGVjdGV1ciBk4oCZQWN0aW9uc1xuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zbGF0ZS02MDAgbXQtMlwiPlxuICAgICAgICAgICAgICBUZXN0ZXogbGUgY29tcG9ydGVtZW50IGRlIGwnYWdlbnQgZW4gY29uZGl0aW9ucyByw6llbGxlcyBldCBvYnNlcnZleiBlbiBkaXJlY3QgbGVzIGTDqWNsZW5jaGVtZW50cyBk4oCZb3V0aWxzIChNYWtlLCBQZW5ueWxhbmUsIEdvb2dsZSBDYWxlbmRhciwgV2hhdHNBcHApLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UHJvbXB0RWRpdG9yKCFzaG93UHJvbXB0RWRpdG9yKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0zIHB5LTEuNSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNzAwIGJnLXNsYXRlLTEwMCBob3ZlcjpiZy1zbGF0ZS0yMDAgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWNvbG9ycyBjdXJzb3ItcG9pbnRlciB3aGl0ZXNwYWNlLW5vd3JhcFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTbGlkZXJzIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtc2xhdGUtNTAwXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+e3Nob3dQcm9tcHRFZGl0b3IgPyAnTWFzcXVlciBsZSBQcm9tcHQnIDogJ01vZGlmaWVyIGxlIFByb21wdCd9PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Jlc2V0Q29udmVyc2F0aW9ufVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHB4LTMgcHktMS41IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS03MDAgYmctc2xhdGUtMTAwIGhvdmVyOmJnLXNsYXRlLTIwMCByb3VuZGVkLWxnIHRyYW5zaXRpb24tY29sb3JzIGN1cnNvci1wb2ludGVyIHdoaXRlc3BhY2Utbm93cmFwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFJvdGF0ZUNjdyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LXNsYXRlLTUwMFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPlLDqWluaXRpYWxpc2VyPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBDb25maWd1cmF0aW9uIEJhcjogQWdlbnQgU2VsZWN0b3IgJiBTZWN0b3IgU2VsZWN0b3IgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJnLXNsYXRlLTUwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgbWItNiBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC00IGl0ZW1zLXN0cmV0Y2ggbGc6aXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIHsvKiBBZ2VudCBQaWNrZXIgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXNsYXRlLTUwMCBtci0xXCI+XG4gICAgICAgICAgICAgIEFnZW50IDpcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIHtBR0VOVFNfREFUQS5tYXAoKGFnKSA9PiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e2FnLmlkfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWdlbnRDaGFuZ2UoYWcuaWQpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMgcHktMS41IHRleHQteHMgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciB3aGl0ZXNwYWNlLW5vd3JhcCAke1xuICAgICAgICAgICAgICAgICAgYWcuaWQgPT09IGN1cnJlbnRBZ2VudElkXG4gICAgICAgICAgICAgICAgICAgID8gJ2JnLWluZGlnby02MDAgdGV4dC13aGl0ZSBzaGFkb3ctc20gZm9udC1zZW1pYm9sZCdcbiAgICAgICAgICAgICAgICAgICAgOiAnYmctd2hpdGUgdGV4dC1zbGF0ZS03MDAgaG92ZXI6Ymctc2xhdGUtMTAwIGJvcmRlciBib3JkZXItc2xhdGUtMjAwJ1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2FnLmJhZGdlfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFNlY3RvciBQaWNrZXIgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPEJ1aWxkaW5nMiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtc2xhdGUtNDAwIHNocmluay0wXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXNsYXRlLTUwMCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxuICAgICAgICAgICAgICBTZWN0ZXVyIFBNRSA6XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFNlY3Rvcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZFNlY3RvcihlLnRhcmdldC52YWx1ZSBhcyBTZWN0b3JUeXBlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14cyBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCByb3VuZGVkLWxnIHB4LTIuNSBweS0xLjUgdGV4dC1zbGF0ZS04MDAgZm9udC1tZWRpdW0gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoU0VDVE9SX1BSRVNFVFMpLm1hcCgoW2tleSwgaXRlbV0pID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17a2V5fT5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogT3B0aW9uYWwgUHJvbXB0IEVkaXRvciBQYW5lbCAqL31cbiAgICAgICAge3Nob3dQcm9tcHRFZGl0b3IgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiBwLTQgYmctc2xhdGUtOTAwIHJvdW5kZWQteGwgdGV4dC1zbGF0ZS0yMDAgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgdHJhbnNpdGlvbi1hbGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXhzIGZvbnQtbW9ubyB0ZXh0LWluZGlnby00MDBcIj5cbiAgICAgICAgICAgICAgICA8VGVybWluYWwgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+UHJvbXB0IFN5c3TDqG1lICYgQmFzZSBkZSBDb25uYWlzc2FuY2VzIE1ha2UuY29tPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvcHlTeXN0ZW1Qcm9tcHR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSB0ZXh0LXhzIHRleHQtc2xhdGUtMzAwIGhvdmVyOnRleHQtd2hpdGUgcHgtMiBweS0xIHJvdW5kZWQgYmctc2xhdGUtODAwIGhvdmVyOmJnLXNsYXRlLTcwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29waWVkUHJvbXB0ID8gPENoZWNrIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtZW1lcmFsZC00MDBcIiAvPiA6IDxDb3B5IGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz59XG4gICAgICAgICAgICAgICAgPHNwYW4+e2NvcGllZFByb21wdCA/ICdDb3Bpw6kgIScgOiAnQ29waWVyIGxlIFByb21wdCd9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1bMTFweF0gZm9udC1tb25vIHVwcGVyY2FzZSB0ZXh0LXNsYXRlLTQwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICBDb25zaWduZSBTeXN0w6htZSAoU3lzdGVtIEluc3RydWN0aW9uKVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tUHJvbXB0fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDdXN0b21Qcm9tcHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgcm93cz17NX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1zbGF0ZS05NTAgdGV4dC1zbGF0ZS0xMDAgcC0yLjUgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctaW5kaWdvLTQwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1bMTFweF0gZm9udC1tb25vIHVwcGVyY2FzZSB0ZXh0LXNsYXRlLTQwMCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICBCYXNlIGRlIENvbm5haXNzYW5jZXMgUE1FIChOb3Rpb24gLyBGQVEgaW5qZWN0w6llKVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tS25vd2xlZGdlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDdXN0b21Lbm93bGVkZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgcm93cz17NX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1zbGF0ZS05NTAgdGV4dC1zbGF0ZS0xMDAgcC0yLjUgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctaW5kaWdvLTQwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogTWFpbiBUd28tQ29sdW1uIFNpbXVsYXRvciBEaXNwbGF5ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTEyIGdhcC02IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgey8qIENoYXQgV2luZG93ICg3IGNvbHMpICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tNyBmbGV4IGZsZXgtY29sIGJnLXNsYXRlLTUwIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIHNoYWRvdy1zbSBvdmVyZmxvdy1oaWRkZW4gaC1bNTgwcHhdXCI+XG4gICAgICAgICAgICB7LyogQ2hhdCBIZWFkZXIgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgcHktMy41IGJnLXdoaXRlIGJvcmRlci1iIGJvcmRlci1zbGF0ZS0yMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIuNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy03IGgtNyByb3VuZGVkLWZ1bGwgYmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8Qm90IGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtc2xhdGUtOTAwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnthY3RpdmVBZ2VudC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtc2xhdGUtNTAwIGZvbnQtbm9ybWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgwrcge3NlY3RvckluZm8uY29tcGFueU5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LWVtZXJhbGQtNjAwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkNvbm5lY3TDqSDDoCBNYWtlLmNvbTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtNDAwIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgIExhdGVuY2U6ICZsdDsgMC41c1xuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFF1aWNrIFNjZW5hcmlvIENoaXBzICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctc2xhdGUtMTAwLzcwIGJvcmRlci1iIGJvcmRlci1zbGF0ZS0yMDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgb3ZlcmZsb3cteC1hdXRvIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXNsYXRlLTUwMCB3aGl0ZXNwYWNlLW5vd3JhcCBzaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgIFNjw6luYXJpb3MgcmFwaWRlcyA6XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAge2FjdGl2ZUFnZW50LnNhbXBsZVNjZW5hcmlvcy5tYXAoKHNjZW4pID0+IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBrZXk9e3NjZW4uaWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBcHBseVNjZW5hcmlvKHNjZW4udXNlck1lc3NhZ2UpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMi41IHB5LTEgYmctd2hpdGUgaG92ZXI6YmctaW5kaWdvLTUwIGhvdmVyOnRleHQtaW5kaWdvLTcwMCB0ZXh0LXNsYXRlLTcwMCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIHRleHQteHMgZm9udC1tZWRpdW0gd2hpdGVzcGFjZS1ub3dyYXAgc2hyaW5rLTAgdHJhbnNpdGlvbi1jb2xvcnMgc2hhZG93LTJ4cyBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT17c2Nlbi5leHBlY3RlZE91dGNvbWV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3NjZW4ubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBDaGF0IEJvZHkgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBwLTQgb3ZlcmZsb3cteS1hdXRvIHNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICB7bWVzc2FnZXMubWFwKChtc2cpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1VzZXIgPSBtc2cuc2VuZGVyID09PSAndXNlcic7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAga2V5PXttc2cuaWR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtc3RhcnQgZ2FwLTIuNSAke2lzVXNlciA/ICdmbGV4LXJvdy1yZXZlcnNlJyA6ICdmbGV4LXJvdyd9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctNyBoLTcgcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNocmluay0wIHRleHQteHMgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVXNlclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1zbGF0ZS04MDAgdGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2lzVXNlciA/IDxVc2VyIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPiA6IDxCb3QgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWF4LXctWzgyJV0gcm91bmRlZC0yeGwgcHgtNCBweS0zIHRleHQteHMgc206dGV4dC1zbSBsZWFkaW5nLXJlbGF4ZWQgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVXNlclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1zbGF0ZS05MDAgdGV4dC13aGl0ZSByb3VuZGVkLXRyLXhzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy13aGl0ZSB0ZXh0LXNsYXRlLTgwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCByb3VuZGVkLXRsLXhzIHNoYWRvdy14cydcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndoaXRlc3BhY2UtcHJlLXdyYXBcIj57bXNnLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtWzEwcHhdIG10LTEuNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBmb250LW1vbm8gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNVc2VyID8gJ3RleHQtc2xhdGUtNDAwJyA6ICd0ZXh0LXNsYXRlLTQwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttc2cudGltZXN0YW1wfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAgIHtpc1Byb2Nlc3NpbmcgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIuNSB0ZXh0LXhzIHRleHQtc2xhdGUtNTAwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNyBoLTcgcm91bmRlZC1mdWxsIGJnLWluZGlnby0xMDAgdGV4dC1pbmRpZ28tNjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTcGFya2xlcyBjbGFzc05hbWU9XCJ3LTQgaC00IGFuaW1hdGUtc3BpblwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgcm91bmRlZC0yeGwgcHgtNCBweS0yLjUgdGV4dC14cyB0ZXh0LXNsYXRlLTYwMCBzaGFkb3cteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgTCdhZ2VudCBhbmFseXNlIGwnaW50ZW50aW9uIGV0IGludGVycm9nZSBsZXMgb3V0aWxzLi4uXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGRpdiByZWY9e21lc3NhZ2VzRW5kUmVmfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBJbnB1dCBCYXIgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBiZy13aGl0ZSBib3JkZXItdCBib3JkZXItc2xhdGUtMjAwXCI+XG4gICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICBoYW5kbGVTZW5kTWVzc2FnZShpbnB1dE1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BUYXBleiB1biBtZXNzYWdlIHBvdXIgdGVzdGVyIGwnYWdlbnQgJHthY3RpdmVBZ2VudC5iYWRnZX0uLi5gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGJnLXNsYXRlLTUwIHRleHQtc2xhdGUtOTAwIHRleHQteHMgc206dGV4dC1zbSBweC0zLjUgcHktMi41IHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby01MDBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlucHV0TWVzc2FnZS50cmltKCkgfHwgaXNQcm9jZXNzaW5nfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yLjUgYmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgaG92ZXI6YmctaW5kaWdvLTcwMCBkaXNhYmxlZDpvcGFjaXR5LTQwIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCB0cmFuc2l0aW9uLWFsbCBmb250LXNlbWlib2xkIHRleHQteHMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBjdXJzb3ItcG9pbnRlciB3aGl0ZXNwYWNlLW5vd3JhcCBzaGFkb3cteHNcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkVudm95ZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8U2VuZCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIEV4ZWN1dGlvbiBJbnNwZWN0b3IgJiBSZWFsLXRpbWUgVG9vbCBBY3Rpb25zICg1IGNvbHMpICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tNSBmbGV4IGZsZXgtY29sIGJnLXNsYXRlLTkwMCByb3VuZGVkLTJ4bCB0ZXh0LXNsYXRlLTIwMCBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMCBzaGFkb3ctbWQgaC1bNTgwcHhdIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgey8qIEluc3BlY3RvciBIZWFkZXIgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgcHktMy41IGJnLXNsYXRlLTk1MCBib3JkZXItYiBib3JkZXItc2xhdGUtODAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQteHMgZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LWluZGlnby00MDBcIj5cbiAgICAgICAgICAgICAgICA8VGVybWluYWwgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+SW5zcGVjdGV1ciBk4oCZRXjDqWN1dGlvbiBlbiBEaXJlY3Q8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LW1vbm8gdGV4dC1lbWVyYWxkLTQwMCBmb250LXNlbWlib2xkIGJnLWVtZXJhbGQtOTUwLzgwIHB4LTIgcHktMC41IHJvdW5kZWQgYm9yZGVyIGJvcmRlci1lbWVyYWxkLTgwMC80MFwiPlxuICAgICAgICAgICAgICAgIExpdmUgV2ViaG9vayBBY3RpdmVcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBDb250ZW50IEFyZWEgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBwLTUgb3ZlcmZsb3cteS1hdXRvIHNwYWNlLXktNSB0ZXh0LXhzIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICB7LyogRXh0cmFjdGVkIEludGVudCAmIEVudGl0aWVzICovfVxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtc2xhdGUtNDAwIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAwMS4gQW5hbHlzZSBTw6ltYW50aXF1ZSAmIEludGVudGlvblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHthY3RpdmVFbnRpdGllcyA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtOTUwLzgwIHJvdW5kZWQtbGcgcC0zIGJvcmRlciBib3JkZXItc2xhdGUtODAwLzgwIHNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtc2xhdGUtMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS01MDBcIj5JbnRlbnRpb24gOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtaW5kaWdvLTMwMCB0ZXh0LXJpZ2h0IHRydW5jYXRlIG1heC13LVsyMDBweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVFbnRpdGllcy5pbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbGF0ZS0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTUwMFwiPk5pdmVhdSBkJ1VyZ2VuY2UgOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9udC1ib2xkICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUVudGl0aWVzLnVyZ2VuY3kgPT09ICdVcmdlbnRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RleHQtcm9zZS00MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhY3RpdmVFbnRpdGllcy51cmdlbmN5ID09PSAnSGF1dGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndGV4dC1hbWJlci00MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAndGV4dC1lbWVyYWxkLTQwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVFbnRpdGllcy51cmdlbmN5fVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVFbnRpdGllcy5yZXF1ZXN0ZWREYXRlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNsYXRlLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS01MDBcIj5DcsOpbmVhdSBEw6l0ZWN0w6kgOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMjAwXCI+e2FjdGl2ZUVudGl0aWVzLnJlcXVlc3RlZERhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlRW50aXRpZXMubm90ZXMgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMSBib3JkZXItdCBib3JkZXItc2xhdGUtODAwIHRleHQtWzExcHhdIHRleHQtc2xhdGUtNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YWN0aXZlRW50aXRpZXMubm90ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTUwMCBpdGFsaWMgYmctc2xhdGUtOTUwLzQwIHAtMyByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtODAwLzQwXCI+XG4gICAgICAgICAgICAgICAgICAgIEVudm95ZXogdW4gbWVzc2FnZSBwb3VyIGFuYWx5c2VyIGwnaW50ZW50aW9uLlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIFRvb2wgQ2FsbHMgRGVjbGFyZWQgKi99XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1zbGF0ZS00MDAgZm9udC1ib2xkIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDAyLiBBY3Rpb25zICYgQ29ubmVjdGV1cnMgT3V0aWxzICh7YWN0aXZlQWN0aW9ucy5sZW5ndGh9KVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge2FjdGl2ZUFjdGlvbnMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVBY3Rpb25zLm1hcCgoYWN0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXthY3QuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1zbGF0ZS05NTAvODAgcm91bmRlZC1sZyBwLTMgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgdGV4dC1bMTFweF1cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1pbmRpZ28tNDAwXCI+e2FjdC50b29sfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1lbWVyYWxkLTQwMCBmb250LXNlbWlib2xkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlMiBjbGFzc05hbWU9XCJ3LTMgaC0zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YWN0LnN0YXR1c308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTIwMCBmb250LXNlbWlib2xkIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdC5hY3Rpb25OYW1lfSgpXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNDAwIGxlYWRpbmctbm9ybWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHthY3QuZGV0YWlsc31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3QucGF5bG9hZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBwLTIgYmctc2xhdGUtOTAwIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgdGV4dC1bMTBweF0gdGV4dC1zbGF0ZS0zMDAgb3ZlcmZsb3cteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoYWN0LnBheWxvYWQsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS01MDAgaXRhbGljIGJnLXNsYXRlLTk1MC80MCBwLTMgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTgwMC80MFwiPlxuICAgICAgICAgICAgICAgICAgICBBdWN1bmUgYWN0aW9uIGVuIGNvdXJzLlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgey8qIERhdGEgUGlwZWxpbmUgU3luYyAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIGJvcmRlci10IGJvcmRlci1zbGF0ZS04MDAvODBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LXNsYXRlLTQwMCBmb250LWJvbGQgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgMDMuIEludMOpZ3JhdGlvbnMgTm8tQ29kZSBBY3RpdmVzXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMS41XCI+XG4gICAgICAgICAgICAgICAgICB7YWN0aXZlQWdlbnQubm9Db2RlVG9vbHMubWFwKCh0LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTEgYmctc2xhdGUtODAwIHJvdW5kZWQgdGV4dC1bMTBweF0gdGV4dC1zbGF0ZS0zMDAgYm9yZGVyIGJvcmRlci1zbGF0ZS03MDBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbiJdfQ==