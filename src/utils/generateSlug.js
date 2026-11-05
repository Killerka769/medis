export function generateSlug(text) {
  const dictionary = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
    'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
    'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch',
    'ь': '', 'ы': 'y', 'ъ': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
  };

  return text
    .toString()
    .toLowerCase()
    .trim()
    .split('')
    .map(char => dictionary[char] !== undefined ? dictionary[char] : char)
    .join('')
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')       
    .replace(/-+/g, '-')         
    .replace(/^-+|-+$/g, '');  
}
