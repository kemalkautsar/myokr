exports.list = function(req,res){
	req.getConnection(function(err,connection){
		console.log(connection);
		var query = connection.query('SELECT kr.*, obj.* FROM keyResult kr, objective obj', 
			function(err,rows){
				if(err)
					console.log('error selecting db');
				console.log(rows.obj);
				res.render('okr',{page_title:"okr list",data:rows, obj_name:rows[0].obj_name});
			});
	});
};

exports.add = function(req,res){
	res.render('add Objective',{page_title:"add objective"});
};

exports.edit = function(req,res){
	var id = req.params.id;

	req.getConnection(function(err,connection){
		var query = connection.query('SELECT * FROM keyResult WHERE key_id = ?',[id], function(err,rows){
			if (err)
				console.log("error selecting : %s", err);
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
		connection.query("DELETE FROM keyResult WHERE id = ?", [id],function(err,rows){
			if(err)
				console.log("error deleting : s", err);
			res.redirect('/okr');
		});
	});
};
