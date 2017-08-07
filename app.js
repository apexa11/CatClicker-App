/******  Model  ******/
var model ={
    currentCat : null;
    cats : [
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

/****** Octopus  ******/
 var Octopus = {
    init :function(){
        model.currentCat = model.cat[0];
        catView();
    },
    getCurrentCat : function(){
        model.currentCat;
    },

    getCats : function(){
        model.cats;
    },

    setCurrentCat : function(cat){
        model.currentCat = cat;
    },

    incrementCounter:function(){
        model.currentCat.clickCount++;
        catView.render();
    }
 };


/***** View *****/
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
};

var catListView = {
    init :function(){
        this.catListElem = document.getElementById("cat-list");
        this.render();
    },

    render :function(){
        var cat , elem , i;
        //get all the cats we' ll be rendering from octopus
        var cats = Octopus.getCurrentCat();

        //empty the cat list
        his.catListElem.innerHTML = " ";

        for (i=0 ; i < cats.length ; i++) {
            cat = cats[i];

            elem = document.createElement('li')
            elem.textContent= cats.name;
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

// make it go!
octopus.init();

        }


    }
}

