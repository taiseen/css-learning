// Helper function to safely highlight matching text without breaking the UI
const highLightText = (text, match) => {

    if (!match) return text; // If no match, return original text

    const regex = new RegExp(`(${match})`, 'gi'); // Case-insensitive regex for the match
    const splitText = text.split(regex); // Split text by the matching parts

    // Wrap matching parts in span and reassemble
    return splitText.map((part) => regex.test(part)
        ? `<span class="highlight">${part}</span>`
        : part
    ).join('');

};

export default highLightText;