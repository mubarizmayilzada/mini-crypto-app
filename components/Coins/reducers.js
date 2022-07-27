const dataReducer = async (state = '', action) =>{
    const func = async function () {
        const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        const filteredCoins = await res.json(); 
        return filteredCoins;
    }
    var e;
    setTimeout( async () => {
        e = func();
    }, 1000);

    return e;
}