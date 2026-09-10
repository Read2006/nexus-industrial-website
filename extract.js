const fs = require('fs');
const content = fs.readFileSync('temp_page.html', 'utf8');
console.log('File size:', content.length);

const nextDataMatch = content.match(/<script id="__NEXT_DATA__" type="application\/json">(\{.*?\})<\/script>/);
if (nextDataMatch) {
  console.log('Found NEXT_DATA. Size:', nextDataMatch[1].length);
  fs.writeFileSync('next_data.json', nextDataMatch[1]);
} else {
  console.log('NEXT_DATA not found. Looking for raw products or tabs.');
  const tabs = content.match(/<[^>]+tab[^>]*>([^<]+)/gi);
  if(tabs) console.log('Possible tabs:', tabs.slice(0,20));
}
