function AnimListCtrl($scope){
	$scope.animes = [
		{"num": 0, "name": "Name 0", "snippet": "Snippet about anim0", "category": "0"},
		{"num": 1, "name": "Name 9", "snippet": "Snippet about anim1", "category": "Амфибии"},
		{"num": 2, "name": "Name 8", "snippet": "Snippet about anim2", "category": "Пресмыкающиеся"},
		
		{"num": 3, "name": "Name 7", "snippet": "Snippet about anim6", "category": "Млекопитающие"},
		{"num": 4, "name": "Name 6", "snippet": "Snippet about anim7", "category": "Птицы"},
		{"num": 5, "name": "Name 5", "snippet": "Snippet about anim8", "category": "Рыбы"},
		{"num": 6, "name": "Name 4", "snippet": "Snippet about anim9", "category": "Разное"},
		
		{"num": 7, "name": "Name 3", "snippet": "Snippet about anim3", "category": "Изделия из шкур"},
		{"num": 8, "name": "Name 2", "snippet": "Snippet about anim4", "category": "Костные трофеи"},				{"num": 9, "name": "Name 1", "snippet": "Snippet about anim5", "category": "Элементы декора"},
	];
	
	$scope.animProp = '-num';
}