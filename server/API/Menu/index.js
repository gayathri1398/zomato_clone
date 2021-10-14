import express from 'express';

import passport from 'passport';

// validation
import { ValidateMenuId,ValidateImageId } from '../../Validation/menu';



// DatabaseModels
import { ImageModel } from '../../database/image';
import { MenuModel } from '../../database/menu';


const Router = express.Router();

// routes
/*
Route              /list
Des                get  the menu list based on particular id
Params             _id 
Access            Public
Method            GET
*/

Router.get ("/list/:_id", async(req,res)=>{
    try {
        await ValidateMenuId(req.params);
        const {_id} = req.params;
        const menus = await MenuModel.findById(_id);
        return res.json({menus});
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
});


/*
Route              /image
Des                get  the menu images based on id
Params             _id 
Access            Public
Method            GET
*/
Router.get("/image/:_id", async(req,res)=>{
    try {
        await ValidateImageId(req.params);
        const {_id} = req.params;
        const menus = await ImageModel.findOne(_id);
        return res.json({menus});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
});

/*
Route                /
Des                  Add a new menu
Params               new
Access               Private
Method               POST
*/

Router.post("/new",async(req,res)=>{
   try {
       const {menuData} = req.body;
       if (menuData._id){
           const updatedMenu = await MenuModel.findByIdAndUpdate(
               menuData._id,
               {$push:{
                   menus :{$each: menuData.menus}
                }
            },
            {new:true}
            )
       };
       const createNewMenu = await MenuModel.create(menuData);
       return res.json({menu:createNewMenu} );
   } catch (error) {
       return res.status(500).json({error:error.message});
   }
});

export default Router;

