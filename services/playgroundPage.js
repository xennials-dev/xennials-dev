export function initPlaygroundPage() {
    const playgroundToolSections = [
        {
            id: "ai_tools",
            title: "AI Tools & Generation",
            icon: "fa-robot",
            tools: [
                { name: "Text to Image", desc: "Generate stunning images from text descriptions", icon: "fa-image" },
                { name: "Text to Video", desc: "Generate videos from text descriptions", icon: "fa-clapperboard" },
                { name: "Image to Image", desc: "Transform and edit images with AI assistance", icon: "fa-magic" },
                { name: "Multi Images to Image", desc: "Edit with primary image plus multiple references", icon: "fa-th" },
                { name: "Image to Video", desc: "Animate your images and create videos", icon: "fa-film" },
                { name: "Image to Prompt", desc: "Extract high quality prompts from existing images", icon: "fa-align-left" },
                { name: "Image to Text", desc: "Extract text content from images with OCR", icon: "fa-file-alt" },
                { name: "Background Remover", desc: "Remove image backgrounds instantly", icon: "fa-eraser" }
            ]
        },
        {
            id: "image_gen_filters",
            title: "Style Filters & Avatars",
            icon: "fa-wand-magic-sparkles",
            tools: [
                { name: "AI Image Generator", desc: "Generate images from any text prompt", icon: "fa-image" },
                { name: "Flux Image Generator", desc: "Flux model for diverse high-fidelity generation", icon: "fa-bolt" },
                { name: "AI Photo To Anime", desc: "Transform photos into anime style", icon: "fa-star" },
                { name: "AI Photo To Cartoon", desc: "Turn photos into cartoon illustrations", icon: "fa-mask" },
                { name: "AI Manga Generator", desc: "Generate manga-style artwork from photos", icon: "fa-book-open" },
                { name: "AI Caricature Maker", desc: "Generate funny caricatures from photos", icon: "fa-face-laugh" },
                { name: "AI Photo To Pixel Art", desc: "Convert photos to pixel art style", icon: "fa-th-large" },
                { name: "Pixar AI Generator", desc: "Generate Pixar-style character art", icon: "fa-child" },
                { name: "AI Lego Filter", desc: "Transform images into Lego-style art", icon: "fa-cubes" },
                { name: "Retro PS2-Style", desc: "Apply retro PS2 game aesthetic to images", icon: "fa-gamepad" },
                { name: "AI Kawaii Chibi Art", desc: "Generate cute chibi-style artwork", icon: "fa-heart" },
                { name: "Ghibli Style", desc: "Apply Studio Ghibli-inspired art style", icon: "fa-mountain" }
            ]
        },
        {
            id: "image_editing_enhance",
            title: "Image Editing & OCR",
            icon: "fa-crop-simple",
            tools: [
                { name: "AI Image Upscaler", desc: "Upscale images without losing quality", icon: "fa-maximize" },
                { name: "Online PS Editor", desc: "In-browser Photoshop-grade photo editing", icon: "fa-paint-brush" },
                { name: "Photo To Oil Painting", desc: "Convert photos into oil painting style", icon: "fa-palette" },
                { name: "Image OCR Converter", desc: "Extract text from images via OCR", icon: "fa-font" },
                { name: "AI Photo Restoration", desc: "Restore old or damaged photos", icon: "fa-clock-rotate-left" },
                { name: "AI Unblur Image", desc: "Sharpen and unblur blurry images", icon: "fa-eye" },
                { name: "Remove People From Photos", desc: "Automatically remove people from images", icon: "fa-user-slash" },
                { name: "AI Object Remover", desc: "Remove unwanted objects from photos", icon: "fa-trash-can" },
                { name: "Kolors Virtual Try On", desc: "Try on clothes virtually with AI", icon: "fa-shirt" },
                { name: "AI Image Extender", desc: "Outpaint and extend image borders seamlessly", icon: "fa-expand" }
            ]
        },
        {
            id: "development_code",
            title: "Compilers & Developer Engines",
            icon: "fa-code",
            tools: [
                { name: "Online Multi-Compiler", desc: "Compile C#, VB.NET, PHP, Java, Python, and C++", icon: "fa-terminal" },
                { name: "Python3 Sandbox", desc: "Run Python3 code snippets in browser sandbox", icon: "fa-code" },
                { name: "JS Code Runner", desc: "Execute JavaScript code and inspect outputs", icon: "fa-brands fa-js" },
                { name: "Rust Compiler", desc: "Compile and execute Rust programs online", icon: "fa-gear" },
                { name: "Golang Online Sandbox", desc: "Run Go code with instant execution", icon: "fa-bolt" },
                { name: "JSON Formatter & Validator", desc: "Prettify, validate, and query JSON payloads", icon: "fa-code" },
                { name: "SQL Schema Designer", desc: "Design SQL schemas visually with relation diagrams", icon: "fa-database" },
                { name: "Regex Interactive Tester", desc: "Test regular expressions with real-time matching", icon: "fa-code-branch" },
                { name: "cURL to Code Generator", desc: "Convert cURL commands to Python, JS, Go, and PHP", icon: "fa-network-wired" },
                { name: "Crontab Expression Evaluator", desc: "Check cron schedule syntax and next executions", icon: "fa-clock" }
            ]
        },
        {
            id: "conversion_pdf",
            title: "Conversion & PDF Utilities",
            icon: "fa-file-pdf",
            tools: [
                { name: "PDF to Word Converter", desc: "Convert PDF to editable Word documents", icon: "fa-file-pdf" },
                { name: "PDF to Image", desc: "Convert PDF pages to high-res images", icon: "fa-file-image" },
                { name: "PDF to Excel Converter", desc: "Extract tables from PDF to structured Excel", icon: "fa-file-excel" },
                { name: "Word to PDF Converter", desc: "Convert Word documents to PDF", icon: "fa-file-word" },
                { name: "Base64 All-in-One Converter", desc: "Encode & decode files, audio, video, and text", icon: "fa-key" },
                { name: "Byte & Unit Converter", desc: "Convert bytes to KB, MB, GB, TB, and PB", icon: "fa-calculator" },
                { name: "CSV to JSON Converter", desc: "Convert CSV spreadsheets into JSON/XML", icon: "fa-table" }
            ]
        },
        {
            id: "ai_content_gen",
            title: "Content & Writing Engines",
            icon: "fa-pen-nib",
            tools: [
                { name: "AI Writer", desc: "Generate articles, stories, and copy with AI", icon: "fa-pen-fancy" },
                { name: "AI Article Generator", desc: "Create full-length articles from a topic", icon: "fa-newspaper" },
                { name: "AI Poem Generator", desc: "Generate poems in various styles and themes", icon: "fa-feather" },
                { name: "AI Emoji Maker", desc: "Generate custom emojis from text descriptions", icon: "fa-face-smile" },
                { name: "AI Clipart Generator", desc: "Create clipart images from text prompts", icon: "fa-paste" }
            ]
        }
    ];

    let currentActiveCat = 'all';
    let currentSearchQuery = '';

    function renderPlaygroundTools() {
        const container = document.getElementById('playgroundToolContainer');
        if (!container) return;
        container.innerHTML = '';

        const q = currentSearchQuery.toLowerCase().trim();

        playgroundToolSections.forEach(sec => {
            if (currentActiveCat !== 'all' && sec.id !== currentActiveCat) return;

            const filtered = sec.tools.filter(t => 
                !q || t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || sec.title.toLowerCase().includes(q)
            );

            if (filtered.length > 0) {
                const sectionEl = document.createElement('div');
                sectionEl.className = 'space-y-4';

                sectionEl.innerHTML = `
                    <div class="flex items-center gap-3 pb-2 border-b border-slate-800/80">
                        <div class="w-7 h-7 rounded-lg bg-indigo-950/60 border border-indigo-800/50 flex items-center justify-center text-indigo-400 text-xs">
                            <i class="fas ${sec.icon}"></i>
                        </div>
                        <h3 class="text-base font-bold font-space text-white">${sec.title}</h3>
                        <span class="text-xs text-gray-500 font-mono ml-auto">${filtered.length} tools</span>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
                        ${filtered.map(tool => `
                            <div onclick="window.showToast ? window.showToast('${tool.name} ready to run', 'success') : alert('${tool.name} ready to run')" class="tool-card group rounded-xl border border-slate-800/90 bg-slate-900/80 p-3.5 hover:bg-slate-900 cursor-pointer flex items-center gap-3.5">
                                <div class="h-11 w-11 shrink-0 rounded-lg bg-slate-800/90 border border-slate-700/60 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-all text-lg">
                                    <i class="fas ${tool.icon || 'fa-cog'}"></i>
                                </div>
                                <div class="min-w-0 flex-1">
                                    <h4 class="text-xs font-semibold text-gray-200 group-hover:text-white truncate">${tool.name}</h4>
                                    <p class="text-[11px] text-gray-400 mt-0.5 line-clamp-2 leading-tight">${tool.desc}</p>
                                </div>
                                <i class="fas fa-play text-[10px] text-gray-600 group-hover:text-indigo-400 transition-colors"></i>
                            </div>
                        `).join('')}
                    </div>
                `;
                container.appendChild(sectionEl);
            }
        });
    }

    renderPlaygroundTools();

    const searchInput = document.getElementById('playgroundSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value;
            renderPlaygroundTools();
        });
    }

    document.querySelectorAll('.cat-pill').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.cat-pill').forEach(b => {
                b.classList.remove('active', 'bg-indigo-600', 'text-white', 'border-indigo-500');
                b.classList.add('bg-slate-800/80', 'text-gray-300', 'border-slate-700');
            });
            btn.classList.add('active', 'bg-indigo-600', 'text-white', 'border-indigo-500');
            btn.classList.remove('bg-slate-800/80', 'text-gray-300', 'border-slate-700');
            currentActiveCat = btn.dataset.cat;
            renderPlaygroundTools();
        });
    });
}

export function runProposalSimulator() {
    const client = document.getElementById('sim-client')?.value || 'Target Enterprise';
    const industry = document.getElementById('sim-industry')?.value || 'Tech';
    const mrr = parseInt(document.getElementById('sim-mrr')?.value) || 15000;
    const status = document.getElementById('sim-status');
    const output = document.getElementById('sim-output');

    if (!status || !output) return;

    status.innerText = 'CALCULATING...';
    status.className = 'text-amber-400 animate-pulse font-mono';

    setTimeout(() => {
        const setupFee = Math.round(mrr * 1.75);
        const annualVal = (mrr * 12) + setupFee;
        const hoursSaved = Math.round(mrr * 0.18);
        const roiMultiplier = (annualVal / (setupFee * 1.2)).toFixed(1);

        status.innerText = 'COMPILED (200 OK)';
        status.className = 'text-emerald-400 font-mono';

        output.innerText = `==========================================================
XENNIALS HIGH-TICKET PROPOSAL SPECIFICATION
Client: ${client}
Target Vertical: ${industry.toUpperCase()}
Generated on: ${new Date().toLocaleDateString()}
==========================================================

[1] COMMERCIAL PRICING ARCHITECTURE
    - Phase 1 Implementation Setup:   $${setupFee.toLocaleString()} (One-time, 4-week turnaround)
    - Monthly Dedicated Retainer:     $${mrr.toLocaleString()} / month (Recurring)
    - Year-1 Contract Value (TCV):    $${annualVal.toLocaleString()}

[2] ESTIMATED PERFORMANCE & ROI METRICS
    - Operational Time Saved:         ~${hoursSaved} engineer-hours / month
    - Net Projected ROI Multiplier:    ${roiMultiplier}x Year-1 Return
    - Payback Velocity:               ~3.8 Months Post-Deployment

[3] CORE DELIVERABLES & INTEGRATIONS
    - Autonomous Workflow Pipelines (n8n & Activepieces engines)
    - Custom Enterprise Middleware (FastAPI / Node microservices)
    - Full Dashboard Telemetry & SLA Compliance Reporting`;
    }, 300);
}

// Make sure it's accessible to inline onclick handlers if they still exist, or we can bind it in initPlaygroundPage if we remove the inline onclick.
// Wait, the button has `onclick="runProposalSimulator()"`. We should attach the event listener instead of using inline onclick, but for now we'll expose it to window.
if (typeof window !== 'undefined') {
    window.runProposalSimulator = runProposalSimulator;
}
