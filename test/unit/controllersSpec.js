describe('AnimCat controllers', function() {
 
  describe('AnimListCtrl', function(){
 
    it('should create "animes" items with 3 animes', function() {
      var scope = {},
          ctrl = new AnimListCtrl(scope);
 
      expect(scope.animes.length).toBe(3);
    });
  });
});