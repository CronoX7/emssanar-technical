const{Schema, model} = require ("mongoose");

const softwaresSchema = new Schema(
    {
        nameSoft: { type: String, require: true},
        authorSoft:{ type: String, require: true},
        nationalitySoft: { type: String, require: true},
        priceSoft: { type: Number, require: true},
        yearSoft: { type: Number, require: true},
               
    }
);

module.exports= model("SoftwareModel", softwaresSchema);