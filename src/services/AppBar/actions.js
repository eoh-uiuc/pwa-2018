export const SHOW_BACK_ARROW = 'SHOW_BACK_ARROW';
export const HIDE_BACK_ARROW = 'HIDE_BACK_ARROW';
export const SET_PAGE = 'SET_PAGE';

// to: route to redirect to when clicked
export function showBackArrow(to) {
  return {
    type: SHOW_BACK_ARROW,
    to,
  };
}

export function hideBackArrow() {
  return {
    type: HIDE_BACK_ARROW,
  };
}

export function setPage(title) {
  return {
    type: SET_PAGE,
    title,
  };
}
