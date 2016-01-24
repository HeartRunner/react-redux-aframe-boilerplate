function randomLoc() {
  return (Math.random() - 0.5) * 15;
}

const initialState = {
  items: [{
    text: 'React',
    pos: `${randomLoc()} ${randomLoc()} ${randomLoc()}`,
  }, {
    text: 'Redux',
    pos: `${randomLoc()} ${randomLoc()} ${randomLoc()}`,
  }, {
    text: 'React router',
    pos: `${randomLoc()} ${randomLoc()} ${randomLoc()}`,
  }, {
    text: 'Babel 6',
    pos: `${randomLoc()} ${randomLoc()} ${randomLoc()}`,
  }, {
    text: 'Bootstrap webpack',
    pos: `${randomLoc()} ${randomLoc()} ${randomLoc()}`,
  }, {
    text: 'Sass modules (sass-loader css-loader style-loader)',
    pos: `${randomLoc()} ${randomLoc()} ${randomLoc()}`,
  }, {
    text: 'React transform',
    pos: `${randomLoc()} ${randomLoc()} ${randomLoc()}`,
  }, {
    text: 'Redux logger',
    pos: `${randomLoc()} ${randomLoc()} ${randomLoc()}`,
  }, {
    text: 'React document meta',
    pos: `${randomLoc()} ${randomLoc()} ${randomLoc()}`,
  }, {
    text: 'Redux form',
    pos: `${randomLoc()} ${randomLoc()} ${randomLoc()}`,
  }, {
    text: 'Redux simple router',
    pos: `${randomLoc()} ${randomLoc()} ${randomLoc()}`,
  }, {
    text: 'Karma',
    pos: `${randomLoc()} ${randomLoc()} ${randomLoc()}`,
  }, {
    text: 'Mocha',
    pos: `${randomLoc()} ${randomLoc()} ${randomLoc()}`,
  }, {
    text: 'Server-side rendering',
    pos: `${randomLoc()} ${randomLoc()} ${randomLoc()}`,
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
    pos: `${randomLoc()} ${randomLoc()} ${randomLoc()}`,
  };
}

export function delItem(index) {
  return {
    type: 'DELETE_ITEM',
    index,
  };
}
