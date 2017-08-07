/*   Model  */
var model ={
    currentCat : null;
    cat : [
        {
            clickCounter : 0;
            name : "pussy";
            imgSrc : 'img/434164568_fea0ad4013_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/4154543904_6e2428c421_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904'
        },
        {   
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/22252709_010df3379e_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709'
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/1413379559_412a540d29_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559'
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/9648464288_2516b35537_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288'
        }


    ]
};

/* Octopus  */
 var Octopus = {
    init :function(){
        model.currentCat = model.cat[0];
        catView();

    }
    getCurrentCat : function(){
        model.currentCat;
    },

    incrementCounter:function(){
        model.currentCat.clickCount++;
        catView.render();
    }
 }

 var catView = {

    init : function(){
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        this.catImageElem.addEventListner('click' , function(){
            Octopus.incrementCounter();
        });
        this.render();
    },

    render : function(){
        var currentCat = Octopus.getCurrentCat();
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
        this.countElem.textContent = currentCat.clickCount;


    }


 }

