const MOCKURL = 'http://www.linda.com/'; //mock模拟的地址
const SERVERURL = 'http://localhost:3000/' ; //真实的地址

const URL={
    getVarietyItem: MOCKURL + 'getVarietyItem',
    registUser: SERVERURL +'user/registUser',
    loginUser: SERVERURL +'user/loginUser',
    getTypes: SERVERURL +'type/getTypes',
    getProductByType: SERVERURL +'product/getProductByType',
<<<<<<< HEAD
    getDetail: SERVERURL +'product/getDetail',
    addCart:SERVERURL +'cart/addCart',
    getCart:SERVERURL +'cart/getCart',
    delCart:SERVERURL +'cart/delCart'
=======
    getDetail: SERVERURL+'product/getDetail',
    addCart:SERVERURL+'cart/addCart'
>>>>>>> d93c51217efaa84e1ef1e2eee7958be4ab0cbcf6
};

export default URL;
