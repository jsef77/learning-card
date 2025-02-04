
interface ColourMap {
    [hex: string]: string
}

const colourmap: ColourMap = {
    // Light mode
    "#ffdce1": "var(--ruby-4)",
    "#e1e9ff": "var(--indigo-4)",
    "#ccf3ea": "var(--teal-4)",
    "#e6e9e8": "var(--gray-4)",

    //Dark mode
    "#4e1325": "var(--ruby-4)",
    "#1d2e62": "var(--indigo-4)",
    "#013b37": "var(--teal-4)",
    "#222222": "var(--gray-4)",

    // init
    "": "var(--gray-4)"
}

export default colourmap