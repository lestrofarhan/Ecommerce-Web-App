const addProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            category,
            subCategory,
            price,
            sizes,
            bestSeller
        } = req.body
        
        console.log("Files received:", req.files);
        
        const image1 = req.files.image1[0]
        const image2 = req.files.image2[0]
        const image3 = req.files.image3[0]
        const image4 = req.files.image4[0]
        


        console.log(name,
            description,
            category,
            subCategory,
            price,
            sizes,
            bestSeller);
        console.log(image1,
            image2, image3,
            image4
            );
        
        res.send("fsdahfkjash")
        
    } catch (error) {
        console.error(error)
        res.json({
            message: error.message || error,
            status: false
        })
    }
}

const listproducts = async (req, res) => {

}
const removeProduct = async (req, res) => {

}
const singleProduct = async (req, res) => {
    
}

export { addProduct, listproducts, removeProduct, singleProduct }