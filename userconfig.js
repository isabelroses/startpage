let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
    overrideStorage: true,
    temperature: {
        location: 'Europe/London',
        scale: "C",
    },
    clock: {
        format: "X | x",
        iconColor: "var(--accent)",
    },
    quotes: [
        "Stay hydrated!",
        "You should be studying right now :/"
    ],
    search: {
        defaultEngine: "s",
        engines: {
            s: ["https://search.isabelroses.com/search?q=", "Isabel's search"],
            g: ["https://google.com/search?q=", "Google"],
            d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
            y: ["https://youtube.com/results?search_query=", "Youtube"],
            n: ["https://search.nixos.org/packages?channel=unstable&query=", "NixOS Packages"],
            r: ["https://www.reddit.com/search/?q=", "Reddit"],
            p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
        },
    },
    keybindings: {
        "s": "search-bar",
        "q": "config-tab",
    },
    disabled: ['weather-forecast'],
    localIcons: false,
    fastlink: "https://search.isabelroses.com",
    openLastVisitedTab: true,
    tabs: [
        {
            name: "chi ll",
            background_url: "src/img/banners/cbg-10.gif",
            categories: [
                {
                    name: "Social Media",
                    links: [
                        {
                            name: "youtube",
                            url: "https://www.youtube.com/",
                            icon: "brand-youtube-filled",
                            icon_color: "var(--ctp-red)",
                        },
                        {
                            name: "twitch",
                            url: "https://www.twitch.tv/",
                            icon: "brand-twitch",
                            icon_color: "var(--ctp-mauve)",
                        },
                        {
                            name: "reddit",
                            url: "https://www.reddit.com/",
                            icon: "brand-reddit",
                            icon_color: "var(--ctp-peach)",
                        },
                        {
                            name: "instagram",
                            url: "https://www.instagram.com/",
                            icon: "brand-instagram",
                            icon_color: "var(--ctp-pink)",
                        },
                        {
                            name: "whatsapp",
                            url: "https://web.whatsapp.com/",
                            icon: "brand-whatsapp",
                            icon_color: "var(--ctp-green)",
                        },
                    ],
                },
                {
                    name: "Self Hosted",
                    links: [
                        {
                            name: "jellyfin",
                            url: "https://tv.isabelroses.com",
                            icon: "device-tv",
                            icon_color: "var(--ctp-sapphire)",
                        },
                        {
                            name: "searxng",
                            url: "https://search.isabelroses.com",
                            icon: "search",
                            icon_color: "var(--ctp-red)",
                        },
                        {
                            name: "webmail",
                            url: "https://webmail.isabelroses.com",
                            icon: "mail",
                            icon_color: "var(--ctp-green)",
                        },
                        {
                            name: "vaultwarden",
                            url: "https://vault.isabelroses.com",
                            icon: "letter-v",
                            icon_color: "var(--ctp-blue)",
                        },
                    ],
                },
            ],
        },
        {
            name: "dev",
            background_url: "src/img/banners/cbg-7.gif",
            categories: [
                {
                    name: "repositories",
                    links: [
                        {
                            name: "github",
                            url: "https://github.com/",
                            icon: "brand-github",
                            icon_color: "var(--ctp-mauve)",
                        },
                        {
                            name: "iztea",
                            url: "https://git.isabelroses.com/",
                            icon: "brand-git",
                            icon_color: "var(--ctp-green)",
                        }
                    ],
                },
                {
                    name: "nix",
                    links: [
                        {
                            name: "nixpkgs",
                            url: "https://github.com/NixOS/nixpkgs",
                            icon: "package",
                            icon_color: "var(--ctp-blue)",
                        },
                        {
                            name: "nixos wiki",
                            url: "https://nixos.wiki/",
                            icon: "book",
                            icon_color: "var(--ctp-blue)",
                        },
                        {
                            name: "flakes - this cute world",
                            url: "https://nixos-and-flakes.thiscute.world/nixos-with-flakes",
                            icon: "snowflake",
                            icon_color: "var(--ctp-blue)",
                        }
                    ],
                }
            ],
        },
        {
            name: "Misc",
            background_url: "src/img/banners/cbg-2.gif",
            categories: [
                {
                    name: "anime",
                    links: [
                        {
                            name: "anilist",
                            url: "https://anilist.co/home",
                            icon: "letter-a",
                            icon_color: "var(--ctp-blue)",
                        },
                        {
                            name: "anichart",
                            url: "https://anichart.net",
                            icon: "letter-a",
                            icon_color: "var(--ctp-teal)",
                        }
                    ],
                },
            ],
        },
    ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function () {
    var css = document.createElement('link');
    css.href = 'src/css/tabler-icons.min.css';
    css.rel = 'stylesheet';
    css.type = 'text/css';
    if (!CONFIG.config.localIcons)
        document.getElementsByTagName('head')[0].appendChild(css);
})();