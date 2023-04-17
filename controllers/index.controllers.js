const indexCTrl = {};

indexCTrl.renderIndex = (req, res) => {
    res.render('index');
}

indexCTrl.renderAbout = (req,res) =>{
    res.render('about');
}

module.exports = indexCTrl;