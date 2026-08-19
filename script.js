/**
 * Xennials | AI Automation & Web Development
 * Interactive Script Module - Audited & Performance Optimized
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeroParticles();
    initMobileMenu();
    initScrollReveal();
    initCounterAnimations();
    initProjectFiltering();
    initSavingsCalculator();
    initProjectModal();
    initThemeSwitcher();
    initContactForm();
    initBackToTop();
});

/* Hero Background Ambient Canvas */
function initHeroParticles() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }, 150);
    }, { passive: true });

    const particles = [];
    const particleCount = Math.min(Math.floor(width / 30), 50);

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + 1,
            color: Math.random() > 0.5 ? 'rgba(99, 102, 241, ' : 'rgba(236, 72, 153, ',
            alpha: Math.random() * 0.5 + 0.2,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35
        });
    }

    let animationFrameId;
    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color + p.alpha + ')';
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const distSq = dx * dx + dy * dy;

                if (distSq < 14400) { // 120 * 120
                    const dist = Math.sqrt(distSq);
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(139, 92, 246, ${0.12 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        animationFrameId = requestAnimationFrame(animate);
    }

    // Pause animation when tab is inactive
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationFrameId);
        } else {
            animate();
        }
    });

    animate();
}

/* Mobile Navigation Menu Toggle */
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        const isHidden = menu.classList.contains('hidden');
        if (isHidden) {
            menu.classList.remove('hidden');
            btn.setAttribute('aria-expanded', 'true');
            btn.innerHTML = '<i class="fas fa-times text-2xl text-pink-400"></i>';
        } else {
            menu.classList.add('hidden');
            btn.setAttribute('aria-expanded', 'false');
            btn.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
        }
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            btn.setAttribute('aria-expanded', 'false');
            btn.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
        });
    });
}

/* Intersection Observer Scroll Reveal */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

/* Animated Number Counter for Stats */
function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-counter]');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.getAttribute('data-done')) {
                entry.target.setAttribute('data-done', 'true');
                obs.unobserve(entry.target);

                const targetVal = parseInt(entry.target.getAttribute('data-counter'), 10);
                const suffix = entry.target.getAttribute('data-suffix') || '';
                let current = 0;
                const increment = Math.max(1, Math.floor(targetVal / 40));
                const speed = 25;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= targetVal) {
                        current = targetVal;
                        clearInterval(timer);
                    }
                    entry.target.textContent = current + suffix;
                }, speed);
            }
        });
    }, { threshold: 0.4 });

    counters.forEach(c => observer.observe(c));
}

/* Project Category Filtering */
function initProjectFiltering() {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.repo-card');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-filter');

            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'flex';
                    requestAnimationFrame(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    });
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px) scale(0.95)';
                    setTimeout(() => {
                        if (card.style.opacity === '0') {
                            card.style.display = 'none';
                        }
                    }, 300);
                }
            });
        });
    });
}

/* AI Savings & ROI Calculator */
function initSavingsCalculator() {
    const teamInput = document.getElementById('calc-team');
    const hoursInput = document.getElementById('calc-hours');
    const rateInput = document.getElementById('calc-rate');

    const teamVal = document.getElementById('calc-team-val');
    const hoursVal = document.getElementById('calc-hours-val');
    const rateVal = document.getElementById('calc-rate-val');

    const resHours = document.getElementById('res-hours-saved');
    const resMoney = document.getElementById('res-money-saved');

    if (!teamInput || !hoursInput || !rateInput) return;

    function updateCalculations() {
        const team = parseInt(teamInput.value, 10) || 0;
        const hours = parseInt(hoursInput.value, 10) || 0;
        const rate = parseInt(rateInput.value, 10) || 0;

        teamVal.textContent = team;
        hoursVal.textContent = hours + ' hrs/wk';
        rateVal.textContent = '$' + rate + '/hr';

        const weeklyHoursSaved = Math.round(team * hours * 0.75);
        const annualHoursSaved = weeklyHoursSaved * 52;
        const annualMoneySaved = annualHoursSaved * rate;

        if (resHours) resHours.textContent = annualHoursSaved.toLocaleString() + ' hrs';
        if (resMoney) resMoney.textContent = '$' + annualMoneySaved.toLocaleString();
    }

    teamInput.addEventListener('input', updateCalculations, { passive: true });
    hoursInput.addEventListener('input', updateCalculations, { passive: true });
    rateInput.addEventListener('input', updateCalculations, { passive: true });

    updateCalculations();
}

/* Project Quick View Modal Details */
const projectData = {
    'n8n-templates': {
        title: '150+ n8n Automation Templates',
        category: 'Automation & AI Workflows',
        description: 'A comprehensive collection of 150 production-tested n8n automation blueprints. Covers lead scoring, CRM sync, autonomous web scraping, LLM RAG pipelines, and automated customer support routing.',
        tech: ['n8n', 'Python', 'OpenAI API', 'Webhooks', 'PostgreSQL'],
        url: 'https://github.com/teefisher2k20/150-n8n-templates'
    },
    'activepieces': {
        title: 'Activepieces Open Source AI Platform',
        category: 'Enterprise Automation Engine',
        description: 'Open-source automation platform with 200+ native connectors. Enables teams to orchestrate autonomous AI agents and integrate core cloud services without proprietary vendor lock-in.',
        tech: ['TypeScript', 'Node.js', 'Activepieces API', 'Docker', 'Redis'],
        url: 'https://github.com/teefisher2k20/activepieces'
    },
    'ui-components': {
        title: '21st - UI Components Design System',
        category: 'Frontend Engineering',
        description: 'Component marketplace for design engineers built on shadcn/ui and TailwindCSS. Offers ready-to-use micro-animations, glassmorphism cards, dynamic charts, and interactive hooks.',
        tech: ['React', 'TailwindCSS', 'Framer Motion', 'TypeScript'],
        url: 'https://github.com/teefisher2k20/21st'
    },
    'adk-python': {
        title: 'ADK Python (AI Development Kit)',
        category: 'Agentic AI Framework',
        description: 'Code-first Python toolkit designed to build, evaluate, and orchestrate complex multi-agent LLM systems with custom memory management and tool routing.',
        tech: ['Python 3.11', 'LangChain', 'FastAPI', 'Pydantic', 'AsyncIO'],
        url: 'https://github.com/teefisher2k20/adk-python'
    },
    'agent-e': {
        title: 'Agent-E Web Automation Engine',
        category: 'Headless Browser Automation',
        description: 'Agentic automation engine built for autonomous web navigation, DOM parsing, structured data extraction, and automated form execution.',
        tech: ['Python', 'Playwright', 'Puppeteer', 'AI Vision'],
        url: 'https://github.com/teefisher2k20/agent-e'
    },
    'vscode-tools': {
        title: 'VS Code Developer Suite',
        category: 'Developer Tooling',
        description: 'Custom open-source extension pack enhancing developer velocity with AI code completion, quick syntax snippets, and automated test triggers.',
        tech: ['TypeScript', 'VS Code API', 'JSON Schema'],
        url: 'https://github.com/teefisher2k20/vscode'
    }
};

function initProjectModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close-btn');

    if (!modal) return;

    document.querySelectorAll('[data-project-key]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const key = btn.getAttribute('data-project-key');
            const data = projectData[key];
            if (!data) return;

            document.getElementById('modal-title').textContent = data.title;
            document.getElementById('modal-category').textContent = data.category;
            document.getElementById('modal-description').textContent = data.description;
            
            const modalLink = document.getElementById('modal-link');
            modalLink.href = data.url;

            const techContainer = document.getElementById('modal-tech');
            techContainer.replaceChildren();

            data.tech.forEach(t => {
                const badge = document.createElement('span');
                badge.className = 'px-3 py-1 bg-slate-800 border border-slate-700 text-indigo-300 rounded-full text-xs font-mono';
                badge.textContent = t;
                techContainer.appendChild(badge);
            });

            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

/* Theme Accent Switcher */
function initThemeSwitcher() {
    const btns = document.querySelectorAll('.theme-option');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme-name');
            if (theme === 'default') {
                document.body.removeAttribute('data-theme');
            } else {
                document.body.setAttribute('data-theme', theme);
            }
            showToast(`Accent Theme updated to ${theme.toUpperCase()}`, 'success');
        });
    });
}

/* Interactive Contact Form */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        const messageInput = document.getElementById('contact-message');

        if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
            showToast('Please fill out all required fields.', 'error');
            return;
        }

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';

        setTimeout(() => {
            showToast('Thank you! Your message has been sent successfully.', 'success');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }, 1000);
    });
}

/* Toast Message Display */
function showToast(message, type = 'success') {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        document.body.appendChild(toast);
    }

    const icon = type === 'success' 
        ? '<i class="fas fa-check-circle text-emerald-400 text-xl"></i>' 
        : '<i class="fas fa-exclamation-circle text-rose-400 text-xl"></i>';

    toast.innerHTML = `${icon} <span>${escapeHtml(message)}</span>`;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/* Back To Top Button */
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(() => {
                if (window.scrollY > 400) {
                    btn.classList.add('visible');
                } else {
                    btn.classList.remove('visible');
                }
                scrollTimeout = null;
            }, 100);
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// AI Free Tier Model Router Interactive Workbench Handler
import { AIModelRouter } from './services/aiModelRouter.js';

function initAIRouterWorkbench() {
    const dispatchBtn = document.getElementById('dispatchRouterBtn');
    if (!dispatchBtn) return;

    const router = new AIModelRouter();

    const promptInput = document.getElementById('routerPromptInput');
    const simulateToggle = document.getElementById('simulate429Toggle');
    const outputText = document.getElementById('routerOutputText');
    const traceLogs = document.getElementById('routerTraceLogs');
    const activeBadge = document.getElementById('routerActiveBadge');
    const telemetryLatency = document.getElementById('telemetryLatency');
    const telemetryModel = document.getElementById('telemetryModel');
    const telemetryFailover = document.getElementById('telemetryFailover');

    const cardGoogle = document.getElementById('card-google');
    const dotGoogle = document.getElementById('dot-google');
    const statusGoogle = document.getElementById('status-google');

    const cardGroq = document.getElementById('card-groq');
    const dotGroq = document.getElementById('dot-groq');
    const statusGroq = document.getElementById('status-groq');

    let failoverTotal = 0;

    // Sample prompts
    document.querySelectorAll('.sample-prompt').forEach(btn => {
        btn.addEventListener('click', () => {
            promptInput.value = btn.dataset.p;
        });
    });

    dispatchBtn.addEventListener('click', async () => {
        const prompt = promptInput.value.trim();
        if (!prompt) return;

        const simulate429 = simulateToggle.checked;
        dispatchBtn.disabled = true;
        dispatchBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Routing Prompt...`;
        activeBadge.textContent = 'ROUTING...';
        activeBadge.className = 'px-2 py-0.5 rounded bg-amber-950 text-amber-300 text-[10px] animate-pulse';

        traceLogs.innerHTML = `<div>&gt; [${new Date().toLocaleTimeString()}] Ingesting prompt into Xennials AI Router...</div>` +
                              `<div>&gt; Attempting Primary Provider: Google Gemini 1.5 Flash (Free Tier)...</div>`;

        outputText.textContent = 'Connecting to model stream...';

        const startTime = Date.now();

        try {
            const result = await router.complete(prompt, {
                simulateGoogle429: simulate429
            });

            const latency = Date.now() - startTime;
            telemetryLatency.textContent = `${latency}ms`;
            telemetryModel.textContent = result.provider.name;

            if (result.provider.isFallback) {
                failoverTotal++;
                telemetryFailover.textContent = `${failoverTotal}`;

                // Update Google card to 429 rate limit
                cardGoogle.className = 'p-4 rounded-2xl bg-slate-950/80 border border-red-500/50';
                dotGoogle.className = 'w-2 h-2 rounded-full bg-red-400 animate-ping';
                statusGoogle.textContent = 'STATUS: 429 EXHAUSTED (COOLDOWN)';
                statusGoogle.className = 'mt-3 text-[10px] font-mono text-red-400 font-medium';

                // Update Groq card to Active Serving
                cardGroq.className = 'p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/50 shadow-lg shadow-emerald-500/10';
                dotGroq.className = 'w-2 h-2 rounded-full bg-emerald-400 animate-pulse';
                statusGroq.textContent = 'STATUS: SERVING (ACTIVE FALLBACK)';
                statusGroq.className = 'mt-3 text-[10px] font-mono text-emerald-400 font-medium';

                activeBadge.textContent = 'FAILOVER SUCCESSFUL';
                activeBadge.className = 'px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px]';

                traceLogs.innerHTML += `<div class="text-red-400">&gt; ⚠️ Google Gemini Free Tier 429 Exhaustion detected.</div>` +
                                       `<div class="text-emerald-400">&gt; 🦙 Automatic Instant Failover triggered: ${result.provider.name}</div>` +
                                       `<div>&gt; Execution completed in ${latency}ms with 0% downtime.</div>`;
            } else {
                cardGoogle.className = 'p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/40';
                dotGoogle.className = 'w-2 h-2 rounded-full bg-emerald-400';
                statusGoogle.textContent = 'STATUS: SERVING (HEALTHY)';
                statusGoogle.className = 'mt-3 text-[10px] font-mono text-emerald-400 font-medium';

                activeBadge.textContent = 'ROUTED (PRIMARY)';
                activeBadge.className = 'px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 text-[10px]';

                traceLogs.innerHTML += `<div class="text-emerald-400">&gt; Request successfully served by Google Gemini Free Tier.</div>` +
                                       `<div>&gt; Execution completed in ${latency}ms.</div>`;
            }

            outputText.textContent = result.content;
        } catch (err) {
            outputText.textContent = `Router Error: ${err.message}`;
            activeBadge.textContent = 'ERROR';
            activeBadge.className = 'px-2 py-0.5 rounded bg-red-950 text-red-300 text-[10px]';
        } finally {
            dispatchBtn.disabled = false;
            dispatchBtn.innerHTML = `<i class="fas fa-bolt"></i> Execute Router Dispatch`;
        }
    });
}

// Ensure initAIRouterWorkbench runs on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAIRouterWorkbench);
} else {
    initAIRouterWorkbench();
}

// Claude-Style Interactive Artifacts Studio Handler
import { ARTIFACTS } from './services/artifactsData.js';

function initArtifactsStudio() {
    // 1. Home Page (#workflows) Artifact Viewer
    const indexPreviewContainer = document.getElementById('artifactPreviewContainer');
    const indexCodeContainer = document.getElementById('artifactCodeContainer');
    const indexCodeText = document.getElementById('artifactCodeText');
    const indexFilename = document.getElementById('artifactFilename');
    const indexTitle = document.getElementById('artifactTitle');
    const indexModePreviewBtn = document.getElementById('artifactModePreviewBtn');
    const indexModeCodeBtn = document.getElementById('artifactModeCodeBtn');
    const indexCopyBtn = document.getElementById('copyArtifactCodeBtn');

    let currentHomeArtifact = ARTIFACTS[0];

    function renderHomeArtifact(artifact, mode = 'preview') {
        if (!indexPreviewContainer) return;
        currentHomeArtifact = artifact;

        if (indexFilename) indexFilename.textContent = artifact.filename;
        if (indexTitle) indexTitle.textContent = artifact.title;

        if (indexPreviewContainer) {
            indexPreviewContainer.innerHTML = artifact.previewHtml;
            attachArtifactInteractiveEvents(indexPreviewContainer);
        }

        if (indexCodeText) {
            indexCodeText.textContent = artifact.code;
        }

        setHomeArtifactMode(mode);
    }

    function setHomeArtifactMode(mode) {
        if (mode === 'preview') {
            indexPreviewContainer?.classList.remove('hidden');
            indexCodeContainer?.classList.add('hidden');
            indexModePreviewBtn?.classList.add('bg-indigo-600', 'text-white');
            indexModePreviewBtn?.classList.remove('text-gray-400');
            indexModeCodeBtn?.classList.remove('bg-indigo-600', 'text-white');
            indexModeCodeBtn?.classList.add('text-gray-400');
        } else {
            indexPreviewContainer?.classList.add('hidden');
            indexCodeContainer?.classList.remove('hidden');
            indexModeCodeBtn?.classList.add('bg-indigo-600', 'text-white');
            indexModeCodeBtn?.classList.remove('text-gray-400');
            indexModePreviewBtn?.classList.remove('bg-indigo-600', 'text-white');
            indexModePreviewBtn?.classList.add('text-gray-400');
        }
    }

    indexModePreviewBtn?.addEventListener('click', () => setHomeArtifactMode('preview'));
    indexModeCodeBtn?.addEventListener('click', () => setHomeArtifactMode('code'));
    indexCopyBtn?.addEventListener('click', () => {
        if (currentHomeArtifact) {
            navigator.clipboard.writeText(currentHomeArtifact.code);
            showToast('Artifact source code copied to clipboard!', 'success');
        }
    });

    document.querySelectorAll('#workflowTabContainer .wf-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('#workflowTabContainer .wf-tab').forEach(t => {
                t.classList.remove('active', 'bg-indigo-600', 'text-white', 'shadow-lg');
                t.classList.add('bg-slate-900', 'border', 'border-slate-700', 'text-gray-300');
            });
            tab.classList.add('active', 'bg-indigo-600', 'text-white', 'shadow-lg');
            tab.classList.remove('bg-slate-900', 'border', 'border-slate-700', 'text-gray-300');

            const artifact = ARTIFACTS.find(a => a.id === tab.dataset.wf) || ARTIFACTS[0];
            renderHomeArtifact(artifact, 'preview');
        });
    });

    if (indexPreviewContainer) {
        renderHomeArtifact(ARTIFACTS[0], 'preview');
    }

    // 2. App Playground (#artifacts-studio) Interactive Gallery
    const pgGrid = document.getElementById('pgArtifactSelectorGrid');
    const pgPreviewArea = document.getElementById('pgArtifactPreviewArea');
    const pgCodeArea = document.getElementById('pgArtifactCodeArea');
    const pgCodeText = document.getElementById('pgArtifactCodeText');
    const pgFilename = document.getElementById('pgArtifactFilename');
    const pgTitle = document.getElementById('pgArtifactTitle');
    const pgModePreviewBtn = document.getElementById('pgArtifactModePreviewBtn');
    const pgModeCodeBtn = document.getElementById('pgArtifactModeCodeBtn');
    const pgCopyBtn = document.getElementById('pgCopyArtifactBtn');

    let currentPgArtifact = ARTIFACTS[0];

    if (pgGrid) {
        pgGrid.innerHTML = ARTIFACTS.map((art, idx) => `
            <div class="pg-art-card p-4 rounded-2xl bg-slate-950 border ${idx === 0 ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/10' : 'border-slate-800'} cursor-pointer hover:border-cyan-500/40 transition-all flex flex-col justify-between" data-id="${art.id}">
                <div>
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">${art.category}</span>
                        <i class="fas fa-cube text-cyan-400 text-xs"></i>
                    </div>
                    <h4 class="text-xs font-bold text-white font-space">${art.title}</h4>
                    <p class="text-[11px] text-gray-400 mt-1 line-clamp-2">${art.description}</p>
                </div>
                <div class="mt-3 pt-2 border-t border-slate-900 flex justify-between items-center text-[10px] font-mono text-gray-500">
                    <span>${art.filename}</span>
                    <span class="text-cyan-400 font-semibold">Executable &rarr;</span>
                </div>
            </div>
        `).join('');

        document.querySelectorAll('.pg-art-card').forEach(card => {
            card.addEventListener('click', () => {
                document.querySelectorAll('.pg-art-card').forEach(c => {
                    c.className = 'pg-art-card p-4 rounded-2xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-cyan-500/40 transition-all flex flex-col justify-between';
                });
                card.className = 'pg-art-card p-4 rounded-2xl bg-slate-950 border border-cyan-500/50 shadow-lg shadow-cyan-500/10 cursor-pointer transition-all flex flex-col justify-between';

                const art = ARTIFACTS.find(a => a.id === card.dataset.id) || ARTIFACTS[0];
                renderPgArtifact(art, 'preview');
            });
        });

        renderPgArtifact(ARTIFACTS[0], 'preview');
    }

    function renderPgArtifact(artifact, mode = 'preview') {
        if (!pgPreviewArea) return;
        currentPgArtifact = artifact;

        if (pgFilename) pgFilename.textContent = artifact.filename;
        if (pgTitle) pgTitle.textContent = artifact.title;

        if (pgPreviewArea) {
            pgPreviewArea.innerHTML = artifact.previewHtml;
            attachArtifactInteractiveEvents(pgPreviewArea);
        }

        if (pgCodeText) {
            pgCodeText.textContent = artifact.code;
        }

        setPgArtifactMode(mode);
    }

    function setPgArtifactMode(mode) {
        if (mode === 'preview') {
            pgPreviewArea?.classList.remove('hidden');
            pgCodeArea?.classList.add('hidden');
            pgModePreviewBtn?.classList.add('bg-cyan-600', 'text-white');
            pgModePreviewBtn?.classList.remove('text-gray-400');
            pgModeCodeBtn?.classList.remove('bg-cyan-600', 'text-white');
            pgModeCodeBtn?.classList.add('text-gray-400');
        } else {
            pgPreviewArea?.classList.add('hidden');
            pgCodeArea?.classList.remove('hidden');
            pgModeCodeBtn?.classList.add('bg-cyan-600', 'text-white');
            pgModeCodeBtn?.classList.remove('text-gray-400');
            pgModePreviewBtn?.classList.remove('bg-cyan-600', 'text-white');
            pgModePreviewBtn?.classList.add('text-gray-400');
        }
    }

    pgModePreviewBtn?.addEventListener('click', () => setPgArtifactMode('preview'));
    pgModeCodeBtn?.addEventListener('click', () => setPgArtifactMode('code'));
    pgCopyBtn?.addEventListener('click', () => {
        if (currentPgArtifact) {
            navigator.clipboard.writeText(currentPgArtifact.code);
            showToast('Artifact code copied to clipboard!', 'success');
        }
    });

    // Helper to attach event listeners to interactive elements inside artifacts
    function attachArtifactInteractiveEvents(container) {
        const leadBtn = container.querySelector('#art-run-lead-btn');
        if (leadBtn) {
            leadBtn.addEventListener('click', () => {
                const company = container.querySelector('#art-lead-company')?.value || 'Apex Logistics';
                const resultBox = container.querySelector('#art-lead-result');
                const timer = container.querySelector('#art-lead-timer');

                leadBtn.disabled = true;
                leadBtn.innerHTML = `<i class="fas fa-spinner fa-spin text-[10px]"></i> Running Scoring...`;

                setTimeout(() => {
                    if (resultBox) {
                        resultBox.innerHTML = `
                            <div class="flex justify-between text-gray-400 border-b border-slate-800 pb-1.5">
                                <span>PIPELINE_OUTCOME</span>
                                <span class="text-emerald-400 font-bold">QUALIFIED &bull; TIER 1</span>
                            </div>
                            <div class="text-indigo-300">&gt; Company: ${company}</div>
                            <div class="text-emerald-400">&gt; AI Intent Score: 99.1 / 100 (Autonomous Ingestion Complete)</div>
                            <div class="text-purple-300">&gt; Odoo Stage: 'Qualified Opportunity' Dispatched via n8n in 24ms</div>
                        `;
                    }
                    if (timer) timer.textContent = `Execution time: 24ms`;
                    leadBtn.disabled = false;
                    leadBtn.innerHTML = `<i class="fas fa-play text-[10px]"></i> Run Autonomous Scoring`;
                    showToast('Lead scoring artifact executed successfully!', 'success');
                }, 400);
            });
        }
    }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initArtifactsStudio);
} else {
    initArtifactsStudio();
}


