/******  Model  ******/
var model ={
    currentCat : null,
    cats : [
        {
            clickCount : 0,
            name : "pussy",
            imgSrc : 'img/cat.jpg',
        
        },
        {
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'img/cat1.jpg',
            
        },
        {   
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'img/cat2.jpg',
            
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'img/cat3.jpg',
            
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'img/cat4.jpg',
            
        }


    ]
};

/****** Octopus  ******/
 var Octopus = {
    init: function(){
        model.currentCat = model.cats[0];
        catListView.init();
        catView.init();
    },
    getCurrentCat : function(){
        return model.currentCat;
    },

    getCats : function(){
        return model.cats;
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

    init: function(){
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        this.catImageElem.addEventListener('click' , function(){
            Octopus.incrementCounter();
        });
        this.render();
    },

    render: function(){
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
        var cats = Octopus.getCats();

        //empty the cat list
        this.catListElem.innerHTML = " ";

        for (i=0 ; i < cats.length ; i++) {
            cat = cats[i];

            elem = document.createElement('li')
            elem.textContent= cat.name;
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    Octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

// make it go!
Octopus.init();



