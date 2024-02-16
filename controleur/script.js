const Book = require('../models/shema')


function get_book(req,res){
   
    Book.find()
    .then((result)=>{
        console.log(result)
        res.json({book:result})
    })
    .catch((err)=>{
        res.status(400).json('Erreur:'+err)
    }) 
};

function get_details(req, res) {
    const id = req.params.id;
    Book.findById(id)
        .then((book) => {
                    
                res.json({ book: book });
        })
        .catch((err) => {
            res.status(400).json('Erreur:' + err);
        });
}



function post_book(req,res){
    const book=new Book(req.body);
    book.save()
    .then((result)=>{
        res.status(200).json({message:'book add'})
    }).catch((err)=>{
        console.log(err);
    })
}

function delete_book(req,res){
    const id=req.params.id
    Book.findByIdAndDelete(id)
    .then((result)=>{
     res.json({message:'book delete'})
    }).catch((err)=>{
     console.log(err);
 });
}

function put_book(req, res) {
    const bookId = req.params.id; // Supposons que l'ID du livre à mettre à jour soit passé en paramètre d'URL
    const update = req.body; // Les données de mise à jour du livre sont généralement envoyées dans le corps de la requête

    Book.findByIdAndUpdate(bookId, update, { new: true }) // Le paramètre { new: true } retourne le document mis à jour
        .then((updatedBook) => {
            if (!updatedBook) {
                return res.status(404).json({ message: "Livre non trouvé." });
            }
            console.log("Livre mis à jour :", updatedBook);
            res.json({ message: "Livre mis à jour avec succès.", book: updatedBook });
        })
        .catch((err) => {
            res.status(400).json({ message: "Erreur lors de la mise à jour du livre.", error: err });
        });
}


module.exports={get_book, post_book,delete_book, put_book,get_details}