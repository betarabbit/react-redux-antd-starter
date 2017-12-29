import { TOGGLE_MENU } from '../actions/menu-actions';

const menuDefaultState = {
  collapsed: false,
};

export default function (state = menuDefaultState, action) {
  switch (action.type) {
    case TOGGLE_MENU: {
      const collapsed = !state.collapsed;

      return {
        ...state,
        collapsed,
      };
    }

    default: {
      return state;
    }
  }
}
