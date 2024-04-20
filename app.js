
        document.getElementById("btn").addEventListener("click", function(){

            var xhr = new XMLHttpRequest();

            xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

            xhr.onload = function(){

                if(xhr.status === 200){

                    var users = JSON.parse(xhr.responseText);
                    console.log(users)

                    var output = "";

                    for(var user in users){

                       output += `
                        <div class='users'>
                            <ul>
                                <li>Azonosító: ${users[user].id}</li>
                                <li>Név: ${users[user].name}</li>
                                <li>Email: ${users[user].email}</li>
                            </ul>
                        </div>
                        `;
                        
                    }
                    document.getElementById("users").innerHTML = output;
                   
                }
               
                
            }
            xhr.send();
        })

  
