// // const dataReducer = async (state = '', action) =>{
// //     const func = async function () {
// //         const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
// //         const filteredCoins = await res.json(); 
// //         return filteredCoins;
// //     }
// //     var e;
// //     setTimeout( async () => {
// //         e = func();
// //     }, 1000);

// import { combineReducers } from "redux";

// //     return e;
// // }




// // import axios from "axios";

// // const FETCH_DATA = "FETCH_DATA";

// // const initialState = {
// // 	cryptos: [
// // 		{
// // 			lastPrice: null,
// // 		},
// // 	],
// // 	isLoading: true,
// // };

// // //action
// // const fetchData = (payload) => ({
// // 	type: FETCH_DATA,
// // 	payload,
// // });

// // export const fetchCryptos = () => async (dispatch) => {
// // 	const response = await axios.get(
// // 		"https://api.binance.com/api/v1/ticker/24hr"
// // 	);
// // 	const request = await response.data;
// // 	dispatch(fetchData(request));
// // };

// // const reducers = (state = initialState, action) => {
// // 	switch (action.type) {
// // 		case FETCH_DATA:
// // 			return {
// // 				...state,
// // 				isLoading: false,
// // 				cryptos: action.payload,
// // 			};
// // 		default:
// // 			return state;
// // 	}
// // };

// // export default reducers;


// export const dataFetcher = (state = {}, action) => {
//     switch (action.type) {
//         case FETCH_COIN:
//             return setTimeout( async () => {
//                 const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
//                 state = await res.json();                
//                 return state;
//             }, 1000);
//         default:
//             break;
//     }
// }

// export const reducer = combineReducers({
// 	dataFetcher,
// });