import { generateStudio } from 'monaco-json-studio-base';

export function createSingleStudio({
    header = 'file-picker',
    footer = 'cursor',
    topHeader = true,
    outputDir
} = {}) {
    const headerConfig = typeof header === 'string'
        ? { type: header, placement: topHeader && header !== 'title' ? 'studio' : 'pane' }
        : { placement: topHeader ? 'studio' : 'pane', ...header };

    const footerConfig = typeof footer === 'string' ? { type: footer } : footer;
    const headerLabel = headerConfig.type;
    const footerLabel = footerConfig.type;

    return generateStudio({
        title: 'Monaco Studio · Single',
        badge: 'single',
        outputDir: outputDir ?? `./monaco-single-${headerLabel}-${footerLabel}`,
        panes: [
            {
                key: 'pane1',
                label: 'Pane 1',
                header: headerConfig,
                body: { type: 'monaco', language: 'json' },
                footer: footerConfig
            }
        ]
    });
}

export default createSingleStudio;
