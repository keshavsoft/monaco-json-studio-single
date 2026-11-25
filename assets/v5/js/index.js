import { bindEvents } from 'https://keshavsoft.github.io/dom-primitive-bindings/dist/v7/min.js';
import bindings from './header/bindings.json' with { type: 'json' };
import baseHeaderActions from './header/actions.js';
import { paneConfigs, state } from './state.js';
import { initMonacoPanes, getActiveEditor, setValue, formatEditor, loadInitialSource } from './monaco/index.js';
import { updateCursor, updateStats } from './footer/cursor.js';
import { renderOutput } from './render/index.js';

const SOURCE_LABELS = {
    'local-data': 'LOCAL DATA',
    'same-origin': 'SAME SERVER',
    'external': 'REMOTE URL',
    'local-file': 'LOCAL FILE',
    'error': 'LOAD FAILED'
};

const SOURCE_ICONS = {
    'local-data': 'bi-filetype-json',
    'same-origin': 'bi-hdd-network',
    'external': 'bi-globe2',
    'local-file': 'bi-file-earmark-check',
    'error': 'bi-exclamation-triangle-fill'
};

function updateSourceIndicator({ source, sourceKind, ok = true, error = '' }) {
    const kind = ok ? sourceKind : 'error';
    state.currentSource = { source, sourceKind: kind, ok, error };

    const nameEl = document.querySelector('.header-file-name');
    const pill = nameEl?.closest('.header-file-pill');
    if (!pill || !nameEl) return;

    pill.dataset.sourceKind = kind;
    pill.title = ok ? source : `${source} — ${error}`;

    const icon = pill.querySelector('i');
    if (icon) icon.className = `bi ${SOURCE_ICONS[kind] ?? 'bi-filetype-json'}`;

    let badge = pill.querySelector('.source-badge');
    if (!badge) {
        badge = document.createElement('span');
        badge.className = 'source-badge';
        pill.insertBefore(badge, nameEl);
    }
    badge.textContent = SOURCE_LABELS[kind] ?? kind;
    nameEl.textContent = ok ? source : `${source} (${error})`;
}

const studioActions = {
    ...baseHeaderActions,

    handleFileSelect: (event, matchElement) => {
        baseHeaderActions.handleFileSelect(event, matchElement);
        const file = matchElement.files?.[0];
        const editor = getActiveEditor(state);
        if (!file || !editor) return;

        const reader = new FileReader();
        reader.onload = () => {
            setValue(editor, reader.result);
            updateSourceIndicator({ source: file.name, sourceKind: 'local-file', ok: true });
        };
        reader.readAsText(file);
    },

    handleSelectChange: async (event, matchElement) => {
        baseHeaderActions.handleSelectChange(event, matchElement);
        const editor = getActiveEditor(state);
        if (!editor) return;

        const result = await loadInitialSource(`${matchElement.value}.json`);
        setValue(editor, result.value);
        updateSourceIndicator(result);
    },

    handleHeaderAction: (event, matchElement) => {
        baseHeaderActions.handleHeaderAction(event, matchElement);
        const editor = getActiveEditor(state);
        if (!editor) return;

        const actionName = matchElement.dataset.headerAction;
        if (actionName === 'renderOutput') {
            renderOutput(editor.getValue(), state.currentSource);
        } else if (actionName === 'format') {
            formatEditor(editor);
        } else if (actionName === 'copy' && navigator.clipboard) {
            navigator.clipboard.writeText(editor.getValue()).catch(() => {});
        }
    }
};

async function start() {
    await initMonacoPanes(paneConfigs, state, {
        onPaneSource: (sourceInfo) => updateSourceIndicator(sourceInfo),
        onPaneUpdate: (editor, pane) => {
            updateCursor(editor, { ...pane, label: `Pane ${pane.paneNumber}` });
            updateStats(editor.getValue());
        }
    });

    bindEvents(document.querySelector('.studio-app'), bindings, studioActions);
}

start();
