interface Fluid {

    dockBadge : string;

    addDockMenuItem(title: string, onclickHandler?: Function): void;

    removeDockMenuItem(title: string): void;

    showUserNotification(options?: {
        title?: string,
        subtitle?: string,
        description?: string,
        sound?: string,
        onclick?: Function,
    }): void;

    showGrowlNotification(options?: {
        title?: string,
        description?: string,
        priority?: Number,
        sticky?: Boolean,
        identifier?: string,
        onclick?: Function,
        icon?: string,
    }): void;

    hide(): void; // Hide this SSB application. Available only to local Userscripts.

    unhide(): void; // Unhide this SSB application. Available only to local Userscripts.

    activate(): void; // Bring this SSB application to the front. Available only to local Userscripts.

    terminate(): void; // Quit this SSB application. Available only to local Userscripts.

    include(path: string): void; // Eval a local JavaScript file located at the given path. Available only to local Userscripts.

    applicationPath: string; // a string path to this SSB's .app bundle directory ("/path/to/MySSB.app/"). Available only to local Userscripts.

    resourcePath: string; // a string path to this SSB's Resources directory ("/path/to/MySSB.app/Contents/Resources/"). Available only to local Userscripts.

    userscriptPath: string; // a string path to this SSB's Userscripts ("/Users/Mandy/Library/Application\ Support/Fluid/SSB/Campfire/Userscripts") directory. Available only to local Userscripts.

    requestUserAttention(): void; // bounce Dock icon

    beep(): void; // sounds system beep

    playSound(soundId: string): void; // plays system sound if name is valid

}

const Fluid: Fluid = (<any>window).fluid;

export default Fluid;
