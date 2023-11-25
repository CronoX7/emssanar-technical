const SoftwareModel = require("../models/softwareModel");

const SoftwaresController = {
    readAll: async(request, response) => {
        try{
            const allSoftwares= await SoftwareModel.find();
            const copySoftwares = allSoftwares.map(
              ({_id, nameSoft, authorSoft, nationalitySoft, priceSoft, yearSoft}) => {
                return{_id, nameSoft, authorSoft, nationalitySoft, priceSoft, yearSoft}
              }
            )
            response.json(copySoftwares);
        }catch(error){
            response.send("was ocurred an error");
        }
        
          },

    create: async(request, response) => {
      try {
        const { nameSoft, authorSoft, nationalitySoft, priceSoft, yearSoft} = request.body;
        const newSoftware = new SoftwareModel({
          nameSoft,
          authorSoft,
          nationalitySoft,
          priceSoft,
          yearSoft          
        });
  
        const createSoftware = await newSoftware.save();
        if (createSoftware) {
          response.json(createSoftware);
        } else {
          response.json("Something was wrong");
        }
      } catch (error) {}
    },  

    update: async (request, response) => {
      try {
        const updateSoftware= await SoftwareModel.findByIdAndUpdate(
            request.params.id,
            request.body
        );

        if (updateSoftware){
            response.json({ data: request.body, msg: "Software was updated"})
        }else{
            response.json({msj: "Software wasn't updated"}).status(500);
        }

    } catch (error) {
        
    }
    },


    remove: async(request, response) => {
      try {
        const removeSoftware = await SoftwareModel.findByIdAndDelete(
            request.params.id            
        )
        if (removeSoftware){
            response.json({msg: "product was deleted"})
        }else{
            response.json({msg: "product wasn't deleted"})            
        }

    } catch (error) {
        
    }

    }


}

module.exports = SoftwaresController;