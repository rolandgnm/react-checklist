
// Selector to get items with a list name
export const getItemsWithName = (items, name) => {
    return items.filter((item) => item.listName === name)
}