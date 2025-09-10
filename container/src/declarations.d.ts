declare module 'marketing/MarketingApp' {
    export function mount(el: HTMLElement , { onNavigate }: { onNavigate: (location:{pathname:string}) => void }): {
        onParentNavigate: (location:{pathname:string}) => void;
    };
}

declare module 'auth/AuthApp' {
    export function mount(el: HTMLElement , { onNavigate ,onSignIn }: { onNavigate: (location:{pathname:string}) => void ,onSignIn: (value:boolean) => void }): {
        onParentNavigate: (location:{pathname:string}) => void;
    };
}

declare module 'dashboard/DashboardApp' {
    export function mount(el: HTMLElement): void;
}
