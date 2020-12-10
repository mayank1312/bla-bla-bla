function isTouching(abc,def){
    if (abc.x - def.x < def.width/2 + abc.width/2
      && def.x - abc.x < def.width/2 + abc.width/2
      && abc.y - def.y < def.height/2 + abc.height/2
      && def.y - abc.y < def.height/2 + abc.height/2){
    //return  true;
    abc.shapeColor = "red";
      def.shapeColor = "red";  
  }else{
      //return false;
      abc.shapeColor = "green";
        def.shapeColor = "green";
    }
  }
  