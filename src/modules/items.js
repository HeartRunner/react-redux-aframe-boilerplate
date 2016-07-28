function randomLoc() {
  return (Math.random() - 0.5) * 12;
}

function generatePos() {
  return [randomLoc(), randomLoc(), 12 + randomLoc()];
}

const initialState = {
  items: [{
    text: 'React',
    pos: generatePos(),
  }, {
    text: 'Redux',
    pos: generatePos(),
  }, {
    text: 'React router',
    pos: generatePos(),
  }, {
    text: 'Babel 6',
    pos: generatePos(),
  }, {
    text: 'Bootstrap webpack',
    pos: generatePos(),
  }, {
    text: 'Sass modules (sass-loader css-loader style-loader)',
    pos: generatePos(),
  }, {
    text: 'React transform',
    pos: generatePos(),
  }, {
    text: 'Redux logger',
    pos: generatePos(),
  }, {
    text: 'React document meta',
    pos: generatePos(),
  }, {
    text: 'Redux form',
    pos: generatePos(),
  }, {
    text: 'Redux simple router',
    pos: generatePos(),
  }, {
    text: 'Karma',
    pos: generatePos(),
  }, {
    text: 'Mocha',
    pos: generatePos(),
  }, {
    text: 'Server-side rendering',
    pos: generatePos(),
  }],
};

export function items(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [
          ...state.items, {
            pos: action.pos,
            text: action.text,
          },
        ],
      };

    case 'DELETE_ITEM':
      return {
        ...state,
        items: [
          ...state.items.slice(0, action.index),
          ...state.items.slice(+action.index + 1),
        ],
      };

    default:
      return state;
  }
}


export function addItem() {
  return {
    type: 'ADD_ITEM',
    pos: generatePos(),
    text: '0 0' + Math.random(),
  };
}

export function delItem(index) {
  return {
    type: 'DELETE_ITEM',
    index,
  };
}
