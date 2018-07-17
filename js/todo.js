$(document)
    .ready(function () {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        function initOriginal(){
            $("#filters").find("li").eq(0).children("a").removeClass("selected");
            $("#filters").find("li").eq(1).children("a").removeClass("selected");
            $("#filters").find("li").eq(2).children("a").removeClass("selected");
            $("#list-content").find("li").show();
        }

        // code to be implemented
        $(document).delegate(".done-todo", "click", function() {
           $(this).parent().toggleClass("checked");
        })

        $("#button").click(function(){
            value = $(".input-text").val();
            if(value === ''){
                alert('Can not empty!');
                return;
            }
            $("#list-content").append(" <li id='" +generateUUID() +"' class=''>"+        
            "<input name='done-todo' type='checkbox' class='done-todo'>"+ value +"</li>") 
            $(".input-text").val('');
         })


        $("#filters").find("li").eq(0).click(function(){
            initOriginal();
            $(this).children("a").addClass("selected");         
        })

        $("#filters").find("li").eq(1).click(function(){
            initOriginal();
            $(this).children("a").addClass("selected");        
            $("#list-content .checked").hide();
        })

        $("#filters").find("li").eq(2).click(function(){
            initOriginal();
            $(this).children("a").addClass("selected");
            $("#list-content li[class!='checked']").hide();
        })

        $('#list-content').find("li").click(function(){      
            $(this).attr("contentEditable",'true')
            $(this).children().attr("contentEditable",'false')
        });
    });