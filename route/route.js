const express =require ('express');
const router =express.Router();
const Book=require('../models/shema')
const{get_book }=require('../controleur/script');
const {post_book} = require('../controleur/script');
const{delete_book}=require('../controleur/script')
const{put_book}=require('../controleur/script')
const{get_details}=require('../controleur/script')

router.get('/',get_book);
router.post('/',post_book);
router.put('/:id',put_book);
router.get('/:id',get_details);
router.delete('/:id',delete_book);

module.exports= router;