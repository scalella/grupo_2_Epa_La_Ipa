const indexController = {
    home: function (req, res){
        res.render('home');
    },
    quienes: function (req, res){
        res.render('quienes');
    },
    home2: function (req, res){
        res.render('home2');
    }

}
module.exports= indexController;