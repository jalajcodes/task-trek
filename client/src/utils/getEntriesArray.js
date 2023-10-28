const getEntriesArray = (entries, search, tag, status) => {
  return search
    ? entries.filter(
        (e) =>
          e.title.toLowerCase().includes(search.toLowerCase()) ||
          e.description.toLowerCase().includes(search.toLowerCase()) ||
          e.tags.includes(search.toLowerCase()) ||
          e.status.toLowerCase().includes(search.toLowerCase())
      )
    : tag
    ? entries.filter((e) => e.tags.includes(tag.toLowerCase()))
    : status
    ? entries.filter((e) => e.status === status.toLowerCase())
    : entries;
};

export default getEntriesArray;
