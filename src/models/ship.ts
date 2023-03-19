type Ship = {
    level: string;
    name: string;
    icons: Icons;
    tags: Tags[];
    localization: Localization;
    nation: string;
}

type Localization = {
    shortmark: Locale;
    description: Locale;
    mark: Locale;
}

type Icons = Record<string, string>;

type Locale = Record<string, string>;

type Tags = string;

export type {
    Ship
}