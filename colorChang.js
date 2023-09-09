const colors = [
    { id: 1, name: 'Red', hexCode: '#FF0000' },
    { id: 2, name: 'Green', hexCode: '#00FF00' },
    { id: 3, name: 'Blue', hexCode: '#0000FF' },
    { id: 4, name: 'Yellow', hexCode: '#FFFF00' },
    { id: 5, name: 'Cyan', hexCode: '#00FFFF' },
  ];
  

  function findColorByName(name) {
    for (let i = 0; i < colors.length; i++) {
        if (name === colors[i].name) {
            return colors[i]
        }
    }
  }

  const selectedColor = 'Blue'
  const setColor = findColorByName(selectedColor)

  if (setColor) {
    console.log(`สี ${setColor?.name} CodeHex ${setColor?.hexCode}`); 
  } else {
    console.log(`หาไม่เจอ`);
  }
