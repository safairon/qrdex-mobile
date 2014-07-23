var delay = 1000;
var firstnames = ['Adam', 'Adolf', 'Adrian', 'Agata', 'Agaton', 'Agda', 'Agnes', 'Agneta', 'Aina', 'Ake', 'Albert', 'Albin', 'Alexander', 'Alexandra', 'Alfred', 'Algot', 'Alice', 'Alicia', 'Alma', 'Alrik', 'Alva', 'Alvar', 'Alvin', 'Amalia', 'Amanda', 'Ambrosius', 'Andreas', 'Anna', 'Annalie', 'Annalina', 'Anneli', 'Annika', 'Annike', 'Ansgar', 'Anton', 'Antonetta', 'Aron', 'Artur', 'Arvid', 'Astrid', 'Axel', 'Baltasar', 'Bartholomeus', 'Beata', 'Benedikt', 'Bengta', 'Benjamin', 'Berit', 'Berta', 'Bertil', 'Birger', 'Birgit', 'Birgitta', 'Bj?rn', 'Blenda', 'Botilda', 'Brigitta', 'Brite', 'Britta', 'Carina', 'Carine', 'Cecilia', 'Christina', 'Cristina', 'Dagmar', 'David', 'Ebba', 'Eddy', 'Edvard', 'Edvin', 'Eleonora', 'Elias', 'Elin', 'Elisabet', 'Ella', 'Ellen', 'Ellinor', 'Elliot', 'Elsa', 'Emelie', 'Emil', 'Emilia', 'Emma', 'Enar', 'Erik', 'Erika', 'Eskil', 'Eugen', 'Eva', 'Evelina', 'Evert', 'Fabian', 'Felicia', 'Felix', 'Filip', 'Filippa', 'Franz', 'Fredrik', 'Fredrika', 'Freja', 'Frida', 'Gabriel', 'Gabriella', 'Georg', 'Gerda', 'Gertrud', 'Goran', 'Gota', 'Gotilda', 'Greger', 'Greta', 'Gudrun', 'Gunilla', 'Gunnar', 'Gustav', 'Gustava', 'Halvard', 'Hampus', 'Hanna', 'Hans', 'Harald', 'Harry', 'Hedwig', 'Helena', 'Helga', 'Helmer', 'Henrik', 'Henrika', 'Herbert', 'Hermann', 'Hilda', 'Hildegard', 'Hilmar', 'Hjalmar', 'Hugo', 'Hulda', 'Ida', 'Inga', 'Ingalill', 'Ingegard', 'Ingemar', 'Inger', 'Ingrid', 'Ingvar', 'Isabella', 'Isabelle', 'Isak', 'Ivar', 'Jakob', 'Jan', 'Jens', 'Jesper', 'Joakim', 'Joel', 'Johan', 'Johanna', 'Jonas', 'Jonatan', 'Judit', 'Julia', 'Justus', 'Kajsa', 'Kalle', 'Karen', 'Karin', 'Karl', 'Karla', 'Karolina', 'Kasper', 'Katarina', 'Katrine', 'Kerstin', 'Kevin', 'Kjell', 'Klara', 'Klas', 'Konrad', 'Konstantin', 'Kristian', 'Kristina', 'Kristofer', 'Larry', 'Lars', 'Laura', 'Leif', 'Lena', 'Lennart', 'Leo', 'Liam', 'Lina', 'Linn', 'Linnea', 'Linus', 'Lisa', 'Lorens', 'Lorenz', 'Lotta', 'Lovisa', 'Ludvig', 'Lukas', 'Lydia', 'Magnus', 'Maj', 'Maja', 'Malena', 'Malene', 'Malin', 'Manfred', 'Margareta', 'Margit', 'Maria', 'Mark', 'Markus', 'Marta', 'Martina', 'Matilda', 'Matteus', 'Mattias', 'Max', 'Melker', 'Melvin', 'Mikael', 'Mikaela', 'Moa', 'Molly', 'Monika', 'Nanna', 'Natalie', 'Natanael', 'Nea', 'Nelly', 'Niklas', 'Nikolaus', 'Nils', 'Noah', 'Noak', 'Nora', 'Nova', 'Olaf', 'Olga', 'Oliver', 'Olivia', 'Olle', 'Olof', 'Oskar', 'Otto', 'Patrik', 'Paul', 'Paula', 'Paulina', 'Peder', 'Per', 'Petra', 'Petronella', 'Petter', 'Pia', 'Ragnar', 'Ragnhild', 'Rakel', 'Rasmus', 'Rigmora', 'Rikard', 'Roland', 'Rolf', 'Rosa', 'Rune', 'Rurik', 'Rutger', 'Saga', 'Samuel', 'Sara', 'Sebastian', 'Selma', 'Set', 'Sibylla', 'Signe', 'Signilda', 'Sigrid', 'Sigurd', 'Sigvard', 'Simon', 'Sofia', 'Solveig', 'Sonja', 'Soren', 'Staffan', 'Stefan', 'Stella', 'Sten', 'Stig', 'Stina', 'Sven', 'Synnove', 'Tage', 'Tea', 'Tekla', 'Teo', 'Teresia', 'Thor', 'Tilda', 'Tilde', 'Tindra', 'Tobias', 'Tora', 'Tore', 'Torgny', 'Torkel', 'Torsten', 'Tuva', 'Tyra', 'Ulf', 'Ulla', 'Ulrika', 'Valentin', 'Valfrid', 'Valter', 'Vega', 'Verner', 'Viggo', 'Viktor', 'Viktoria', 'Vilhelm', 'Vilhelmina', 'Vilma', 'Vincent', 'Viola', 'Viveka', 'William', 'Yngve'];
var lastnames = ['Aaker', 'Aamodt', 'Aamot', 'Aas', 'Aase', 'Aasen', 'Adell', 'Adolfson', 'Adolphson', 'Ahl', 'Ahlberg', 'Ahlborn', 'Ahlgren', 'Ahlin', 'Ahlman', 'Ahlquist', 'Ahlstedt', 'Ahlstrand', 'Ahlstrom', 'Aker', 'Akerman', 'Akerson', 'Akre', 'Al', 'Alberg', 'Allender', 'Allin', 'Allinder', 'Alm', 'Alman', 'Almen', 'Almer', 'Almgren', 'Almquist', 'Alms', 'Alquist', 'Alstrom', 'Alvin', 'Amdahl', 'Ameen', 'Anderberg', 'Andersson', 'Andre', 'Andreae', 'Andren', 'Anfinson', 'Angerman', 'Anker', 'Ansell', 'Antell', 'Appell', 'Ardell', 'Arn', 'Arndt', 'Arne', 'Arnell', 'Arning', 'Ashlin', 'Ask', 'Asker', 'Aslin', 'Asp', 'Asplund', 'Axelson', 'Backlund', 'Backman', 'Bagge', 'Balstad', 'Bank', 'Bankson', 'Barkman', 'Beckius', 'Beckman', 'Beckstrand', 'Bengtsson', 'Bennick', 'Bergdahl', 'Berge', 'Bergen', 'Bergendahl', 'Berger', 'Bergerson', 'Bergeson', 'Berggren', 'Bergin', 'Berglin', 'Berglund', 'Bergman', 'Bergmark', 'Bergner', 'Bergquist', 'Bergstedt', 'Bergsten', 'Bergstrand', 'Bergstrom', 'Bernson', 'Bertel', 'Bertels', 'Berthel', 'Berwald', 'Billing', 'Birch', 'Birger', 'Birk', 'Birke', 'Bjork', 'Bjorklund', 'Bjorkman', 'Bjorkquist', 'Bjorn', 'Bjornberg', 'Bjur', 'Bjurstrom', 'Black', 'Blaustein', 'Blink', 'Blix', 'Blixt', 'Bloch', 'Blohm', 'Blomberg', 'Blome', 'Blomgren', 'Blomquist', 'Blomstrom', 'Blondell', 'Blondin', 'Bloom', 'Bloome', 'Bloss', 'Blum', 'Blume', 'Blumenthal', 'Blundell', 'Bly', 'Bo', 'Bobek', 'Boberg', 'Bockman', 'Bodeen', 'Bodell', 'Boden', 'Bodin', 'Boe', 'Boehmer', 'Boesen', 'Bogren', 'Bohl', 'Bohlander', 'Bohlen', 'Bohlender', 'Bohlin', 'Bohman', 'Bohner', 'Bohr', 'Bohren', 'Bok', 'Bolander', 'Bold', 'Bolden', 'Boldin', 'Bolen', 'Bolin', 'Bolinder', 'Boll', 'Bolle', 'Bollin', 'Bolling', 'Bolten', 'Boman', 'Bond', 'Bondeson', 'Boner', 'Bong', 'Bonner', 'Boquist', 'Boren', 'Borger', 'Borgman', 'Borgstrom', 'Borr', 'Borreson', 'Bostrom', 'Boven', 'Braff', 'Bram', 'Brammer', 'Brand', 'Brandel', 'Brandell', 'Branden', 'Brandin', 'Branstad', 'Branstrom', 'Branting', 'Bratt', 'Bratten', 'Brauner', 'Breden', 'Bredenberg', 'Bremer', 'Brinck', 'Brink', 'Broberg', 'Brodd', 'Broden', 'Brodin', 'Brogren', 'Brolin', 'Broman', 'Brostrom', 'Bruhn', 'Bruhns', 'Brunell', 'Brunn', 'Bruse', 'Bruun', 'Bryngelson', 'Bursell', 'Busk', 'Buske', 'Bye', 'Byland', 'Bylund', 'Byman', 'Bystrom', 'Callander', 'Carbin', 'Carby', 'Carlberg', 'Carlin', 'Carling', 'Carlquist', 'Carlsson', 'Carlstedt', 'Carlstrom', 'Carnell', 'Casten', 'Castner', 'Cato', 'Ceder', 'Cederberg', 'Cedergren', 'Cederholm', 'Cederquist', 'Cederstrom', 'Charles', 'Christerson', 'Christoferson', 'Clarin', 'Classon', 'Collin', 'Cornell', 'Corvin', 'Cronquist', 'Curlin', 'Dahl', 'Dahlberg', 'Dahlen', 'Dahlgren', 'Dahlin', 'Dahling', 'Dahlman', 'Dahlquist', 'Dahlstrom', 'Dahmen', 'Dalberg', 'Dalen', 'Dalin', 'Dalman', 'Dam', 'Degn', 'Dovell', 'Eck', 'Eckdahl', 'Edberg', 'Edelberg', 'Edgren', 'Edholm', 'Edling', 'Edlund', 'Edquist', 'Edstrom', 'Ehn', 'Ek', 'Ekberg', 'Ekblad', 'Ekdahl', 'Ekholm', 'Eklof', 'Eklund', 'Ekman', 'Ekstrand', 'Ekstrom', 'Ekwall', 'Elander', 'Eld', 'Elg', 'Eliason', 'Ellstrom'];

exports.signup = function(params, callback) {
	setTimeout(function() {
		var res = {
			result : 'error',
			msg : 'Username "error" triggers login error'
		};
		if (params.email !== 'error') {
			res = {
				result : 'ok'
			};
			var profile = Alloy.createModel('profile', generateProfile());
			profile.set('firstName', params.firstName);
			profile.set('lastName', params.lastName);
			profile.set('email', params.email);
			profile.set('type', Alloy.Constants.ProfileType.L1);
			profile.save();
		}
		callback(res);
	}, delay);
};

exports.login = function(username, password, callback) {
	setTimeout(function() {
		var res = {
			result : 'error',
			msg : 'Username "error" triggers login error'
		};
		if (username !== 'error') {
			res = {
				result : 'ok'
			};
			var profile = Alloy.createModel('profile', generateProfile());
			profile.set('email', username);
			profile.set('type', Alloy.Constants.ProfileType.L1);
			profile.save();
		}
		callback(res);
	}, delay);
};

exports.logout = function(callback) {
	setTimeout(function() {
		Ti.API.info('logout from server.');
	}, delay);
};

exports.update = function(timestamp, callback) {
	Ti.API.info("call commit by:");
	Ti.API.info("\ttimestamp:" + timestamp);
	setTimeout(function() {
		var res = {
			result : 'ok',
			timestamp : new Date().getTime(),
			changeList : {
				update : {}
			}
		};

		if (res.timestamp - timestamp > 30000) {
			var profile = generateProfile();
			res.changeList.update.profile = [profile];
			res.changeList.update.address = [generateProfile(profile.id), generateProfile(profile.id), generateProfile(profile.id)];
			res.changeList.update.link = [generateProfile(profile.id), generateProfile(profile.id), generateProfile(profile.id)];
		}

		Ti.API.info("return:\r\t" + JSON.stringify(res));

		callback(res);
	}, delay);
};

exports.commit = function(req, callback) {
	Ti.API.info("call commit by:");
	Ti.API.info("\treq:" + JSON.stringify(req));
	setTimeout(function() {
		var res = {
			result : 'ok',
			changeList : {
				"delete" : {},
				"update" : {},
				"new" : {}
			}
		};

		if (req["new"]) {
			_.each(req["new"], function(list, table) {
				var newList = {};
				_.each(list, function(data) {
					newList[data.id] = data;
					newList[data.id].id = nextVal();
				});

				res.changeList["new"][table] = newList;
			});
		}

		if (req["update"]) {
			res.changeList["update"] = req["update"];
		}

		if (req["delete"]) {
			res.changeList["delete"] = req["delete"];
		}

		Ti.API.info("return:\r\t" + JSON.stringify(res));

		callback(res);
	}, delay);
};

function nextVal() {
	var val = Ti.App.Properties.getInt('seq', 0);
	Ti.App.Properties.setInt('seq', ++val);
	return val;
}

function generateProfile(argument) {
	var sequence = nextVal();

	return {
		id : sequence,
		firstName : sample(firstnames),
		middelName : 'middelName#' + sequence,
		lastName : sample(lastnames),
		email : 'email#' + sequence + '@gmail.com',
		activityStatus : 0,
		profileStatus : 0,
		picturePath : '/mock/profile/' + _.random(1, 29) + '.png',
		companyName : 'companyName#' + sequence,
		companyLogo : '/mock/brand/' + _.random(1, 15) + '.png',
		jobTitle : 'jobTitle#' + sequence,
		landLinePhone : 'landLinePhone#' + sequence,
		businessPhone : 'businessPhone#' + sequence,
		mobilePhone : 'mobilePhone#' + sequence,
		type : Alloy.Constants.ProfileType.L2
	};
}

function generateAddress(profileID) {
	var sequence = nextVal();
	return {
		id : sequence,
		profileID : profileID,
		pobox : "pobox#" + sequence,
		address : "address#" + sequence
	};
}

function generateLink(profileID) {
	var sequence = nextVal();
	return {
		id : sequence,
		profileID : profileID,
		type : sequence % 6,
		url : "http://example.com/#" + sequence,
	};
}

function sample(obj, n, guard) {
	if (n == null || guard) {
		if (obj.length !== +obj.length)
			obj = _.values(obj);
		return obj[_.random(obj.length - 1)];
	}
	return _.shuffle(obj).slice(0, Math.max(0, n));
};