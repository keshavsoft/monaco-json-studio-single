const CHANNEL_NAME = 'monaco-json-studio';
const STORAGE_KEY = 'monaco-json-studio:payload';

export function renderOutput(text, meta = {}) {
    let json = null;
    try {
        json = JSON.parse(text);
    } catch {
        json = null;
    }

    const payload = {
        text,
        json,
        source: meta.source ?? '',
        sourceKind: meta.sourceKind ?? '',
        timestamp: Date.now()
    };

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
        // Ignore storage errors in restricted contexts
    }

    if (typeof BroadcastChannel === 'function') {
        const channel = new BroadcastChannel(CHANNEL_NAME);
        channel.postMessage(payload);
        channel.close();
    }

    // Add any custom Render click behavior here
    return payload;
}
