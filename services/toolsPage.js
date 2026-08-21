export function initToolsPage() {
    const toolSections = [
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
            id: "portrait",
            title: "Portrait & Style Generators",
            icon: "fa-camera",
            tools: [
                { name: "Hairstyle Changer", desc: "Change hairstyle or hair color from a portrait", icon: "fa-cut" },
                { name: "Image Style Transfer", desc: "Transform one image into curated art styles", icon: "fa-paintbrush" },
                { name: "Pet Portrait", desc: "Create stylized portraits from one pet photo", icon: "fa-paw" },
                { name: "Headshot Generator", desc: "Create professional business headshots from selfies", icon: "fa-id-card" },
                { name: "Anime Portrait", desc: "Upload one image and apply anime portrait style presets", icon: "fa-dragon" }
            ]
        },
        {
            id: "image_templates",
            title: "Image Generation Templates",
            icon: "fa-shapes",
            tools: [
                { name: "Zodiac Card Generator", desc: "Generate personalized zodiac cards from presets", icon: "fa-gem" },
                { name: "Tattoo Generator", desc: "Generate tattoo designs from curated presets", icon: "fa-pencil" },
                { name: "Tarot Card Generator", desc: "Generate tarot card artwork from presets", icon: "fa-star" },
                { name: "Relaxing Image Generator", desc: "Generate calming scenes and soothing visuals", icon: "fa-spa" },
                { name: "Pixel Art Generator", desc: "Create retro pixel art characters and scenes", icon: "fa-th" },
                { name: "Pixar Disney Art Generator", desc: "Generate Pixar/Disney-style artwork", icon: "fa-child" },
                { name: "Pencil Drawing Art", desc: "Generate realistic pencil sketch artwork", icon: "fa-pencil-alt" },
                { name: "NFT Art Generator", desc: "Create collectible-style NFT artwork", icon: "fa-coins" },
                { name: "Miniature World Generator", desc: "Build tiny fantasy worlds and dioramas", icon: "fa-globe" },
                { name: "Mecha Suit Generator", desc: "Design futuristic mecha suits and armored characters", icon: "fa-robot" },
                { name: "Loli Art Generator", desc: "Generate cute anime-style character illustrations", icon: "fa-grin-hearts" },
                { name: "Logo Generator", desc: "Generate logo concepts for brands and startups", icon: "fa-tag" },
                { name: "Illustration Generator", desc: "Create professional illustration concepts", icon: "fa-draw-polygon" },
                { name: "Happy Image Generator", desc: "Generate cheerful, positive, vibrant AI images", icon: "fa-smile" },
                { name: "Graffiti Generator", desc: "Create street-style graffiti lettering", icon: "fa-spray-can" },
                { name: "Game Assets Generator", desc: "Generate game-ready asset concepts", icon: "fa-gamepad" },
                { name: "Food Generator", desc: "Create appetizing food visuals for menus", icon: "fa-utensils" },
                { name: "Fashion Sketch Generator", desc: "Generate fashion sketch concepts for outfits", icon: "fa-tshirt" },
                { name: "Fantasy Map Generator", desc: "Design fantasy world maps for games and novels", icon: "fa-map" },
                { name: "Cyberpunk Fashion Generator", desc: "Generate neon cyberpunk outfit concepts", icon: "fa-goggles" },
                { name: "Clip Art Generator", desc: "Create clean clip art illustrations", icon: "fa-paperclip" },
                { name: "Clay Art Generator", desc: "Generate playful clay-style characters", icon: "fa-cube" },
                { name: "Blacklight Art Generator", desc: "Create glowing neon blacklight-style artwork", icon: "fa-lightbulb" },
                { name: "Anime Art Generator", desc: "Generate anime-style illustrations from text prompts", icon: "fa-star" },
                { name: "Album Cover Maker", desc: "Design eye-catching album cover concepts", icon: "fa-music" },
                { name: "Watercolor Generator", desc: "Create watercolor-style paintings with soft textures", icon: "fa-paint-brush" },
                { name: "Wallpaper Generator", desc: "Generate high-quality wallpapers for desktop and mobile", icon: "fa-image" },
                { name: "Glass Art Generator", desc: "Produce stained-glass inspired artworks", icon: "fa-wine-glass" },
                { name: "Car Generator", desc: "Generate vehicle concept art, from sports cars to futuristic", icon: "fa-car" },
                { name: "Action Figure Generator", desc: "Create collectible action figure concepts", icon: "fa-user-astronaut" },
                { name: "Furry AI Art Generator", desc: "Transform prompts into detailed furry characters", icon: "fa-paw" },
                { name: "Random DND Character Generator", desc: "Create unique DND heroes and NPC portraits", icon: "fa-dice-d20" }
            ]
        },
        {
            id: "image_tools",
            title: "Image Processing Tools",
            icon: "fa-palette",
            tools: [
                { name: "Image Invert", desc: "Invert image colors in browser", icon: "fa-adjust" },
                { name: "Image Grayscale", desc: "Convert images to grayscale", icon: "fa-circle" },
                { name: "Image Black White", desc: "Threshold image to pure black and white", icon: "fa-circle-half-stroke" },
                { name: "Image Flip", desc: "Flip image horizontally and vertically", icon: "fa-arrows-left-right" },
                { name: "Image Blur", desc: "Apply blur effects to selected images", icon: "fa-eye" },
                { name: "Face Blur", desc: "Detect and blur selected faces in one image", icon: "fa-user-secret" },
                { name: "Image Resizer", desc: "Resize single or batch images with multiple strategies", icon: "fa-expand" },
                { name: "Image HSL", desc: "Adjust hue, saturation, and lightness", icon: "fa-sliders" },
                { name: "Image Splitter", desc: "Split one image into a grid", icon: "fa-table-cells" },
                { name: "Image Outline", desc: "Generate edge outlines from images", icon: "fa-border-all" },
                { name: "Background Blur", desc: "Blur background while keeping subject clear", icon: "fa-droplet" },
                { name: "Color Palette", desc: "Extract dominant colors from images", icon: "fa-palette" },
                { name: "Image Combiner", desc: "Combine multiple images side by side or stacked", icon: "fa-layer-group" }
            ]
        },
        {
            id: "compressors",
            title: "File Compressors",
            icon: "fa-file-zipper",
            tools: [
                { name: "Video Compressor", desc: "Compress video files with quality control", icon: "fa-video" },
                { name: "PDF Compressor", desc: "Reduce PDF file size quickly", icon: "fa-file-pdf" },
                { name: "Word Compressor", desc: "Compress Word documents", icon: "fa-file-word" },
                { name: "GIF Compressor", desc: "Optimize GIF size for sharing", icon: "fa-file-image" },
                { name: "PPT Compressor", desc: "Shrink PPT and PPTX presentations", icon: "fa-file-powerpoint" }
            ]
        },
        {
            id: "emoji_tools",
            title: "Emoji & Unicode Tools",
            icon: "fa-smile",
            tools: [
                { name: "Emoji Copy", desc: "Browse and copy emojis quickly", icon: "fa-smile" },
                { name: "Kawaii Face", desc: "Copy cute kaomoji styles", icon: "fa-heart" },
                { name: "Cool Symbols", desc: "Find and copy unicode symbols", icon: "fa-asterisk" },
                { name: "Face Text", desc: "Text faces for chat and bios", icon: "fa-face-laugh-wink" },
                { name: "Fancy Font", desc: "Generate styled unicode text fonts", icon: "fa-font" }
            ]
        },
        {
            id: "ai_content_gen",
            title: "AI Writing & Content",
            icon: "fa-pen-nib",
            tools: [
                { name: "AI Writer", desc: "Generate articles, stories, and copy with AI", icon: "fa-pen-fancy" },
                { name: "AI Article Generator", desc: "Create full-length articles from a topic", icon: "fa-newspaper" },
                { name: "AI Poem Generator", desc: "Generate poems in various styles and themes", icon: "fa-feather" },
                { name: "Acrostic Poem Generator", desc: "Create acrostic poems from any word", icon: "fa-feather-pointed" },
                { name: "AI Emoji Maker", desc: "Generate custom emojis from text descriptions", icon: "fa-face-grin-squint" },
                { name: "AI Clipart Generator", desc: "Create clipart images from text prompts", icon: "fa-paste" }
            ]
        },
        {
            id: "image_gen_filters",
            title: "AI Style Filters & Avatars",
            icon: "fa-wand-magic-sparkles",
            tools: [
                { name: "AI Image Generator", desc: "Generate images from any text prompt", icon: "fa-image" },
                { name: "Flux Image Generator", desc: "Flux model for diverse high-fidelity generation", icon: "fa-bolt" },
                { name: "AI Photo To Anime", desc: "Transform photos into anime style", icon: "fa-sparkles" },
                { name: "AI Photo To Cartoon", desc: "Turn photos into cartoon illustrations", icon: "fa-masks-theater" },
                { name: "AI Manga Generator", desc: "Generate manga-style artwork from photos", icon: "fa-book-open" },
                { name: "AI Caricature Maker", desc: "Generate funny caricatures from photos", icon: "fa-face-grin-tongue" },
                { name: "AI Photo To Pixel Art", desc: "Convert photos to pixel art style", icon: "fa-th-large" },
                { name: "Pixar AI Generator", desc: "Generate Pixar-style character art", icon: "fa-child-reaching" },
                { name: "AI Lego Filter", desc: "Transform images into Lego-style art", icon: "fa-cubes" },
                { name: "Retro PS2-Style", desc: "Apply retro PS2 game aesthetic to images", icon: "fa-gamepad" },
                { name: "AI Kawaii Chibi Art", desc: "Generate cute chibi-style artwork", icon: "fa-heart" },
                { name: "Ghibli Style", desc: "Apply Studio Ghibli-inspired art style", icon: "fa-mountain-sun" }
            ]
        },
        {
            id: "image_editing_enhance",
            title: "Editing & Enhancement",
            icon: "fa-crop-simple",
            tools: [
                { name: "AI Image To Video", desc: "Generate video from a single image with motion", icon: "fa-film" },
                { name: "AI Image Upscaler", desc: "Upscale images without losing quality", icon: "fa-maximize" },
                { name: "Online PS Editor", desc: "In-browser Photoshop-grade photo editing", icon: "fa-paint-brush" },
                { name: "Photo To Oil Painting", desc: "Convert photos into oil painting style", icon: "fa-palette" },
                { name: "Image OCR Converter", desc: "Extract text from images via OCR", icon: "fa-font" },
                { name: "AI Photo Restoration", desc: "Restore old or damaged photos", icon: "fa-clock-rotate-left" },
                { name: "AI Unblur Image", desc: "Sharpen and unblur blurry images", icon: "fa-eye" },
                { name: "Remove People From Photos", desc: "Automatically remove people from images", icon: "fa-user-slash" },
                { name: "AI Object Remover", desc: "Remove unwanted objects from photos", icon: "fa-trash-can" },
                { name: "Kolors Virtual Try On", desc: "Try on clothes virtually with AI", icon: "fa-shirt" },
                { name: "AI Image Extender", desc: "Outpaint and extend image borders seamlessly", icon: "fa-up-right-and-down-left-from-center" },
                { name: "Black & White To Color", desc: "Colorize historical black and white photos", icon: "fa-brush" }
            ]
        },
        {
            id: "video_audio",
            title: "Video & Audio Tools",
            icon: "fa-headphones",
            tools: [
                { name: "AI Text to Speech (TTS)", desc: "Text-to-speech with natural neural voices", icon: "fa-microphone" },
                { name: "Audio Format Transcoder", desc: "Convert between MP3, WAV, AAC, and FLAC", icon: "fa-volume-high" },
                { name: "Video Metadata Parser", desc: "Parse and inspect video codecs and bitrates", icon: "fa-video" },
                { name: "AI YouTube Thumbnail Maker", desc: "Generate high CTR YouTube thumbnails", icon: "fa-youtube" }
            ]
        },
        {
            id: "development_code",
            title: "Development & Code Engines",
            icon: "fa-code",
            tools: [
                { name: "Online Code Compiler", desc: "Compile C#, VB.NET, PHP, Java, Python, and C++", icon: "fa-terminal" },
                { name: "Python3 Sandbox", desc: "Run Python3 code snippets in browser sandbox", icon: "fa-code" },
                { name: "JS Code Runner", desc: "Execute JavaScript code and inspect outputs", icon: "fa-square-js" },
                { name: "Rust Compiler", desc: "Compile and execute Rust programs online", icon: "fa-gear" },
                { name: "Golang Online Sandbox", desc: "Run Go code with instant execution", icon: "fa-bolt" },
                { name: "JSON Formatter & Validator", desc: "Prettify, validate, and query JSON payloads", icon: "fa-code-branch" },
                { name: "SQL Schema Designer", desc: "Design SQL schemas visually with relation diagrams", icon: "fa-database" },
                { name: "Regex Interactive Tester", desc: "Test regular expressions with real-time matching", icon: "fa-code-branch" },
                { name: "cURL to Code Generator", desc: "Convert cURL commands to Python, JS, Go, and PHP", icon: "fa-network-wired" },
                { name: "Crontab Expression Evaluator", desc: "Check cron schedule syntax and next executions", icon: "fa-clock" },
                { name: "Text Diff & Merge Tool", desc: "Compare and diff two text files side by side", icon: "fa-code-compare" },
                { name: "DNS & Port Checker", desc: "Check DNS records and domain security", icon: "fa-shield-halved" }
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
                { name: "CSV to JSON Converter", desc: "Convert CSV spreadsheets into JSON/XML", icon: "fa-table" },
                { name: "SVG to Image Converter", desc: "Convert SVG vector files to PNG and JPEG", icon: "fa-vector-square" }
            ]
        },
        {
            id: "chinese_tools",
            title: "Lunar & Cultural Tools",
            icon: "fa-yin-yang",
            tools: [
                { name: "Chinese Lunar Calendar", desc: "Check solar terms and Chinese lunar dates", icon: "fa-calendar-days" },
                { name: "Bazi Four Pillars Calculator", desc: "Calculate Bazi four pillars and elements", icon: "fa-compass" },
                { name: "Simplified/Traditional Converter", desc: "Convert between Simplified and Traditional Chinese", icon: "fa-language" },
                { name: "Taoist & Buddhist Calendar", desc: "View traditional Taoist and Buddhist dates", icon: "fa-sun" }
            ]
        },
        {
            id: "general_utilities",
            title: "Productivity & General Utilities",
            icon: "fa-toolbox",
            tools: [
                { name: "URL Shortener", desc: "Shorten long URLs with custom aliases", icon: "fa-link" },
                { name: "Mind Mapper", desc: "Create and export interactive mind maps", icon: "fa-brain" },
                { name: "Barcode & QR Generator", desc: "Generate custom barcode and QR code images", icon: "fa-qrcode" },
                { name: "Unix Timestamp Converter", desc: "Convert timestamps between UTC, local, and epoch", icon: "fa-stopwatch" },
                { name: "AI Profile Photo Maker", desc: "Generate professional avatar and LinkedIn photos", icon: "fa-user-tie" }
            ]
        }
    ];

    const sidebarList = document.getElementById('sidebarCategoryList');
    if (sidebarList) {
        sidebarList.innerHTML = toolSections.map(sec => `
            <li>
                <a href="#${sec.id}" class="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800/60 transition-colors">
                    <i class="fas ${sec.icon} w-4 text-indigo-400 text-xs"></i>
                    <span class="truncate">${sec.title}</span>
                </a>
            </li>
        `).join('');
    }

    function renderTools(query = '') {
        const container = document.getElementById('toolsContainer');
        if (!container) return;

        const q = query.toLowerCase().trim();
        let totalVisibleTools = 0;
        let totalVisibleCategories = 0;

        container.innerHTML = '';

        toolSections.forEach(section => {
            const filteredTools = section.tools.filter(tool => 
                !q || tool.name.toLowerCase().includes(q) || tool.desc.toLowerCase().includes(q) || section.title.toLowerCase().includes(q)
            );

            if (filteredTools.length > 0) {
                totalVisibleCategories++;
                totalVisibleTools += filteredTools.length;

                const sectionEl = document.createElement('section');
                sectionEl.id = section.id;
                sectionEl.className = 'scroll-mt-24';

                sectionEl.innerHTML = `
                    <div class="flex items-center gap-3 mb-4 pb-2 border-b border-slate-800/80">
                        <div class="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-800/50 flex items-center justify-center text-indigo-400 text-sm">
                            <i class="fas ${section.icon}"></i>
                        </div>
                        <h2 class="text-lg font-bold font-space text-white tracking-wide">${section.title}</h2>
                        <span class="ml-auto text-xs px-2 py-0.5 rounded bg-slate-800 text-gray-400 font-mono">${filteredTools.length}</span>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3.5">
                        ${filteredTools.map(tool => `
                            <div class="tool-card group rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 hover:bg-slate-900/90 cursor-pointer flex items-center gap-3.5">
                                <div class="h-12 w-12 shrink-0 rounded-lg bg-slate-800/90 border border-slate-700/60 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-all text-xl">
                                    <i class="fas ${tool.icon || 'fa-cog'}"></i>
                                </div>
                                <div class="min-w-0 flex-1">
                                    <h3 class="text-sm font-semibold text-gray-200 group-hover:text-white truncate transition-colors">${tool.name}</h3>
                                    <p class="text-xs text-gray-400 mt-0.5 line-clamp-2 leading-relaxed">${tool.desc}</p>
                                </div>
                                <i class="fas fa-chevron-right text-xs text-gray-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all"></i>
                            </div>
                        `).join('')}
                    </div>
                `;
                container.appendChild(sectionEl);
            }
        });

        if (totalVisibleTools === 0) {
            container.innerHTML = `
                <div class="text-center py-16 px-4 rounded-2xl border border-dashed border-slate-800 bg-slate-900/40">
                    <i class="fas fa-search text-4xl text-gray-600 mb-3"></i>
                    <h3 class="text-lg font-bold font-space text-white mb-1">No tools match your search</h3>
                    <p class="text-gray-400 text-xs">Try searching for keywords like "image", "OCR", "PDF", "compiler", or "video".</p>
                </div>
            `;
        }

        const toolCountBadge = document.getElementById('visibleToolCount');
        const catCountBadge = document.getElementById('visibleCategoryCount');
        if (toolCountBadge) toolCountBadge.textContent = `${totalVisibleTools}`;
        if (catCountBadge) catCountBadge.textContent = `${totalVisibleCategories}`;
    }

    renderTools();

    const searchInput = document.getElementById('toolSearchInput');
    const clearBtn = document.getElementById('clearSearchBtn');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const val = e.target.value;
            renderTools(val);
            if (clearBtn) {
                if (val.length > 0) clearBtn.classList.remove('hidden');
                else clearBtn.classList.add('hidden');
            }
        });
    }

    if (clearBtn && searchInput) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            clearBtn.classList.add('hidden');
            renderTools('');
            searchInput.focus();
        });
    }
}
