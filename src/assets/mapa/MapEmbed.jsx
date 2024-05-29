
function MapEmbed() {
  return (
    <div>
      <iframe
        
        className='w-full h-[356px]'
        src="https://www.openstreetmap.org/export/embed.html?bbox=-96.07604026794435%2C19.045283764612428%2C-96.04685783386232%2C19.066782457506083&amp;layer=mapnik&amp;marker=19.0560731814736%2C-96.06144905090332"
        style={{ border: '1px solid black' }}
        title="OpenStreetMap"
      ></iframe>
    </div>
  );
}

export default MapEmbed;
