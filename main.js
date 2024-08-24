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
    
    // 完了ボタンの生成
    const compleateButton = document.createElement("button");
    compleateButton.innerText = "完了"
    compleateButton.addEventListener("click", () => {
        // 押された完了ボタンの親にあるliタグを未完了リストから完了リストに移動し、完了ボタンと削除ボタンを消す
        const compleateTarget = compleateButton.closest("li");
        compleateButton.nextElementSibling.remove();
        compleateButton.remove();
        
        // 戻すボタンの生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        compleateTarget.firstElementChild.appendChild(backButton);

        // 完了の方に移動
        document.getElementById("complete-list").appendChild(compleateTarget)

    })

    // 削除ボタンの生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除"
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親にあるliタグを未完了リストから削除
        // 一番近いliタグを削除する。
        const deleteTarget = deleteButton.closest("li");
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    })

    // 親子関係の作成
    div.appendChild(p);
    div.appendChild(compleateButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
    document.getElementById("incomplete-list").appendChild(li)

}

document.getElementById("add-button").addEventListener("click", onClickAdd);
