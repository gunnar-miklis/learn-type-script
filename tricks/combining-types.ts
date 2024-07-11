type Animal = '🐶'|'🐱'|'🐮'|'🐷'|'🐭'|'🐻';
type Country = 'BE'|'DK'|'FR'|'DE'|'IT'|'PT'|'SE'

type AnimalCountry = `${Animal}-${Country}`;

// intellisense will suggest all possible combinations in the dropdown menu
// '🐶-BE', '🐶-DK', '🐶-FR', ..., '🐱-BE', '🐱-DK', ..., '🐮-BE', ...

const swedishDog: AnimalCountry = '🐶-SE';
const belgiumCow: AnimalCountry = '🐮-BE';
