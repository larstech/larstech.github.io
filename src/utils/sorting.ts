/**
 * Creates a comparator for sorting Astro collection entries by a given data field
 * @param field Field in the data object to sort by
 * @param desc If true, sorts in descending order (default: false)
 * @returns Comparator function for use with Array.sort()
 */
export const sortBy = <T>(field: keyof T, desc = false) =>
    (a: any, b: any) => desc
        ? b.data[field] - a.data[field]
        : a.data[field] - b.data[field];
