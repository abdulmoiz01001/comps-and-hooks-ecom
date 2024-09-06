export const HOST = import.meta.env.VITE_SERVER_API_URL as string;
export const AUTH_ROUTES = 'api/auth';
export const PRODUCTS_ROUTES = 'api/products';
export const OTP_ROUTES = 'api/otp';
export const PRODUCT_ROUTES = 'api/product';
export const CART_ROUTES = 'api/cart';

export const PRODUCT_CHECKOUT_ROUTE = `${PRODUCTS_ROUTES}/checkout`;
export const GET_PRODUCTS_ROUTE = `${PRODUCTS_ROUTES}`;
export const ADD_TO_CART_ROUTE = `${PRODUCTS_ROUTES}/addToCart`;
export const REMOVE_ADD_TO_CART_ROUTE = `${PRODUCTS_ROUTES}/removeFromCart`;
export const CREATE_PRODUCT_ROUTE = `${PRODUCT_ROUTES}/create`;
export const ADD_TO_WISHLIST_ROUTE = `${PRODUCTS_ROUTES}/addToWishlist`;
export const DELETE_PRODUCT_ROUTE = `${PRODUCT_ROUTES}/delete`;
export const UPDATE_PRODUCT_ROUTE = `${PRODUCT_ROUTES}/edit`;
export const GET_PRODUCT_BY_ID_ROUTE = `${PRODUCT_ROUTES}`;

export const LOGIN_ROUTE = `${AUTH_ROUTES}/login`;
export const SIGNUP_ROUTE = `${AUTH_ROUTES}/register`;
export const VERIFY_USER_ROUTE = `${AUTH_ROUTES}/verification`;
export const LOGOUT_ROUTE = `${AUTH_ROUTES}/logout`;
