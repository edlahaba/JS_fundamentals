//
// Destructure this nested data color into two variables save in them two variables
// orange and red
//

let suspects = [
  {
    name: 'Rusty',
    color: 'orange',
  },
  {
    name: 'Miss Scarlet',
    color: 'red'
  }
]

let [color1, color2] = [suspects[0].color, suspects[1].color];
