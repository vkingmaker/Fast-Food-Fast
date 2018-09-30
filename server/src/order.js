import mock from './mock/db';
let db = mock();

export default {
  getOrderById:(req,res) => {
    let particularOrder = db.filter((value)=>{
        if (value.id === +req.params.id){
            return value;
        }
    });
    res.json(particularOrder);
}
}
