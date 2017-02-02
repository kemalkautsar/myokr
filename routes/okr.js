exports.list = function(req,res){
	req.getConnection(function(err,connection){
		console.log(connection);
	    var da_query = {sql: 'SELECT * FROM keyResult'} ;
	    var query = connection.query(da_query,  
			function(err,rows){
				if(err)
					console.log('error selecting db');

				var tot = 0;
				for (var i = 0 ; i < rows.length ; i++){
					tot = tot + rows[i].key_score;
				};
				var avg = (tot/rows.length).toFixed(2);
				res.render('okr',{page_title:"okr list",data:rows,avg:avg});
			});
	});
};

exports.add = function(req,res){
	res.render('add_okr',{page_title:"add okr"});
};

exports.edit = function(req,res){
	var id = req.params.id;

	req.getConnection(function(err,connection){
		var query = connection.query('SELECT * FROM keyResult WHERE key_id = ?',[id], function(err,rows){
			if (err)
				console.log("error selecting : %s", err);
			console.log(rows);
			res.render('edit_okr',{page_title:"Edit OKR", data:rows});
		});
	});
};

exports.save = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    
    req.getConnection(function (err, connection) {
        
        var data = {
            key_name	: input.key_name,
			key_score	: input.key_score
        
        };
        
        var query = connection.query("INSERT INTO keyResult set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
          res.redirect('/okr');
          
        });
        
       // console.log(query.sql); get raw query
    
    });
};

exports.save_edit = function(req,res){
	var input = JSON.parse(JSON.stringify(req.body));
	var id = req.params.id;

	req.getConnection(function(err,connection){
		var data = {
			key_name	: input.key_name,
			key_score	: input.key_score
		};

		connection.query("UPDATE keyResult set ? WHERE key_id = ? ",[data,id], function(err,rows){
			if(err)
				console.log("error updating : %s ",err);
			res.redirect('/okr');
		});
	});
};

exports.delete_okr = function(req,res){
	var id = req.params.id;

	req.getConnection(function(err,connection){
		connection.query("DELETE FROM keyResult WHERE key_id = ?", [id],function(err,rows){
			if(err)
				console.log("error deleting : s", err);
			res.redirect('/okr');
		});
	});
};
