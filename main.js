import './style.css';

const onClickAdd = () =>{
    // テキストボックスの内容を取得して初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = ""

    // liの生成
    const li = document.createElement("li");
    
    // divの生成
    const div = document.createElement("div");
    div.className = "list-row";
    
    // pの生成
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = inputText;
    
    // 親子関係の作成
    div.appendChild(p);
    li.appendChild(div);

    document.getElementById("incomplete-list").appendChild(li)

    

}

document.getElementById("add-button").addEventListener("click", onClickAdd);

