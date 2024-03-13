import { configureStore, createReducer} from "@reduxjs/toolkit";
import cartreducer from "./Cartslice";


const Appstore = configureStore({
reducer:
{
    Cart:cartreducer,
}

  
});

export default Appstore;