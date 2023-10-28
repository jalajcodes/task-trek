const showInfoText = (filter, search, tag, currentFilter, status) => {
  return filter
    ? `Filtered to show - "${currentFilter(filter).join(", ")}"`
    : search
    ? `Showing results for search - "${search}"`
    : tag
    ? `Filtered by tag - "${tag.toLowerCase()}"`
    : status
    ? `Filtered by status - "${status.toLowerCase()}"`
    : "Showing - All";
};

export default showInfoText;
