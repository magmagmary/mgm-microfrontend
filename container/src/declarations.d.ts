declare module 'marketing/MarketingApp' {
    export function mount(el: HTMLElement , { onNavigate }: { onNavigate: (location:{pathname:string}) => void }): void;
}

