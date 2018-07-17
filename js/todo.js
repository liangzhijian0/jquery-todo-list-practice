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
        var todoList = [
            {
                complete:false,
                list: 'Parking Lot APP Refactor'   
            },
            {
                complete:true,
                list: 'Parking Lot APP 时序图' 
            },
            {
                complete:false,
                list: 'Parking Lot APP Refactor'   
            },
            {
                complete:true,
                list: 'Parking Lot APP 时序图' 
            },
            {
                complete:false,
                list: 'Parking Lot APP Refactor'   
            },
            {
                complete:true,
                list: 'Parking Lot APP 时序图' 
            },
        ]
        // function initOriginal(){
        //     $("#filters").find("li").eq(0).children("a").removeClass("selected");
        //     $("#filters").find("li").eq(1).children("a").removeClass("selected");
        //     $("#filters").find("li").eq(2).children("a").removeClass("selected");
        //     $("#list-content").find("li").show();
        // }

        // // code to be implemented
        // $(document).delegate(".done-todo", "click", function() {
        //    $(this).parent().toggleClass("checked");
        // })

        // $("#button").click(function(){
        //     value = $(".input-text").val();
        //     if(value === ''){
        //         alert('Can not empty!');
        //         return;
        //     }
        //     $("#list-content").append(" <li id='" +generateUUID() +"' class=''>"+        
        //     "<input name='done-todo' type='checkbox' class='done-todo'>"+ value +"</li>") 
        //     $(".input-text").val('');
        //  })


        // $("#filters").find("li").eq(0).click(function(){
        //     initOriginal();
        //     $(this).children("a").addClass("selected");         
        // })

        // $("#filters").find("li").eq(1).click(function(){
        //     initOriginal();
        //     $(this).children("a").addClass("selected");        
        //     $("#list-content .checked").hide();
        // })

        // $("#filters").find("li").eq(2).click(function(){
        //     initOriginal();
        //     $(this).children("a").addClass("selected");
        //     $("#list-content li[class!='checked']").hide();
        // })

        // $('#list-content').find("li").click(function(){      
        //     $(this).attr("contentEditable",'true')
        //     $(this).children().attr("contentEditable",'false')
        // });

    let template=`
        <div>
            <input class="input-text" type="text" name="ListItem" data-com.agilebits.onepassword.user-edited="yes">
            <div id="button" >Add</div>
        </div>
        <br>
        <ol id="list-content">
            ${buildTodoList()}
        </ol>
        <div>
            <ul id="filters">
                <li>
                    <a href="#" data-filter="all" class="selected" >ALL</a>
                </li>
                <li>
                    <a href="#" data-filter="active" class="">Active</a>
                </li>
                <li>
                    <a href="#" data-filter="complete" class="">Complete</a>
                </li>
            </ul>
        </div>`


    

    // const render = () =>{
    //     $('#todoForm').html(template);
    // }
    function render(){
        $('#todoForm').html(bulidHTML());
    }
    render();

    window.addItem = function(){
        var toAdd = $('input[name=ListItem]').val();
        todoList.push({   complete:false,list:toAdd});
        render();
        $('input[name=ListItem]').val("");
    }

    function buildTodoList(){
        str ='';
        for(let i=0;i<todoList.length;i++){
            str += `<li id="${generateUUID()}" class="${todoList[i].complete ? 'checked':''}">
            <input name="done-todo" type="checkbox" class="done-todo"> ${todoList[i].list} </li>`;
        }
        return str;
    }

    function bulidHTML(){
        let template=`
        <div>
            <input class="input-text" type="text" name="ListItem" data-com.agilebits.onepassword.user-edited="yes">
            <div id="button" onclick="addItem()">Add</div>
        </div>
        <br>
        <ol id="list-content">
            ${buildTodoList()}
        </ol>
        <div>
            <ul id="filters">
                <li onclick="showAll()">
                    <a href="#" data-filter="all" class="selected" >ALL</a>
                </li>
                <li onclick="showActive()">
                    <a href="#" data-filter="active" class="">Active</a>
                </li>
                <li onclick="showComplete()">
                    <a href="#" data-filter="complete" class="">Complete</a>
                </li>
            </ul>
        </div>`
        return template;
    }


});